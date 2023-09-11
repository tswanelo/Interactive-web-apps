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

// Update the code to manipulate the buttons and their styles for each book
const book1 = {
    status: 'overdue',
    reserve: document.querySelector('#book1 .reserve'),
    checkout: document.querySelector('#book1 .checkout'),
    checkin: document.querySelector('#book1 .checkin'),
    statusElement: document.querySelector('#book1 .status')
};

book1.statusElement.style.color = STATUS_MAP[book1.status].color;
book1.reserve.disabled = !STATUS_MAP[book1.status].canReserve;
book1.checkout.disabled = !STATUS_MAP[book1.status].canCheckout;
book1.checkin.disabled = !STATUS_MAP[book1.status].canCheckIn;

const book2 = {
    status: 'reserved',
    reserve: document.querySelector('#book2 .reserve'),
    checkout: document.querySelector('#book2 .checkout'),
    checkin: document.querySelector('#book2 .checkin'),
    statusElement: document.querySelector('#book2 .status')
};

book2.statusElement.style.color = STATUS_MAP[book2.status].color;
book2.reserve.disabled = !STATUS_MAP[book2.status].canReserve;
book2.checkout.disabled = !STATUS_MAP[book2.status].canCheckout;
book2.checkin.disabled = !STATUS_MAP[book2.status].canCheckIn;

const book3 = {
    status: 'shelf',
    reserve: document.querySelector('#book3 .reserve'),
    checkout: document.querySelector('#book3 .checkout'),
    checkin: document.querySelector('#book3 .checkin'),
    statusElement: document.querySelector('#book3 .status')
};

book3.statusElement.style.color = STATUS_MAP[book3.status].color;
book3.reserve.disabled = !STATUS_MAP[book3.status].canReserve;
book3.checkout.disabled = !STATUS_MAP[book3.status].canCheckout;
book3.checkin.disabled = !STATUS_MAP[book3.status].canCheckIn;

