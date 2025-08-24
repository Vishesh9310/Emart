# E-Mart App

eMart is a simple e-commerce platform with **user authentication** and **admin-controlled product management**. Only the owner (admin) can create, update, or delete items, while regular users can only view products.

---

## 🛠 Technologies Used

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS (Embedded JavaScript Templates)  
- **Database:** MongoDB (via Mongoose)  
- **Session Management:** express-session  
- **Flash Messages:** connect-flash  
- **Cookie Parsing:** cookie-parser  
- **Environment Variables:** dotenv

---

## ⚡ Features

### Authentication
- **Signup** – Users can register with email/password.  
- **Login** – Registered users can log in.  
- **Logout** – Users can log out securely.

### Product Management
- **Owner/Admin Only:**  
  - Add new items/products  
  - Update existing items  
  - Delete items  
- **Regular Users:**  
  - Can view products  
  - Cannot create, update, or delete items  

---

## 📂 Project Structure

```

E-Mart/
│
├─ config/                   # Configuration files
│   ├─ development.json
│   ├─ mongoose-connection.js
│   └─ multer-config.js
│
├─ controllers/              # Request handlers / business logic
│   └─ authController.js
│
├─ middlewares/              # Custom middleware
│   └─ isLoggedIn.js
│
├─ models/                   # Mongoose models
│   ├─ owner-model.js
│   ├─ product-model.js
│   └─ user-model.js
│
├─ routes/                   # Express routers
│   ├─ index.js
│   ├─ ownersRouter.js
│   ├─ productsRouter.js
│   └─ usersRouter.js
│
├─ public/                   # Static files
│   ├─ images/
│   ├─ javascripts/
│   └─ stylesheets/
│
├─ utils/                    # Helper functions
│   └─ generateToken.js
│
├─ views/                    # EJS templates
│   ├─ partials/
│   │   ├─ footer.ejs
│   │   ├─ header.ejs
│   │   └─ admin.ejs
│   ├─ cart.ejs
│   ├─ createproducts.ejs
│   ├─ index.ejs
│   ├─ owner-login.ejs
│   └─ shop.ejs
│
├─ .env                      # Environment variables
├─ .gitignore
├─ app.js                     # Main server file
├─ package.json
└─ package-lock.json


````

---

## ⚙️ Installation & Setup

1. Clone the repository:  
```bash
git clone https://github.com/Vishesh9310/Emart.git
cd eMart
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file at the root with the following variables:

```
EXPRESS_SESSION_SECRET=your_secret_key
MONGODB_URI=your_mongodb_connection_string
```

4. Start the server:

```bash
node app.js
```

5. Visit `http://localhost:3000` in your browser.

---

## 👤 User Roles

| Role  | Permissions                  |
| ----- | ---------------------------- |
| Owner | Add, update, delete products |
| User  | View products only           |

---

## 🔒 Security & Access Control

* Sessions are stored using `express-session`.
* Only the owner/admin can manage products.
* Regular users cannot modify or delete any product.

---

## 📌 Notes

* This project is built for learning and demonstration purposes.
* Extendable to include payment, cart system, and advanced features.

---

## 📜 License

MIT License

```

If you want, I can also create a **shorter version with badges and quick commands** that’s GitHub-friendly and looks professional in the repo.  

Do you want me to do that?
```
