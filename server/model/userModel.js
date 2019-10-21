var mongoose = require('mongoose');

// Setup schema
var userSchema = mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Contact = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}