# SignUp

![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular_Material-21-3F51B5?style=for-the-badge&logo=angular&logoColor=white)
![BrasilAPI](https://img.shields.io/badge/BrasilAPI-009C3B?style=for-the-badge&logoColor=white)


> Customer registration web application built with **Angular 21** and **Angular Material**, developed as a study project while following an Angular course.
>
> The app allows users to register, search, edit and delete customers, with Brazilian states and municipalities loaded dynamically from the public [BrasilAPI](https://brasilapi.com.br/).

---

## 📌 About the Project

**SignUp** is a CRUD application for managing customers. The user fills in a form with the customer's personal data (name, email, CPF, date of birth, state and municipality) and saves it. Customers can then be searched by name, edited or deleted from the search page.

The state (UF) and municipality fields are dependent dropdowns: the list of states is fetched from BrasilAPI when the page opens, and the list of municipalities is fetched whenever a state is selected. All data is persisted in the browser's `localStorage`.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📋 Customer registration | Form with name, email, CPF, date of birth, state and municipality |
| 🎭 Input masks | CPF and date of birth formatted automatically with ngx-mask |
| 🌎 Dependent dropdowns | States and municipalities loaded from BrasilAPI via `HttpClient` |
| 🔍 Search by name | Search page listing customers in a Material table |
| ✏️ Edit | Opens the registration form pre-filled with the selected customer's data, including the municipality list |
| 🗑️ Delete with confirmation | Two-step delete button to avoid accidental removals |
| 🔔 Feedback messages | Snackbar notifications after saving, updating and deleting |
| 💾 Local persistence | Customers saved in `localStorage` between sessions |

---

## 🚀 How to Run

1. Clone the repository:
```bash
git clone https://github.com/ClaudiaAlfieri/SignUp.git
cd SignUp
```

2. Install the dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open in the browser: `http://localhost:4200`

> No API key is needed — BrasilAPI is public and free.

---

## 🎮 How to Test the Main Flow

1. The app opens on the **registration** page (`/cadastro`)
2. Fill in the customer's name, email, CPF and date of birth
3. Select a **state (UF)** — the **municipality** list is loaded automatically
4. Click **Save** and check the confirmation message
5. Go to the **search** page (`/consulta`) and search for the customer by name
6. Click **Edit** to update the data, or **Delete** and then **Confirm** to remove the customer

---

## 🛠️ Technologies Used

- **Angular 21** — framework (standalone components)
- **TypeScript** — static typing
- **Angular Material** — UI components (cards, inputs, selects, table, snackbar, icons)
- **Angular Flex-Layout** — responsive layout
- **Angular Router** — navigation and query parameters
- **HttpClient + RxJS** — HTTP requests and Observables
- **ngx-mask** — input masks
- **BrasilAPI** — public API for Brazilian states and municipalities (IBGE data)
- **localStorage** — local data persistence
- **Git / GitHub** — version control

---

## 🗂️ Project Structure

```
src/app/
├── cadastro/               # Registration page (form, dependent dropdowns, save/update)
│   └── cliente.ts          # Customer model
├── consulta/               # Search page (table, edit, delete)
├── brasilapi.ts            # Service that consumes BrasilAPI
├── brasilapi.models.ts     # State and Municipality interfaces
├── cliente.ts              # Customer service (localStorage CRUD)
├── app.routes.ts           # Application routes
└── app.config.ts           # Providers (router, HttpClient)
```

---

## 👩‍💻 Author

Developed by **Cláudia Alfieri** as a study project while learning Angular.

---

Made with ❤️, lots of `console.log()` and a good dose of curiosity along the way 🚀
