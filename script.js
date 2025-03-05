function gabungGame() {
    let kodeGame = document.getElementById("kodeGame").value;
    console.log("Kode yang dimasukkan:", kodeGame); // Debugging

    if (kodeGame === "55555") {
        alert("Kode benar! Selamat datang di BunaQuizziz.");
        window.location.href = "game.html";
    } else {
        alert("Kode salah! Silakan coba lagi.");
        document.getElementById("kodeGame").value = ""; // Mengosongkan input jika salah
    }
}
