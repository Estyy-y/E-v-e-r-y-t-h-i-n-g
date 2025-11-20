function gameLoop(that) {
  let diff = (Date.now() - that.player.lastUpdate)/1000

  
  console.log("Things: " + that.player.things.toString())

  that.player.thingsPerSecond = that.player.thingamajigs[0]._totalMultiplier

  that.player.thingamajigs[0].multiplier()
  that.player.things = that.player.things.add(that.player.thingamajigs[0]._totalMultiplier.mul(diff))

  for (let i = 1; i < that.player.thingamajigs.length; ++i) {
    const tmg = that.player.thingamajigs[i];
    tmg.multiplier()

    const tmgPrev = that.player.thingamajigs[i-1];
    const multiplier = tmgPrev.getMultiplierByName("Efficiency")
    multiplier._amount = multiplier._amount.add(tmg._totalMultiplier.mul(0.1).mul(diff))
  }


  that.player.lastUpdate = Date.now()
}