import * as mongoose from 'mongoose'


const travelSchema = new mongoose.Schema({
            starship: {
                type: String,
                required: true
            },
            pilot: {
                type: String,
                required: true
            },
            copilot: {
                type: String,
                required: true
            },
            homePlanet: {
                type: String,
                required: true
            },
            destionationPlanet: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                defaullt: Date.now()
            }
        })

export const travelModel = mongoose.model('Travel', travelSchema)