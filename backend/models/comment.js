const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
      content: {
        type: String,
        required: true,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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