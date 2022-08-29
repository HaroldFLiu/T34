const { Schema, model, SchemaType } = require('mongoose');

const itemSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
      },
    },
    {
      timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at', // and `updated_at` to store the last updated date
      },
    }
  );
  
  const Item = model('Item', itemSchema);
  module.exports = { Item };