let number = prompt("Nhap so bat ky");

function checkPrimeNumber(number) {
    if(number % 2 == 0) return false;
    else if(number < 0) return false;
    else return true;
}

console.log(`Kiem tra so ${number} co phai la so nguyen to ? \nKet qua: ${checkPrimeNumber(number)}`);