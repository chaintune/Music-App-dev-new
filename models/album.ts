import { Schema, model, models } from "mongoose"

const attributesArray = new Schema({
    trait_type: {
        type: String,
    },
    value: {
        type: String,
    }
})

const filesArray = new Schema({
    type: {
        type: String,
    },
    uri: {
        type: String,
    }
})

const propsObj = new Schema({
    files: [filesArray],
    category: {
        type: String,
    }
})

const songSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    external_url: {
        type: String,
    },
    desc: {
        type: String,
    },
    creator: {
        type: String
    },
    songs: {
          
    },
    attributes: [attributesArray],
    properties: {
        type: propsObj
    }
})

// const songSchema = new Schema({
//     name: {
//         type: String,
//     },
//     link: {
//         type: String,
//     },
//     date: {
//         type: String,
//     },
// })

const Song = models.Song || model("Song", songSchema)

export default Song