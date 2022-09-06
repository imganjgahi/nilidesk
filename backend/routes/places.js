const express = require('express')
const placesController = require('../controllers/places')

const router = express.Router()

router.get('/', placesController.getPlaces)
router.get('/:pid', placesController.getPlaceItemById)
router.post('/', placesController.createNewPlaceItem)
router.put('/:pid', placesController.updatePlaceItem)
router.delete('/:pid', placesController.deletePlaceItem)

module.exports = router