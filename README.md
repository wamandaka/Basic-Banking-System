#Metrics:
- Programming Algorithms
- Perform error handling
- Implementing Asynchronous process
- Implementing OOP
- Using Git

#Delivery:
- Create a new repository on GitHub with the name "Basic-Banking-System"
- Copy the bank_account.js Challenge 1 file to the project directory in the new repository
- Create a new JavaScript file with the name banking_system.js
- Implement BankAccount class with deposit() and withdraw() methods
- Use setTimeout() to simulate asynchronous transaction operations
- Commit and push changes to the GitHub repository

#Criteria:
- Using modular OOP classes (40 points)
- Describe the thought process using a flowchart (30 points)
- Using GitHub to manage repositories (30 points)

#Pseudocode:
Kelas BankAccount:
Properti: - saldo (balance)

    Konstruktor:
        Terima saldo awal sebagai parameter
        Set saldo awal ke dalam properti saldo

    Metode deposit:
        Terima jumlah uang yang akan disimpan sebagai parameter
        Tambahkan jumlah uang ke dalam saldo (balance)
        Tampilkan pesan berhasil ditambahkan

    Metode withdraw:
        Terima jumlah uang yang akan ditarik sebagai parameter
        Periksa apakah saldo mencukupi untuk penarikan
        Jika saldo mencukupi:
            Kurangkan jumlah uang dari saldo (balance)
            Tampilkan pesan berhasil ditarik
        Jika saldo tidak mencukupi:
            Tampilkan pesan bahwa saldo tidak mencukupi

    Metode getBalance:
        Kembalikan nilai saldo (balance)

#Case Study
In this case study, we will create a simple Basic Banking System using Object Oriented Programming (OOP) concepts and simulating asynchronous transaction operations.

#Step by step
- Buatlah repositori baru di GitHub dengan nama Basic-Banking-System.
- Salin file bank_account.js dari Challenge 1 ke direktori proyek di repositori baru tersebut. File ini akan berisi definisi kelas BankAccount yang akan digunakan dalam implementasi sistem perbankan.
- Buatlah file JavaScript baru dengan nama banking_system.js. File ini akan menjadi pusat implementasi sistem perbankan menggunakan konsep OOP.
- Implementasikan kelas BankAccount dengan minimal dua metode:
    - deposit(amount): Metode ini akan menerima jumlah uang yang akan disimpan ke dalam akun.
    - withdraw(amount): Metode ini akan menerima jumlah uang yang akan ditarik dari akun, asalkan saldo mencukupi.

