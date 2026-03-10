const recentTransactionList = document.getElementById('dashboard-recent-content');

function createNewRecordItem(parent,currency,data) {
    data.amount = (Number.isInteger(data.amount)) ? `${currency.toUpperCase()} ${data.amount}.00` : data.amount;

    let parentContainer = parent
    let newRecordContainer = document.createElement('li')
    newRecordContainer.id = data.id;
    
    let header4 = document.createElement('h4');
    header4.innerText = data.title;
    let childContainer = document.createElement('div');

    let header5 = document.createElement('h5');
    header5.innerText = data.date;
    let header3 = document.createElement('h3');
    header3.innerText = data.amount;

    parentContainer.appendChild(newRecordContainer);
    childContainer.appendChild(header4);
    childContainer.appendChild(header5);
    newRecordContainer.appendChild(childContainer);
    newRecordContainer.appendChild(header3);
}

export function renderRecentTransactions(currency, transactionArray) {
    let dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    const monthNow = dateNow.getMonth() + 1;
    const dayNow = dateNow.getDate();

    dateNow = `${monthNow}/${dayNow}/${yearNow}`;

    for (let x=0; x<transactionArray.length; x++) {
        let currentRecord = transactionArray[x];

        if (currentRecord.date.split(" ")[0] == dateNow) {
            createNewRecordItem(recentTransactionList, currency, currentRecord);
        }
    }
}

export function renderAllTransactions() {
    return
}