// use of global to be able to test easily
global.fetch = require('node-fetch');

const jsonInput = require('./assets/json/headtohead.json');
const PLAYERS_URL = 'https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json';

async function viewAllPlayers(ctx) {
    const data = await fetchPlayers();

    // sort players by id
    const sortedPlayers = data.players.sort((a, b) => a.id - b.id);

    ctx.body = sortedPlayers;
}

async function viewPlayerById(ctx) {
    const { id } = ctx.params;

    const data = await fetchPlayers();

    // find player by id
    const player = data.players.find((player) => player.id === parseInt(id));

    // throw 404 http status code if player not found
    if (!player) ctx.throw(404, 'No player matching');

    ctx.body = player;
}

async function fetchPlayers() {
    let players = [];

    try {
        const response = await fetch(PLAYERS_URL);
        players = await response.json();
    } catch (error) {
        console.error({error});
        players = jsonInput;
    }

    return players;
}

module.exports = {
    viewAllPlayers,
    viewPlayerById,
    PLAYERS_URL
};


