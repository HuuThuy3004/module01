let color = prompt("Nhập màu sắc");
if(color == "vàng" || color == "xanh" || color == "đỏ"){
    document.write(`Hiển thị màu ${color}`);
}
else{
    document.write(`Màu ${color} ko hợp lệ !`);
}