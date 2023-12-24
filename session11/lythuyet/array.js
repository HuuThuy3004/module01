let array = ["hoa" , 10 , "Chung"];
let array2 = new Array(1,2,3,4,5,6,7,8,9,10);

// array.splice(0 , 2 , "Trinh");
let textt = "JS 271123";
let result = textt.split(" ");

console.log(result.join("-"));

let jobs = ["cong an" , "phi cong" , "bac si"];
for (let i = 0; i < jobs.length; i++) {
    document.write(`<h1>${jobs[i]}</h1>`);
}

for (let abc of jobs) {
    document.write(`<h1>${abc}</h1>`);
}

let languages = ["PHP" , "JAVA" , "C#" , "JS"];
console.log(languages.slice(0 , 3));