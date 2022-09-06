const { Schema, model } = require('mongoose');

const cartSchema = new Schema(
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
      }],
      subtotal: {
        type: Number,
        default: 0.00,
      },
    }
  );
  
  const Cart = model('Cart', cartSchema);
  module.exports = { Cart };