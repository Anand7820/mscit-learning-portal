# What to Do Now – After Pushing to GitHub

Your code is on GitHub: **https://github.com/Anand7820/mscit-learning-portal**

You're seeing **404 on mscit-learning-portal.vercel.app** because Vercel is building the wrong folder. Follow these steps.

---

## Step 1: Fix Vercel (Frontend) – So the 404 Goes Away

1. Go to **https://vercel.com** and sign in (same account that’s linked to GitHub).
2. Open your project **mscit-learning-portal** (or the one linked to this repo).
3. Go to **Settings** → **General**.
4. Find **Root Directory**.
5. Click **Edit**, set it to: **`client`**
6. Save.
7. Go to **Deployments**, open the **⋯** on the latest deployment → **Redeploy** (or push a new commit to trigger a new deploy).

After this, **https://mscit-learning-portal.vercel.app** should show your app instead of 404.

### Optional: Environment variable on Vercel

- In the same project: **Settings** → **Environment Variables**.
- Add:
  - **Name:** `VITE_API_URL`
  - **Value:** Your backend API URL (e.g. `https://your-backend.railway.app/api` or `https://your-backend.onrender.com/api`).
- Redeploy after adding it.

---

## Step 2: Deploy the Backend (Required for Login, DB, etc.)

The **server** must be deployed separately. Vercel only serves the **client**.

### Option A: Railway (recommended)

1. Go to **https://railway.app** and sign in with GitHub.
2. **New Project** → **Deploy from GitHub repo** → select **Anand7820/mscit-learning-portal**.
3. After the repo is connected, add a **service** and set:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. In **Variables**, add (replace with your real values):
   - `MONGO_URI` = your MongoDB Atlas connection string  
   - `JWT_SECRET` = long random string  
   - `CLIENT_URL` = `https://mscit-learning-portal.vercel.app`  
   - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` (from Cloudinary)  
   - `PORT` = `5000` (or leave blank; Railway sets it)
5. Deploy. Copy the public URL (e.g. `https://xxx.railway.app`).

### Option B: Render

1. Go to **https://render.com** → **New** → **Web Service**.
2. Connect **Anand7820/mscit-learning-portal**.
3. Set:
   - **Root Directory:** `server`
   - **Build:** `npm install`
   - **Start:** `npm start`
4. Add the same environment variables as above.
5. Deploy and copy the service URL.

---

## Step 3: Connect Frontend to Backend

1. Back in **Vercel** → your project → **Settings** → **Environment Variables**.
2. Set:
   - **Name:** `VITE_API_URL`  
   - **Value:** `https://YOUR-BACKEND-URL/api`  
   (e.g. `https://mscit-portal-api.railway.app/api`)
3. **Redeploy** the frontend (Deployments → Redeploy).

Then your app will call the real API and login/data will work.

---

## Step 4: MongoDB

- Use **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas  
- Create a free cluster, get the connection string, put it in `MONGO_URI` on Railway/Render.

---

## Quick Checklist

| Step | Action | Done? |
|------|--------|--------|
| 1 | Vercel: set **Root Directory** to `client` and redeploy | ☐ |
| 2 | Deploy backend on Railway or Render (root: `server`) | ☐ |
| 3 | Add env vars on backend (MONGO_URI, JWT_SECRET, CLIENT_URL, etc.) | ☐ |
| 4 | Vercel: add `VITE_API_URL` = backend URL + `/api` | ☐ |
| 5 | Redeploy frontend after setting `VITE_API_URL` | ☐ |

---

## Summary

- **404 on Vercel** → Set **Root Directory** to **`client`** and redeploy.
- **Backend** → Deploy `server/` on Railway or Render and add env vars.
- **Frontend** → Set `VITE_API_URL` on Vercel to your backend API URL and redeploy.

After that, **mscit-learning-portal.vercel.app** should load and work with your backend.
