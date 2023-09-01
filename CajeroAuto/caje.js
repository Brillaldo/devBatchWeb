var accounts = [
    { username: 'Malix', pin: '1234', saldo: 200, balance: 1000 },
    { username: 'Gera', pin: '1234', saldo: 290, balance: 500 },
    { username: 'Maui', pin: '1234', saldo: 67, balance: 750 },
];

let currentAccount = null;

const usernameInput = document.getElementById('username');
const pinInput = document.getElementById('pin');
const loginButton = document.getElementById('loginButton');
const withdrawButton = document.getElementById('withdrawButton');
const depositButton = document.getElementById('depositButton');
const balanceDisplay = document.getElementById('balanceDisplay');

loginButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const pin = pinInput.value;

    // Buscar la cuenta correspondiente
    currentAccount = accounts.find(account => account.username === username && account.pin === pin);

    if (currentAccount) {
        currentAccount.balance = currentAccount.saldo; // Establecer el saldo actual al saldo inicial
        updateBalanceDisplay();
    } else {
        alert('Credenciales incorrectas');
    }
});

withdrawButton.addEventListener('click', () => {
    const amount = parseFloat(prompt('Ingrese el monto a retirar:'));
    
    if (amount && currentAccount && amount <= currentAccount.balance && currentAccount.saldo - amount >= 10) {
        currentAccount.balance -= amount;
        currentAccount.saldo -= amount;
        updateBalanceDisplay();
    } else {
        alert('Monto inválido o saldo insuficiente');
    }
});

depositButton.addEventListener('click', () => {
    const amount = parseFloat(prompt('Ingrese el monto a depositar:'));
    
    if (amount && currentAccount && amount <= 990) {
        currentAccount.balance += amount;
        currentAccount.saldo += amount;
        updateBalanceDisplay();
    } else {
        alert('Monto inválido');
    }
});

function updateBalanceDisplay() {
    balanceDisplay.textContent = `Saldo: $${currentAccount.balance}`;
}
