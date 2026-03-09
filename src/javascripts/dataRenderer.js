// THESE ARE ONLY SAMPLE DATA
let user = {
    balance: {
        physical: 200,
        online: 532,
        savings: 67
    },
    transactions: [
        {
            id: 'tE1',
            title: 'Food',
            date: '1/23/2026 | 11:32',
            type: 'expenses',
            amount: 120
        },
        {
            id: 'tE2',
            title: 'Transportation',
            date: '1/21/2026 | 10:30',
            type: 'expenses',
            amount: 43
        },
        {
            id: 'tI1',
            title: 'Allowance',
            date: '1/22/2026 | 6:47',
            type: 'income',
            amount: 150
        },
        {
            id: 'tE3',
            title: 'School',
            date: '1/19/2026 | 6:20',
            type: 'income',
            amount: 20
        },
        {
            id: 'tE4',
            title: 'Food',
            date: '1/19/2026 | 7:27',
            type: 'expenses',
            amount: 50
        },
        {
            id: 'tI2',
            title: 'Allowance',
            date: '3/9/2026 | 6:00',
            type: 'income',
            amount: 100
        }
    ],
    configuration: {
        currency: 'php',
        startOfTheWeek: 'mon'
    }
}

const physicalBalanceDisplayer = document.querySelectorAll('.physical-balance');

export function loadUserData() {
    const physicalBalance = user.balance.physical;
    const onlineBalance = user.balance.online;
    const savingsBalance = user.balance.savings;
    const transactions = user.transactions;
    const currency = user.configuration.currency.toUpperCase();

    physicalBalanceDisplayer.forEach(element => {renderAmount(physicalBalance,currency,element)})
}

// RENDER VALUES TO HEADERS (h1-h6)
function renderAmount(amount, currency, displayer) {
    amount = (Number.isInteger(amount)) ? `${amount}.00` : amount;
    displayer.innerText = `${currency} ${amount}`;
}

// CANVAS CHARTS
import { renderLineChart, renderDoughnutChart } from "./financeChart.js";

const PaLReport = {
    labels: ['1/21/2026','1/22/2026','1/23/2026'],
    valuesA: [43,120,0],
    valuesB: [0,150,0]
}
renderLineChart('palChart', PaLReport);

const catReport = {
    labels: ['Allowance','Food','Transportation'],
    values: [150,120,43],
    colors: ['rgb(26, 119, 206)','rgb(235, 186, 28)','rgb(163, 255, 44)']
}
renderDoughnutChart('catChart',catReport);

// RENDER TRANSACTIONS
import { renderRecentTransactions, renderAllTransactions } from "./transactionRenderer.js";

renderRecentTransactions(user.configuration.currency, user.transactions);
renderAllTransactions();