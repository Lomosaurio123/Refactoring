const ExplorerService = require("./services/explorerservice");
const FizzBuzzService = require("./services/fizzbuzzservice");
const Reader = require("./services/reader");

// Part 1 Read json file ===========================

const explorers = Reader.readJsonFile('explorers.json')

// Part 2: Get the quantity of explorers names in node
const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers,'node')
console.log('Explorers in node: ' + explorersInNode)

// Part 4: Get the explorer's usernames in Node
const explorersUsernameInNode = ExplorerService.getExplorersUsernamesByMission(explorers,'node')
console.log('Username of explorers in node: ' + explorersUsernameInNode)

//Part 5: Assign FizzBuzz propierty in the list of explorers depending of the mission

const validatedExplorersInNode = FizzBuzzService.applyValidationInExplorer(explorers,'node')
const getUsersValidatedInNode = validatedExplorersInNode.map((explorer) => explorer.trick)
console.log('After validating users in node we have: ' +  getUsersValidatedInNode)