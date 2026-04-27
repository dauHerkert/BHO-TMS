export function setFormSubmitLoading(form, loadingText) {
  if (!form) {
    return function resetLoadingState() {};
  }

  const submitButton = form.querySelector('button[type="submit"], input[type="submit"]') || form.querySelector('.w-button');
  form.dataset.authLoading = 'true';
  form.setAttribute('aria-busy', 'true');

  if (!submitButton) {
    return function resetLoadingState() {
      form.dataset.authLoading = 'false';
      form.removeAttribute('aria-busy');
    };
  }

  const isInputButton = submitButton.tagName === 'INPUT';
  const originalText = isInputButton ? submitButton.value : submitButton.textContent;
  const wasDisabled = submitButton.disabled;

  submitButton.disabled = true;
  submitButton.classList.add('disabled', 'is-loading');

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
    submitButton.disabled = wasDisabled;
    submitButton.classList.remove('disabled', 'is-loading');

    if (isInputButton) {
      submitButton.value = originalText;
    } else {
      submitButton.textContent = originalText;
    }
  };
}
