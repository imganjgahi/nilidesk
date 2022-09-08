
let dummyUsers = []
const getUsers = (req, res) => {
    return res.json({ data: dummyUsers })
}

const getUserById = (req, res, next) => {
    const target = dummyUsers.find(x => x.id === req.params.uId)
    if (!target) {
        const error = new Error('User Not Found')
        error.code = 404
        return next(error)
    }
    return res.json({ data: target })
}
const createNewUser = (req, res, next) => {

    const { title, desc } = req.body
    const createdData = {
        id: "" + ((+dummyUsers.at(-1)?.id || 0) + 1),
        title,
        desc
    }
    dummyUsers.push(createdData)
    return res.status(201).json({ data: createdData })
}

const updateUser = (req, res, next) => {
    const placeId = req.params.uId
    targetIndex = dummyUsers.findIndex(x => x.id === placeId)
    if (targetIndex < 0) {
        const error = new Error('User Not Found')
        error.code = 404
        return next(error)
    }
    const { title, desc } = req.body
    const createdData = {
        ...dummyUsers[targetIndex],
        title,
        desc
    }
    dummyUsers[targetIndex] = (createdData)
    return res.status(201).json({ data: createdData })
}
const deleteUser = (req, res, next) => {
    const placeId = req.params.uId
    targetIndex = dummyUsers.findIndex(x => x.id === placeId)
    if (targetIndex < 0) {
        const error = new Error('User Not Found')
        error.code = 404
        return next(error)
    }
    dummyUsers = dummyUsers.filter(x => x.id !== placeId)
    return res.status(201).json({ message: "place was deleted" })
}

module.exports = {
    getUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
}