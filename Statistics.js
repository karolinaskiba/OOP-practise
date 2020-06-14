class Statistics {
    constructor() {
        this.gameResults = [];
    }
    addGameToStats(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResults.push(gameResult)
    }
    showGameStats() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(res => res.win).length
        let losses = this.gameResults.filter(res => !res.win).length
        return [games, wins, losses]

    }
}

const statistics = new Statistics()