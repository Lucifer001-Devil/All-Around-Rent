import mongoose from 'mongoose';  


const userSchema = new mongoose.Schema({
    userType: {
        type: String,
        required: true,
        enum: ['client', 'freelancer']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
