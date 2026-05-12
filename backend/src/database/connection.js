import mongoose from 'mongoose';

const connectDB = async(mongoUri)=> {
    if(!mongoUri){
        throw new Error('MONGO_URI is requerid');
    
    }
    mongoose.set('strictQuery',true);
    await mongoose.connect(MongoUri);
    console.log('Connected to MongoDB')
}

export default connectDB;
