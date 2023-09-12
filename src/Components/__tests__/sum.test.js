const { sum } = require("../sum");


test("This expects the sum to be 10", () =>{
 const result  = sum(2,9);
 expect(result).toBe(11)
})