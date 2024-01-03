let numbers = prompt("Nhap chuoi 5 chu so nguyen").split(" ");
numbers.forEach(findUniqueNumber);
let max = numbers[0];

for (let i in numbers) {
    if(+numbers[i] > max){
        max = numbers[i];
    }
}
console.log(max);

function findUniqueNumber(element , index , arr) {
    if(arr[index] == arr[index + 1]){
        arr[index] = 0;
        arr[index + 1] = 0;
    }
}