# 📚 Book Library

> A modern and responsive book discovery experience built with Next.js, JavaScript, and Tailwind CSS.

**Live Demo:** https://fav-library.vercel.app/
**Repository:** https://github.com/zeynabrabiei/library

---

## ✨ Overview

Book Library is a frontend-focused web application designed to provide a clean and enjoyable way to discover books, explore detailed information, and create a personal list of favorite books.

The project was built without a backend using local mock data and browser storage, while following a modern Next.js App Router architecture.

---

## 🚀 Live Demo

👉 **https://fav-library.vercel.app/**

---

## ✨ Features

* 📚 Browse a curated collection of books
* 🔎 Search by title, author, country, or language
* ❤️ Add and remove books from favorites
* 💾 Persistent favorites with `localStorage`
* 📖 Dynamic book detail pages
* 🔗 External book information links
* 📱 Fully responsive design
* ⚡ Next.js App Router
* 🧩 Reusable React components
* 🎨 Responsive editorial-style interface
* ⏳ Loading state
* 🚫 Custom 404 page
* ⚠️ Error boundary
* ♿ Accessible interactive controls
* 🖼️ Optimized book images with Next.js Image

---

## 🛠️ Tech Stack

| Technology   | Usage                 |
| ------------ | --------------------- |
| Next.js      | Application framework |
| React        | UI development        |
| JavaScript   | Application logic     |
| Tailwind CSS | Styling               |
| Lucide React | Interface icons       |
| localStorage | Favorite persistence  |
| Vercel       | Deployment            |

---

## 🧠 Architecture

The application uses the Next.js App Router and keeps server-side rendering as the default wherever possible.

Client Components are isolated to interactive functionality such as:

* Search
* Favorites
* Mobile navigation
* Error handling

The book catalog is maintained locally in:

```text
src/lib/mockData.js
```

Book images are served from:

```text
public/images/
```

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── books/
│   │   ├── [id]/
│   │   │   └── page.js
│   │   └── page.js
│   ├── favorites/
│   │   └── page.js
│   ├── error.js
│   ├── globals.css
│   ├── layout.js
│   ├── loading.js
│   ├── not-found.js
│   └── page.js
│
├── components/
│   ├── books/
│   │   ├── BookCard.js
│   │   ├── BookGrid.js
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
└── images/
```

---

## 🔎 Search Experience

The search system provides instant client-side filtering across multiple book properties:

* Title
* Author
* Country
* Language

This allows users to quickly find books without requiring a backend search service.

---

## ❤️ Favorites

Favorite books are stored using the browser's `localStorage`.

This means users can:

1. Add a book to favorites
2. Refresh the page
3. Close and reopen the website
4. Keep their saved books

No backend or authentication is required for this functionality.

---

## 📖 Dynamic Book Pages

Every book has its own dynamic route:

```text
/books/[id]
```

Each page provides:

* Book cover
* Title
* Author
* Country
* Language
* Publication year
* Number of pages
* Favorite action
* External information link

---

## 🎨 Design

The interface uses an editorial-inspired visual direction rather than the typical blue SaaS/e-commerce aesthetic.

The design combines:

* Warm neutrals
* Terracotta accents
* Dark editorial hero sections
* Glassmorphism details
* Floating book cards
* Responsive layouts
* Subtle CSS animations

---

## 📱 Responsive Design

The application is optimized for:

* 📱 Mobile
* 📱 Tablet
* 💻 Laptop
* 🖥️ Desktop

The layout adapts progressively using Tailwind CSS responsive utilities.

---

## ⚡ Performance

The project follows modern Next.js practices including:

* Server Components by default
* Small isolated Client Components
* Static generation for book detail routes
* Optimized images
* Minimal dependencies
* CSS-based animations

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/zeynabrabiei/library.git
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

## 📦 Production Build

```bash
npm run build
```

Then:

```bash
npm start
```

---

## 🔮 Future Improvements

Potential future features include:

* Advanced filtering
* Sorting
* Categories
* Pagination
* Reading lists
* Reading progress
* User authentication
* Backend integration
* Database persistence
* Personalized recommendations
* Dark mode
* Page transition animations

---

## 👩‍💻 Author

**Zeynab Rabiei**

Frontend Developer focused on building modern, responsive, and user-friendly applications with React and Next.js.

### Links

* **Live Demo:** https://fav-library.vercel.app/
* **GitHub:** https://github.com/zeynabrabiei/library

---

## 📄 License

This project was created for educational and portfolio purposes.
