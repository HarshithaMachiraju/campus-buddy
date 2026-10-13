# 🎓 Campus Buddy - Smart College Task & Deadline Planner

A modern, fast, and responsive web application designed specifically for college students to track assignments, lab submissions, exam dates, and semester project tasks.

---

## 🚀 Key Features

1. **Add Tasks**: Assign a Title, Subject/Course, Due Date, and Priority level (*High*, *Medium*, *Low*).
2. **Attractive Cards**: Clean, modern glassmorphic cards with priority color accents and badges.
3. **Task Status Toggle**: Mark tasks as *Completed* or *Pending* with interactive checkboxes.
4. **Delete Tasks with Safety Confirm**: Prevent accidental deletion with inline confirmation.
5. **Interactive Filtering & Search**:
   - Filter by *All Tasks*, *Pending*, and *Completed* tabs (with live counter badges).
   - Real-time search bar to search across titles and subjects.
6. **Summary Metric Cards**: Live counters for *Total Tasks*, *Pending Tasks*, *Completed Tasks*, and an animated *Completion Rate (%)* progress bar.
7. **LocalStorage Persistence**: All tasks and status changes automatically stay saved in your browser across refreshes.
8. **Form Validation**: Friendly field-level validation messages for required inputs.
9. **College-Ready Design**: Mobile-first, responsive, accessible buttons, and Google Fonts (`Outfit` & `Plus Jakarta Sans`).

---

## 🛠️ Technology Stack

- **React 19**
- **Vite** (Lightning-fast development & production bundling)
- **Plain / Vanilla CSS** (Custom CSS design tokens & responsive flexbox/grid)
- **Lucide React** (Clean, lightweight icons)
- **Browser LocalStorage** (Zero database required, 100% offline-ready & free)

---

## 💻 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/` (or `http://127.0.0.1:5173/`).

### 3. Build for Production
```bash
npm run build
```
This generates an optimized static bundle in the `dist/` directory.

---

## 🌐 How to Deploy to Vercel (Free & Instant)

Deploying **Campus Buddy** on [Vercel](https://vercel.com) takes less than 2 minutes:

1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Campus Buddy"
   git branch -M main
   git remote add origin https://github.com/<your-username>/campus-buddy.git
   git push -u origin main
   ```
2. Go to **vercel.com** and log in with your GitHub account.
3. Click **Add New Project** and import your `campus-buddy` repo.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your live URL will be ready within 30 seconds!

---

## 📂 Project Structure

```
CampusBuddy/
├── index.html              # Modern HTML5 shell with Google Fonts & SEO tags
├── package.json            # Scripts & dependencies
├── vite.config.js          # Vite configuration
└── src/
    ├── main.jsx            # Application entry point
    ├── App.jsx             # Main state orchestration & layout
    ├── index.css           # Global design system & theme variables
    ├── utils/
    │   └── storage.js      # LocalStorage helper & starter tasks
    └── components/
        ├── Navbar.jsx       # Header with branding & live date badge
        ├── StatsSummary.jsx # 4 metric cards (Total, Pending, Completed, Rate)
        ├── TaskForm.jsx     # Input form with inline error validation
        ├── TaskFilter.jsx   # Filter tabs (All, Pending, Completed) + Search
        ├── TaskList.jsx     # Container for cards and empty states
        ├── TaskCard.jsx     # Task card with toggle, priority, and delete
        └── EmptyState.jsx   # Friendly empty state illustrations
```
