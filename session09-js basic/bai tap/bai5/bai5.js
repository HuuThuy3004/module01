//Bai7
// let a = 5;
// let b= "5";
// console.log(a==b);  console.log(a===b);
// console.log(a!=b);  console.log(a!==b);

//bai8
let a = 6; 
let result = ++a + a + a++ + ++a + a;
document.getElementById("result").innerHTML = result;

//bai9
let kq1 = 0 || NaN ||"Rikkei Academy"||null;
    kq2 = null || NaN || false || null;
    kq3 = undefined || 1 || 5 || null;
    kq4 = "" || null || 5 || NaN;
    kq5 = 1 || null || 12|| NaN;

    document.getElementById("kq1").innerHTML = kq1;
    document.getElementById("kq2").innerHTML = kq2;
    document.getElementById("kq3").innerHTML = kq3;   
    document.getElementById("kq4").innerHTML = kq4;
    document.getElementById("kq5").innerHTML = kq5;


//bai10
let kqa = 0 && 1 && "Rikkei Academy" && null;
    kqb = 2 && NaN && false && null;
    kqc = 3 && 1 && 5 && null;
    kqd = "1" && undefined && 5 && NaN;
    kqe = 1 && null && 12&& NaN;

    document.getElementById("kqa").innerHTML = kqa;
    document.getElementById("kqb").innerHTML = kqb;
    document.getElementById("kqc").innerHTML = kqc;   
    document.getElementById("kqd").innerHTML = kqd;
    document.getElementById("kqe").innerHTML = kqe;