class Game {
    constructor(startGame) {
        this.stats = new Statistics();
        this.wallet = new Wallet(startGame);

        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = document.querySelectorAll('.color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanWins = document.querySelector('.score span.win');
        this.spanGames = document.querySelector('.score span.number');
        this.spanLosses = document.querySelector('.score span.loss');
        this.render();
    }
    render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result = '', stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        this.boards.forEach(
            (box, index) => { box.style.backgroundColor = colors[index] });
        if (result) {
            result = `wygrałes ${wonMoney} PLN.`;
        } else if (!result && result !== '') {
            result = `przegrałeś  ${bid}`
        }

        this.spanResult.textContent = result;
        this.spanWallet.textContent = money;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        this.inputBid.value = '';

    }
    startGame() {
        if (this.inputBid.value < 1) { return alert('Kwota którą chcesz grać jest zbyt mała!!!') }
        const bid = Math.floor(this.inputBid.value);

        if (!this.wallet.checkCanPlay(bid)) { return alert('masz za mało środków lub została podania niewłaśćiwa wartość') }

        this.wallet.changeWallet(bid, '-');
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkhWin(colors);
        const wonMoney = Result.moneyWonInGame(win, bid);
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStats(win, bid);
        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStats(), bid, wonMoney);
    }
}