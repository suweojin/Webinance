import { loadUserData } from "./dataRenderer.js";

const dashboardBtn = document.getElementById('dashboard-btn');
const transcationBtn = document.getElementById('transaction-btn');
const profileBtn = document.getElementById('profile-btn');
const settingsBtn = document.getElementById('settings-btn');

const dashboardContainer = document.getElementById('dashboard-page');
const transactionContainer = document.getElementById('transaction-page');
const profileContainer = document.getElementById('profile-page');
const settingsContainer = document.getElementById('settings-page');

let currentPage = 'dashboard';
renderContents(currentPage);

function renderContents(page) {
    switch (page) {
        case 'dashboard':
            dashboardContainer.style.display = 'block';
            transactionContainer.style.display = 'none';
            profileContainer.style.display = 'none';
            settingsContainer.style.display = 'none';
            break;

        case 'transaction':
            dashboardContainer.style.display = 'none';
            transactionContainer.style.display = 'block';
            profileContainer.style.display = 'none';
            settingsContainer.style.display = 'none';
            break;
        
        case 'profile':
            dashboardContainer.style.display = 'none';
            transactionContainer.style.display = 'none';
            profileContainer.style.display = 'block';
            settingsContainer.style.display = 'none';
            break;

        case 'settings':
            dashboardContainer.style.display = 'none';
            transactionContainer.style.display = 'none';
            profileContainer.style.display = 'none';
            settingsContainer.style.display = 'block';
            break;

        default:
            console.log('There was an unexpected error')
            break;
    }
    loadUserData();
}

dashboardBtn.onclick = () => {
    currentPage = 'dashboard';
    renderContents(currentPage);
}
transcationBtn.onclick = () => {
    currentPage = 'transaction';
    renderContents(currentPage);
}
profileBtn.onclick = () => {
    currentPage = 'profile';
    renderContents(currentPage);
}
settingsBtn.onclick = () => {
    currentPage = 'settings';
    renderContents(currentPage);
}


const catBtn = document.getElementById('cat-btn');
const palBtn = document.getElementById('pal-btn');

const catCanvas = document.getElementById('catChart');
const palCanvas = document.getElementById('palChart');

let currentCanvas = 'categories';
renderCanvas(currentCanvas)

function renderCanvas(canvas) {
    if (canvas === 'categories') {
        catCanvas.style.display = 'block';
        palCanvas.style.display = 'none';
    } 
    else if (canvas === 'profitAndLoss') {
        catCanvas.style.display = 'none';
        palCanvas.style.display = 'block';
    }
}

catBtn.onclick = () => {
    currentCanvas = 'categories';
    renderCanvas(currentCanvas);
}
palBtn.onclick = () => {
    currentCanvas = 'profitAndLoss';
    renderCanvas(currentCanvas);
}