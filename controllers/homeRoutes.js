const router = require('express').Router();
const { Genre, Movie, Review, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const genreList = await Genre.findAll();

        const genres = genreList.get({ plain: true });

        res.render('homepage', { genres });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

//Should it work like this?
router.get('/:genre', async (req, res) => {
    try {
        const genreData = await Genre.findByPk(req.params.genre, {
            include: [
                {
                    model: Movie,
                    attributes: [
                        'id',
                        'name',
                        'description',
                        'director',
                        'actors',
                        'release_date',
                    ],
                },
            ],
        });

        const genre = genreData.get({ plain: true });
        res.render('genre', { genre });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//Or like this?
router.get('/:genre', async (req, res) => {
    try {
        const genreData = await Movie.findAll(req.params.genre, {
            where: {
                genre: req.params.genre,
            },
        });

        const genreMovies = genreData.get({ plain: true });
        res.render('genre', { genreMovies });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/movie/:id', async (req, res) => {
    try {
        const movieData = await Movie.findByPk(req.params.id, {
            include: [
                {
                    model: Review,
                    attributes: ['reviewText', 'dateCreated', 'userId'],
                },
            ],
        });

        const movie = movieData.get({ plain: true });

        res.render('movie', { movie });
    } catch (err) {
        res.status(500).json(err);
    }
});


//can add session checks to any of these:
//EXAMPLE res.render('profile', {
//        user,
//        logged_in: req.session.logged_in
//        });
router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.id, {
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: Review,
                    attributes: ['dateCreated', 'movieId'],
                },
            ],
        });

        const user = userData.get({ plain: true });

        res.render('profile', { user });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;