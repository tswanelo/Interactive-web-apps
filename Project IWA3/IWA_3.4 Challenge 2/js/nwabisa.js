// nwabisa.js

export const firstname = "Nwabisa"
export const surname = "Gabe"
export const role = "CEO,"

document.addEventListener('DOMContentLoaded', function (){
    const display= firstname + " " + surname + " (" + role + ")"
    document.querySelector('#nwabisa').innerText = display;
});
