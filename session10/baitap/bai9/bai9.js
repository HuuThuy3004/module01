let math = +prompt("Nhập điểm môn Toán");
    physics = +prompt("Nhập điểm môn Lý");
    chemistry = +prompt("Nhập điểm môn Hóa");
    literature = +prompt("Nhập điểm môn Văn");
    historyy = +prompt("Nhập điểm môn Sử");
    geography = +prompt("Nhập điểm môn Địa");
    average = ((math + physics + chemistry + literature + historyy + geography)/6).toFixed(1);

document.write(`Điểm trung bình tổng kết lại bằng: ${average} -------- Kết luận: `);
if (8.0 <= average ) {
    document.write("Học sinh Giỏi");
} 
else if(6.5 <= average && average <= 7.9){
    document.write("Học sinh Khá");
}
else if(5.0 <= average && average <= 6.4){
    document.write("Học sinh Trung Bình");
}
else{
    document.write("Học sinh Yếu");
}


