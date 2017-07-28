// hide the start menu
function closeStartMenu(what)
{
  var game;
  if(what == "resume")
  {
    game = getGame();
    if(game === null)
    {
      selectSaint();
      return;
    }
  } else if(document.getElementById("choosesaint").value == -1)
  {
    return false;
  } else
  {
    game = {
      level: 1,
      map: "map_1",
      pos1: 34,
      pos2: 4,
      inbattle: false,
      saints: [-1, -1, -1, -1, -1],
      saintsMet: []
    };
    game.saintsMet.push(document.getElementById("choosesaint").value);
    game.saints[0] = document.getElementById("choosesaint").value;
    
    storeGame(game);
  }
  printGame(game);
  document.getElementById("startmenu").style.height = "0%";
}

// hides the first two start buttons and shows the next ones
function selectSaint()
{
  document.getElementById("newgame").style.visibility = "hidden";
  document.getElementById("resumegame").style.visibility = "hidden";
  document.getElementById("choosesaint").style.visibility = "visible";
  document.getElementById("startgame").style.visibility = "visible";
}