
class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersInTheMission = explorers.filter((explorer) => explorer.mission == mission)
        return explorersInTheMission
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const amountOfExploreresInTheMission = this.filterByMission(explorers,mission)
        return amountOfExploreresInTheMission.length
    }

}

module.exports = ExplorerService