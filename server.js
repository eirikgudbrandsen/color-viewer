const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

//app.use(express.static('public')); // Serve static files from 'public' directory

// Endpoint to list JSON files
app.get('/list-json', (req, res) => {
    const outputDir = path.join(__dirname, 'output'); // Adjust the path as needed

    fs.readdir(outputDir, (err, files) => {
        if (err) {
            console.error('Failed to list files:', err);
            res.status(500).send('Error listing files');
            return;
        }

        const jsonFiles = files.filter(file => file.endsWith('.json'));
        res.json(jsonFiles);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

