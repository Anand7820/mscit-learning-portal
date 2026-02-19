# Deployment Guide - MS-CIT Learning Portal

## 🚀 Deployment Checklist

### Prerequisites
- [ ] MongoDB database (MongoDB Atlas or self-hosted)
- [ ] Cloudinary account for image storage
- [ ] Hosting account (Vercel, Netlify, Railway, Render, etc.)
- [ ] Domain name (optional)

---

## 📋 Step-by-Step Deployment

### 1. Environment Variables Setup

#### Backend Environment Variables (.env in server folder)
Create a `.env` file in the `server/` directory:

```env
# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mscit_portal?retryWrites=true&w=majority

# JWT Secret (use a strong random string)
JWT_SECRET=your_super_secret_jwt_key_here_min_32_characters

# CORS - Your frontend URL
CLIENT_URL=https://your-frontend-domain.com

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Server Port (usually auto-set by hosting)
PORT=5000

# Admin Credentials (optional)
ADMIN_EMAIL=admin@mscit.com
ADMIN_PASSWORD=your_secure_password
```

#### Frontend Environment Variables
Create a `.env` file in the `client/` directory:

```env
VITE_API_URL=https://your-backend-domain.com/api
```

**Note**: For Vite, all environment variables must start with `VITE_`

---

### 2. MongoDB Setup

#### Option A: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your server IP (or use 0.0.0.0/0 for all IPs)
5. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/dbname`

#### Option B: Self-hosted MongoDB
- Install MongoDB on your server
- Connection string: `mongodb://localhost:27017/mscit_portal`

---

### 3. Cloudinary Setup

1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Go to Dashboard
3. Copy:
   - Cloud Name
   - API Key
   - API Secret
4. Add to backend `.env` file

---

### 4. Backend Deployment

#### Option A: Railway (Recommended)
1. Go to [Railway](https://railway.app/)
2. New Project → Deploy from GitHub
3. Select your repository
4. Add environment variables in Railway dashboard
5. Deploy!

#### Option B: Render
1. Go to [Render](https://render.com/)
2. New → Web Service
3. Connect GitHub repository
4. Settings:
   - Build Command: `cd server && npm install`
   - Start Command: `cd server && npm start`
   - Root Directory: `server`
5. Add environment variables
6. Deploy!

#### Option C: Heroku
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set MONGO_URI=your_mongo_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   # ... add all other variables
   ```
5. Deploy: `git push heroku main`

#### Option D: VPS/Server (Ubuntu)
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Clone repository
git clone your-repo-url
cd shree-class/server

# Install dependencies
npm install

# Create .env file
nano .env
# Add all environment variables

# Start with PM2
pm2 start src/index.js --name mscit-server
pm2 save
pm2 startup
```

---

### 5. Frontend Deployment

#### Option A: Vercel (Recommended for React)
1. Go to [Vercel](https://vercel.com/)
2. Import Project → GitHub
3. Select repository
4. Settings:
   - Framework Preset: Vite
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add environment variable:
   - `VITE_API_URL`: Your backend URL
6. Deploy!

#### Option B: Netlify
1. Go to [Netlify](https://www.netlify.com/)
2. Add new site → Import from Git
3. Settings:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `client/dist`
4. Add environment variable:
   - `VITE_API_URL`: Your backend URL
5. Deploy!

#### Option C: Static Hosting (GitHub Pages, etc.)
1. Build the project:
   ```bash
   cd client
   npm run build
   ```
2. Upload `dist/` folder contents to your hosting
3. Configure environment variable in hosting panel

---

### 6. Post-Deployment Configuration

#### Update CORS in Backend
Make sure `CLIENT_URL` in backend `.env` matches your frontend URL exactly.

#### Test Deployment
1. ✅ Frontend loads correctly
2. ✅ Can register new student
3. ✅ Can login
4. ✅ Images upload to Cloudinary
5. ✅ Database connection works
6. ✅ Admin dashboard accessible

---

## 🔧 Common Deployment Issues & Solutions

### Issue 1: CORS Error
**Problem**: Frontend can't connect to backend
**Solution**: 
- Check `CLIENT_URL` in backend `.env` matches frontend URL exactly
- Include protocol (https://) and no trailing slash

### Issue 2: Environment Variables Not Working
**Problem**: Frontend shows `undefined` for API URL
**Solution**:
- Vite requires `VITE_` prefix
- Rebuild after adding env variables
- Check variable names match exactly

### Issue 3: MongoDB Connection Failed
**Problem**: Can't connect to database
**Solution**:
- Check MongoDB Atlas IP whitelist
- Verify connection string format
- Ensure username/password are URL encoded

### Issue 4: Cloudinary Upload Fails
**Problem**: Images not uploading
**Solution**:
- Verify Cloudinary credentials
- Check API key permissions
- Ensure environment variables are set correctly

### Issue 5: Build Fails
**Problem**: Frontend build errors
**Solution**:
- Check Node.js version (should be 18+)
- Clear `node_modules` and reinstall
- Check for TypeScript errors if any

### Issue 6: 404 on Refresh (React Router)
**Problem**: Page shows 404 on refresh
**Solution**: 
- Configure hosting to redirect all routes to `index.html`
- Vercel: Auto-configured
- Netlify: Add `_redirects` file in `public/`:
  ```
  /*    /index.html   200
  ```

---

## 📝 Deployment Checklist

### Before Deployment
- [ ] All environment variables configured
- [ ] MongoDB database created and accessible
- [ ] Cloudinary account set up
- [ ] `.gitignore` includes `.env` files
- [ ] No sensitive data in code
- [ ] Tested locally

### Backend Deployment
- [ ] Environment variables added to hosting
- [ ] MongoDB connection string configured
- [ ] Cloudinary credentials added
- [ ] CORS URL set correctly
- [ ] Server starts successfully
- [ ] API endpoints accessible

### Frontend Deployment
- [ ] Environment variables added
- [ ] API URL points to backend
- [ ] Build completes successfully
- [ ] Static files served correctly
- [ ] Routes work on refresh

### Post-Deployment
- [ ] Test user registration
- [ ] Test login functionality
- [ ] Test image uploads
- [ ] Test admin dashboard
- [ ] Test course access
- [ ] Test exam functionality
- [ ] Monitor error logs

---

## 🌐 Recommended Hosting Combinations

### Option 1: Vercel (Frontend) + Railway (Backend)
- ✅ Easy setup
- ✅ Free tier available
- ✅ Auto-deploy from GitHub
- ✅ Good performance

### Option 2: Netlify (Frontend) + Render (Backend)
- ✅ Free tier available
- ✅ Easy configuration
- ✅ Good documentation

### Option 3: VPS (Both)
- ✅ Full control
- ✅ Cost-effective for high traffic
- ✅ Requires server management

---

## 🔒 Security Checklist

- [ ] Strong JWT_SECRET (32+ characters, random)
- [ ] MongoDB user has limited permissions
- [ ] CORS restricted to frontend domain only
- [ ] Environment variables not in code
- [ ] HTTPS enabled (SSL certificate)
- [ ] Admin password is strong
- [ ] Regular backups of database

---

## 📞 Support

If you encounter issues:
1. Check hosting provider logs
2. Verify environment variables
3. Test API endpoints with Postman
4. Check browser console for errors
5. Review server logs

---

**Good luck with your deployment! 🚀**
