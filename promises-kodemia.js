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

function interviewPromise(koder) {
    return new Promise((resolve, reject) => {
        interview(koder, (error, interviewedKoder) => {
            if (error) return reject(error)
            resolve(interviewedKoder)
        })
    })
}

function enrollKoder(koder) {
    return new Promise((resolve, reject) => {
        enroll(koder, (error, enrolledKoder) => {
            if (error) return reject(error)
            resolve(enrolledKoder)
        })
    })
}

function attendingKoder(koder) {
    return new Promise((resolve, reject) => {
        goingToClass(koder, (error, koderInClass) => {
            if (error) return reject(error)
            resolve(koderInClass)
        })
    })
}

interviewPromise(koderInProcess)
    .then(interviewedKoder => {
        enrollKoder(interviewedKoder)
            .then(enrolledKoder => {
                attendingKoder(enrolledKoder)
                    .then(attendingKoder => {
                        console.log('Done')
                        console.log('Koder in process ', attendingKoder)
                    })
                    .catch(error => {
                        console.error('Error in attending ', error)
                    })
            })
            .catch(error => {
                console.error('Error in enrollment ', error)
            })
    })
    .catch(error => {
        console.error('Error in Interview ', error)
    })