class BankAccount {
  constructor(saldo = 0) {
    // Membuat variabel untuk menyimpan saldo
    this.saldo = saldo;
  }

  // public instance methode / Metode untuk melakukan deposit
  deposit(jumlah) {
    // mensimulasikan operasi transaksi yang asynchronous dengan setTimeout
    setTimeout(() => {
      // menambahkan saldo
      this.saldo += jumlah;
      alert(
        `Rp${jumlah} berhasil ditambahkan. Saldo sekarang: Rp${this.saldo}`
      );
    }, 2000); // Mensimulasikan penundaan selama 2 detik
  }

  // Metode untuk melakukan penarikan
  withdraw(jumlah) {
    setTimeout(() => {
      this.saldo -= jumlah;
      alert(`Rp${jumlah} berhasil ditarik. Saldo sekarang: Rp${this.saldo}`);
    }, 2000); // Mensimulasikan penundaan selama 2 detik
  }

  // Metode untuk mendapatkan saldo akun
  getBalance() {
    return this.saldo;
  }
}
