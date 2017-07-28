
if(grepl("m144326", getwd(), fixed = TRUE))
{
  setwd("~/consult/personal/github/intercessions/")
} else
{
  setwd("~/Programming/github/intercessions/")
}


read.map <- function(filename, ...)
{
  on.exit(cat(filename, "\n"))
  rawlines <- readLines(paste0("raw/", filename))
  sp.chr.line <- grep("special.char", rawlines, fixed = TRUE)
  if(length(sp.chr.line) != 1)
  {
    stop("Couldn't parse the file--'special.char' is missing or duplicated.")
  }
  info <- read.table(paste0("raw/", filename),
                     header = TRUE, nrows = sp.chr.line - 5, sep = ",", stringsAsFactors = FALSE, quote = '"')
  if(ncol(info) != 4 || !all(colnames(info) == c("row", "col", "char", "text")))
  {
    stop("Couldn't parse the file--missing colnames row, col, char, text.")
  }
  if(!is.numeric(info$row) || !is.numeric(info$col))
  {
    stop("Couldn't parse the file--row and col aren't numeric.")
  }
  
  info2 <- read.table(paste0("raw/", filename),
                      header = FALSE, nrows = 4, skip = sp.chr.line - 4, sep = ",", stringsAsFactors = FALSE)
  if(nrow(info2) != 4 || !all(info2[[1]] == c("start.pos", "open.char", "bg", "special.char")))
  {
    stop("Couldn't parse the file--can't find 'start.pos' or 'open.char'.")
  }
  
  start.pos <- as.numeric(strsplit(info2[1, 2], " ", fixed = TRUE)[[1]])
  open.char <- strsplit(info2[2, 2], "", fixed = TRUE)[[1]]
  bg <- info2[3, 2]
  special.char <- strsplit(info2[4, 2], "", fixed = TRUE)[[1]]
  
  
  
  map <- rawlines[-(1:sp.chr.line)]
  
  
  check <- function(x, map. = map)
  {
    row <- as.numeric(x["row"])
    col <- as.numeric(x["col"])
    
    ncol.map <- nchar(map.)
    if(length(unique(ncol.map)) > 1){stop("Unequal character lengths in map.")}
    
    if(row > length(map.) || col > ncol.map)
    {
      print(x)
      stop("Couldn't parse the file--locations not on map")
    }
    if(!(substr(map.[row], col, col) %in% x["char"]))
    {
      stop("Couldn't parse the file--inconsistent header info")
    }
  }
  trash <- apply(info, 1, check)
  if(sum(sapply(c("i", "D", special.char), function(x) sum(stringr::str_count(map, stringr::fixed(x))))) != nrow(info))
  {
    stop("Couldn't parse the file--missing some header info")
  }
  if(substr(map[start.pos[1]+1], start.pos[2]+1, start.pos[2]+1) != open.char)
  {
    stop("Couldn't parse the file--the start position isn't open!")
  }
  
  map <- gsub("\\", "\\\\", map, fixed = TRUE)
  
  cat(
    '    case "', gsub(".txt", "", filename, fixed = TRUE), '":\n',
    '      out = {\n',
    '        map: [\n',
    paste0('          "', map, c(rep('",', times = length(map) - 1), '"\n'), collapse = '\n'),
    '        ],\n',
    '        bg: "', bg, '",\n',
    '        openspace: "', open.char, '"\n',
    '      };\n',
    '      break;\n',
    '\n',
    file = "js/getMap.js", append = TRUE, sep = ""
  )
  
  
  return(map)
}

make.map.data <- function()
{
  
  cat(
    "// Each map needs the following components:\n",
    "//  - map.map = a character vector of the actual map\n",
    "//  - map.bg = a color specification\n",
    "\n",
    "function getMap(whichmap) {\n",
    "\n",
    "  var out;\n",
    "  switch(whichmap)\n",
    "  {\n",
    file = "js/getMap.js", append = FALSE, sep = ""
  )
  
  # each map needs the matrix, the openspace character, special.char, target, start.pos

  files <- list.files("raw/")
  files <- files[grepl("map_", files, fixed = TRUE)]
  files <- sort(files)
  
  maps <- lapply(files, read.map)
  names(maps) <- gsub(".txt", "", files, fixed = TRUE)
  
  cat(
    "  }\n",
    "  return out;\n",
    "}\n",
    file = "js/getMap.js", append = TRUE, sep = ""
  )
  
  invisible(maps)
}
