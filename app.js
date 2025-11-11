// app.js

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Ensure the uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('✅ uploads directory created successfully');
} else {
  console.log('📁 uploads directory already exists');
}

// ✅ Example route
app.get('/', (req, res) => {
  res.send('Node.js web app is running successfully 🚀');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
