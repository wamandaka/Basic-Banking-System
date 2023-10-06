// Variabel untuk menyimpan saldo
let saldo = 0;

// Fungsi untuk memperbarui tampilan saldo
function updateSaldo() {
  document.getElementById("saldo").textContent = saldo;
}

// Fungsi untuk menambah saldo
function tambahSaldo() {
  // Meminta pengguna memasukkan jumlah saldo yang ingin ditambahkan
  const inputTambah = prompt("Masukkan jumlah saldo yang ingin ditambahkan:");
  // Mengonversi input ke tipe data float
  const jumlah = parseFloat(inputTambah);
  // Validasi input
  if (!isNaN(jumlah) && jumlah > 0) {
    saldo += jumlah; // Menambahkan saldo
    updateSaldo(); // Memperbarui tampilan saldo
    alert("Saldo berhasil ditambahkan. Saldo saat ini: " + saldo);
    return
  } else if (isNaN(jumlah)) {
    alert("Jumlah yang ditambahkan harus berupa angka.");
  } else {
    alert("Jumlah yang ditambahkan harus lebih dari 0.");
  }
}

// Fungsi untuk mengurangi saldo
function kurangiSaldo() {
  // Meminta pengguna memasukkan jumlah saldo yang ingin dikurangkan
  const inputKurangi = prompt("Masukkan jumlah saldo yang ingin dikurangkan:");
  // Mengonversi input ke tipe data float
  const jumlah = parseFloat(inputKurangi);
  // Validasi input
  if (!isNaN(jumlah) && jumlah > 0) {
    if (saldo >= jumlah) {
      saldo -= jumlah; // Mengurangkan saldo. saldo = saldo - jumlah
      updateSaldo(); // Memperbarui tampilan saldo
      alert("Saldo berhasil dikurangi. Saldo saat ini: " + saldo);
    } else {
      alert(
        "Saldo tidak mencukupi untuk melakukan penarikan sebesar jumlah yang diminta."
      );
    }
  } else if (isNaN(jumlah)) {
    alert("Jumlah yang dikurangkan harus berupa angka.");
  } else {
    alert("Jumlah yang dikurangkan harus lebih dari 0.");
  }
}

// updateSaldo(); // Memastikan saldo ditampilkan pada awalnya.


