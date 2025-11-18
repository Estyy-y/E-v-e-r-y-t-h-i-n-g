
var player = {
  things: new Decimal(10),
  thingamajigs: [],
  lastUpdate: Date.now()
}

for (let i = 0; i < 24; ++i) {
  const tmg = new Thingamajig(i);
  player.thingamajigs.push(tmg);
}
