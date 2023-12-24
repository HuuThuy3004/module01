let text = prompt("Nhap mot chuoi bat ky");
let arrayText = text.split("");
let newArr = "";

for (let i in arrayText) {
    if(arrayText[i] == arrayText[i].toUpperCase()){
        newArr += arrayText[i].toLowerCase();
    }
    else{
        newArr += arrayText[i].toUpperCase();
    }
}

document.write(newArr);

