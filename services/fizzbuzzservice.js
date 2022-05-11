const ExplorerService = require("./explorerservice");

class FizzBuzzService {

    static applyValidationInExplorer(explorers, mission) {

        const dataFilter = ExplorerService.filterByMission(explorers,mission);

        dataFilter.forEach((explorer) => {
            if (explorer.score % 3 === 0) {
                explorer.trick = "Fizz";
            }
            if(explorer.score % 5 === 0) {
                explorer.trick = "Buzz";
            }
            if(explorer.score % 5 === 0 && explorer.score % 3 === 0) {
                explorer.trick = "FizzBuzz";
            }

            if(explorer.score % 5 !== 0 && explorer.score % 3 !== 0) {
                explorer.trick = explorer.score;
            }
        });

        return dataFilter;

    }

}

module.exports = FizzBuzzService;