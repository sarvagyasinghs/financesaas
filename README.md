# Finance Platform

Welcome to the **Finance Platform**! This platform is designed to help you manage your personal or business finances efficiently. With this Finance SaaS Platform, you can track your income and expenses, categorize transactions, assign them to specific accounts, and import transactions via CSV files. Additionally, it integrates with **Plaid** for bank account connectivity and uses **Lemon Squeezy** for monetization.


<img width="1430" alt="image" src="https://github.com/user-attachments/assets/9ba0ba11-c628-4483-aef6-5041369781a8" />

<img width="1138" alt="image" src="https://github.com/user-attachments/assets/1ce53a4c-bdd5-4084-a13f-902070df63ab" />

<img width="1084" alt="image" src="https://github.com/user-attachments/assets/f76966b4-372d-464f-9190-291730fe10a1" />



## 🚀 Features

- **Track Income and Expenses**: Monitor your financial transactions with ease.
- **Categorize Transactions**: Organize transactions by categories for better clarity.
- **Account Management**: Assign transactions to specific accounts.
- **CSV Import**: Quickly import transactions from CSV files.
- **Bank Integration**: Connect to your bank account using **Plaid** for seamless transaction imports.
- **Monetization**: Leverage **Lemon Squeezy** for payment processing and monetization.

## 🛠️ Tech Stack

| Component        | Technology       |
|-----------------|-----------------|
| **Frontend**    | Next.js, React  |
| **Backend**     | Hono.js         |
| **Database**    | PostgreSQL      |
| **CSV Upload**  | Integrated CSV functionality |
| **Banking API** | Plaid           |
| **Payments**    | Lemon Squeezy   |

## 📥 Installation

Follow these steps to set up and run the project:

### 1️⃣ Clone the Repository:
```bash
git clone https://github.com/thounny/finance-tracker.git
cd finance-platform
```

### 2️⃣ Install Dependencies:
```bash
# Backend setup
cd backend
npm install

# Frontend setup
cd ../frontend
npm install
```

### 3️⃣ Set Up Environment Variables:
Create a `.env` file in the root directory and add the following:
```env
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret
LEMON_SQUEEZY_API_KEY=your_lemon_squeezy_api_key
DATABASE_URL=your_postgresql_database_url
```

### 4️⃣ Run the Application:
```bash
# Start backend
cd backend
npm start

# Start frontend
cd ../frontend
npm start
```

## 📖 Usage

### ➤ Track Income and Expenses
- Add income and expense transactions manually or import from a CSV file.

### ➤ Categorize Transactions
- Assign categories to transactions for better organization.

### ➤ Account Management
- Create and manage different accounts, assigning transactions to the appropriate ones.

### ➤ CSV Import
- Navigate to the **import section** and upload a CSV file for quick data entry.

### ➤ Bank Integration
- Connect your bank account via **Plaid** to automatically import and sync transactions.

### ➤ Monetization
- Monetize your platform using **Lemon Squeezy** for payment processing.

## 🤝 Contribution
We welcome contributions! If you'd like to contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a **Pull Request**

## 📝 License
This project is licensed under the [MIT License](LICENSE).

---

### 📬 Contact
For any inquiries, feel free to reach out!

Happy coding! 🚀
