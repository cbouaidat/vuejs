const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let movies = [
    {
        title: "Titanic",
        synopsys: `En 1997, l'épave du Titanic est l'objet d'une exploration fiévreuse, menée par des chercheurs de trésor en quête d'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l'une des rescapés du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912. Fiancée à un industriel arrogant, Rose croise sur le bateau un artiste sans le sou.`,
        date: '1998-02-16',
        genre:'romance',
        img:'https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg',
        realisateur: {
            firstname: "Cameron",
            surname: "James",
            birthday: "1954-08-16",
        }
    },
    {
        title: "Interstellar",
        synopsys: `Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire. `,
        date: '2014-10-13',
        genre:'Science fiction',
        img:'data:image/jpeg;base64,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',
        realisateur: {
            firstname: "Nolan",
            surname: "Christopher",
            birthday: "1970-07-30",
        }
    },
   
];

// Parse with body parser
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded());

// Envoie de tout les films
app.get('/api/movies/all', (_, res) => res.send(movies));

// Recherche d'un film
app.get('/api/movies/:id', (req, res) => res.send(movies[req.params.id]))

// Modification d'un film.
app.post('/api/movies/:id', (req, res) => {
    movies[req.params.id] = req.body;
    res.send(200);
});

// Ajout d'un film.
app.post('/api/movies/', (req, res) => {
    movies.push(req.body);
    console.log(movies);
    res.send(200);
});

// Suppression d'un film.
app.delete('/api/movies/:id', (req, res) => {
    movies.splice(req.params.id, 1);
    console.log(movies);
    res.send(200);
});

// Ecoute d'un port
app.listen(3000, () => {
    console.log('API is ready on port 3000');
});


