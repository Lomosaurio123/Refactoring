const Reader = require('../services/reader')
const ExplorerService = require('./../services/explorerservice')

const data = Reader.readJsonFile('./explorers.json')

describe(('Unit test for the ExplorerService class in order to get the correct results'), () => {
    
    test(('Test 1: prove the method filterByMission'), () => {
        
        const node = ExplorerService.filterByMission(data, 'node')
        expect(node.length).toBe(10)

    })

})