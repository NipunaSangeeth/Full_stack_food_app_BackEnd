# SavorRadius - Fullstack Food Ordering App

A modern, responsive Full-Stack Food Ordering platform built with **React**, **Node.js (Express)**, **Firebase Cloud Functions**, and **Stripe** Payment checkout integration.

---

##  Project Overview
This project provides an end-to-end food ordering and delivery management system. Users can browse categorized menus, adjust quantities, place items into a synchronized shopping cart, and undergo checkout securely through Stripe via backend handles. Admins are provided sub-dashboards for controlling item availability and modifying order states quickly.

---

##  System Architecture Diagram

Below outlines the data flow between the client bundle and secure backend modules:

<img src="Document/Food%20APP%20System%20Architecture%20Diagram.png" alt="System Architecture Diagram" width="100%" />

---

##  Database Architecture Diagram

Data model utilizing NoSQL nested layouts in Cloud Firestore:

<img src="Document/Food%20app%20Database%20Architecture%20Diagram.png" alt="Database Architecture Diagram" width="100%" />

---

## ✨ Core Features

*   **User Authentication**: Bypassed popup locks using absolute redirection loops cleanly.
*   **Admin Dashboard View**: Live table items supporting triggers to append new products securely.
*   **Interactive Slider Filtering**: Display menus Categorically (Fruits, Deserts, Drinks) securely using state selectors.
*   **Live Cart Integration**: Backed by secure context reduces and live Firebase fetches concurrently.

---

##  Tech Stack

| Component | technologies |
| :--- | :--- |
| **Frontend** | React 18, React Router DOM, Tailwind CSS, Framer Motion, Axios, Redux |
| **Backend** | Node.js (Express), Firebase Admin SDK |
| **Database & Auth** | Cloud Firestore, Firebase Auth (JWT verification handlers) |
| **Payments** | Stripe Checkout Hooks |

---

##  Project Structure

```text
SavorRadius/
├── client/                      # frontend React Single-Page-App
│   ├── src/
│   │   ├── api/                 # Axios methods & BaseURL mappings
│   │   ├── components/          # Reusable UI parts (Header, Cart, Slider, DBHome)
│   │   ├── containers/          # Main Pages (Login, Main UI, Dashboard)
│   │   ├── context/             # Redux state Actions and Reducers
│   │   └── config/              # Client Firebase Configuration keys
├── server/
│   ├── functions/               # Backend logic (Firebase Cloud Functions)
│   │   ├── routes/              # Express API handlers (products.js, user.js)
│   │   └── index.js             # Main server trigger / Initializer
```

---

##  Installation Guide

### **1. Setup Frontend (Client)**
1. Navigate into client: `cd client`
2. Install dependencies (requires legacy flags due to older Material UI mapping):
   ```bash
   npm install --legacy-peer-deps
   ```
3. Run Server: `npm start`

### **2. Setup Backend (Server)**
1. Navigate into server functions: `cd server/functions`
2. Run installation:
   ```bash
   npm install
   ```
3. Boot emulator directly:
   ```bash
   npx -y -p firebase-tools firebase emulators:start --only functions
   ```

---

##  Environment Variables

### **Client (`client/.env`)**
*   `REACT_APP_FIREBASE_API_KEY`: API authentication maps.
*   `REACT_APP_ADMIN_ID`: Allowed **Firebase UID** treated as admin node triggers.
*   `GENERATE_SOURCEMAP`: Set to `false` to suppress module warning outputs cleanly.

### **Backend (`server/functions/.env`)**
*   `STRIPE_KEY`: Standard stripe test or live secret string.
*   `CLIENT_URL`: Matches port listener URL bundles (`http://localhost:3000`).

---
<p align="center"><i>Created with ❤️ Powered by Firebase and Stripe.</i></p>
