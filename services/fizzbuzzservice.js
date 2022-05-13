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

    static applyValidationInNumber(number) {
        let value = "";

        if(number % 3 === 0) {
            value = "Fizz";
        }
        if(number % 5 === 0) {
            value = "Buzz";
        }
        if(number % 5 === 0 && number % 3 === 0) {
            value = "FizzBuzz";
        }
        if(number % 5 !== 0 && number % 3 !== 0) {
            value = number;
        }

        return value;
    }

}

module.exports = FizzBuzzService;