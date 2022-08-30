const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      index: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    groups: [{
      type: Schema.Types.ObjectId,
      ref: 'Group',
      required: true,
    }],
    items: [{
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: false,
    }]
  },
  {
    timestamps: {
      createdAt: 'created_at', // Use `created_at` to store the created date
      updatedAt: 'updated_at', // and `updated_at` to store the last updated date
    },
  }
);

const User = model('User', userSchema);
module.exports = { User };