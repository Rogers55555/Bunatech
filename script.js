function gabungGame() {
    let kodeGame = document.getElementById("kodeGame").value;
    console.log("Kode yang dimasukkan:", kodeGame); // Debugging

    if (kodeGame === "55555") {
        alert("Kode benar! Mengarahkan ke beranda...");
        window.location.href = "beranda.html"; // Redirect ke halaman baru
    } else {
        alert("Kode salah! Silakan coba lagi.");
        document.getElementById("kodeGame").value = ""; // Kosongkan input jika salah
    }
}
