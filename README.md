<div align="center">

<img src="assets/images/logo.png" alt="EduLearn Logo" width="80" height="80" />

# EduLearn — Learn Without Limits

**A modern, responsive e-learning web platform that curates top-tier YouTube educational content into structured, expert-led learning paths.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)

[Explore Courses](#course-catalog) • [Key Features](#key-features) • [Project Structure](#project-structure) • [Getting Started](#getting-started) • [Our Team](#team)

</div>

---

## 📖 Overview

**EduLearn** is a front-end web application built to democratize online education. It organizes free, high-quality educational content from YouTube and official documentation into a clean, distraction-free learning environment covering **Programming**, **AI & Machine Learning**, **UI/UX Design**, **Data Science**, **Cloud Computing**, and **Databases**.

Developed at the **Faculty of Engineering, Helwan University**, the project demonstrates modular front-end architecture using vanilla JavaScript, asynchronous component injection, JSON-driven dynamic pages, client-side route protection, and a full Light/Dark theme design system.

---

## ✨ Key Features

- **🧩 Modular Component Architecture**  
  Shared `header.html` and `footer.html` partials are dynamically injected across all pages via the `fetch()` API (`js/home.js`), automatically highlighting active navigation links and synchronizing authentication state.

- **🌗 Persistent Light & Dark Mode**  
  Built on CSS custom properties (`css/variables.css`) and controlled by `js/theme.js`. User theme preferences are persisted in `localStorage` and applied seamlessly across page reloads.

- **🔐 Client-Side Authentication & Route Protection**  
  - Interactive glassmorphic **Login / Sign Up** interface (`login.html`) with smooth sliding transitions and URL hash routing (`#signin` and `#signup`).
  - **Form Validation**: Enforces `@gmail.com` email format, strong password requirements (`8+` characters, uppercase, lowercase, number, and special symbol), duplicate account detection, and terms acceptance.
  - **Session Management**: Stores registered users in `localStorage` and active session state in `sessionStorage`, dynamically toggling navbar controls between `Login / Sign Up` and `Logout`.
  - **Route Guard**: Restricts access to `course.html` for unauthenticated visitors and redirects them to the login portal.

- **🔍 Real-Time Course Search & Category Filtering**  
  - Instant live search filtering courses by title (`js/course.js`).
  - Interactive category filter tabs (`All`, `Programming`, `Design`, `Data`, `AI & ML`).
  - Deep-link category filtering from the Home page via URL query parameters (e.g., `course.html?category=Programming`).

- **🎬 JSON-Driven Course Details**  
  `course-detail.html` dynamically renders course content by matching the `?id=` URL parameter against `course-detail.json`. Each course page includes:
  - Dynamic hero banner, category badge, title, and overview.
  - Curated skill tags linking directly to official documentation (MDN, React, Python, Microsoft Learn, TensorFlow, PyTorch, AWS, etc.).
  - Embedded 16:9 YouTube lecture player and instant playlist access.

- **📱 Fully Responsive Layout**  
  Fluid CSS Grid and Flexbox layouts with custom media queries and a collapsible mobile navigation menu powered by Bootstrap 5.

---

## 📚 Course Catalog

All 12 courses are defined in `course-detail.json` and accessible through the course catalog:

| ID | Course Title | Category | Key Topics & Resources |
| :-: | :--- | :--- | :--- |
| `1` | **UI/UX Design** | Design | Wireframing, Prototyping, Figma, Adobe XD, Responsive Design |
| `2` | **Machine Learning** | AI & ML | Data Preprocessing, Neural Networks, TensorFlow, PyTorch, Keras |
| `3` | **JavaScript** | Programming | ES6+, DOM Manipulation, Async JS, Fetch API, Debugging |
| `4` | **Python Fundamentals** | Programming | Syntax, Data Types, Control Flow, Functions, OOP, File I/O |
| `5` | **Full Stack Development** | Programming | HTML/CSS, JavaScript, React, Node.js APIs, MongoDB, Deployment |
| `6` | **Front-End Development** | Programming | HTML5, CSS3, JavaScript, Responsive Design, Bootstrap, Web Perf |
| `7` | **Back-End (.NET)** | Programming | C#, ASP.NET Core, RESTful APIs, Entity Framework Core, SQL Server |
| `8` | **C++ Problem Solving** | Programming | Arrays & Strings, STL Data Structures, Algorithms, Big-O, Recursion |
| `9` | **Data Analyst** | Data | Data Cleaning (Pandas), SQL, Excel, Tableau, Power BI, Python |
| `10` | **Cloud Computing AWS Azure** | AI & ML / Cloud | Cloud Fundamentals, AWS Services, Azure VMs, S3 Storage, Security |
| `11` | **Database SQL Course** | Data | Relational Design, SQL Queries, Joins, Stored Procedures, Normalization |
| `12` | **React.js Development** | Programming | Components, JSX, State Management, Hooks, React Router, APIs |

---

## 🗂️ Project Structure

```text
Edulearn/
├── home.html                  # Landing page (Hero, Featured Courses, Why EduLearn, Categories)
├── course.html                # Protected course catalog with search & category filters
├── course-detail.html         # Dynamic course view template (?id=1..12)
├── course-detail.json         # Structured dataset for all 12 courses
├── login.html                 # Sliding Login & Sign Up authentication portal
├── about.html                 # Story, Mission, Core Values & Team showcase
├── contact.html               # Contact cards, social links & feedback form
├── components/
│   ├── header.html            # Global navigation bar & theme/auth controls
│   └── footer.html            # Global footer with quick links & contact info
├── css/
│   ├── variables.css          # Design tokens & Light/Dark mode color palettes
│   ├── reset.css              # Base CSS reset & typography defaults
│   ├── Normalization.css      # Cross-browser CSS normalization
│   ├── all.min.css            # Local Font Awesome stylesheet
│   ├── header.css             # Sticky glassmorphic header & mobile menu styles
│   ├── footer.css             # Responsive multi-column footer styles
│   ├── home.css               # Landing page styles
│   ├── courses.css            # Course catalog grid, cards & filter bar styles
│   ├── course-detail.css      # Course detail layout, sticky card & video embed styles
│   ├── login.css              # Glassmorphic auth container & sliding form animations
│   ├── about.css              # About page & team member gradient card styles
│   └── contact.css            # Contact cards & message form styles
├── js/
│   ├── home.js                # Component loader, active nav state, auth button swap & URL category filter
│   ├── theme.js               # Light/Dark mode toggle & localStorage persistence
│   ├── course.js              # Live search input & category tab filtering logic
│   ├── course-detail.js       # Fetches course-detail.json and populates course-detail.html
│   └── login.js               # Sign Up validation, localStorage auth & sessionStorage management
└── assets/
    └── images/                # Course thumbnails (im1–img12), brand logo, hero SVG & theme icons
```

---

## 🛠️ Tech Stack

- **Markup**: Semantic HTML5
- **Styling**: CSS3 (Custom Properties, Grid, Flexbox, Backdrop Filter, Keyframe/Transition Animations)
- **Scripting**: Vanilla JavaScript (ES6+, `async/await`, Fetch API, `URLSearchParams`, `localStorage`, `sessionStorage`)
- **UI & Icons**:
  - [Bootstrap 5.0.2](https://getbootstrap.com/) (Responsive navbar collapse)
  - [Font Awesome 6.5.1](https://fontawesome.com/) & [Boxicons 2.1.4](https://boxicons.com/)
- **Typography**: Google Fonts (`Inter`, `Plus Jakarta Sans`, `Poppins`)

---

## 🚀 Getting Started

> **Important:** Because EduLearn loads reusable HTML components (`components/header.html`, `components/footer.html`) and course data (`course-detail.json`) using `fetch()`, opening the HTML files directly via `file://` will be blocked by browser CORS policies. **Run the project through a local HTTP server.**

### 1. Clone the Repository

```bash
git clone https://github.com/amrsaeed648/Edulearn.git
cd Edulearn
```

### 2. Launch with a Local Server

Choose any of the following methods:

#### Option A: VS Code Live Server (Recommended)
1. Install the **Live Server** extension in VS Code.
2. Right-click `home.html` and select **"Open with Live Server"** (preconfigured on port `5502` in `.vscode/settings.json`).

#### Option B: Python HTTP Server
```bash
python -m http.server 5502
```
Then open `http://localhost:5502/home.html` in your browser.

#### Option C: Node.js (`serve`)
```bash
npx serve -l 5502
```
Then open `http://localhost:5502/home.html` in your browser.

---

## 🔑 Usage & Authentication Flow

1. **Start at `home.html`**: Browse featured courses, toggle between Light and Dark themes, or select a category card.
2. **Create an Account (`login.html#signup`)**:
   - Enter a username.
   - Use an email ending with `@gmail.com` (e.g., `student@gmail.com`).
   - Create a password with **8+ characters**, including at least **1 uppercase letter**, **1 lowercase letter**, **1 number**, and **1 special character** (`@$!%*?&_`).
   - Check **"I agree to the terms & conditions"** and submit.
3. **Explore Courses (`course.html`)**: Once authenticated, use the search bar or category pills to filter courses, and click **Course Details** to watch lectures and explore learning resources.

---

## 👥 Team

Built by engineering students from **Helwan University — Faculty of Engineering**:

| Initials | Name | Role | Contributions |
| :-: | :--- | :--- | :--- |
| **AS** | **Amr Saeed** | Lead Engineer | Global Header, Footer & Home Page |
| **ME** | **Marwan Emad** | Engineer | Courses Catalog Page, Search & Category Filtering |
| **FA** | **Fares Ahmed** | Engineer | Dynamic Course Detail Implementation & JSON Integration |
| **KM** | **Kareem Mohamed** | Engineer | About Page & Contact Page |
| **OE** | **Omar ElAlfy** | Engineer | Login / Sign Up Portal & Authentication Logic |

---

## 📄 License

© 2026 **EduLearn**. All rights reserved. Built with passion by the EduLearn Team for educational purposes.
