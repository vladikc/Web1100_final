//8. What is node.js?


// answer
//Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications
//https://www.infoworld.com/article/3210589/node-js/what-is-nodejs-javascript-runtime-explained.html



//9.  What is an example of the usage of an http session? In other words, what are http sessions for?

//answer
// First you as client send a request from your device to connect ( for example http://google.com)
// Google server receives your request and connects you. After server sends packets to your device which receiving information.
//Your client read it and draw on the screen.

//1
class Task {
    constructor(owner_of_the_task, task_description) {
        this.owner_of_the_task = owner_of_the_task
        this.task_description = task_description
        this.completed = true
    }


    getDate() {
        var dt = new Date();
        // Display the month, day, and year. getMonth() returns a 0-based number.  
        var month = dt.getMonth() + 1;
        var day = dt.getDate();
        var year = dt.getFullYear();
        console.log("today is ", month + '-' + day + '-' + year);
        // Output: current month, day, year  
    }
//2
    toggle_function() {
        if (this.completed === true) {
            this.completed = false
        }
        else {
            this.completed = true
        }
        console.log("This is value has been toggled ", this.completed)
    }
}



//3
class Student {
    constructor(first_name,last_name,id){
        this.first_name = first_name
        this.last_name = last_name
        this.id = id
    }

}


//4
class Assignment {
    constructor(id,url,assignment_submission){
        this.id = id
        this.url = url
        this.assignment_submission = assignment_submission
    }

}


//5
class Gradebook {
    constructor(id,url,assignment_submission){
        this.id = id
        this.url = url
        this.assignment = []
        this.assignment.push(assignment_submission)
    }

}

//6 
const addAssignment = new Gradebook(23,"http://www.anyurl.com/","some-subbmision")
console.log(addAssignment)




//first ckech class Task
// const task = new Task("Vlad", "studying")
// console.log(task)
// task.getDate()
// task.toggle_function()








