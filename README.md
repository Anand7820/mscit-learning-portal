# MS-CIT / Institute Learning Portal (MERN)

## Prerequisites - What to Install on a New PC

### 1. **Node.js and npm** (Required)
   - Download from: https://nodejs.org/
   - Install **LTS version** (recommended: v18.x or v20.x)
   - This includes npm automatically
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

### 2. **MongoDB** (Required)
   - **Option A: MongoDB Community Server** (Local)
     - Download from: https://www.mongodb.com/try/download/community
     - Install MongoDB Community Server
     - Start MongoDB service:
       - **Windows**: MongoDB runs as a service automatically after installation
       - **Mac/Linux**: `sudo systemctl start mongod` or `brew services start mongodb-community`
   
   - **Option B: MongoDB Atlas** (Cloud - Recommended for beginners)
     - Sign up at: https://www.mongodb.com/cloud/atlas
     - Create a free cluster
     - Get connection string and use it in `.env` as `MONGO_URI`

### 3. **Git** (Optional - if cloning from repository)
   - Download from: https://git-scm.com/
   - Needed only if you're cloning the project from GitHub/GitLab

### 4. **Code Editor** (Optional but recommended)
   - Visual Studio Code: https://code.visualstudio.com/
   - Or any text editor of your choice

---

## Folder Structure
- `client/` React + Vite + Tailwind
- `server/` Node + Express + MongoDB

---

## Setup Instructions

### Step 1: Get the Project
- **Option A**: Copy the entire `shree class` folder to the new PC
- **Option B**: Clone from Git repository (if available)

### Step 2: Backend Setup

1. **Navigate to server folder:**
   ```bash
   cd "shree class/server"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file** in `server/` folder with:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/mscit_portal
   JWT_SECRET=your_jwt_secret_change_this_to_random_string
   CLIENT_URL=http://localhost:5173
   ADMIN_EMAIL=admin@mscit.com
   ADMIN_PASSWORD=admin123
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
   
   **Note:** 
   - For **MongoDB Atlas** (cloud), replace `MONGO_URI` with your Atlas connection string
   - **Cloudinary** is optional - leave empty if you don't need image uploads (profile photos and course images won't work)
   - Change `JWT_SECRET` to a random secure string

4. **Start MongoDB** (if using local MongoDB):
   - **Windows**: Usually runs automatically as a service
   - **Mac/Linux**: `sudo systemctl start mongod` or check service status

5. **Start server:**
   ```bash
   npm run dev
   ```
   - Server will run on `http://localhost:5000`
   - On first run, it will create admin user and seed 50 course days

### Step 3: Frontend Setup

1. **Open a new terminal** and navigate to client folder:
   ```bash
   cd "shree class/client"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **(Optional) Create `.env` file** in `client/` folder:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
   - This is optional - defaults to `http://localhost:5000/api` if not set

4. **Start client:**
   ```bash
   npm run dev
   ```
   - Client will run on `http://localhost:5173`
   - Open browser and go to: `http://localhost:5173`

---

## Quick Start Checklist

- [ ] Install Node.js (v18+)
- [ ] Install MongoDB (local or Atlas)
- [ ] Copy project folder to new PC
- [ ] Run `npm install` in `server/` folder
- [ ] Create `server/.env` file with required variables
- [ ] Run `npm install` in `client/` folder
- [ ] (Optional) Create `client/.env` file
- [ ] Start MongoDB service
- [ ] Start server: `cd server && npm run dev`
- [ ] Start client: `cd client && npm run dev` (in new terminal)
- [ ] Open `http://localhost:5173` in browser

---

## Troubleshooting

### MongoDB Connection Error
- **Local MongoDB**: Ensure MongoDB service is running
- **MongoDB Atlas**: Check connection string and network access settings
- Verify `MONGO_URI` in `.env` is correct

### Port Already in Use
- Change `PORT` in `server/.env` if 5000 is busy
- Change Vite port in `client/vite.config.js` if 5173 is busy

### Dependencies Installation Fails
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Ensure Node.js version is compatible (v18+)

### Cloudinary Errors
- If you don't have Cloudinary account, profile photos and course images won't upload
- The app will still work, but image uploads will fail gracefully

---

## Notes
- First admin is auto-created using `ADMIN_EMAIL` + `ADMIN_PASSWORD` from `.env`
- Students can login only after admin approval
- Profile completion is required on first login
- 50 course days are automatically seeded on first server start
