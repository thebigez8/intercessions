// Each map needs the following components:
//  - map.map = a character vector of the actual map
//  - map.bg = a color specification

function getMap(whichmap) {

  var out;
  switch(whichmap)
  {
    case "map_1_church1":
      out = {
        map: [
          "*-----------------*",
          "|        +        |",
          "|        A        |",
          "| ______   ______ |",
          "| _______ _______ |",
          "| _______ _______ |",
          "| _______ ______  |",
          "|                R|",
          "*--------D--------*"
        ],
        bg: "bggrey",
        openspace: " "
      };
      break;

    case "map_1_church2":
      out = {
        map: [
          "*-----------------*",
          "|        +        |",
          "|        A      W |",
          "| ______   ____   |",
          "| _______ _______ |",
          "| _______ _______ |",
          "|  ______ _______ |",
          "|R                |",
          "*--------D--------*"
        ],
        bg: "bggrey",
        openspace: " "
      };
      break;

    case "map_1":
      out = {
        map: [
          "*------------------------------------------------------------------------------------------------------------------------------------------------------------------*",
          "|wwwww                               TTTTTTTTTTTTTTTTFFFFFFFFwwwTTTTTTTTTTTTTT                                                                                     |",
          "|wwww                                 TTTTTTTTTTTTTTTTTTTFFFwwwTTTTTTTTTT                                                                                          @",
          "|ww                                                  TTTTTFFwwwTTTTTT                                                                                              |",
          "|                         #          TTTTTTT    +      TTTTFwwwTTT                                                                                                 |",
          "|        +                #         TTTTTTT    /^\\      TTTFFwwwTTT                                                                                                |",
          "|  /^\\  /^\\  /^\\          #        TTTTFTTTT  i|D|    TTTTFFFwwwTTT                                                                                                |",
          "|  |_|  |D|  |_|          #        TTTTFFTTTT       TTTTTFFFwwwTTTT                                                                                                |",
          "|                         #         TTTFFFTTTTTTTTTTTTTTFFFFwwwTTT                                                                                                 |",
          "|  /^\\  /^\\  /^\\          #         TTTFFFFFFTTTTTTTTFFFFFFTTwww                                                                                                   |",
          "|  |_|  |_|  |_|..........#         TTTTFFFFFFFFFFFFFFFFFTTTTTwww                                                                                                  |",
          "|                         #          TTTTFFFFFFFFFFFFFFTTTT   www                                                                                                  |",
          "|  /^\\  /^\\  /^\\          #           TTTTFFFFFFFFFTTTTTTT   www                                                                                                   |",
          "|..|_|..|_|..|_|....i     #           TTTTFFFFFFFTTTTT      wwWww                                                                                                  |",
          "|                         #          TTTTFFFFFFFTTTT        wwWww                                                                                                  |",
          "|                         #         TTTTTTFFFFFTTTTTT      wwWww                                                                                                   |",
          "|                         #         TTTTTTTFFFTTTTTTTT     wwWww                                                                                                   |",
          "|                TTTTTTTTT           TTTTTTTTTTTTTTTT     wwWww                                                                                                    |",
          "|               TTTTTTTTTTT            TTTTTTTTTTTT       wwWww                                                                                                    |",
          "|              TTTTTTTTTTTT              TTTTTTTT        wwWww                                                                                                     |",
          "|                TTTTTTTTTTT                             wwWWww                                             +                                                      |",
          "|w              TTTTTFTTTTT                              wwWWww                                             |                                                      |",
          "|www           TTTTTTFFTTTTT                              wwWww                                   ........_/^\\_........                                            |",
          "|wwww          TTTTTFFFTTTTT                              wWww                                    ...../\\/  0  \\/\\.....                                            |",
          "|wwww          TTTTFFFTTTTT                              wwWww                                    .....||0000000||.....                                            |",
          "|wwww          TTTTFFFTTTT                              wwWww                                     .....||__|D|__||.....                                            |",
          "|www          TTTTTFFFTTTT                             =======                                    .........i ..........                                            |",
          "|w           TTTTTFFFTTTT                                                                                                                                          |",
          "|           TTTTTFFFFFTTTT                             =======                                                                                                     |",
          "|           TTTTFFFFFFTTTT                              wwWww                                                                                                      |",
          "|            TTTTFFFFFTTTT                             wwWWWww                                                                                                     |",
          "|   +         TTTTFFFTTTT                             wwWWWWww                                                                                                     |",
          "|  /^\\         TTTTFTTT                               wwWWWWww                                                                                                     |",
          "|..|D|....     TTTTTTT                                 wwWWWWww                                                                                                    |",
          "|i             TTTTT                                  wwwWWWWwww                                                                                                   |",
          "*------------------------------------------------------------------------------------------------------------------------------------------------------------------*"
        ],
        bg: "bggrey",
        openspace: " "
      };
      break;

  }
  return out;
}
