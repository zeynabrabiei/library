# 📚 Book Library

A modern, responsive book library built with **Next.js**, **JavaScript**, and **Tailwind CSS**.

This project provides a clean and intuitive interface for discovering books, searching through a collection, viewing detailed book information, and saving favorite books for later.

The project is built as a frontend-focused application without a backend, using local mock data and browser storage to manage favorites.

---

## ✨ Features

* 📚 Browse a collection of books
* 🔎 Search books by:

  * Title
  * Author
  * Country
  * Language
* ❤️ Add and remove books from favorites
* 💾 Persist favorites using `localStorage`
* 📖 Dedicated book details pages
* 🔗 External links for additional book information
* 📱 Fully responsive design
* ♿ Accessible interactive elements
* ⚡ Server-side rendering with Next.js App Router
* 🧩 Reusable and maintainable components
* 🎨 Editorial-inspired responsive UI
* 🦴 Loading skeletons and empty states
* 🚫 Custom not-found handling for unavailable books

---

## 🛠️ Tech Stack

* **Next.js 16**
* **React**
* **JavaScript**
* **Tailwind CSS v4**
* **Lucide React**
* **Next.js App Router**
* **localStorage**

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── books/
│   │   ├── [id]/
│   │   │   └── page.js
│   │   └── page.js
│   │
│   ├── favorites/
│   │   └── page.js
│   │
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── books/
│   │   ├── BookCard.js
│   │   ├── BookGrid.js
│   │   ├── FavoriteButton.js
│   │   ├── FavoriteDetailsButton.js
│   │   └── SearchBooks.js
│   │
│   └── layout/
│       ├── Header.js
│       └── Footer.js
│
└── lib/
    └── mockData.js

public/
├── images/
│   ├── 1.png
│   ├── 2.png
│   ├── ...
│   └── 10.png
└── icon.svg
```

---

## 🧠 Architecture

The application uses the **Next.js App Router** and follows a component-based architecture.

Static book data is stored in:

```text
src/lib/mockData.js
```

Book images are served from:

```text
public/images/
```

Server Components are used by default, while client components are isolated to areas that require browser interaction such as:

* Search
* Favorites
* Mobile navigation

Favorites are stored in the browser using:

```text
localStorage
```

This keeps the project backend-free while still providing persistent user functionality.

---

## 🔍 Search

The search functionality allows users to find books by multiple fields:

```text
Title
Author
Country
Language
```

Search results update instantly as the user types.

---

## ❤️ Favorites

Users can save books to their personal favorites list.

Favorites are persisted with browser `localStorage`, so saved books remain available after refreshing or reopening the application.

---

## 📖 Book Details

Each book has a dedicated route:

```text
/books/[id]
```

The details page includes:

* Book cover
* Title
* Author
* Country
* Language
* Publication year
* Number of pages
* Favorite functionality
* External information link

---

## 📱 Responsive Design

The interface is designed for:

* Mobile devices
* Tablets
* Laptops
* Large desktop screens

The layout uses responsive Tailwind CSS utilities to provide a consistent experience across different screen sizes.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/book-library.git
```

Navigate into the project:

```bash
cd book-library
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

---

## 🎯 Project Goals

This project was created as a portfolio project to demonstrate practical frontend development skills, including:

* Modern Next.js architecture
* React component design
* Server and Client Components
* Responsive UI development
* State management
* Browser storage
* Dynamic routing
* Search and filtering
* Accessibility considerations
* Clean and reusable code

---

## 🔮 Future Improvements

Possible future improvements include:

* Book categories
* Advanced filtering
* Sorting by publication year or page count
* Pagination
* User authentication
* Personal reading lists
* Reading progress
* Backend integration
* Database persistence
* Book recommendations
* Dark mode
* Animated page transitions

---

## 👩‍💻 Author

**Zeynab Rabiei**

Frontend Developer focused on building modern, responsive, and user-friendly web applications with React and Next.js.

---

## 📄 License

This project is created for educational and portfolio purposes.
