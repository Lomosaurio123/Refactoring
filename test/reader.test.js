const Reader = require('./../services/reader')

describe(('Test of Reader to know if we get the data from the json file'), () => {
    test(('Test 1: Getting the data with the Reader class'),()=> {
        
        const data = Reader.readJsonFile('./explorers.json')
        expect(data).not.toBeNull();

    })
})