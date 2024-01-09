const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Define a route to render the homepage
app.get('/', (req, res) => {
    
    // Update the view name to match the Handlebars file name
    res.render('homepage', {
        pageTitle: 'Film Folio',
        headerTitle: 'Film Folio',
        navLinks: [
            { link: '#', label: 'Home' },
            { link: '#', label: 'About Us' },
            { link: '#', label: 'Sign In' }
        ],
        genreButtons: [
            { name: 'Action', link: 'Action.html' },
            { name: 'Comedy', link: 'Comedy.html' },
            { name: 'Drama', link: 'Drama.html' },
            { name: 'Sci-Fi', link: 'Sci-Fi.html' },
            { name: 'Thriller', link: 'Thriller.html' },
            { name: 'Romance', link: 'Romance.html' }
        ]
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

