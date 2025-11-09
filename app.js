const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {mkdir
  res.send('Hello from Node.js Web App - CI/CD Automated Deployment');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
