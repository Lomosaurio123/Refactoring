
class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersInTheMission = explorers.filter((explorer) => explorer.mission == mission)
        return explorersInTheMission
    }

}

module.exports = ExplorerService