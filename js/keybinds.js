window.addEventListener('keydown', function(event) {
  // event.key contains the key pressed, e.g. "a", "Enter"
  if (event.key === 'm') {
    // Do something when "a" is pressed
    console.log('M key was pressed!');
    for (let i = 0; i < player.thingamajigs.length; i++) {
        player.thingamajigs[i].power();
  }}
  if (event.key === 'l') {
    player.things = player.things.add("1e100");
  }
});