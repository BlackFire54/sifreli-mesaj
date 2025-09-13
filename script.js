// script.js

document.addEventListener('DOMContentLoaded', () => {
    const passwordArea = document.getElementById('passwordArea');
    const passwordInput = document.getElementById('passwordInput');
    const submitButton = document.getElementById('submitButton');
    const errorMessage = document.getElementById('errorMessage');

    const successArea = document.getElementById('successArea');
    const clickToSeeMessage = document.getElementById('clickToSeeMessage');
    const basHadiButton = document.getElementById('basHadiButton');
    const finalMessage = document.getElementById('finalMessage');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Şifre: 92736
    const correctPassword = "92736";

    // Şifre Giriş Butonu Tıklaması
    submitButton.addEventListener('click', () => {
        const enteredPassword = passwordInput.value;

        if (enteredPassword === correctPassword) {
            // Şifre alanı ve hata mesajını gizle
            passwordArea.classList.add('hidden');
            errorMessage.textContent = ""; // Hata mesajını temizle

            // Başarı alanını göster
            successArea.classList.remove('hidden');

        } else {
            errorMessage.textContent = "Şifre yanlış!";
            passwordInput.value = ""; // Şifre alanını temizle
        }
    });

    // Şifre Giriş Alanında Enter Tuşu
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitButton.click();
        }
    });

    // "Bas Hadi" Butonu Tıklaması
    basHadiButton.addEventListener('click', () => {
        // "Tebrikler..." yazısını ve "Bas Hadi" butonunu gizle
        clickToSeeMessage.classList.add('hidden');
        basHadiButton.classList.add('hidden');

        // Müzik çalmaya başla
        backgroundMusic.play().catch(error => {
            console.error("Müzik çalarken bir hata oluştu veya otomatik oynatma engellendi:", error);
            // Hata durumunda kullanıcıya bilgi verebiliriz veya bir kontrol gösterebiliriz.
            // Şimdilik sadece konsola yazdırıyoruz.
        });

        // Son mesajı göster
        finalMessage.classList.remove('hidden');
    });
});
