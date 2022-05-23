import * as mongoose from 'mongoose'

/* Cria o schema de campos esperados no body de viagens */
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

/* Exporta o schema de campos do body como um modelo */
export const travelModel = mongoose.model('Travel', travelSchema)