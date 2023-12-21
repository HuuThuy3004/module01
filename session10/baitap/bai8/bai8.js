let height = +prompt("Nhập chiều cao (m)");
    weight = +prompt("Nhập cân nặng (kg)");
    BMI = (weight / (height * height) ).toFixed(1);

document.write(`Chỉ số BMI là ${BMI} -------- Chẩn đoán: `);    
if (BMI < 18.5) {
    document.write("Người gầy");
} 
else if (18.5 <= BMI && BMI <= 24.9){
    document.write("Người bình thường");
} 
else if (25 < BMI && BMI <= 29.9){
    document.write("Tiền béo phì");
}
else if (30 <= BMI && BMI <= 34.9){
    document.write("Béo phì độ I");
}
else if (35.0 <= BMI && BMI <= 39.9){
    document.write("Béo phì độ II");
}
else if (BMI >= 40){
    document.write("Béo phì độ III");
}
else {
    document.write("Tạng người thừa cân");
}


