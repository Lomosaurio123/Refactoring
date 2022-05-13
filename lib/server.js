const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const req = require("express/lib/request");
const app = express()
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz API welcome!"})
});

app.get("/v1/explorers/:mission", (request, response) => {
   const mission = request.params.mission;
   const explorersInMission = ExplorerController.getExplorersByMission(mission);
   response.json(explorersInMission); 
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmountByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/username/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersUsernameInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, explorers: explorersUsernameInMission});
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const trick = ExplorerController.applyValidationInNumber(score);
    response.json({score: request.params.score, trick: trick});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});