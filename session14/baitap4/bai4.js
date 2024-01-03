let str = prompt("Nhap 1 chuoi");
let emptyStr = "";
for (let i = 0; i < str.length; i++) {
    if(isNaN(str.charAt(i))){
        emptyStr += str.charAt(i);
    }    
}
console.log(emptyStr);