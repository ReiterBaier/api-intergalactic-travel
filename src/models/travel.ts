import mongoose from 'mongoose'

export const travelSchema = new mongoose.Schema({
    starship: {
        type: String,
        require: true
    },
    pilot: {
        type: String,
        require: true
    },
    copilot: {
        type: String,
        require: true
    },
    homePlanet: {
        type: String,
        require: true
    },
    destionationPlanet: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        defaullt: Date.now()
    }
})