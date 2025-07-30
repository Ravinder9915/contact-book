Ravinder singh
Student no. 41135535

📒 Contact Book
A simple Single Page Application (SPA) built using Vue 3, Vue Router, and Vite that allows users to manage a contact book in the browser. Contacts are stored locally using the browser's localStorage, so no backend is required.

✨ Features
🔍 View a list of all contacts

➕ Add new contacts

✏️ Edit existing contacts

🗑️ Delete contacts

🔎 Search functionality to quickly find contacts

💾 Persistent data using localStorage

🛠️ Technologies Used
Vue 3

Vue Router 4

Vite

HTML5 + CSS3

📁 Project Structure
pgsql
Copy
Edit
📁 contact-book/
├── public/
├── src/
│   ├── components/
│   │   ├── ContactList.vue
│   │   ├── AddContact.vue
│   │   ├── EditContact.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
└── vite.config.js
▶️ How It Works
Home Page: Displays all contacts from localStorage.

Add Contact: Users fill a form to add a new contact with fields like name, phone number, and email.

Edit Contact: Clicking "Edit" allows updating an existing contact’s info.

Delete: Click the "Delete" button to remove a contact.

Search: A search bar filters contacts based on the name or other info.

All changes are immediately saved in the browser using localStorage, so the data persists even after refreshing the page.

🚀 Getting Started
Prerequisites
Node.js and npm installed

Installation
bash
Copy
Edit
# Clone the repo
git clone https://github.com/yourusername/contact-book.git
cd contact-book

# Install dependencies
npm install

# Run the development server
npm run dev
The app will be available at http://localhost:5173/ by default# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
