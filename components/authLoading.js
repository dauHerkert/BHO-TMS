export function getAuthPageLanguage() {
  const path = window.location.pathname;

  if (path.startsWith('/de/')) {
    return 'de';
  }

  if (path.startsWith('/en/')) {
    return 'en';
  }

  return localStorage.getItem('language') === 'de' ? 'de' : 'en';
}

export function getAuthLoadingText(action) {
  const language = getAuthPageLanguage();
  const customText = document.querySelector(`[data-auth-loading-text="${action}-${language}"], [data-auth-loading-text="${action}"]`);

  if (customText && customText.textContent.trim()) {
    return customText.textContent.trim();
  }

  const defaultTexts = {
    signin: {
      de: 'Einloggen...',
      en: 'Signing in...',
    },
    signup: {
      de: 'Registrierung...',
      en: 'Registering...',
    },
    forgotPassword: {
      de: 'E-Mail wird gesendet...',
      en: 'Sending email...',
    },
  };

  return defaultTexts[action][language];
}

export function setFormSubmitLoading(form, loadingText, options = {}) {
  if (!form) {
    return function resetLoadingState() {};
  }

  const shouldBlockPage = options.blockPage === true;
  let overlay = null;
  let style = null;

  if (shouldBlockPage) {
    overlay = document.createElement('div');
    const loadingBox = document.createElement('div');
    const spinner = document.createElement('span');
    const message = document.createElement('span');
    style = document.createElement('style');

    style.textContent = '@keyframes authLoadingSpin{to{transform:rotate(360deg)}}';
    document.head.appendChild(style);

    overlay.className = 'auth-loading-overlay';
    overlay.setAttribute('role', 'status');
    overlay.setAttribute('aria-live', 'polite');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.72);backdrop-filter:blur(2px);';

    loadingBox.className = 'auth-loading-box';
    loadingBox.style.cssText = 'display:flex;align-items:center;gap:12px;padding:16px 20px;background:#ffffff;color:#111111;border:1px solid rgba(0,0,0,0.14);border-radius:6px;box-shadow:0 12px 36px rgba(0,0,0,0.18);font-family:Arial,sans-serif;font-size:15px;font-weight:600;line-height:1.2;';

    spinner.className = 'auth-loading-spinner';
    spinner.style.cssText = 'display:block;width:18px;height:18px;border:2px solid #d0d0d0;border-top-color:#111111;border-radius:50%;animation:authLoadingSpin 0.8s linear infinite;';

    message.textContent = loadingText || 'Processing...';
    loadingBox.appendChild(spinner);
    loadingBox.appendChild(message);
    overlay.appendChild(loadingBox);
    document.body.appendChild(overlay);
  }

  const submitButton = options.submitButtonId ? document.getElementById(options.submitButtonId) : form.querySelector('button[type="submit"], input[type="submit"]') || form.querySelector('.w-button');
  form.dataset.authLoading = 'true';
  form.setAttribute('aria-busy', 'true');

  if (!submitButton) {
    return function resetLoadingState() {
      form.dataset.authLoading = 'false';
      form.removeAttribute('aria-busy');
      if (overlay) { overlay.remove(); }
      if (style) { style.remove(); }
    };
  }

  const isInputButton = submitButton.tagName === 'INPUT';
  const originalText = isInputButton ? submitButton.value : submitButton.textContent;
  const wasDisabled = submitButton.disabled;
  const originalCursor = submitButton.style.cursor;
  const originalOpacity = submitButton.style.opacity;

  submitButton.disabled = true;
  submitButton.classList.add('disabled', 'is-loading');
  submitButton.style.cursor = 'wait';
  submitButton.style.opacity = '0.7';

  if (loadingText) {
    if (isInputButton) {
      submitButton.value = loadingText;
    } else {
      submitButton.textContent = loadingText;
    }
  }

  return function resetLoadingState() {
    form.dataset.authLoading = 'false';
    form.removeAttribute('aria-busy');
    if (overlay) { overlay.remove(); }
    if (style) { style.remove(); }
    submitButton.disabled = wasDisabled;
    submitButton.classList.remove('disabled', 'is-loading');
    submitButton.style.cursor = originalCursor;
    submitButton.style.opacity = originalOpacity;

    if (isInputButton) {
      submitButton.value = originalText;
    } else {
      submitButton.textContent = originalText;
    }
  };
}
