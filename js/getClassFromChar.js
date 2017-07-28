function getClassFromChar(char, bg)
{
  var clss;
  switch (char)
  {
    case "w":
      clss = "water";
      break;
    case "W":
      clss = "deepwater";
      break;
    case "T":
      clss = "tree";
      break;
    case "F":
      clss = "forest";
      break;
    case "D":
      clss = "door";
      break;
    case "i":
      clss = bg + " info";
      break;
    case "/":
    case "\\":
    case "|":
    case "_":
    case "^":
    case "+":
    case "0":
      clss = bg + " building";
      break;
    case "-":
      clss = bg + " dash";
      break;
    case "=":
      clss = bg + " equals";
      break;
    case "#":
      clss = bg + " pound";
      break;
    case "*":
      clss = bg + " star";
      break;
    default:
      clss = bg;
      break;
  }
  return clss;
}
