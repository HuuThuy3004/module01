let numbers=[1,5,8,7,9,6,5,41,2,6,55,4,8];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i+1] > max){
        max = numbers[i + 1];
    }
}

document.write(`<h2>${max}</h2>`);