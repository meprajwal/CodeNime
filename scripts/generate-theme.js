const fs = require('fs');
const path = require('path');

const themesDir = path.join(__dirname, '../themes');

function generateTheme(themeName, isDark) {
    const themePath = path.join(themesDir, themeName, isDark ? 'dark.json' : 'light.json');
    const theme = {
        name: `${themeName} ${isDark ? 'Dark' : 'Light'}`,
        type: isDark ? 'dark' : 'light',
        colors: {
            "editor.background": isDark ? "#1E1E1E" : "#FFFFFF",
            "editor.foreground": isDark ? "#D4D4D4" : "#000000"
            // Add more colors here as needed
        },
        tokenColors: [
            {
                "scope": "comment",
                "settings": {
                    "foreground": isDark ? "#6A9955" : "#008000"
                }
            },
            // Add more token colors here as needed
        ]
    };

    fs.writeFileSync(themePath, JSON.stringify(theme, null, 2));
}

const themeName = process.argv[2];

if (!themeName) {
    console.error('Please provide a theme name');
    process.exit(1);
}

generateTheme(themeName, true); // Generate the dark theme
generateTheme(themeName, false); // Generate the light theme

console.log(`Themes for ${themeName} generated successfully!`);
