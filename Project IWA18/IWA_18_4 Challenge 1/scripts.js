document.querySelector('[data-help]').addEventListener('click', () => {
    document.querySelector('[data-help-overlay]').showModal();
});

document.querySelector('[data-help-cancel]').addEventListener('click', () => {
    document.querySelector('[data-help-overlay]').close();
});

document.querySelector('[data-help-cancel]').addEventListener('click', () => {
    document.querySelector('[data-help-overlay]').close();
    document.querySelector('[data-add]').focus();
});

document.querySelector('[data-add]').addEventListener('click', () => {
    document.querySelector('[data-add-overlay]').showModal();
});

document.querySelector('[data-add-cancel]').addEventListener('click', () => {
    document.querySelector('[data-add-overlay]').close();
});

document.querySelector('[data-add-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.querySelector('[data-add-title]').value;
    const table = document.querySelector('[data-add-table]').value;
    const order = createOrderData({ title, table, column: 'ordered' });
    state.orders[order.id] = order;
    const orderHtml = createOrderHtml(order);
    document.querySelector('[data-column="ordered"]').appendChild(orderHtml);
    document.querySelector('[data-add-overlay]').close();
    document.querySelector('[data-add-title]').value = '';
    document.querySelector('[data-add-table]').value = '';
});

document.querySelector('[data-grid]').addEventListener('click', (event) => {
    const orderElement = event.target.closest('.order');
    if (!orderElement) return;
    const orderId = orderElement.dataset.id;
    const order = state.orders[orderId];
    document.querySelector('[data-edit-title]').value = order.title;
    document.querySelector('[data-edit-table]').value = order.table;
    document.querySelector('[data-edit-column]').value = order.column;
    document.querySelector('[data-edit-id]').value = orderId;
    document.querySelector('[data-edit-overlay]').showModal();
});

document.querySelector('[data-edit-delete]').addEventListener('click', () => {
    const orderId = document.querySelector('[data-edit-id]').value;
    delete state.orders[orderId];
    const orderElement = document.querySelector(`[data-id="${orderId}"]`);
    orderElement.remove();
    document.querySelector('[data-edit-overlay]').close();
});

document.querySelector('[data-edit-cancel]').addEventListener('click', () => {
    document.querySelector('[data-edit-overlay]').close();
});

document.querySelector('[data-edit-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    const orderId = document.querySelector('[data-edit-id]').value;
    const order = state.orders[orderId];
    order.title = document.querySelector('[data-edit-title]').value;
    order.table = document.querySelector('[data-edit-table]').value;
    const newColumn = document.querySelector('[data-edit-column]').value;
    if (newColumn !== order.column) {
        const oldColumnElement = document.querySelector(`[data-column="${order.column}"]`);
        const newColumnElement = document.querySelector(`[data-column="${newColumn}"]`);
        const orderElement = oldColumnElement.querySelector(`[data-id="${orderId}"]`);
        newColumnElement.appendChild(orderElement);
        order.column = newColumn;
    }
    const orderElement = document.querySelector(`[data-id="${orderId}"]`);
    orderElement.querySelector('[data-order-title]').textContent = order.title;
    orderElement.querySelector('[data-order-table]').textContent = order.table;
    document.querySelector('[data-edit-overlay]').close();
});

