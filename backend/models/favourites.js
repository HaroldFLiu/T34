const { Schema, model } = require('mongoose');

const favouritesSchema = new Schema(
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      items: [{
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: false,
      }]
    }
  );
  
  const Favourites = model('Favourites', favouritesSchema);
  module.exports = { Favourites };