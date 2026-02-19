# MS-CIT Learning Portal - Project Summary

## 📋 Project Overview

The **MS-CIT Learning Portal** is a comprehensive web-based learning management system designed for managing MS-CIT (Maharashtra State Certificate in Information Technology) courses. The platform facilitates student enrollment, course delivery, exam management, certificate generation, and administrative oversight.

---

## 🎯 Key Features

### Student Features
- **User Authentication**: Secure login/signup with email and password
- **Profile Management**: Complete profile with photo and signature upload
- **Course Access**: 50-day structured course content with bilingual support (English/Marathi)
- **Exam System**: Timed exams for each course day with automatic submission
- **Progress Tracking**: Visual progress indicators showing completed days
- **Certificate Generation**: Automatic PDF certificate after 15 days of exam completion
- **Dashboard**: View exam history and certificate status

### Admin Features
- **Student Management**: Approve/reject student registrations
- **Batch Management**: Create and manage student batches for better organization
- **Fee Tracking**: Track fees payment (Part 1 & Part 2)
- **Course Management**: Upload course content, images, and videos
- **Day Unlocking**: Manually unlock course days for students
- **Statistics Dashboard**: View total students, active students, pending approvals
- **Student Controls**: Comprehensive student management with all details

---

## 🛠️ Technology Stack

### Frontend (Client)

#### Core Framework
- **React 18.3.1** - Modern UI library for building user interfaces
- **React Router DOM 6.26.2** - Client-side routing and navigation
- **React DOM 18.3.1** - React rendering engine

#### Build Tools & Development
- **Vite 5.4.2** - Fast build tool and development server
- **@vitejs/plugin-react 4.3.1** - React plugin for Vite

#### Styling
- **Tailwind CSS 3.4.10** - Utility-first CSS framework
- **PostCSS 8.4.41** - CSS processing tool
- **Autoprefixer 10.4.20** - Automatic vendor prefixing

#### HTTP & API
- **Axios 1.7.7** - HTTP client for API requests with interceptors

#### Internationalization
- **i18next 23.12.3** - Internationalization framework
- **react-i18next 14.1.2** - React bindings for i18next
- **Supported Languages**: English, Marathi (मराठी)

#### UI Components & Utilities
- **react-hot-toast 2.4.1** - Toast notifications
- **react-easy-crop 5.0.3** - Image cropping component

### Backend (Server)

#### Core Framework
- **Node.js** - JavaScript runtime environment
- **Express 4.19.2** - Web application framework
- **CommonJS** - Module system

#### Database
- **MongoDB** - NoSQL database
- **Mongoose 8.6.0** - MongoDB object modeling tool

#### Authentication & Security
- **jsonwebtoken 9.0.2** - JWT token generation and verification
- **bcryptjs 2.4.3** - Password hashing

#### File Upload & Storage
- **Multer 1.4.5-lts.1** - File upload middleware
- **Cloudinary 1.41.3** - Cloud-based image/video storage
- **multer-storage-cloudinary 4.0.0** - Multer integration with Cloudinary

#### PDF Generation
- **PDFKit 0.15.0** - PDF document generation for certificates

#### Utilities
- **dotenv 16.4.5** - Environment variable management
- **cors 2.8.5** - Cross-Origin Resource Sharing middleware
- **nodemon 3.1.4** - Development server auto-restart (dev dependency)

---

## 📁 Project Structure

```
shree class/
├── client/                    # Frontend React Application
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── StudentLayout.jsx
│   │   │   └── ImageCropModal.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignupPage.jsx
│   │   │   ├── AdminDashboardPage.jsx
│   │   │   ├── StudentHomePage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── CompleteProfilePage.jsx
│   │   │   ├── CourseDayPage.jsx
│   │   │   ├── ExamPage.jsx
│   │   │   └── DashboardPage.jsx
│   │   ├── context/          # React Context
│   │   │   └── AuthContext.jsx
│   │   ├── api/              # API configuration
│   │   │   └── api.js
│   │   ├── routes/           # Route protection
│   │   │   └── ProtectedRoute.jsx
│   │   ├── i18n/             # Internationalization
│   │   │   ├── config.js
│   │   │   ├── en.json
│   │   │   └── mr.json
│   │   ├── utils/            # Utility functions
│   │   │   └── cropImage.js
│   │   ├── styles/           # Global styles
│   │   │   └── index.css
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # Entry point
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── server/                    # Backend Node.js Application
    ├── src/
    │   ├── models/           # Database models
    │   │   ├── User.js
    │   │   ├── Batch.js
    │   │   ├── CourseDay.js
    │   │   ├── ExamAttempt.js
    │   │   └── Certificate.js
    │   ├── controllers/      # Business logic
    │   │   ├── authController.js
    │   │   ├── adminController.js
    │   │   ├── courseController.js
    │   │   ├── examController.js
    │   │   └── certificateController.js
    │   ├── routes/           # API routes
    │   │   ├── authRoutes.js
    │   │   ├── adminRoutes.js
    │   │   ├── courseRoutes.js
    │   │   ├── examRoutes.js
    │   │   └── certificateRoutes.js
    │   ├── middlewares/      # Custom middlewares
    │   │   └── auth.js
    │   ├── config/           # Configuration files
    │   │   ├── db.js
    │   │   └── cloudinary.js
    │   ├── utils/            # Utility functions
    │   │   ├── upload.js
    │   │   ├── uploadCourse.js
    │   │   ├── courseAccess.js
    │   │   ├── ensureAdmin.js
    │   │   └── seedCourse.js
    │   └── index.js          # Server entry point
    └── package.json
```

---

## 🗄️ Database Models

### User Model
- Email, password hash
- Role (admin/student)
- Status (pending/approved/rejected)
- Student number (auto-generated)
- Profile (name, photo, signature, personal details)
- Fees tracking (feesPaid, feesPart1Paid, feesPart2Paid)
- Course progress (unlockedUpTo, manualUnlockedDays)
- Batch assignment

### Batch Model
- Name (unique)
- Description
- Capacity
- Start date, end date
- Active status

### CourseDay Model
- Day number (1-50)
- Image URL, video URL
- Content (English & Marathi)
- Subsections with videos
- Exam questions and answers

### ExamAttempt Model
- Student reference
- Day number
- Answers array
- Score, total
- Start time, submit time
- Duration

### Certificate Model
- Student reference
- Certificate ID (unique)
- Course name
- Issue date
- Exam attempt reference

---

## 🔐 Authentication & Authorization

- **JWT-based authentication** - Secure token-based auth
- **Role-based access control** - Admin and Student roles
- **Protected routes** - Frontend route protection
- **Middleware protection** - Backend API protection
- **Password hashing** - bcryptjs for secure password storage

---

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /signup` - Student registration
- `POST /login` - User login
- `GET /me` - Get current user info
- `POST /complete-profile` - Complete student profile

### Admin Routes (`/api/admin`)
- `GET /stats` - Dashboard statistics
- `GET /pending` - Pending student approvals
- `GET /students` - List all students
- `POST /students` - Create new student
- `POST /students/:id/approve` - Approve student
- `POST /students/:id/reject` - Reject student
- `POST /students/:id/fees-paid` - Mark fees as paid
- `POST /students/:id/fees-part1` - Mark fees part 1
- `POST /students/:id/fees-part2` - Mark fees part 2
- `POST /students/:id/unlock-day` - Unlock course day
- `POST /students/:id/assign-batch` - Assign student to batch
- `DELETE /students/:id` - Delete student
- `GET /batches` - List all batches
- `POST /batches` - Create new batch
- `PUT /batches/:id` - Update batch
- `DELETE /batches/:id` - Delete batch

### Course Routes (`/api/courses`)
- `GET /days` - List all course days
- `GET /days/:dayNumber` - Get specific day content

### Exam Routes (`/api/exams`)
- `POST /:dayNumber/start` - Start exam
- `POST /submit` - Submit exam answers
- `GET /history` - Get exam history

### Certificate Routes (`/api/certificate`)
- `GET /status` - Check certificate eligibility
- `GET /download` - Download certificate PDF

---

## 🎨 Key UI Components

1. **Navbar** - Navigation with logo, user profile, language switcher
2. **Sidebar** - Course day navigation (Days 1-50)
3. **StudentLayout** - Layout wrapper for student pages
4. **ImageCropModal** - Image cropping for profile photos and signatures
5. **AdminDashboardPage** - Comprehensive admin interface with:
   - Statistics dashboard
   - Batch management (expandable cards)
   - Pending approvals
   - Student controls with filtering
   - Add new student form

---

## 🌐 Internationalization

- **English** - Primary language
- **Marathi (मराठी)** - Secondary language
- Dynamic language switching
- Bilingual course content
- Bilingual exam questions

---

## 📦 Key Dependencies Summary

### Frontend Dependencies (15)
- React ecosystem (React, React DOM, React Router)
- Styling (Tailwind CSS, PostCSS)
- HTTP client (Axios)
- i18n (i18next, react-i18next)
- UI utilities (react-hot-toast, react-easy-crop)
- Build tools (Vite, plugins)

### Backend Dependencies (11)
- Web framework (Express)
- Database (Mongoose)
- Authentication (JWT, bcryptjs)
- File handling (Multer, Cloudinary)
- PDF generation (PDFKit)
- Utilities (dotenv, cors)

---

## 🚀 Development Setup

### Frontend
```bash
cd client
npm install
npm run dev  # Runs on http://localhost:5173
```

### Backend
```bash
cd server
npm install
npm run dev  # Runs on http://localhost:5000
```

### Environment Variables Required
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret
- `CLIENT_URL` - Frontend URL for CORS
- `ADMIN_EMAIL` - Admin email (optional)
- `ADMIN_PASSWORD` - Admin password (optional)

---

## ✨ Recent Features Added

1. **Batch Management System**
   - Create and manage student batches
   - Assign students to batches
   - Expandable batch cards with full student details
   - Batch filtering in student controls

2. **Enhanced Student Profile**
   - Profile photo upload with cropping
   - Signature photo upload
   - Complete personal information

3. **Comprehensive Admin Dashboard**
   - Statistics overview
   - Batch management interface
   - Student management with all controls
   - Fee tracking system

---

## 📊 Project Statistics

- **Total Pages**: 10+ React pages
- **Total Components**: 5+ reusable components
- **API Endpoints**: 20+ RESTful endpoints
- **Database Models**: 5 Mongoose models
- **Course Days**: 50 structured days
- **Supported Languages**: 2 (English, Marathi)

---

## 🔄 Project Status

✅ **Completed Features**:
- User authentication and authorization
- Student registration and approval system
- Course content management (50 days)
- Exam system with timed tests
- Certificate generation
- Batch management
- Profile management with photos and signatures
- Admin dashboard with comprehensive controls
- Internationalization support

---

## 📝 Notes

- The project uses a **MERN-like stack** (MongoDB, Express, React, Node.js)
- **Cloudinary** is used for cloud-based image storage
- **JWT tokens** are used for session management
- **Tailwind CSS** provides utility-first styling
- The system supports **70+ students** with batch organization
- **PDF certificates** are generated automatically after exam completion

---

**Project Name**: MS-CIT Learning Portal  
**Version**: 1.0.0  
**Last Updated**: February 2026
