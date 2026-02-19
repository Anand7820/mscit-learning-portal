# Quick Backend Deployment Guide

## 🚀 Deploy Backend on Railway (Easiest Method)

### Step 1: Sign Up & Connect GitHub
1. Go to **[railway.app](https://railway.app)**
2. Sign up with GitHub (same account as your repo)
3. Click **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. Choose **`Anand7820/mscit-learning-portal`**

### Step 2: Configure Railway Service (IMPORTANT – prevents "Build failed" / Railpack error)
1. After repo connects, Railway will detect it
2. Click your service **"mscit-learning-portal"**
3. Go to **"Settings"** tab
4. Find **"Root Directory"** (or "Source" → Root Directory):
   - Click **"Add path"** or **"Set"**
   - Enter: **`server`** (only the backend folder)
   - Save
5. **Without this**, Railway builds the whole repo and fails with "Error creating build plan with Railpack".
6. Railway will then auto-detect:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start` or `node src/index.js`

### Step 3: Add Environment Variables
Click **"Variables"** tab and add these (click **"New Variable"** for each):

| Variable Name | Value | Notes |
|--------------|-------|-------|
| `MONGO_URI` | `mongodb+srv://username:password@cluster.mongodb.net/mscit_portal` | Get from MongoDB Atlas |
| `JWT_SECRET` | `your_random_secret_key_min_32_chars` | Generate a random string |
| `CLIENT_URL` | `https://mscit-learning-portal.vercel.app` | Your Vercel frontend URL |
| `CLOUDINARY_CLOUD_NAME` | `your_cloud_name` | From Cloudinary dashboard |
| `CLOUDINARY_API_KEY` | `your_api_key` | From Cloudinary dashboard |
| `CLOUDINARY_API_SECRET` | `your_api_secret` | From Cloudinary dashboard |
| `ADMIN_EMAIL` | `admin@mscit.com` | Optional |
| `ADMIN_PASSWORD` | `your_secure_password` | Optional |

**Important:** 
- Don't add `PORT` - Railway sets it automatically
- Replace all placeholder values with your real credentials

### Step 4: Get MongoDB Atlas Connection String
1. Go to **[mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)**
2. Sign up (free tier available)
3. Create a cluster (free tier)
4. Click **"Connect"** → **"Connect your application"**
5. Copy the connection string
6. Replace `<password>` with your database password
7. Replace `<dbname>` with `mscit_portal`
8. Add to Railway as `MONGO_URI`

### Step 5: Deploy
1. Railway will automatically start deploying
2. Wait for deployment to complete (2-3 minutes)
3. Once deployed, Railway will give you a URL like: `https://xxx.railway.app`
4. **Copy this URL** - you'll need it for the frontend!

### Step 6: Test Backend
Open in browser: `https://YOUR-RAILWAY-URL/api`
Should see: `{"message":"MS-CIT Portal API running"}`

---

## 🔗 Connect Frontend to Backend

### Step 1: Add Environment Variable in Vercel
1. Go to **[vercel.com](https://vercel.com)**
2. Open your **mscit-learning-portal** project
3. Go to **Settings** → **Environment Variables**
4. Click **"Add New"**
5. Add:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://YOUR-RAILWAY-URL/api` (replace with your Railway URL)
   - **Environment:** Production, Preview, Development (check all)
6. Click **"Save"**

### Step 2: Redeploy Frontend
1. Go to **Deployments** tab
2. Click **"⋯"** on latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete

### Step 3: Test Login
1. Go to: **https://mscit-learning-portal.vercel.app/login**
2. Try logging in with admin credentials
3. Should work now! ✅

---

## 🎯 Quick Checklist

- [ ] Deploy backend on Railway (root: `server`)
- [ ] Add all environment variables in Railway
- [ ] Get Railway backend URL
- [ ] Add `VITE_API_URL` in Vercel = Railway URL + `/api`
- [ ] Redeploy frontend on Vercel
- [ ] Test login

---

## 🔧 Alternative: Render.com

If Railway doesn't work, use Render:

1. Go to **[render.com](https://render.com)**
2. **New** → **Web Service**
3. Connect GitHub repo: `Anand7820/mscit-learning-portal`
4. Settings:
   - **Name:** `mscit-portal-api`
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
5. Add same environment variables as above
6. Deploy and get URL
7. Use that URL in Vercel's `VITE_API_URL`

---

**After completing these steps, your login will work!** 🎉
