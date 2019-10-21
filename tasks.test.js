const {
    viewAllPlayers,
    viewPlayerById,
    PLAYERS_URL
} = require('./tasks.js');

describe('Task 1 - viewAllPlayers', () => {
    it('should return a sorted array of players', async (done) => {
        const ctx = {}
        await viewAllPlayers(ctx);

        const output = ctx.body;

        // thanks to https://stackoverflow.com/questions/53833139/check-array-in-js-is-list-sorted/53833620#53833620
        const isSorted = output.every((value, index, array) => {
            const sorted = index === 0 || array[index-1] <= value;

            return sorted;
        });

        expect(Array.isArray(output)).toBe(true);
        expect(isSorted);

        done();
    });
});

describe('Task 2 - viewPlayerById', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it('should return a single player if id is matching', async (done) => {
        const ctx = {
            params: {
                id: 17 // id matching
            }
        };
        await viewPlayerById(ctx);

        const output = ctx.body;

        expect(Array.isArray(output)).toBe(false);
        expect(typeof output).toBe('object')

        done();
    });

    it('should return 404 http code status if id is not matching', async (done) => {
        const ctx = {
            params: {
                id: 14 // id not matching
            },
            throw: jest.fn((x) => x) // mock ctx.throw
        };

        await viewPlayerById(ctx);

        const output = ctx.body;

        expect(ctx.body).toBeUndefined;
        expect(ctx.throw).toBeCalledWith(404, 'No player matching');        

        done();
    });
});

describe('Task 3 - fetch content', () => {
    it('should fetch players list when calling "/players" endpoint', async (done) => {
        const fetchNotSpied = require('node-fetch');        
        global.fetch = jest.fn((x) => fetchNotSpied(x));

        const ctx = {};

        await viewAllPlayers(ctx);

        expect(global.fetch).toBeCalledWith(PLAYERS_URL);

        done();
    });

    it('should fetch players list when calling "/players/:id" endpoint', async (done) => {
        const ctx = {
            params: {
                id: 17 // id matching
            }
        };
        await viewPlayerById(ctx);

        expect(global.fetch).toBeCalledWith(PLAYERS_URL);

        done();
    });
});