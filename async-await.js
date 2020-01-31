
const wallToBuild = {
    isBuilt: false,
    isPlanished: false,
    isPainted: false
}

function build(wall, callback) {
    console.log('I am building')
    wall.isBuilt = true
    const error = !wall.isBuilt
    callback(error, wall)
}

function planish(wall, callback) {
    console.log('I am planishing')
    wall.isPlanished = true
    const error = !wall.isPlanished
    callback(error, wall)
}

function paint(wall, callback) {
    console.log('I am painting')
    wall.isPainted = true
    const error = !wall.isPainted
    callback(error, wall)
}

function buildPromise(wall) {
    return new Promise((resolve, reject) => {
        build(wall, (error, wallBuilt) => {
            if (error) return reject(error)
            resolve(wallBuilt)
        })
    })
}

function planishPromise(wall) {
    return new Promise((resolve, reject) => {
        planish(wall, (error, wallPlanished) => {
            if (error) return reject(error)
            resolve(wallPlanished)
        })
    })
}

function paintPromise(wall) {
    return new Promise((resolve, reject) => {
        paint(wall, (error, wallPainted) => {
            if (error) return reject(error)
            resolve(wallPainted)
        })
    })
}

// buildPromise(wallToBuild)
//     .then(wallBuilt => {
//         planishPromise(wallBuilt)
//             .then(wallPlanished => {
//                 paintPromise(wallPlanished)
//                     .then(wallPainted => {
//                         console.log('DONE')
//                         console.log('wallPainted: ', wallPainted)
//                     })
//                     .catch(error => {
//                         console.error('ERROR at paint promise')
//                     })
//             })
//             .catch(error => {
//                 console.error('ERROR at planish promise')
//             })
//     })
//     .catch(error => {
//         console.error('ERROR at built promise')
//     })

async function main() {
    const wallBuilt = await buildPromise(wallToBuild)
    const wallPlanished = await planishPromise(wallBuilt)
    const wallPainted = await paintPromise(wallPlanished)

    console.log('DONE: ', wallPainted)
}

main()
    .then(() => {
        console.log('Todo cool')
    })
    .catch(error => {
        console.log('Algo fallo')
    })