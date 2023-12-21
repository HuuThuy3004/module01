let hour = +prompt("Nhập số giờ");

if (hour < 10) {
    document.write("Good morning");
}
else if (hour < 20) {
    document.write("Good day");
}
else{
    document.write("Good evening");
}