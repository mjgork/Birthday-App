function months (_type: string) {
    birthstoneList = [
    "Garnet",
    "Amethyst",
    "Aquamarine",
    "Diamond",
    "Emerald",
    "Pearl",
    "Ruby",
    "Peridot",
    "Sapphire",
    "Opal",
    "Topaz",
    "Turquoise"
    ]
    monthList = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
    ]
    flowerList = [
    "snowdrop",
    "Violet",
    "daffodil",
    "Daisy",
    "Lily of the Valley",
    "Rose",
    "Larkspur",
    "Poppy",
    "Aster",
    "Marigold",
    "Chrysanthemum",
    "Holly"
    ]
    if (_type == "birthflower") {
        if (Month == flowerList[0]) {
            game.splash(flowerList[0])
        } else if (Month == flowerList[1]) {
            game.splash(flowerList[1])
        } else if (Month == flowerList[2]) {
            game.splash(flowerList[2])
        } else if (Month == flowerList[3]) {
            game.splash(birthstoneList[3])
        } else if (Month == monthList[4]) {
            game.splash(flowerList[4])
        } else if (Month == flowerList[5]) {
            game.splash(flowerList[5])
        } else if (Month == monthList[6]) {
            game.splash(birthstoneList[6])
        } else if (Month == flowerList[7]) {
            game.splash(birthstoneList[7])
        } else if (Month == monthList[8]) {
            game.splash(flowerList[8])
        } else if (Month == flowerList[9]) {
            game.splash(flowerList[9])
        } else if (Month == flowerList[10]) {
            game.splash(flowerList[10])
        } else if (Month == flowerList[11]) {
            game.splash(flowerList[11])
        } else {
            game.splash("Error", "Try again")
        }
    }
    if (_type == "birthstone") {
        if (Month == monthList[0]) {
            game.splash(birthstoneList[0])
        } else if (Month == monthList[1]) {
            game.splash(birthstoneList[1])
        } else if (Month == monthList[2]) {
            game.splash(birthstoneList[2])
        } else if (Month == monthList[3]) {
            game.splash(birthstoneList[3])
        } else if (Month == monthList[4]) {
            game.splash(birthstoneList[4])
        } else if (Month == monthList[5]) {
            game.splash(birthstoneList[5])
        } else if (Month == monthList[6]) {
            game.splash(birthstoneList[6])
        } else if (Month == monthList[7]) {
            game.splash(birthstoneList[7])
        } else if (Month == monthList[8]) {
            game.splash(birthstoneList[8])
        } else if (Month == monthList[9]) {
            game.splash(birthstoneList[9])
        } else if (Month == monthList[10]) {
            game.splash(birthstoneList[10])
        } else if (Month == monthList[11]) {
            game.splash(birthstoneList[11])
        } else {
            game.splash("Error", "Try again")
        }
    }
}
let flowerList: string[] = []
let monthList: string[] = []
let birthstoneList: string[] = []
let Month = ""
game.splash("Birthstone or Flower?")
let Answer = game.askForNumber("Birthstone (1) or Flower (2)", 1)
Month = game.askForString("What month were you born in?", 9)
if (Answer == 1) {
    months("birthstone")
} else {
    months("birthflower")
}
