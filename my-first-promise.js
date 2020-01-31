
function isMyName(name) {
    const myName = 'cesar'
    return new Promise((resolve, rejected) => {
        if (name !== myName) {
            return rejected(false)
        }
        resolve(true)
    })
}

isMyName('luis')
    .then(response => {
        console.log('Todo OK: ', response)
    })
    .catch(error => {
        console.log('Todo MAL: ', error)
    })