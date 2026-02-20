/**
 * Check if local MongoDB is running and show database info
 */
const mongoose = require("mongoose");

const LOCAL_URI =
  process.env.LOCAL_MONGO_URI || "mongodb://127.0.0.1:27017/mscit_portal";

async function checkLocalDb() {
  try {
    console.log("🔍 Connecting to local MongoDB...");
    console.log(`   URI: ${LOCAL_URI}\n`);

    const conn = mongoose.createConnection(LOCAL_URI);

    await new Promise((resolve, reject) => {
      conn.on("connected", resolve);
      conn.on("error", reject);
      setTimeout(() => reject(new Error("Connection timeout")), 5000);
    });

    console.log("✅ MongoDB is running and connected!\n");

    // List all databases
    const admin = conn.db.admin();
    const dbs = await admin.listDatabases();
    
    console.log("📊 Available databases:");
    dbs.databases.forEach((db) => {
      const sizeMB = (db.sizeOnDisk / 1024 / 1024).toFixed(2);
      console.log(`   - ${db.name} (${sizeMB} MB)`);
    });

    // Check mscit_portal database
    const dbName = LOCAL_URI.split("/").pop().split("?")[0];
    console.log(`\n📦 Checking database: ${dbName}`);

    const collections = await conn.db.listCollections().toArray();
    
    if (collections.length === 0) {
      console.log("   ⚠️  Database exists but has no collections (empty database)");
    } else {
      console.log(`\n📋 Collections (${collections.length}):`);
      
      for (const coll of collections) {
        const count = await conn.db.collection(coll.name).countDocuments();
        console.log(`   - ${coll.name}: ${count} document(s)`);
      }
    }

    await conn.close();
    console.log("\n✅ Check complete!");
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    console.log("\n💡 Troubleshooting:");
    console.log("   1. Make sure MongoDB is running:");
    console.log("      - Windows: Check Services (search 'Services' → find 'MongoDB')");
    console.log("      - Or run: mongod");
    console.log("   2. Default connection: mongodb://127.0.0.1:27017/mscit_portal");
    console.log("   3. To connect MongoDB Compass, use: mongodb://127.0.0.1:27017");
    process.exit(1);
  }
}

checkLocalDb();
