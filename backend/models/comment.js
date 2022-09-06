const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
      item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      string: {
        type: String,
        required: true,
      },

    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }

  );
  
  const Comment = model('Comment', commentSchema);
  module.exports = { Comment };