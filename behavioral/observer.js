/*
*
* It s a publish/subscribe pattern which allows a number of observer objects to see an event.
* See - Observables / Rxjs
*
* */

const JobPost = title => ({
    title: title
})

class JobSeeker {
    constructor(name) {
        this._name = name
    }

    notify(jobPost) {
        console.log(this._name, 'has been notified of a new posting :', jobPost.title)
    }
}

class JobBoard {
    constructor() {
        this._subscribers = []
    }

    subscribe(jobSeeker) {
        this._subscribers.push(jobSeeker)
    }

    addJob(jobPosting) {
        this._subscribers.forEach(subscriber => {
            subscriber.notify(jobPosting)
        })
    }
}

// Create subscribers
const jonDoe = new JobSeeker('John Doe')
const janeDoe = new JobSeeker('Jane Doe')
const kaneDoe = new JobSeeker('Kane Doe')

// Create publisher and attach subscribers
const jobBoard = new JobBoard()
jobBoard.subscribe(jonDoe)
jobBoard.subscribe(janeDoe)

// Add a new job and see if subscribers get notified
jobBoard.addJob(JobPost('Software Engineer'))

// Output
// John Doe has been notified of a new posting : Software Engineer
// Jane Doe has been notified of a new posting : Software Engineer