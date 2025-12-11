# File Hosting & Sharing Application

## Overview

This project is a simple **file hosting and sharing web application** with:

- **User registration and login**
- **JWT-based authentication**
- **File upload with privacy options (public / private)**
- **"My Files" page for logged-in user**
- **Public Downloads page for all public files**
- **Logout functionality**
The backend is built with **Node.js + Express + MongoDB (Atlas)** and the frontend is built with **plain HTML, CSS, and JavaScript** (no React).  

Once the server is running, the app can be used **directly from a web browser** by opening the HTML pages.

---

## Technology Stack

- **Backend**
  - Node.js
  - Express
  - MongoDB (Atlas) with Mongoose
  - JSON Web Tokens (JWT)
  - Multer (for file uploads)
  - CORS

- **Frontend**
  - Plain HTML pages
  - Vanilla JavaScript (`fetch` API)
  - Simple CSS

---

## Prerequisites

Before running the project, make sure you have:
**
Node.js installed (LTS version is fine)**
**
A MongoDB Atlas account (or local MongoDB)**

VS COde is the best way to run this code.

---

## 1. Backend Setup (Server)

### Step 1st:
Inside .env file in Backend,

MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/filehost

Replace <username>, <password>, <cluster-url>, and <database-name> with your actual MongoDB Atlas credentials.
Note:
The code uses process.env.MONGO_URL in config/db.js, so this variable name must be exactly MONGO_URL.

### Step 2. Go to backend folder
Open a terminal in the project root and run:** cd backend**

### Step 3. Install dependencies
Run : **npm install**
This installs Express, Mongoose, Multer, JWT, CORS, etc.

### Step 4. Start the backend server
From inside backend: **node server.js**

You should see something like:
**MongoDB connected
Server started on port 8000
**

## 2. Frontend Usage
The frontend is plain HTML, so you can use it directly from the browser.

** Use VS Code Live Server**
Open the project in VS Code.
Go to frontend/pages/.
Open register.html.
Right-click and select "Open with Live Server" (if you have the extension installed).
This will open something like:
http://127.0.0.1:5500/frontend/pages/register.html

## 3. How to Use the Application 

Once the backend server is running (node server.js) and you’ve opened the frontend in your browser, follow this flow:

### Step 1. Register a new user

Open: register.html

Fill in:
Username
Email
Password

**Click Sign Up**

On success, you get an alert like:
**Registered!**
Then go to login.html

### Step 2. Login

Open: login.html
Enter the email and password you registered with
Click **Login**

On success:
A JWT token is saved in localStorage
You are redirected to upload.html (or you can open it manually)

### Step 3. Upload a file

Open: upload.html
Choose a file using the file input
Select privacy:

**public → visible to everyone in Public Downloads
private → visible only in “My Files”**

Click **Upload File**
On success, you’ll see:
File uploaded

### Step 4. View My Files

Open: my-files.html
This page shows all files uploaded by the currently logged-in user

For each file, you may see:
**File name
Link to download/open
Privacy status (public / private)**

### Step 5. View Public Downloads

Open: downloads.html
This page shows all files that have been uploaded with privacy set to public.

### Step 6. Logout

On pages where a Logout link or button exists (e.g., upload.html):

Clicking Logout:
Removes the JWT token from localStorage
Redirects you back to login.html
After logout, you must login again to upload or view “My Files”.

## 4. Backend API Endpoints
These routes are already implemented.

### Authentication
POST /api/register
POST /api/login

### Files
POST /api/upload
GET  /api/my-files
GET  /api/public-files

## HOW TO TEST THIS PROJECT ON ANY COMPUTER

Follow these steps in exact order:

✔ Step 1 — Install Node.js
✔ Step 2 — Open terminal & go to backend folder and run :cd backend
✔ Step 3 — Run:npm install
✔ Step 4 — Create .env with MONGO_URL
✔ Step 5 — Start server, run this : node server.js
✔ Step 6 — Open the frontend
Open:frontend/pages/register.html
✔ Step 7 — Register → Login → Upload → View Files → Logout

### **FINAL NOTES FOR THE PROFESSOR**

The project uses vanilla HTML, not React
All pages interact directly with the backend via fetch()
No build process is required
The project can be run on any machine with Node.js installed
Instructions are purposefully written in a clear step-by-step way
MongoDB Atlas must allow access (IP whitelist or 0.0.0.0/0 enabled)

**## END OF README**
