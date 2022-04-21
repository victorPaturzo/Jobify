import mongoose from "mongoose"

const connectDB = (url) => {
    return mongoose.connect('mongodb+srv://VictorPaturzo:Jobify@warhammer40k.pw8d7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
}

export default connectDB