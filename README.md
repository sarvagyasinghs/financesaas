# 🚀 AI Task Manager

A **full-stack AI-powered task management system** designed to help users efficiently create, assign, track, and manage tasks. It includes **real-time updates, AI-powered task breakdowns, and an intuitive dashboard** for productivity tracking.

---

<img width="1430" alt="image" src="https://github.com/user-attachments/assets/9ba0ba11-c628-4483-aef6-5041369781a8" />

<img width="1138" alt="image" src="https://github.com/user-attachments/assets/1ce53a4c-bdd5-4084-a13f-902070df63ab" />

<img width="1084" alt="image" src="https://github.com/user-attachments/assets/f76966b4-372d-464f-9190-291730fe10a1" />


## 🌟 Key Features

### 🛡️ Authentication & Authorization
- **JWT-based authentication** for secure user login and session management.
- User **registration and login** with password encryption using **bcrypt**.

### 📌 Task Management
- **Create, assign, update, and delete tasks** with ease.
- **Categorization & Filtering**: Sort tasks based on status, priority, and assignment.
- **Task search functionality** to quickly find specific tasks.

### 🤖 AI-Powered Features
- AI-generated **task breakdowns and suggestions** using **OpenAI API (GPT-3.5 Turbo)**.
- Users can receive **step-by-step subtasks** for complex tasks.
- AI-generated **recommendations** for better productivity.

### ⚡ Real-Time Updates
- **WebSocket integration** to instantly reflect task changes across all users.
- **Live task updates** without requiring page refresh.

### 📊 Productivity Dashboard
- **Task completion progress indicator** (percentage completion tracking).
- **Real-time statistics** on completed and pending tasks.

### 🎨 Enhanced UI/UX
- **Beautiful and professional UI** built with **ShadCN UI components**.
- **Tailwind CSS** for a modern and responsive layout.
- **Motivational affirmations** on task completion.

### ☁️ Deployment
- **Backend**: Hosted on **Fly.io / Render**.
- **Frontend**: Deployed on **Vercel**.
- **Database**: PostgreSQL hosted on **Supabase**.

---

## 🛠️ Tech Stack

### Backend: **Golang (Gin)**
- **Gin framework** for fast and efficient API development.
- **PostgreSQL** for database storage, managed using **GORM ORM**.
- **JWT authentication** for user session management.
- **WebSockets** for real-time updates.
- **OpenAI API** for AI-driven task suggestions.

### Frontend: **Next.js (TypeScript + Tailwind CSS)**
- **Next.js App Router** for an optimized client-server experience.
- **ShadCN UI components** for a sleek and minimal design.
- **Tailwind CSS** for styling.
- **Axios** for API communication.
- **LocalStorage** for persistent session management.

### Database: **PostgreSQL**
- Managed with **GORM ORM** for efficient querying.
- Hosted on **Supabase** or any PostgreSQL server.

### Deployment
- **Backend**: Fly.io / Render.
- **Frontend**: Vercel.

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/sarvagyasinghs/AI-Task-Manager.git
cd AI-Task-Manager







This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
