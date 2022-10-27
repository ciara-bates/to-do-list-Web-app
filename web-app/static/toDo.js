const toDo = Object.create(null);


toDo.task_and_time = function (inputArray){

    var output = inputArray[0] + " - " + inputArray[1] + " hr " + inputArray[2] + " mins";

    switch(true) {
        case (inputArray[1] === 0):
            output = inputArray[0] + " - " + inputArray[2] +" mins";
            break;
        case (inputArray[1]) > 0:
            break;
    }

    switch(true) {
        case (inputArray[2] === 0):
            output = inputArray[0] + " - " + inputArray[1] + " hr";
            break;
        case (inputArray[2]) > 1:
            break;
    }

    return output;
};

export default Object.freeze(toDo);