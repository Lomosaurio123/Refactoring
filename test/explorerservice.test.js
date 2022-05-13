const Reader = require("../services/reader");
const ExplorerService = require("./../services/explorerservice");

const data = Reader.readJsonFile("./explorers.json");

describe(("Unit test for the ExplorerService class in order to get the correct results"), () => {
    
    test(("Test 1: prove the method filterByMission"), () => {
        
        const node = ExplorerService.filterByMission(data, "node");
        expect(node.length).toBe(10);

    });

    test(("Test 2: prove the method getAmountOfExplorersByMission"), () => {
        
        const nodeTotal = ExplorerService.getAmountOfExplorersByMission(data, "node");
        expect(nodeTotal).toBe(10);

    });

    test(("Test 3: prove the method getExplorersUsernamesByMission"), () => {
        
        const nodeUsers = ExplorerService.getExplorersUsernamesByMission(data, "node");
        expect(nodeUsers).not.toBeUndefined();

    });

    

});