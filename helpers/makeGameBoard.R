## this is a helper script to write out the giant div statement
## R is my 'native' language
makeGameBoard <- function()
{
  for(i in 0:14)
  {
    cat('      <div id="row', i, '" class="gameboardrow">\n', sep = '')
    for(j in 0:18)
    {
      cat('        <div id="row', i, '-col', j, '" class="gameboardspace bggrey"></div>\n', sep = '')
    }
    cat('      </div>\n')
  }
}
