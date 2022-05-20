function studentHogwarts() {
    let privateScore = 0;
    let name = null;

    function changeScoreBy(points) {
        privateScore += points;
    };

    return {
        setName: (newName) => {
            name = newName;
        },
        rewardStudent: () => {
            changeScoreBy(1);
        },
        penalizeStudent: () => {
            changeScoreBy(-1);
        },
        getScore: () => {
            return `${name}: ${privateScore}`;
        }
    };
};

// How to test

// let harry = studentHogwarts();
// harry.setName('Harry');
// for (var i=0; i < 4; i++) harry.rewardStudent();
// console.log(harry.getScore());

// let draco = studentHogwarts();
// draco.setName('Draco');
// draco.rewardStudent();
// draco.penalizeStudent();
// draco.penalizeStudent();
// draco.penalizeStudent();
// console.log(draco.getScore());