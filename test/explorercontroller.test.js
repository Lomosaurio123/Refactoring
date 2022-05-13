const ExplorerController = require("../lib/controllers/ExplorerController");


describe(("This are all the test from ExplorerController class: "), () => {
    
    test(("Test 1: Proving method getExplorersByMission"), () => {
        const list = ExplorerController.getExplorersByMission('node')
        expect(list).not.toBeUndefined();
    })

    test(("Test 2: Proving method getExplorersUsernameByMission"), () => {
        const list = ExplorerController.getExplorersUsernamesByMission('node')
        expect(list).not.toBeUndefined();
    })

    test(("Test 3: Proving method getExplorersAmountByMission"), () => {
        const list = ExplorerController.getExplorersAmountByMission('node');
        expect(list).toBeGreaterThanOrEqual(0);
    })

})