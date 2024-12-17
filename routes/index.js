var express = require('express');
var router = express.Router();
const Item = require('../models/Item');

// Get all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one item
router.get('/items/:id', getItem, (req, res) => {
  res.json(res.item);
});

// Create one item
router.post('/items', async (req, res) => {
  req.body = JSON.parse(req.body.body);
  const item = new Item({
    item: req.body.item,
    date_achat: req.body.date_achat,
    date_revente: req.body.date_revente,
    prix_achat: req.body.prix_achat,
    prix_revente: req.body.prix_revente,
    is_sell: req.body.is_sell,
    is_craft: req.body.is_craft,
    picture_url: req.body.picture_url,
    ankama_id: req.body.ankama_id
  });


  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err.message });
  }
});

// Update one item
router.patch('/items/:id', getItem, async (req, res) => {
  if (req.body.item != null) {
    res.item.item = req.body.item;
  }
  if (req.body.date_achat != null) {
    res.item.date_achat = req.body.date_achat;
  }
  if (req.body.date_revente != null) {
    res.item.date_revente = req.body.date_revente;
  }
  if (req.body.prix_achat != null) {
    res.item.prix_achat = req.body.prix_achat;
  }
  if (req.body.prix_revente != null) {
    res.item.prix_revente = req.body.prix_revente;
  }
  if (req.body.is_sell != null) {
    res.item.is_sell = req.body.is_sell;
  }
  if (req.body.is_craft != null) {
    res.item.is_craft = req.body.is_craft;
  }
  if (req.body.picture_id != null) {
    res.item.picture_url = req.body.picture_id;
  }
  if (req.body.ankamal_id != null) {
    res.item.ankama_id = req.body.ankamal_id;
  }

  try {
    const updatedItem = await res.item.save();
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one item
router.delete('/items/:id', getItem, async (req, res) => {
  try {
    console.log(req.params.id);
    await Item.deleteOne({ _id: req.params.id });
    res.json({ message: 'Deleted item' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getItem(req, res, next) {
  let item;
  try {
    item = await Item.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: 'Cannot find item' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.item = item;
  next();
}

module.exports = router;


module.exports = router;
