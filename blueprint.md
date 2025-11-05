# Blueprint: React Auth App

This document provides a step-by-step guide to recreate this React application with a login and registration flow.

## Overview

This application is a simple React single-page application (SPA) that demonstrates a basic authentication flow with a login and registration page. It uses `react-router-dom` for navigation.

## Features

*   **Routing**: The app uses `react-router-dom` to navigate between the login and registration pages.
*   **Components**: The UI is broken down into reusable components: `Navbar`, `LoginPage`, and `RegisterPage`.

## Step-by-Step Guide

### 1. Project Setup

First, create a new React project using Vite. This will give you a modern, fast development environment.

```bash
npm create vite@latest ./ -- --template react-ts
cd my-auth-app
```

### 2. Install Dependencies

You'll need `react-router-dom` for navigation between the login and registration pages.

```bash
npm install react-router-dom
```

### 3. Create the Pages and Components

Create the following file structure for your components and pages:

```
src
├── components
│   └── Navbar.tsx
├── pages
│   ├── LoginPage.tsx
│   └── RegisterPage.tsx
├── App.tsx
└── main.tsx
```

**`src/components/Navbar.tsx`**

```tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          React Auth App
        </Link>
        <div className="nav-menu">
          <div className="nav-item">
            <Link to="/" className="nav-links">
              Login
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/register" className="nav-links">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

**`src/pages/LoginPage.tsx`**

```tsx
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <p className="form-footer">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
```

**`src/pages/RegisterPage.tsx`**

```tsx
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" />
          </div>
          <button type="submit" className="btn">Register</button>
        </form>
        <p className="form-footer">
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
```

### 4. Set Up Routing

Now, let's set up the routing in `src/App.tsx`.

```tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### 5. Run the App

You're all set! Now you can run your application and see it in your browser.

```bash
npm run dev
```

This will start the Vite development server, and you can view your app at `http://localhost:5173`.
