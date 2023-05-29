const express = require('express');
const app = express();
const port = 3000;

// Middleware pentru a permite parsarea JSON
app.use(express.json());

// Lista de jocuri (simulare baza de date)
let games = [
  { id: 1, name: 'Game 1' },
  { id: 2, name: 'Game 2' },
  { id: 3, name: 'Game 3' }
];

// Read (GET) - Returnează lista de jocuri
app.get('/games', (req, res) => {
  res.json(games);
});

// Create (POST) - Adaugă un joc nou
app.post('/games', (req, res) => {
  const { name } = req.body;
  const newGame = { id: games.length + 1, name };
  games.push(newGame);
  res.json(newGame);
});

// Update (PUT) - Actualizează un joc existent
app.put('/games/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const game = games.find(g => g.id === parseInt(id));
  if (game) {
    game.name = name;
    res.json(game);
  } else {
    res.status(404).json({ error: 'Game not found' });
  }
});

// Delete (DELETE) - Șterge un joc existent
app.delete('/games/:id', (req, res) => {
  const { id } = req.params;

  const gameIndex = games.findIndex(g => g.id === parseInt(id));
  if (gameIndex !== -1) {
    const deletedGame = games.splice(gameIndex, 1);
    res.json(deletedGame[0]);
  } else {
    res.status(404).json({ error: 'Game not found' });
  }
});

// Pornirea serverului
app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});

