
const mongoose = require('mongoose');

const endpointSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  status: { type: String, enum: ['up', 'down'], default: 'up' },
  history: [{
    timestamp: { type: Date, default: Date.now },
    status: { type: String, enum: ['up', 'down'] }
  }]
});

module.exports = mongoose.model('Endpoint', endpointSchema);
