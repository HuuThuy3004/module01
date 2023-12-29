let a = +prompt("Nhap so thu nhat");
let b = +prompt("Nhap so thu nhi");
let c = +prompt("Nhap so thu ba");

function checkSmallestNumber(a , b ,c) {
    if(a < b && a < c) return a;
    else if(b < a && b < c) return b;
    else if(b < a && c < b) return c;
    else {
        if(a == b && a < c) return a;
        else if (a == c && a < b) return a;
        else if (b == c && b < a) return b;
    }
}
console.log(`So nho nhat la : ${checkSmallestNumber(a,b,c)}`);