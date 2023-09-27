import mongoose from "mongoose";


export const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/prueba')
        console.log(`DB is connected to ${mongoose.connection.db.databaseName}`)
    } catch (error) {
        console.log(error)
    }
}