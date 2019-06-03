const Mentors = require('./mentors');
const mentors = new Mentors();

class Courses {
    constructor() {

        this._coursesList = [{
                "title": "NodeJS",
                "duration": "5",
                "github": "https://github.com/HackYourFuture-CPH/Node.js"
            },
            {
                "title": "JS",
                "duration": "9",
                "github": "https://github.com/HackYourFuture-CPH/JavaScript"
            },
            {
                "title": "HTML-CSS",
                "duration": "3",
                "github": "https://github.com/HackYourFuture-CPH/HTML-CSS"
            },
            {
                "title": "Database",
                "duration": "3",
                "github": "https://github.com/HackYourFuture-CPH/HTML-CSS"
            },
            {
                "title": "Git",
                "duration": "3",
                "github": "https://github.com/HackYourFuture-CPH/HTML-CSS"
            }
        ];
    }


    getList() {
        this._coursesList.forEach(course => {
            course['mentors'] = mentors.getMentorsByCourseTitle(course.title);
        });
        return this._coursesList;
    }

    getCourseByTitle(title) {
        return {
            "title": title,
            "duration": "3",
            "github": "https://github.com/HackYourFuture-CPH/HTML-CSS"
        };
    }

    addCourse(course) {

        if(course.title.length > 1 ){
            this._coursesList.push(course);
            return true;
        }
        else{
            return false
        }
    }
    
    // getList() {
    //     this._coursesList.forEach(course => {
    //         course['mentors'] = mentors.getMentorsListByCourseTitle(course.title)
    //     });

    //     return this._coursesList;
    // }

    // getCourseByTitle(title) {

    //     return this._coursesList.filter((course => {
    //         return course.title.toLowerCase() == title.toLowerCase()
    //     }));
    // }

    // isValidStudent(new_course) {

    //     const course = this.getCourseByTitle(new_course.title);

    //     if (course.length == 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // addNewCourse(newCourse) {
    //     if (this.isValidCourse(newCourse)) {
    //         this._coursesList.push(newCourse);
    //     }

    // }
}

module.exports = Courses;