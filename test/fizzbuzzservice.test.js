const FizzBuzzService = require("../services/fizzbuzzservice");
const Reader = require("../services/reader");


const data = Reader.readJsonFile("./explorers.json");

describe(("This are the unit test for the FizzBuzzService class"), () => {
    
    test(("Test 1: Validate that the function applyValidationInExplorer works"), () => {

        const validatedExplorers = FizzBuzzService.applyValidationInExplorer(data,"node");

        const getTrick = validatedExplorers.map((explorer) => explorer.trick);

        expect(getTrick).toContain("FizzBuzz");

    });

});