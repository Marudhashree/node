const express = require("express");
const path = require("path");
const app = express();

// Serve static HTML file
app.use(express.static(path.join(__dirname)));

// Set port
const PORT = process.env.PORT || 3000;

// Run server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
