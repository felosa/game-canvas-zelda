window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    var game = new Game("container", 900, 700);
    // game.startGame();
  };

  document.getElementById("single-button").onclick = function() {
    var game = new Game1("container", 900, 700);
    //game.startGame();
  };

};

