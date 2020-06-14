class Wallet {
    constructor(money) {
        let _money = money;
        //pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money;
        //sprawdzanie czy użytkownik ma odpowiednią ilość środków
        this.checkCanPlay = (value) => {
            return _money >= value
        }
        this.changeWallet = (value, type = '+') => {
            if (typeof value === 'number' && !isNaN(value)) {
                if (type === '+') { return _money + value }
                else if (type === '-') { return _money - value }
                else {
                    throw new Error('nieprawidłowy typ')
                }
            } else {
                throw new Error('nieprawidłowa wartość')
            }
        }
    }
}

// const wallet = new Wallet(400);