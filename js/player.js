
var player = {
  things: new Decimal("10"),
  thingsPerSecond: new Decimal("0"),
  thingamajigs: [],
  lastUpdate: Date.now()
}

for (let i = 0; i < 24; ++i) {
  const tmg = new Thingamajig(i);
  player.thingamajigs.push(tmg);
}
