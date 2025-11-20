class Thingamajig {
  constructor (tier) {
    const NAMES = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega"];
    //const SYMBOLS = /*uppercase*/ ["Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω"];
    const SYMBOLS = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω"];
    this._COSTS = [10, 200, 300, 1200, 6000, 30000, 1.5e5, 7.5e5, 4e6, 2e7, 1e8, 5e8, 3e9, 1.5e10, 8e10, 4e11, 2e12, 1e13, 5e13, 3e14, 1.5e15, 8e15, 4e16, 2e17 ];
    this._tier = tier
    this._name = NAMES[tier];
    this._symbol = SYMBOLS[tier];
    this._cost = new Decimal(this._COSTS[tier]);
    this._power = new Decimal(0);
    this._multiplierList = [];
    this._totalMultiplier = new Decimal(1);

    this._multiplierList.push(new Multiplier("Power", new Decimal(0.00), this))
    this._multiplierList.push(new Multiplier("Efficiency", new Decimal(1.00), this))
  }

  get canPower() {
    return this._cost.lte(player.things) && this._power.lt(100);
  }

  power() {
    if (!this.canPower) {
      return false
    }
    player.things = player.things.sub(this._cost)
    this._power = this._power.add(1)

    const multiplier = this.getMultiplierByName("Power")
    multiplier._amount = new Decimal(1.05).pow(this._power.sub(1)).add(this._power.sub(1).mul(0.5))
    this.updateCost()
    
    return true
  }

  multiplier() {
    let total = new Decimal(1);
    for (let i = 0; i < this._multiplierList.length; ++i) {
      total = total.mul(this._multiplierList[i]._amount);
    }
    this._totalMultiplier = total;
  }

  updateCost() {
    this._cost = new Decimal(this._COSTS[this._tier]).mul(new Decimal(1.2).pow(this._power));
    console.log("Updated cost to " + this._cost);
  }

  getMultiplierByName(name) {
    for (let i = 0; i < this._multiplierList.length; ++i) {
      if (this._multiplierList[i]._name === name) {
        return this._multiplierList[i];
      }
    }
    return null;
  }
}
