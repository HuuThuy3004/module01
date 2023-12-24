let number = prompt("Nhap 1 so bat ky");
let arrayNumber = number.split("");
let numberText = "";

for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 == 0 && arrayNumber[i+1] % 2 == 0) {
        numberText += arrayNumber[i] + "-";
    }
    else{
        numberText += arrayNumber[i];
    }
}
document.write(numberText);

