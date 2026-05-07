/*===================================================================================================================================
 * Dev constants
 ====================================================================================================================================*/

 const PSNAME = '-bho'; // Project slug name
 export const DEVEMAIL = ['juan.torres@dauherkert.de']; // Dev admin email ['juan.torres@dauherkert.de']

 /* Authorized event dates */
 export const EVENTDATES = {
  MINDATE_DAY: 20,
  MINDATE_MONTH: 6,
  MAXDATE_DAY: 27,
  MAXDATE_MONTH: 6
 }
 
 /* Environment Domain */
 /* needs to be changed manually on register_de_email.html & register_en_email.html & storage.cors.json */
 /* TODO: Check if it can be centralized also in the above mentioned pages. */
 export const URLENV = 'https://credentials.badhomburg-open.com/';
 
 /* URL Pages */
 export const URLACCOUNT = '/account';
 export const URLADMIN = '/admin/users-table';
 export const URLSIGNIN = '/signin' + PSNAME;
 export const URLSIGNUP = '/signup' + PSNAME;

 /* Admin create user default dates */
 export const SUPPLIERSTARTDATE = '06-20-2026';
 export const SUPPLIERENDDATE = '06-27-2026';

 /**/
 export const DEFAULTCOMPANYID = 'vbIh3G2eLIOVEvXmKDKf';
 export const PRESSCOMPANYID = 'qYBqDBB1tSYRpPe0k2zI'; // vc5dzk77h7lqwrUQm9Ku
 export const PRESSCOMPANYPROFILE = 'BgZRrHypn2UTbA8OPYPy'; // Pr2 - Press
 export const PRESSCOMPANYZONES = 'Offices, Technician, Press'; // 'Offices, Technician, Press'
 
 /* URL Webflow Assets for Images and Icons */
 /* must be changed manually in each email template, where the respective asset is used */
 /* TODO: Check if it can be centralized also in the above mentioned pages. */
 export const URLASSETS = 'https://uploads-ssl.webflow.com/66232f41bf2efc8ff7b59f93/';
 /* ASSETS - Icons */
 export const ICON_LOGOUT = '6453e5fbbb9ef8cc1279b64a_logout_icon.svg';
 export const ICON_PENCIL = '66232f41bf2efc8ff7b5a002_pencil-alt.png';
 export const ICON_TRASH = '66232f41bf2efc8ff7b5a009_trash.png';
 export const ICON_SENDMAIL = '66232f41bf2efc8ff7b5a03a_Vector.png'; // Send Email icon
 /* ASSETS - Images */
 export const IMAGE_PROFILE = '662bcd65e0220dd29bf8e481_avatar.png'; // FallBack Profile Picture
 
 /* Email Templates */
 export const URLEMAILTEMPLATES = {
   URLEMAILFOLDER: 'https://raw.githubusercontent.com/dauHerkert/BHO-TMS/master/mails_templates/',
   URLREGISTER_EN: 'register_en_email.html',
   URLREGISTER_DE: 'register_de_email.html',
   URLREGISTRATIONLINK_EN: 'registration_link_en_email.html',
   URLREGISTRATIONLINK_DE: 'registration_link_de_email.html',
   
   /* Press */
   URLMRAPPLICATIONREJECT_EN: 'press_en_mr_application_rejected.html',
   URLMRAPPLICATIONREJECT_DE: 'press_de_mr_application_rejected.html',
   URLMSAPPLICATIONREJECT_EN: 'press_en_ms_application_rejected.html',
   URLMSAPPLICATIONREJECT_DE: 'press_de_ms_application_rejected.html',
   URLDIVERSEAPPLICATIONREJECT_EN: 'press_en_diverse_application_rejected.html',
   URLDIVERSEAPPLICATIONREJECT_DE: 'press_de_diverse_application_rejected.html',
   
   URLMRAPPLICATIONACCEPT_EN: 'press_en_mr_application_accepted.html',
   URLMRAPPLICATIONACCEPT_DE: 'press_de_mr_application_accepted.html',
   URLMSAPPLICATIONACCEPT_EN: 'press_en_ms_application_accepted.html',
   URLMSAPPLICATIONACCEPT_DE: 'press_de_ms_application_accepted.html',
   URLDIVERSEAPPLICATIONACCEPT_EN: 'press_en_diverse_application_accepted.html',
   URLDIVERSEAPPLICATIONACCEPT_DE: 'press_de_diverse_application_accepted.html',
   
   URLMRMSCONFIRMEMAIL_EN: 'form_en_mr_ms_confirmation_form_to_admin.html',
   URLMRCONFIRMEMAIL_DE: 'form_de_mr_confirmation_email_to_admin.html',
   URLMSCONFIRMEMAIL_DE: 'form_de_ms_confirmation_email_to_admin.html',
   URLDIVERSECONFIRMEMAIL_EN: 'form_en_diverse_confirmation_form_to_admin.html',
   URLDIVERSECONFIRMEMAIL_DE: 'form_de_diverse_confirmation_email_to_admin.html',
   
   URLMRAPPLICATIONRECEIVED_EN: 'press_en_mr_application_received.html',
   URLMSAPPLICATIONRECEIVED_EN: 'press_en_ms_application_received.html',
   URLMRAPPLICATIONRECEIVED_DE: 'press_de_mr_application_received.html',
   URLMSAPPLICATIONRECEIVED_DE: 'press_de_ms_application_received.html',
   URLDIVERSEAPPLICATIONRECEIVED_EN: 'press_en_diverse_application_received.html',
   URLDIVERSEAPPLICATIONRECEIVED_DE: 'press_de_diverse_application_received.html',
   
   /* Supplier */
   URLSUPPLIERAPPLICATIONREJECT_EN: 'supplier_en_application_rejected.html',
   URLSUPPLIERAPPLICATIONREJECT_DE: 'supplier_de_application_rejected.html',
   
   URLSUPPLIERAPPLICATIONACCEPT_EN: 'supplier_en_application_accepted.html',
   URLSUPPLIERAPPLICATIONACCEPT_DE: 'supplier_de_application_accepted.html',
   
   URLSUPPLIERFORMCONFIRM_EN: 'supplier_en_form_confirmation.html',
   URLSUPPLIERFORMCONFIRM_DE: 'supplier_de_form_confirmation.html',
   URLSUPPLIERFORMCHANGE_EN: 'supplier_en_form_changes.html',
   URLSUPPLIERFORMCHANGE_DE: 'supplier_de_form_changes.html'
  };

/*===================================================================================================================================
 * RESOURCES inside HTML Email templates
 ====================================================================================================================================*/
  /* ASSETS - Images - used in email templates */
  /* TODO: Check if it can be centralized also in the above mentioned pages. */
  //export const IMAGE_LOGO_1 = '646cfb757ce45f61d4ce8927_Color%3DDefault.png';
  //export const IMAGE_LOGO_2 = '646cfb750cadf08ca3047b91_Color%3DDefault%20(1).png';
  
  /* ASSETS - PDF - used in email templates supplier_de_form_confirmation.html */
  /* TODO: Check if it can be centralized also in the above mentioned pages. */
  // export const PDF_SC_1_DE = 'https://assets.website-files.com/63388d26d610dba24046d36b/641188f76e881ce3c3ea9ffb_EWE_PTGP_2023_DE.pdf';
  // export const PDF_SC_2_DE = 'https://assets.website-files.com/63388d26d610dba24046d36b/641465fb036e3514624b5d8a_PTGP230317_Kurzhinweise%20Arbeitsschutz.pdf';
  
  /* ASSETS - PDF - used in email templates supplier_en_form_confirmation.html */
  /* TODO: Check if it can be centralized also in the above mentioned pages. */
  // export const PDF_SC_1_EN = 'https://assets.website-files.com/63388d26d610dba24046d36b/641188f7675e5b11e5e0a934_EWE_PTGP_2023_EN.pdf';
  // export const PDF_SC_2_EN = 'https://assets.website-files.com/63388d26d610dba24046d36b/641465fb036e3514624b5d8a_PTGP230317_Kurzhinweise%20Arbeitsschutz.pdf';

 /* ASSETS - Images - used in email templates */
 export const firstImageURL = "https://cdn.prod.website-files.com/66232f41bf2efc8ff7b59f93/6824ba9fa3b9db1b25dc2c83_BHO-2024_Combined_Logo_RGB_Solarwatt_500_WTA-REFRESH.png";
 export const firstImageStyle = "max-height: 100px;width: 90%;max-width: 90%;";

 export const secondImageURL = "https://uploads-ssl.webflow.com/649471d58c4292fde7b0bd0a/65ce506132780f0150f70fc7_WTA.png";
 export const secondImageStyle = "max-height: 100px;width: 70%;max-width: 150px;";


/*===================================================================================================================================
 * CORS configuration to set on https://console.cloud.google.com/welcome?project=bho-copy&cloudshell=true
 * Documentation https://cloud.google.com/storage/docs/gsutil/commands/cors - https://stackoverflow.com/questions/71193348/firebase-storage-access-to-fetch-at-has-been-blocked-by-cors-policy-no-ac
 * Needed for storage image usage
 * Set the correct domain
 * Command to set CORS: gsutil cors set cors.json gs://<your-cloud-storage-bucket>
 * Command to get CORS: gsutil cors get gs://<your-cloud-storage-bucket>
 ====================================================================================================================================*/
 /*
 [
  {
    "origin": ["https://bho-tms-2025.webflow.io", "https://credentials.badhomburg-open.com"],
    "responseHeader": ["Content-Type", "Content-Length", "Content-Encoding", "Content-Disposition", "Access-Control-Allow-Origin"],
    "method": ["GET", "PUT", "POST", "DELETE"],
    "maxAgeSeconds": 3600,
  }
 ]
 */
