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
      category_ids: {
        type: [Schema.Types.ObjectId], 
        ref: 'Category',
      },
      group_ids: {
        type: [Schema.Types.ObjectId], 
        ref: 'Group'
      },
      public_visibility: {
        type: Boolean,
        //required: true,
	default: true
      },
      /*
      seller_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
      }*/
      comments: {
        type: [Schema.Types.ObjectId], 
        ref: 'Comment',
        default: [],
      },
      image_urls : {
        type: [{ 
          type: String
        }],
        default: []
      },
      cloudinary_ids : {
        type: [{ 
          type: String
        }],
        default: []
      }
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