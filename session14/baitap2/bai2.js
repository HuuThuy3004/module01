let numbers = prompt("Nhap chuoi so nguyen").split(" ");
let trash = "";
let sum = 0;

for (let i in numbers) {
    if (+numbers[i] == 2 || +numbers[i] == 3) {
        sum += +numbers[i];
    }
    else if(+numbers[i] % 2 == 0 || +numbers[i] % 3 == 0 || +numbers[i] == 1 || +numbers[i] == 0){
        trash += numbers[i];
    }
    else{
        sum += +numbers[i];
    }
}
 
console.log(sum);