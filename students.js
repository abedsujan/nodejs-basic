class StudentBook {
    constructor() {
        this._studentList = [
        ];
    }
    
    /**
     * Getlist should provide all students from database
     * 
     */
    getList() {
        return this._studentList;
    }

    getListByClassID(classId) {
        return this._studentList.filter((student => {
            return student.classId.toString() == classId.toString();
        }));

    }
    getStudentDetailByName(name) {
        return this._studentList.filter((student => {
            return student.name.toLowerCase() == name.toLowerCase()
        }));
    }

    isValidStudent(new_student) {
        if (
            new_student.hasOwnProperty("name") &&
            new_student.hasOwnProperty("email") &&
            new_student.hasOwnProperty("classId") &&
            new_student.hasOwnProperty("phone")
        ) {
            const result = this.getStudentDetailByName(new_student.name);

            if (result.length == 0) {

            } else {
                throw new Error("Student already exits");
            }
        } else {
            throw new Error("Student must have name email classid and phone ");
        }
    }

    /**
     * Method for add a student to the list
     * @param { name: String, phone: number} studentInfo
     */

    addNewStudent(studentInfo, callback) {
        let succcessCallack;
        let errorCallback;
        try {
            this.isValidStudent(studentInfo);
            this._studentList.push(studentInfo);
            callback('Successful', errorCallback);
        } catch (error) {
            callback(succcessCallack, error.message);
        }
    }

    editStudentInfo(editStudentInfo = {}) {

    }
}



module.exports = StudentBook;