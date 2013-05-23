//alert("JavaScript works!");

// Devon K Gildark
// SDI Project 3
// 05/2013

var Oddler = "Oddler "
var Leader = {
    Name: "Oddler",
    Class: "Warrior",
    Title: json.Stats[0],
    Spells: [
        "Egress",
        "Lazer Eye",
        "Demon Blast",
        "Soul Slice"
    ],
    Age: 137
};
//Space
var Team = [ { 
    Name: "Hartho",
    Class: "Defender",
    Stats: json.Stats[1],
    Spells: [
     "Defence",
     "Defence+"
    ],
    Age: 27,
 }, 
    {
    Name: "Mazy",
    Class: "Healer",
    Stats: json.Stats[2],
    Spells: [
        "Single Heal",
        "Team Heal",
        "Detox",
        "Recover"
    ],
    Age: 26,
    },
    {
      Name: "Kataveen",
      Class: "Theif",
      Stats: json.Stats[3],
      Spells: [
        "Steal Gold",
        "Steal Life",
        "Steal Item"
      ],
    Age: 28,
    }
    ];
//^^ Team Done
// Stats in Leader and Teams = "Getter" as it is getting info from my json... I think I got that right.
// var Leader and Team are Global vars
console.log(Oddler + "must assemble a team.")
console.log(Leader);
console.log(Team);
console.log("The team must consist of 3 people at a time, inlcuding " + Oddler)
console.log("This means the team is " + Oddler + "plus 2 other people")
console.log(Oddler + "must always be in the group, and is allowed to freely trade between other team members as he sees fits");
console.log(Oddler + " currently has 4 people on his team, this means before leaving town, he must leave on behind")
console.log("Before leaving town " + Oddler + "decides he should get supplies for him and his team")
//Number/Math Box
var Gold = 5000;
var HealthPotion = 150;
var MagicPotion = 200;
var RestorePotion = 500;
var CheapTent = 500;
var QualityTent = 1000;
    var NumHpotions = 0;
    var NumMPotions = 0;
    var NumResPots = 0;
    var NumCTents = 0;
    var NumQTents = 0;
//
    var Wallet = function(FoundGold) { //Method Mutator, to be later used
    Gold = Gold + FoundGold;
    return Wallet
    }
// 
     console.log("Starting gold " + Gold)
     while (Gold >= HealthPotion && NumHpotions < 10) {
        //console.log(Oddler + "bought 1 Health Potion")
        NumHpotions++;
        Gold = Gold - HealthPotion
        };
    
    console.log(Oddler + " bought " + NumHpotions + " health potions")
    console.log(Oddler + "has " + Gold + " gold left over")
    
    while (Gold >= MagicPotion && NumMPotions < 6) {
        //console.log(Oddler + "bought 1 Magic Potion")
        NumMPotions++;
        Gold = Gold - MagicPotion
    };
    console.log(Oddler + " bought " + NumMPotions + " magic potions")
    console.log(Oddler + "has " + Gold + " gold left over")
    
    while (Gold >= RestorePotion && NumResPots < 3) {
        //console.log(Oddler + " Bought 1 Restore Potion")
        NumResPots++;
        Gold = Gold - RestorePotion
    };
    console.log(Oddler + "bought " + NumResPots + " restoration potions")
    console.log(Oddler + "has " + Gold + " gold left over")
    
    while (Gold >= CheapTent && NumCTents < 1) {
        //console.log(Oddler + " bought 1 cheap tent")
        NumCTents++;
        Gold = Gold - CheapTent
    };
    console.log(Oddler + "bought " + NumCTents + "cheap tent")
    console.log(Oddler + "has " + Gold + " gold left over")
// Nunber/Math Block done ^^    
var Group = 3;
var MaxGr = 0;
var Tof3 = true;
//Boolean
if (Tof3 === true) {
    if (Group == 2) {
    console.log(Oddler + "has chosen his team, and is ready to disimbark")
    } else {
    console.log(Oddler + "has not chosen his team yet. He is not ready to go yet")
    }

    TeamReady = function(NumSpots, ReqSpots)
    {
        return(NumSpots == ReqSpots); //<<< Boolean return
    }
    console.log(Oddler + "decides to let Kataveen go out on her own, and will meet at the next town in 3 days at the inn")
    //console.log("as Kataveen leaves, she pick pockets a gaurd")
       // for (var i = 0 ; i <= Wallet ; i ++) {
            //Gold = Gold + Wallet(Gold[i])
       // }
           // console.log(Wallet + " gold was added to the wallet")
    
    if (Tof3 === true) {
        if (TeamReady ()) {
         console.log(Oddler + "has chosen his team, and is ready to disembark")
    } else {
         console.log(Oddler + "has not chosen his team yet. He is not ready to go yet")
    }
        }
};
//Boolean done

Team.pop()
console.log(Oddler + "current team is now")
console.log(Leader)
console.log(Team)
console.log("With is faithful team behind him " + Oddler + "leaves town to create his own adventure")