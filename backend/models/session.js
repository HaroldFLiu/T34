const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const { Schema, model, default: mongoose } = require('mongoose');

const sessionSchema = new mongoose.Schema({
  token: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: ['valid', 'expired'],
    default: 'valid',
  },
});

sessionSchema.plugin(uniqueValidator);


sessionSchema.statics.generateToken = function() {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, buf) => {
      if (err) {
        reject(err);
      }
      const token = buf.toString('hex');
      resolve(token);
    });
  });
};


sessionSchema.statics.expireAllTokensForUser = function(userId) {
  return this.updateMany({ userId }, { $set: { status: 'expired' } });
};

sessionSchema.methods.expireToken = function() {
  const session = this;
  return session.update({ $set: { status: 'expired' } });
};

var Session = model('Session', sessionSchema);
module.exports = Session