const ExplorerService = require("../../services/explorerservice");
const FizzBuzzService = require("../../services/fizzbuzzservice");
const Reader = require("../../services/reader");

class ExplorerController {

    static getExplorersByMission(mission) {

        const data = Reader.readJsonFile('./explorers.json');
        const explorersByMission = ExplorerService.filterByMission(data,mission);

        return explorersByMission;
    }

    static getExplorersUsernamesByMission(mission) {

        const data = Reader.readJsonFile('./explorers.json');
        const exploresUsername = ExplorerService.getExplorersUsernamesByMission(data,mission);
        
        return exploresUsername;

    }

    static getExplorersAmountByMission(mission) {

        const data = Reader.readJsonFile('./explorers.json');
        const amount = ExplorerService.getAmountOfExplorersByMission(data,mission);
        
        return amount;
    }

    static applyValidationInNumber(number) {
        const data = Reader.readJsonFile('./explorers.json');
    }

}

module.exports = ExplorerController