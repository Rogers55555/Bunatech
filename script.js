// Fungsi ketika tombol "Gabung" ditekan
function gabungGame() {
    let kodeGame = document.getElementById("kodeGame").value;

    if (kodeGame === "") {
        alert("Silakan masukkan kode game!");
    } else {
        alert("Berhasil bergabung dengan kode: " + kodeGame);
        // Bisa diganti dengan redirect ke halaman lain jika diperlukan
        // window.location.href = "game.html?kode=" + kodeGame;
    }
}
