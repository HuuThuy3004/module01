let str1 = prompt("Nhap chuoi").split(" ");
let str2 = "";
for (let i = 0; i < str1.length; i++) {
    str2 += str1[i].split("").reverse().join("") + " ";
}

console.log(str2);

