//Decision
let a = 3 == "3";
if(1){
    console.log(`${a} lon hon 5`);
}

let day = prompt("Nhap ngay di hoc");

switch (day) {
    case "2":
    case "4":
    case "6":
        console.log(`Thu ${day} di hoc`);
        break;
    case "3":
    case "5":
    case "7":
        console.log(`Thu ${day} di hoc`);
        break;
    case "Chu Nhat":
        console.log("Chu nhat nghi !!");
        break;            
    default:
        console.log("Ngay ko hop le!");
        break;
}

//Loop
while (condition) {
    
}
