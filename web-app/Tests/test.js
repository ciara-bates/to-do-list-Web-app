import fc from "fast-check";
import toDo from "../static/toDo.js";

describe("toDo", function () {

    it("The correct concatinated string is displayed", function () {

        const examples = [
            [["task1",1,15] , "task1 - 1hr 15 mins"],
            [["task2",0,30] , "task2 - 30 mins"],
            [["task3",2,0] , "task3 - 2hr"],
            [["task4",3,45] , "task4 - 3hr 45 mins"]
        ];

        examples.forEach(function ([array, correct_answer]) {

            const answer = toDo.task_and_time(array);

            if (answer !== correct_answer) {
                throw (
                    `Expected "${array}" to be concatinated to "${correct_answer}" ` +
                    `insted we got "${answer}"`
                );
            }
        });

    });
});