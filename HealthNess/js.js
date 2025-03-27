document.getElementById('imtForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = weight / (height * height);
    document.getElementById('bmiResult').innerText = bmi.toFixed(2);
    document.getElementById('categoryResult').innerText = getCategory(bmi);
});

function getCategory(bmi) {
    if (bmi < 18.5) return "Berat badan kurang";
    if (bmi >= 18.5 && bmi <= 22.9) return "Berat badan normal";
    if (bmi >= 23 && bmi <= 24.9) return "Beresiko menjadi obesitas";
    if (bmi >= 25 && bmi <= 29.9) return "Obesitas I";
    if (bmi >= 30) return "Obesitas II";
    return "Tidak diketahui";
}
