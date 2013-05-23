//alert("JavaScript works!");

// Devon K Gildark
// SDI Project 3
// 05/2013

var LeaderStats = {
    Life: "215",
    Magic: "175",
    Strength: "250",
    Defense: "155",
    };
var Leader = {
    Name: "Oddler",
    Class: "Warrior",
    Title: "The Greater Devil",
    Stats: LeaderStats,
    Spells: [
        "Egress",
        "Lazer Eye",
        "Demon Blast",
        "Soul Slice"
    ],
    Age: 137
};
// Oddler Finished
var TeamSts = [ { //Hartho
    Life: "250",
    Magic: "65",
    Strength: "165",
    Defense: "300"
},
    { //Mazy
    Life: "150",
    Magic: "285",
    Strength: "75",
    Defense: "175"
    },
    { //KataVeen
        Life: "200",
        Magic: "60",
        Strength: "125",
        Defense: "150"
    } ];

var Team = [ { 
    Name: "Hartho",
    Class: "Defender",
    Stats: TeamSts[0],
    Spells: [
     "Defence",
     "Defence+"
    ],
    Age: 27,
 }, 
    {
    Name: "Mazy",
    Class: "Healer",
    Stats: TeamSts[1],
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
      Stats: TeamSts[2],
      Spells: [
        "Steal Gold",
        "Steal Life",
        "Steal Item"
      ],
    Age: 28,
    }
    ];
//^^Done
console.log(Leader);
console.log(Team);
//Boolean
var Oddler = "Oddler "
var Group = 3;
var MaxGr = 0;
var Tof3 = true;

console.log(Oddler + "must assemble a team.")
console.log("The must consist of 3 people at a time, inlcuding " + Oddler)
console.log("This means the team is " + Oddler + "plus 2 other people")
console.log(Oddler + "must always be in the group, and is allowed to freely trade between other team members as he see fits");

if (Tof3 === true) {
    if (Group == 2) {
    console.log(Oddler + "has chosen his team, and is ready to disimbark")
    } else {
    console.log(Oddler + "has not chosen his team yet. He is not ready to go yet")
    }

    TeamReady = function(NumSpots, ReqSpots)
    {
        return(NumSpots == ReqSpots);
    }
    
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
console.log(Team)
console.log("On the way out of town " + Oddler + "Decides he should get supplies for him as his team")
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