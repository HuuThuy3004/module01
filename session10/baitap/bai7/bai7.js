let x = +prompt("Nhập 1 số nguyên x bất kỳ");
if (x == 0) {
    document.write(`x = ${x}`);
} else if(x > 0){
    document.write(`x = ${x} là số nguyên dương`);
}else{
    document.write(`x = ${x} là số nguyên âm`);
}