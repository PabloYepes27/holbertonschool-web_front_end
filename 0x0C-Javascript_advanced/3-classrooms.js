function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return () => {return seat};
    };
    let students = []
    for (let idx = 0; idx < numberOfStudents; idx++) {
        students.push(studentSeat(idx + 1));
    };
    return students;
};

let classRoom = createClassRoom(10);

// How to test

// console.log(classRoom[0]());
// console.log(classRoom[3]());
// console.log(classRoom[9]());