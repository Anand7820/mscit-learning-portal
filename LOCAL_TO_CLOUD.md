# Copy local database → cloud (Local → Cloud)

Use this when your **local MongoDB** has all the data (users, batches, course days, etc.) and you want the **cloud database** (e.g. MongoDB Atlas used by Railway) to have the same data.

---

## 1. Prerequisites

- **Local MongoDB** running with your data (e.g. `mongodb://127.0.0.1:27017/mscit_portal`).
- **Cloud MongoDB URI** (e.g. your Atlas connection string). This is the same URI you set as `MONGO_URI` in Railway.

---

## 2. Set the cloud URI

In the **server** folder, in your `.env` file, add:

```env
CLOUD_MONGO_URI=mongodb+srv://USER:PASSWORD@cluster.xxxxx.mongodb.net/mscit_portal?retryWrites=true&w=majority
```

- Replace `USER`, `PASSWORD`, and `cluster.xxxxx.mongodb.net` with your **Atlas** (or cloud) details.
- If the password has special characters (e.g. `@`, `#`), URL-encode them (e.g. `@` → `%40`).

Optional: if your local DB is not at `127.0.0.1:27017/mscit_portal`, set:

```env
LOCAL_MONGO_URI=mongodb://127.0.0.1:27017/your_db_name
```

---

## 3. Run the migration

From the **server** folder:

```bash
cd server
npm run migrate:local-to-cloud
```

Or:

```bash
cd server
node src/scripts/migrate-local-to-cloud.js
```

You should see something like:

```
Connected to LOCAL and CLOUD.
  Batch: 2 document(s) from local.
  Batch: copied to cloud.
  CourseDay: 50 document(s) from local.
  ...
Done. Cloud database now matches local.
```

---

## 4. What it does

- Reads all data from **local** MongoDB (Batch, CourseDay, User, ExamAttempt, Certificate).
- **Replaces** all data in the **cloud** database with that data (cloud is overwritten).
- Keeps the same `_id`s so relationships (e.g. user → batch, exam attempt → user) stay valid.

---

## 5. After migration

- Your Railway app already uses the cloud `MONGO_URI` (Atlas). No redeploy needed for the DB.
- Just run the script whenever you want to **push** local data to cloud again (e.g. after adding students or batches locally).

**Tip:** Keep `CLOUD_MONGO_URI` only in your local `.env` (do not commit `.env`). Never put it in Railway variables; Railway should use `MONGO_URI` to connect to the same cloud DB.
