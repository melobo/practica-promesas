const koderInProcess = {
    isInterviewed: false,
    isEnrolled: false,
    isInClass: false
}

function interview(koder, callback) {
    console.log('Interviewing Koder')
    koder.isInterviewed = true
    error = !koder.isInterviewed
    callback(error, koder)
}

function enroll(koder, callback) {
    console.log('Enrolling Koder')
    koder.isEnrolled = true
    error = !koder.isEnrolled
    callback(error, koder)
}

function goingToClass(koder, callback) {
    console.log('Koder going to classes')
    koder.isInClass = true
    error = !koder.isInClass
    callback(error, koder)
}

interview(koderInProcess, (error, koderInterviewed) => {
    if (error) {
        console.log('The interview was a failure')
        return
    }
    enroll(koderInterviewed, (error, koderEnrolled) => {
        if (error) {
            console.log('The Koder is not enrolled')
            return
        }
        goingToClass(koderEnrolled, (error, koderInClass) => {
            if (error) {
                console.log('The Koder is a deserter')
                return
            }
            console.log('DONE!')
            console.log('Becoming a Koder', koderInClass)
        })
    })
})