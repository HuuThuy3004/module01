let number = +prompt("Nhập 1 số bất kỳ");
switch (number % 2) {
    case 0:
        document.write(`${number} là số chẵn`);
        break;
    case 1:
        document.write(`${number} là số lẻ`);
        break;
}