// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


const status1 = book1.querySelector('.status ');status1.style.color = 'green';
const reserve1 = book1.querySelector('.reserve')
const checkout1 = book1.querySelector('.checkout')
const checkin1 = book1.querySelector('.checkin');checkin1.style.color = null;

const status2 = book2.querySelector('.status' );status2.style.color = 'blue';
const reserve2 = book2.querySelector('.reserve')
const checkout2 = book2.querySelector('.checkout')
const checkin2 = book2.querySelector('.checkin');checkin2.style.color = null;

const status3 = book3.querySelector('.status');status3.style.color = 'orange';
const reserve3 = book3.querySelector('.reserve')
const checkout3 = book3.querySelector('.checkout')
const checkin3 = book3.querySelector('.checkin');checkin3.style.color = null;


reserve1.textContent = book1.getAttribute(STATUS_MAP.overdue.canReserve) === 'true' ? 'disabled': 'enabled';
checkout1.textContent = book1.getAttribute(STATUS_MAP.overdue.canCheckout) === 'false' ? 'enabled' : 'enabled';
checkin1.textContent = book1.getAttribute(STATUS_MAP.overdue.canCheckIn) === 'true' ?  'disabled' : 'enabled';



reserve2.textContent = book2.getAttribute( STATUS_MAP.reserved.canReserve) !== 'true'? 'disabled':'enabled';
checkout2.textContent = book2.getAttribute(STATUS_MAP.reserved.canCheckout) !== 'false' ? 'enabled':'enabled';
checkin2.textContent = book2.getAttribute(STATUS_MAP.reserved.canCheckIn) !== 'true' ?'disabled': 'enabled';


reserve3.textContent = book3.getAttribute(STATUS_MAP.shelf.canReserve) !== 'true' ? 'disabled': 'enabled';
checkout3.textContent = book3.getAttribute(STATUS_MAP.shelf.canCheckout) !== 'true'  ? 'disabled':  'enabled';
checkin3.textContent = book3.getAttribute(STATUS_MAP.shelf.canCheckIn) !== 'false'  ? 'disabled': 'enabled';





