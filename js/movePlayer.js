// move player
function movePlayer(direction)
{
  var gameState = getGame();
  var map = getMap(gameState.map);
  var openspace = map.openspace;
  map = map.map;
  
  
  for(var i = 0; i < map.length; i++)
  {
    map[i] = map[i].split("");
  }

  if(direction == "up" && map[gameState.pos1 - 1][gameState.pos2] == openspace)
  {
    gameState.pos1 -= 1;
    storeGame(gameState);
  } else if(direction == "down" && map[gameState.pos1 + 1][gameState.pos2] == openspace)
  {
    gameState.pos1 += 1;
    storeGame(gameState);
  } else if(direction == "left" && map[gameState.pos1][gameState.pos2 - 1] == openspace)
  {
    gameState.pos2 -= 1;
    storeGame(gameState);
  } else if(direction == "right" && map[gameState.pos1][gameState.pos2 + 1] == openspace)
  {
    gameState.pos2 += 1;
    storeGame(gameState);
  } else
  {
    alert("bummer");
  }
  printGame(gameState);

}
