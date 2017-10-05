//case in the example
var input = [
    {
        Name:'Soundwave',
        Group: 'D',
        Strength : 8,
        Intelligence : 9,
        Speed : 2,
        Endurance : 6,
        Rank : 7,
        Courage : 5,
        Firepower : 6,
        Skill : 10
      },
    {
        Name:'Bluestreak',
        Group: 'A',
        Strength : 6,
        Intelligence : 6,
        Speed : 7,
        Endurance : 9,
        Rank : 5,
        Courage : 2,
        Firepower : 9,
        Skill : 7
    },
    {
        Name:'Hubcap',
        Group: 'A',
        Strength : 4,
        Intelligence : 4,
        Speed : 4,
        Endurance : 4,
        Rank : 4,
        Courage : 4,
        Firepower : 4,
        Skill : 4
    }
];

//case tie

// var input = [
//     {
//         Name:'Soundwave',
//         Group: 'D',
//         Strength : 8,
//         Intelligence : 9,
//         Speed : 2,
//         Endurance : 6,
//         Rank : 7,
//         Courage : 5,
//         Firepower : 6,
//         Skill : 10
//     },
//     {
//         Name:'Fighters',
//         Group: 'A',
//         Strength : 8,
//         Intelligence : 9,
//         Speed : 2,
//         Endurance : 6,
//         Rank : 7,
//         Courage : 5,
//         Firepower : 6,
//         Skill : 10
//     },
//
// ];

//Case with special names

// var input = [
//     {
//         Name:'Predaking',
//         Group: 'D',
//         Strength : 1,
//         Intelligence : 1,
//         Speed : 1,
//         Endurance : 1,
//         Rank : 1,
//         Courage : 1,
//         Firepower : 1,
//         Skill : 1
//     },
//     {
//         Name:'Fighters',
//         Group: 'A',
//         Strength : 8,
//         Intelligence : 9,
//         Speed : 2,
//         Endurance : 6,
//         Rank : 7,
//         Courage : 5,
//         Firepower : 6,
//         Skill : 10
//     },
// ];

// var input = [
//     {
//         Name:'Predaking',
//         Group: 'D',
//         Strength : 1,
//         Intelligence : 1,
//         Speed : 1,
//         Endurance : 1,
//         Rank : 1,
//         Courage : 1,
//         Firepower : 1,
//         Skill : 1
//     },
//     {
//         Name:'Predaking',
//         Group: 'A',
//         Strength : 8,
//         Intelligence : 9,
//         Speed : 2,
//         Endurance : 6,
//         Rank : 7,
//         Courage : 5,
//         Firepower : 6,
//         Skill : 10
//     },
// ];

var teamA=[];
var teamD = [];

for(var i=0; i <= input.length-1 ; i++ ){
    input[i].overalRating = input[i].Strength + input[i].Intelligence + input[i].Speed + input[i].Endurance + input[i].Firepower;
    if(input[i].Group == 'A'){
        teamA.push(input[i])
    }else if(input[i].Group == 'D'){
        teamD.push(input[i])
    }
}

teamA.sort(compare);
teamD.sort(compare);

var numberOfBattle = Math.min(teamA.length,teamD.length);
var killingA = 0, killingD = 0;

for(var i=0; i < numberOfBattle ; i++){
    if((teamA[i].Name == 'Optimus Prime' || teamA[i].Name =='Predaking')
        && teamD[i].Name !== 'Optimus Prime' && teamD[i].Name !== 'Predaking'){
        teamD.splice(i, 1);
        killingD ++;
    }else if((teamD[i].Name == 'Optimus Prime' || teamD[i].Name =='Predaking')
        && teamA[i].Name !== 'Optimus Prime' && teamA[i].Name !== 'Predaking'){
        teamA.splice(i, 1);
        killingA ++;
    }else if((teamD[i].Name == 'Optimus Prime' || teamD[i].Name =='Predaking')
        && (teamA[i].Name == 'Optimus Prime' || teamA[i].Name == 'Predaking')){
        console.log("game is done");
        numberOfBattle = i;
        break;
    } else if(teamA[i].Courage - teamD[i].Courage >= 4 && teamA[i].Strength - teamD[i].Strength >= 3){
        teamD.splice(i, 1);
        killingD ++;
    }else if(teamD[i].Courage - teamA[i].Courage >= 4 && teamD[i].Strength - teamA[i].Strength >= 3){
        teamA.splice(i, 1);
        killingA ++;
    }else if(teamA[i].Skill - teamD[i].Skill >= 3){
        teamD.splice(i, 1);
        killingD ++;
    }else if(teamD[i].Skill - teamA[i].Skill >= 3){
        teamA.splice(i, 1);
        killingA ++;
    }else if(teamA[i].overalRating > teamD[i].overalRating ){
        teamD.splice(i, 1);
        killingD ++;
    }else if(teamA[i].overalRating < teamD[i].overalRating ){
        teamA.splice(i, 1);
        killingA ++;
    }else if(teamA[i].overalRating == teamD[i].overalRating){
        teamA.splice(i, 1);
        teamD.splice(i, 1);
    }
}

console.log("Number of battle: "+ numberOfBattle);
if(killingA > killingD){
    console.log("Decepticons is winner");
    if(teamA.length>0){
        for (var i=0; i<teamA.length; i++) {

            console.log("Survivors from the losing team (Autobots): "+teamA[i].Name);
        }
    }
}
if(killingA < killingD){
    console.log("Autobots is winner");
    if(teamD.length>0){
        for (var i=0; i<teamD.length; i++) {

            console.log("Survivors from the losing team (Autobots): "+teamD[i].Name);
        }
    }
}
if(killingA == killingD){
    console.log("it is tie");
}

function compare(a,b) {
    if (a.Rank > b.Rank)
        return -1;
    if (a.Rank < b.Rank)
        return 1;
    return 0;
}