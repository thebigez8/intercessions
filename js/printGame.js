// reads in the local storage game and prints to the screen
function printGame(gameState)
{
  var map = getMap(gameState.map); // load the map that the player is on
  var mapbg = map.bg;
  map = map.map;
  
  for(var i = 0; i < map.length; i++)
  {
    map[i] = map[i].split("");
  }

  map[gameState.pos1][gameState.pos2] = "P"; // place the player on the map

  // screen is 15 x 19
  var pos1 = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];
  var pos2 = [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  // center around the player
  for(i = 0; i < pos1.length; i++)
  {
    pos1[i] += gameState.pos1;
  }
  for(i = 0; i < pos2.length; i++)
  {
    pos2[i] += gameState.pos2;
  }
 
  // if the requested screen is too far to the top or bottom,
  // push the boundaries back to "normal" zones
  var adj1 = 0;
  if(pos1[0] < 0)
  {
    adj1 = -pos1[0];
  } else if(pos1[pos1.length - 1] > map.length - 1)
  {
    adj1 = (map.length - 1) - pos1[pos1.length - 1];
  }
  for(i = 0; i < pos1.length; i++)
  {
    pos1[i] += adj1;
  }
  
  // now for the left and right
  var adj2 = 0;
  if(pos2[0] < 0)
  {
    adj2 = -pos2[0];
  } else if(pos2[pos2.length - 1] > map[0].length - 1)
  {
    adj2 = (map[0].length - 1) - pos2[pos2.length - 1];
  }
  for(i = 0; i < pos2.length; i++)
  {
    pos2[i] += adj2;
  }

  for(i = 0; i < pos1.length; i++)
  {
    for(var j = 0; j < pos2.length; j++)
    {
      var space = document.getElementById("row" + i + "-col" + j);
      var tmp = map[pos1[i]][pos2[j]];
      if(tmp == " ")
      {
        space.innerHTML = "&nbsp;";
      } else
      {
        space.innerHTML = tmp;
      }
      space.className = "gameboardspace " + getClassFromChar(tmp, mapbg);
    }
  }

}

