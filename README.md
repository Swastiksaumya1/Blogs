<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Appwrite-Cloud-FD366E?style=for-the-badge&logo=appwrite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-latest-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
</p>

# ✍️ MegaBlog

A modern, full-featured blogging platform built with **React 19**, **Appwrite Cloud**, and **Tailwind CSS 4**. Create, edit, and share blog posts with a beautiful dark-themed UI, rich text editing, and image uploads.

> Inspired by the [Chai aur Code](https://www.youtube.com/@chaborcode) YouTube series — _Chai aur React_ MegaBlog project.

---

## ✨ Features

- 🔐 **Authentication** — Sign up, login, and logout with Appwrite Auth
- 📝 **Rich Text Editor** — TinyMCE (self-hosted, GPL) with full toolbar
- 🖼️ **Image Uploads** — Upload featured images stored in Appwrite Storage
- 📄 **CRUD Operations** — Create, read, update, and delete blog posts
- 🌙 **Dark Theme** — Premium minimalistic UI with glassmorphism effects
- 📱 **Responsive** — Adapts to mobile, tablet, and desktop
- ⚡ **Fast** — Vite-powered dev server with HMR
- 🔒 **Protected Routes** — Auth-guarded pages for post management

---

## 🖥️ Screenshots

<details>
<summary>📸 Click to view screenshots</summary>

### Home Page (Guest)
> Gradient hero section with call-to-action buttons

### Login Page
> Glassmorphism card form with dark inputs

### Home Page (Logged In)
> Responsive 3-column post grid with hover animations

### Create Post
> Two-panel layout with TinyMCE editor and settings sidebar

</details>

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, React Router DOM 7 |
| **Styling** | Tailwind CSS 4, Custom CSS (glassmorphism, animations) |
| **State** | Redux Toolkit, React Redux |
| **Forms** | React Hook Form |
| **Editor** | TinyMCE 7 (self-hosted GPL) |
| **Backend** | Appwrite Cloud (Auth, Database, Storage) |
| **Build** | Vite 7 |
| **Font** | Inter (Google Fonts) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Appwrite Cloud](https://cloud.appwrite.io/) account (free tier works)

### 1. Clone the repository

```bash
git clone https://github.com/Swastiksaumya1/Blogs.git
cd Blogs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Appwrite

1. Create a new project on [Appwrite Cloud](https://cloud.appwrite.io/)
2. Create a **Database** with a collection named `articles`
3. Add the following attributes to the collection:

   | Attribute | Type | Required |
   |---|---|---|
   | `title` | String (256) | ✅ |
   | `content` | String (10000) | ✅ |
   | `featuredImage` | String (256) | ✅ |
   | `status` | String (20) | ✅ |
   | `userId` | String (256) | ✅ |

4. Create a **Storage Bucket** for image uploads
5. Set appropriate **permissions** on both the collection and bucket

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="your_project_id"
VITE_APPWRITE_DATABASE_ID="your_database_id"
VITE_APPWRITE_COLLECTION_ID="your_collection_id"
VITE_APPWRITE_BUCKET_ID="your_bucket_id"
VITE_TINYMCE_API_KEY="gpl"
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 6. Build for production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── appwrite/
│   ├── auth.js          # Authentication service
│   └── config.js        # Database & Storage service
├── components/
│   ├── Header/
│   │   ├── Header.jsx   # Glassmorphism navigation
│   │   └── LogoutBtn.jsx
│   ├── Footer/
│   │   └── Footer.jsx   # 4-column dark footer
│   ├── post-form/
│   │   └── PostForm.jsx # Two-panel post editor
│   ├── container/
│   │   └── Container.jsx
│   ├── AuthLayout.jsx   # Route protection
│   ├── Button.jsx       # Gradient CTA button
│   ├── Input.jsx        # Dark themed input
│   ├── Login.jsx        # Glass card login form
│   ├── Logo.jsx         # Gradient brand logo
│   ├── PostCard.jsx     # Hover-animated post card
│   ├── RTE.jsx          # TinyMCE rich text editor
│   ├── Select.jsx       # Dark themed select
│   ├── Signup.jsx       # Glass card signup form
│   └── index.js         # Barrel exports
├── conf/
│   └── conf.js          # Environment config
├── pages/
│   ├── AddPost.jsx
│   ├── AllPosts.jsx
│   ├── EditPost.jsx
│   ├── Home.jsx         # Hero + post grid
│   ├── Login.jsx
│   ├── Post.jsx         # Post detail view
│   └── Signup.jsx
├── store/
│   ├── authSlice.js     # Auth state slice
│   └── store.js         # Redux store
├── App.jsx
├── App.css
├── index.css            # Custom animations & utilities
└── main.jsx
```

---

## 🎨 Design Highlights

- **Dark Theme** — Zinc-950 background with zinc-900 card surfaces
- **Glassmorphism** — Backdrop-blur + subtle borders on cards and header
- **Gradient Accents** — Indigo → Violet for buttons and headings
- **Micro-animations** — Hover lift, image zoom, fade-in on load
- **Inter Font** — Clean, modern typography from Google Fonts
- **Custom Scrollbar** — Styled to match the dark theme

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <strong>Swastik</strong> | Inspired by <a href="https://www.youtube.com/@chaiaurcode">Chai aur Code</a>
</p>

