const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    field1: String,
    field2: Number
});

module.exports = mongoose.model('Data', DataSchema);
