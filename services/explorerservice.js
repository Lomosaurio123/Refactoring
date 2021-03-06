
class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersInTheMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInTheMission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const amountOfExploreresInTheMission = this.filterByMission(explorers,mission);
        return amountOfExploreresInTheMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInTheMission = this.filterByMission(explorers,mission);
        const usersInTheMission = explorersInTheMission.map((explorer) => explorer.githubUsername);
        return usersInTheMission;
    }

    static filterExplorersByStack(explorers, stack) {
        const explorerInStack = explorers.filter((explorer) => explorer.stacks.includes(stack));
        return explorerInStack;
    }

}

module.exports = ExplorerService;