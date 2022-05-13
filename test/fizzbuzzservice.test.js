const FizzBuzzService = require("../services/fizzbuzzservice");
const Reader = require("../services/reader");


const data = Reader.readJsonFile("./explorers.json");

describe(("This are the unit test for the FizzBuzzService class"), () => {
    
    test(("Test 1: Validate that the method applyValidationInExplorer works"), () => {

        const validatedExplorers = FizzBuzzService.applyValidationInExplorer(data,"node");

        const getTrick = validatedExplorers.map((explorer) => explorer.trick);

        expect(getTrick).toContain("FizzBuzz");

    });

    test(("Test 2: Validate that the method applyValidationNumber"), () => {

        const trick1 = FizzBuzzService.applyValidationInNumber(10);
        expect(trick1).toBe("Buzz");

        const trick2 = FizzBuzzService.applyValidationInNumber(8);
        expect(trick2).toBe(8);

        const trick3 = FizzBuzzService.applyValidationInNumber(3);
        expect(trick3).toBe("Fizz");

        const trick4 = FizzBuzzService.applyValidationInNumber(15);
        expect(trick4).toBe("FizzBuzz");

    });

});