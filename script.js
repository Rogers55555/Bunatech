// Fungsi ketika tombol "Gabung" ditekan
function gabungGame() {
    let kodeGame = document.getElementById("kodeGame").value;

    if (kodeGame === "55555") {
        alert("Kode benar! Selamat datang di BunaQuizziz.");
        // Redirect ke halaman utama atau game
        window.location.href = "game.html";
    } else {
        alert("Kode salah! Silakan coba lagi.");
    }
}
