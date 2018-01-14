const twoSum = require("../index");

let tests = [
    {
        param1: [1, 2, 3],
        param2: 4,
        output: [0, 2]
    },
    {
        param1: [3, 5, 6, 2],
        param2: 11,
        output: [1, 2]
    },
];

describe("two sum warmup", () => {
    it("should return an array of the indices where the sum equals the target", () =>{
        assert.deepEqual(twoSum(tests[0].param1, tests[0].param2), tests[0].output)
        assert.deepEqual(twoSum(tests[1].param1, tests[1].param2), tests[1].output)
    });
})


