//alert("JavaScript works!");

// Devon K Gildark
// SDI Project 3
// 05/2013

var LeaderStats = {
    Life: "215",
    Magic: "175",
    Strength: "250",
    Deffence: "155",
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
// Oddler is Seperate from the team
var 
var Team = [ { 
    Name: "Hartho",
    Class: "Defender",
    Stats: HarSts,
    Spells: [
     "Defence",
     "Defence+"
    ],
    Age: 27,
 }, 
    {
    Name: "Mazy",
    Class: "Healer",
    Stats: MaSts,
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
      Stats: "KatSts",
      Spells: [
        "Steal Gold",
        "Steal Life",
        "Steal Item"
      ],
    Age: 28,
    }
    ];
console.log(Leader + Team);
