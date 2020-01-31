
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

build(wallToBuild, (error, wallBuilt) => {
    if (error) {
        console.error('Could not build the wall')
        return
    }
    planish(wallBuilt, (error, wallPlanished) => {
        if (error) {
            console.error('Could not planish the wall')
            return
        }
        paint(wallPlanished, (error, wallPainted) => {
            if (error) {
                console.error('Could not paint the wall')
                return
            }
            console.log('DONE!')
            console.log('WALL: ', wallPainted)
        })
    })
})