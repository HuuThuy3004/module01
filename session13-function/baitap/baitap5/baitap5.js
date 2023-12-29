let a="Hello World";
let b=a.split("");
function tanSuat(){
    for(let i=0 ; i<b.length ; i++){
        let s=1;
        for(let j=i+1 ; j<b.length ; j++){
            if(b[i].toLowerCase() == b[j].toLowerCase()){
                s++;
                b.splice(j,1)
            }
        }
        console.log("ký tự" , b[i] , "suất hiện" , s , "lần");
    }
}
tanSuat();