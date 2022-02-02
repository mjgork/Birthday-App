def months(_type: str):
    global monthList
    monthList = ["january",
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
        "december"]
    if _type == "birthstone":
        if Month == monthList[0]:
            game.splash(birthstoneList[0])
        elif Month == monthList[1]:
            game.splash(birthstoneList[1])
        elif Month == monthList[2]:
            game.splash(birthstoneList[2])
        elif Month == monthList[3]:
            game.splash(birthstoneList[3])
        elif Month == monthList[4]:
            game.splash(birthstoneList[4])
        elif Month == monthList[5]:
            game.splash(birthstoneList[5])
        elif Month == monthList[6]:
            game.splash(birthstoneList[6])
        elif Month == monthList[7]:
            game.splash(birthstoneList[7])
        elif Month == monthList[8]:
            game.splash(birthstoneList[8])
        elif Month == monthList[9]:
            game.splash(birthstoneList[9])
        elif Month == monthList[10]:
            game.splash(birthstoneList[10])
        elif Month == monthList[11]:
            game.splash(birthstoneList[11])
        else:
            game.splash("Error", "Try again")
monthList: List[str] = []
Month = ""
birthstoneList: List[str] = []
birthstoneList = ["Garnet",
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
    "Turquoise"]
Month = game.ask_for_string("What month were you born in?", 9)
months("birthstone")

text_list: List[str] = []
def Birthflower():
    global text_list
    text_list = ["snowdrop",
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
        "Holly"]