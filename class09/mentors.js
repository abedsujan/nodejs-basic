class Mentors {

    constructor() {
        this._mentorsList = [{
                "name": "Abed",
                "courses": ["HTML-CSS", "JS"]
            },
            {
                "name": "Benjamin",
                "courses": ["HTML/CSS", "JS"]
            },
            {
                "name": "Marco",
                "courses": ["NodeJS"]
            },
            {
                "name": "Radoslaw",
                "courses": ["NodeJS", "JS"]
            },
            {
                "name": "Marta",
                "courses": ["Git"]
            },
            {
                "name": "Deniel",
                "courses": ["Database", "Git"]
            }
        ];
    }
    getList() {
        return this._mentorsList;
    }

    getMentorsByCourseTitle(courseTitle) {
        const mentorsName = [];

        this._mentorsList.forEach(mentor => {
            if (mentor.courses.indexOf(courseTitle) > -1)
                mentorsName.push(mentor.name)
        });
        return mentorsName;
    }




    getMentorList() {
        return this._mentorsList;
    }


    getMentorByName() {
        return "mentor";
    }

    // getList() {
    //     return this._mentorsList;
    // }

    // getMentorsListByCourseTitle(title) {

    //     let foundMentors = [];

    //     this._mentorsList.forEach(mentor => {
    //         const courses = mentor.courses;

    //         if (courses.indexOf(title) > -1) {

    //             foundMentors.push(mentor.name);
    //         }
    //     });

    //     return foundMentors;
    // }

}

module.exports = Mentors;