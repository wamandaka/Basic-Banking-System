class BankAccount {
  constructor(balance = 0) {
    // Membuat variabel untuk menyimpan saldo dan menggunakan metode enkapitulation visibility private
    this._balance = balance;
  }

  // Metode untuk melakukan deposit dengan callback
  deposit(amount, callback) {
    // mensimulasikan operasi transaksi yang asynchronous dengan setTimeout
    setTimeout(() => {
      try {
        // menambahkan saldo
        this._balance += amount;
        // Memanggil callback dengan pesan berhasil dan saldo yang diperbarui
        callback(
          alert(
            `Rp${amount} berhasil ditambahkan. Saldo sekarang: Rp${this._balance}`
          )
        );
      } catch (error) {
        // Tangani kesalahan yang mungkin terjadi
        callback(`Gagal melakukan deposit: ${error.message}`);
      }
    }, 2000); // Mensimulasikan penundaan selama 2 detik
  }

  // Metode untuk melakukan penarikan dengan callback
  withdraw(amount, callback) {
    setTimeout(() => {
      try {
        if (amount > this._balance) {
          throw new Error(alert("Saldo tidak mencukupi untuk melakukan penarikan."));
        }
        this._balance -= amount;
        // Memanggil callback dengan pesan berhasil dan saldo yang diperbarui
        callback(
          alert(
            `Rp${amount} berhasil ditarik. Saldo sekarang: Rp${this._balance}`
          )
        );
      } catch (error) {
        // Tangani kesalahan yang mungkin terjadi
        callback(`Gagal melakukan penarikan: ${error.message}`);
      }
    }, 2000); // Mensimulasikan penundaan selama 2 detik
  }

  // Metode untuk mendapatkan saldo akun
  getBalance() {
    return this._balance;
  }
}

