function birthstones (text: string) {
    for (let Month = 0; Month <= monthList.length - 1; Month++) {
        if (monthList[Month] == text) {
            game.splash(birthstoneList[Month])
        } else {
            game.splash("Error. Try Again")
        }
    }
}
function flowers (text: string) {
    for (let Month = 0; Month <= monthList.length - 1; Month++) {
        if (monthList[Month] == text) {
            game.splash(flowerList[Month])
        } else {
            game.splash("Error. Try Again")
        }
    }
}
let flowerList: string[] = []
let birthstoneList: string[] = []
let monthList: string[] = []
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
flowerList = [
"Snowdrop",
"Violet",
"Daffodil",
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
game.splash("Birthstone or Flower?")
let Month = game.askForString("What month were you born in?", 9)
let Answer = game.askForNumber("Birthstone (1) or Flower (2)", 1)
if (Answer == 1) {
    birthstones(Month)
} else if (Answer == 2) {
    flowers(Month)
} else {
    game.splash("Error. Try Again")
}
game.splash("Thanks for playing!")
game.reset()
