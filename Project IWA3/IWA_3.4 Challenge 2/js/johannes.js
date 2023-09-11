// johannes.js

export const firstname = "Johannes"
export const surname = "Potgieter"
export const role = "Intern,"

document.addEventListener('DOMContentLoaded', function () {
    const display = firstname + " " + surname + " (" + role + ")"
    document.querySelector('#johannes').innerText = display
});
