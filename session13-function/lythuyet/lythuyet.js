function sayHello() {
    console.log("Hello");
}


let result = function () {
    console.log("Xin chao");
}
result();


let arrowF = ()=>{
    console.log("ABCDEF");
}
arrowF();

(()=>{
    console.log(12234);
})();


function tinhGiaiThua(x) {
    if (x == 1) return 1;
    return x * tinhGiaiThua(--x);
}


function parent() {
   console.log("hello");
}

function ae() {
    let a = 6;
    function logger1(params) {
        console.log(a++);
    }
    logger1();
 }

 ae();


