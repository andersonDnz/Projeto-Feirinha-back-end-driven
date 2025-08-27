const express = require('express');
const app = express();
app.use(express.json());

let items = [];
let currentId = 1;

app.post('/items', (req, res) => {
  const { name, quantity, type } = req.body;

  if (!name || !quantity || !type) {
    return res.status(400).json({ error: 'name, quantity and type are required' });
  }

  if (type !== 'fruta') {
    return res.status(400).json({ error: 'type must be "fruta"' });
  }

  const newItem = {
    id: currentId++,
    name,
    quantity,
    type
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid id' });
  }

  const item = items.find(i => i.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(item);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Feirinha API running on port ${PORT}`);
});
