// configuration.js

export const company = 'ACME Inc.';
export const year = '2022';

export const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = 'message';

