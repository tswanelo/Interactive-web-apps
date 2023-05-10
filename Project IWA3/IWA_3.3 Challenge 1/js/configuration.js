// configuration.js

export const company = 'ACME Inc.'; // I only added the export name, for me to be able to export the file.
export const year = '2022';

export const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = 'message';

/* I used export here to export this message to the other file of javascript */



