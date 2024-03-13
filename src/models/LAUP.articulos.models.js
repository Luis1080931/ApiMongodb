import mongoose from "mongoose";

const articulosSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        }
    }
)

const Article = mongoose.model('Article', articulosSchema)
export default Article