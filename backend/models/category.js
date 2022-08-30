const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      items: [{
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: false,
      }]
    }
  );
  
  const Category = model('Category', categorySchema);
  module.exports = { Category };