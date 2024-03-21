const fs = require('fs');
const path = require('path');

// Construct the path to the CSS file
const cssFilePath = path.join(__dirname, '..', 'css-files', 'theme.css');

fs.readFile(cssFilePath, 'utf8', function(err, data) {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    // Regular expression to match selectors and their declaration blocks
    const blockRegex = /([^{]+)\{([^}]+)\}/g;
    let blockMatch;
    const properties = {};

    // Extract matching blocks
    while ((blockMatch = blockRegex.exec(data)) !== null) {
        const selector = blockMatch[1].trim();
        const declarations = blockMatch[2];

        // Regular expression to match background-color and color properties within a declaration block
        const propertyRegex = /(background-color|color)\s*:\s*(#[0-9a-fA-F]{3,6})\b/g;
        let propertyMatch;

        // Extract matching properties
        while ((propertyMatch = propertyRegex.exec(declarations)) !== null) {
            const propertyName = propertyMatch[1];
            const hexColor = propertyMatch[2];

            // Create a unique key based on the selector and property name
            const key = `${selector}-${propertyName}`;

            // Ensure unique entries by checking if the key already exists
            if (properties.hasOwnProperty(key)) {
                // If key exists, append an index to make it unique
                let index = 2;
                while (properties.hasOwnProperty(`${key}-${index}`)) {
                    index++;
                }
                properties[`${key}-${index}`] = hexColor;
            } else {
                properties[key] = hexColor;
            }
        }
    }

    // Create the final object structure
    const finalJson = {
        colors: properties
    };

    // Output JSON file path
    const outputJsonPath = path.join(__dirname, '..', 'output', 'colors.json');

    // Write the JSON to a new file
    fs.writeFile(outputJsonPath, JSON.stringify(finalJson, null, 4), 'utf8', function(err) {
        if (err) {
            console.error("Error writing the JSON file:", err);
            return;
        }
        console.log("JSON file has been saved.");
    });
});