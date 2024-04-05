
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  endpoints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Endpoint' }]
});

module.exports = mongoose.model('Application', applicationSchema);
