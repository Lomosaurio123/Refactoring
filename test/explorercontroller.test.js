const ExplorerController = require("../lib/controllers/ExplorerController");


describe(("This are all the test from ExplorerController class: "), () => {
    
    test(("Test 1: Proving method getExplorersByMission"), () => {
        const list = ExplorerController.getExplorersByMission('node')
        expect(list).not.toBeUndefined();
    });

    test(("Test 2: Proving method getExplorersUsernameByMission"), () => {
        const list = ExplorerController.getExplorersUsernamesByMission('node')
        expect(list).not.toBeUndefined();
    });

    test(("Test 3: Proving method getExplorersAmountByMission"), () => {
        const list = ExplorerController.getExplorersAmountByMission('node');
        expect(list).toBeGreaterThanOrEqual(0);
    });

    test(("Test 4: Validate that the method applyValidationNumber works"), () => {

        const trick1 = ExplorerController.applyValidationInNumber(10);
        expect(trick1).toBe("Buzz");

        const trick2 = ExplorerController.applyValidationInNumber(8);
        expect(trick2).toBe(8);

        const trick3 = ExplorerController.applyValidationInNumber(3);
        expect(trick3).toBe("Fizz");

        const trick4 = ExplorerController.applyValidationInNumber(15);
        expect(trick4).toBe("FizzBuzz");

    });

    test(("Test 5: prove the method filterExplorerByStack"), () => {

        const javascript = ExplorerController.filterExplorersByStack('javascript');
        expect(javascript.length).toBeGreaterThan(0); 

    });

});