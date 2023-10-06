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
