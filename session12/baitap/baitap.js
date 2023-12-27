let todoList = ["Go to school at 7am" , "Read book at 12am"];
let exit = true;

while (exit == true) {
    let input = prompt("Nhap tung chu cai sau (C-R-U-D)");
    switch (input) {
        case "C":
            let work = prompt("Them cong viec ban muon:");
            todoList.push(work);
            console.log(todoList);
            break;
        case "R":
            console.log("Danh sach cac cong viec");
            for (let works of todoList) {
                console.log(works);
            }
            break; 
        case "U":
            var index , content;
            index = prompt("Chon vi tri cong viec ban muon update");
            content = prompt("Noi dung update la gi?");
            todoList.splice(index-1 , 1 , content);
            console.log(todoList);          
            break;
        case "D":
            index = prompt("Chon vi tri cong viec ban muon delete");
            todoList.splice(index-1 , 1);
            console.log(todoList);
            break;             
        default:
            exit = false;
            break;
    }
}


    






