const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello Mukesh, Welcome to GitHub Actions CI/CD!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

