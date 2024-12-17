const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    date_achat: {
        type: Date,
        required: true
    },
    date_revente: {
        type: Date
    },
    prix_achat: {
        type: Number,
        required: true
    },
    prix_revente: {
        type: Number,
        required: true,
        nullable: true,
    },
    is_sell: {
        type: Boolean,
        required: true
    },
    is_craft: {
        type: Boolean,
        required: true
    },
    picture_url: {
        type: String,
        required: true
    },
    ankama_id: {
        type: Number,
        required: true
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;