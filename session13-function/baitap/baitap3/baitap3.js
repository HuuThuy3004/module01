let number = +prompt("Nhap so bat ky");

function calculateFactorial(number) {
    if(number == 1) return 1;
    return number * calculateFactorial(--number);
}

console.log(`Giai thua cua ${number} la: ${calculateFactorial(number)}`);