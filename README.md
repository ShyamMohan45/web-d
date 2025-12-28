# 🚨 SentinelX  
### Intelligent Incident Reporting & Admin Response Platform

SentinelX is a modern, scalable, and user-friendly **incident reporting and management system** designed to bridge the gap between **citizens and authorities**.  
It enables users to report incidents in real time while providing administrators with a powerful dashboard to **verify, track, prioritize, and resolve incidents efficiently**.

The project focuses on **speed, accuracy, transparency, and accessibility**, making it suitable for **smart cities, disaster management systems, campus safety, and community monitoring platforms**.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Solution Approach](#solution-approach)
- [Key Features](#key-features)
  - [User Features](#user-features)
  - [Admin Features](#admin-features)
- [System Architecture](#system-architecture)
- [Location & Map System](#location--map-system)
- [Admin Authentication Flow](#admin-authentication-flow)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [Security Considerations](#security-considerations)
- [Performance & UX](#performance--ux)
- [Future Enhancements](#future-enhancements)
- [Author](#author)
- [License](#license)

---

## 🧠 Overview

In many emergency or public-safety scenarios, **delayed reporting, unclear information, and lack of coordination** significantly reduce response effectiveness.

SentinelX solves this by:
- Allowing users to submit structured incident reports
- Providing location accuracy through map-based selection
- Enabling admins to manage incidents through a centralized dashboard
- Ensuring only authorized admins can access sensitive controls

---

## ❗ Problem Statement

Traditional incident reporting systems often suffer from:
- Lack of real-time updates
- Poor location accuracy
- No prioritization of incidents
- Unrestricted access to admin panels
- Unclear communication between reporters and responders

---

## ✅ Solution Approach

SentinelX introduces:
- **Structured incident reporting**
- **Severity-based prioritization**
- **Map-driven location selection**
- **Secure admin-only dashboards**
- **Status tracking and internal notes**
- **Clean, animated, and responsive UI**

---

## ✨ Key Features

### 👤 User Features

- Report incidents with:
  - Incident Type (Accident, Fire, Medical, Disaster, Infrastructure)
  - Severity Level (Low / Medium / High)
  - Detailed Description
  - Interactive map-based location selection
  - Optional photo evidence upload
- Modern UI with animations
- Responsive design for all screen sizes
- Instant feedback using toast notifications

---

### 🛡️ Admin Features

- Secure admin login (no direct access to dashboard)
- Incident dashboard with:
  - Priority indicators
  - Real-time status updates
  - Expandable incident details
- Incident lifecycle management:
  - Unverified → Verified → Responding → Resolved
- Internal notes for coordination
- Sorting controls:
  - Priority
  - Time
  - Votes
- Live statistics overview:
  - Active incidents
  - Responding incidents
  - Resolved today

---

## 🏗️ System Architecture

User
└── Incident Report Form
├── Incident Details
├── Severity Selection
├── Map Location Picker
└── Image Upload
↓
Zustand Store (State Management)
↓
Admin Dashboard (Protected Route)
├── Incident List
├── Status Updates
├── Notes
└── Analytics


---

## 🗺️ Location & Map System

- Built using **OpenStreetMap + Leaflet**
- No paid APIs required
- Interactive modal-based map picker
- Click-to-select location
- Reverse geocoding using **Nominatim**
- Automatically extracts:
  - Latitude
  - Longitude
  - Human-readable address

This ensures **accuracy without cost**.

---

## 🔐 Admin Authentication Flow

1. User clicks **Admin**
2. Redirected to **Admin Login Page**
3. Credentials verified (client-side demo auth)
4. Admin session stored in Zustand
5. Admin dashboard unlocked
6. Direct URL access blocked if not logged in
7. Logout clears admin session and redirects back to login

---

## 🧰 Technology Stack

### Frontend
- **React + TypeScript**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**

### State Management
- **Zustand**

### Maps & Location
- **Leaflet**
- **React-Leaflet**
- **OpenStreetMap**
- **Nominatim API**

### Utilities
- date-fns (time formatting)
- sonner (toast notifications)

---

## 📁 Project Structure

src/
├── components/
│ ├── incidents/
│ │ ├── IncidentCard.tsx
│ │ └── IncidentForm.tsx
│ ├── layout/
│ │ └── Navbar.tsx
│ ├── ui/
│ │ ├── LocationPickerModal.tsx
│ │ └── NavLink.tsx
│ └── three/
│ ├── GlobeScene.tsx
│ └── PulseNetworkScene.tsx
├── pages/
│ ├── AdminPage.tsx
│ ├── DashboardPage.tsx
│ ├── LandingPage.tsx
│ ├── ReportPage.tsx
│ └── signup.tsx
├── store/
│ ├── incidentStore.ts
│ └── adminAuthStore.ts
├── App.tsx
├── main.tsx
└── index.css


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ShyamMohan45/web-d