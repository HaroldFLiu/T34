const { Schema, model } = require('mongoose');

const groupSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },

    }
  );
  
  const Group = model('Group', groupSchema);
  module.exports = { Group };