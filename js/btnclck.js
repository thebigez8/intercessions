// this function is to "unclick" buttons when another button is clicked
function btnclck(item, prefix)
{
  var btns = document.getElementsByClassName(prefix + "button");
  for (i = 0; i < btns.length; i++)
  {
      btns[i].className = btns[i].className.replace(" clicked", "");
  }
  item.className += " clicked";
}

