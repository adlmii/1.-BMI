function calculateBMI() {
    // Ambil nilai dari input
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Mengubah cm ke meter

    // Periksa apakah input valid
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert("Masukkan berat badan dan tinggi badan yang valid!");
        return;
    }

    // Hitung BMI
    const bmiScore = (weight / (height * height)).toFixed(2);

    // Tentukan kategori BMI dan apa yang harus dilakukan
    let category = '';
    let advice = '';

    if (bmiScore < 18.5) {
        category = 'Kekurangan berat badan';
        advice = 'Disarankan untuk meningkatkan berat badan dengan makan lebih banyak kalori dari makanan sehat dan bergizi, serta berkonsultasi dengan ahli gizi.';
    } else if (bmiScore >= 18.5 && bmiScore < 24.9) {
        category = 'Berat badan normal';
        advice = 'Pertahankan gaya hidup sehat dengan pola makan seimbang dan rutin berolahraga untuk menjaga berat badan ideal.';
    } else if (bmiScore >= 25 && bmiScore < 29.9) {
        category = 'Kelebihan berat badan';
        advice = 'Cobalah untuk mengurangi berat badan secara bertahap dengan mengatur pola makan sehat dan melakukan olahraga teratur.';
    } else {
        category = 'Obesitas';
        advice = 'Sangat disarankan untuk berkonsultasi dengan dokter atau ahli gizi untuk merencanakan penurunan berat badan secara aman melalui diet, olahraga, dan perubahan gaya hidup.';
    }

    // Menampilkan hasil BMI dan kategori
    document.getElementById('bmi-value').innerText = bmiScore;
    document.getElementById('category-value').innerText = category;
    document.getElementById('advice-value').innerText = advice;

    // Menampilkan hasil (hasil container)
    document.querySelector('.result-container').style.display = 'block';
}

document.querySelector('form').addEventListener('reset', function() {
    document.querySelector('.result-container').style.display = 'none'; // Menyembunyikan hasil
});