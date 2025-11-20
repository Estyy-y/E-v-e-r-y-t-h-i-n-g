var app = new Vue({
  el: "#app",
  data: {
    player: player,
    activeMenu: 'thingamajig'
  },
  methods: {
    format(amount) {
      return format(amount)
    },
    gameLoop() {
      gameLoop(this)
    },
    saveGame() {
      localStorage.setItem('gameSave', JSON.stringify(this.player));
      alert('Game saved!');
    },
    loadGame() {
      const save = localStorage.getItem('gameSave');
      if (save) {
        Object.assign(this.player, JSON.parse(save));
        alert('Game loaded!');
      } else {
        alert('No save found.');
      }
    }
  },
  mounted() {
    setInterval(this.gameLoop, 50)
  }
})