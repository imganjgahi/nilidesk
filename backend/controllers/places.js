
let dummyData = []
const getPlaces = (req, res) => {
    return res.json({ data: dummyData })
}

const getPlaceItemById = (req, res, next) => {
    const target = dummyData.find(x => x.id === req.params.pid)
    if (!target) {
        const error = new Error('Place Not Found')
        error.code = 404
        return next(error)
    }
    return res.json({ data: target })
}
const createNewPlaceItem = (req, res, next) => {

    const { title, desc } = req.body
    const createdData = {
        id: "" + ((+dummyData.at(-1)?.id || 0) + 1),
        title,
        desc
    }
    dummyData.push(createdData)
    return res.status(201).json({ data: createdData })
}

const updatePlaceItem = (req, res, next) => {
    const placeId = req.params.pid
    targetIndex = dummyData.findIndex(x => x.id === placeId)
    if (targetIndex < 0) {
        const error = new Error('Place Not Found')
        error.code = 404
        return next(error)
    }
    const { title, desc } = req.body
    const createdData = {
        ...dummyData[targetIndex],
        title,
        desc
    }
    dummyData[targetIndex] = (createdData)
    return res.status(201).json({ data: createdData })
}
const deletePlaceItem = (req, res, next) => {
    const placeId = req.params.pid
    targetIndex = dummyData.findIndex(x => x.id === placeId)
    if (targetIndex < 0) {
        const error = new Error('Place Not Found')
        error.code = 404
        return next(error)
    }
    dummyData = dummyData.filter(x => x.id !== placeId)
    return res.status(201).json({ message: "place was deleted" })
}

module.exports = {
    getPlaces,
    getPlaceItemById,
    createNewPlaceItem,
    updatePlaceItem,
    deletePlaceItem
}