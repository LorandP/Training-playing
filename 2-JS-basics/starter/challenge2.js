const jhonsTeam = [89, 120, 103];
const mikesTeam = [116, 94, 123];

const avarage = (data = []) => {
  var avarage = 0;
  var total = 0;

  data.forEach(score => {
    total += score;
  });
  return total / data.length - 1;
};

const mikesTeamAvarage = avarage(mikesTeam);
const jhonsTeamAvarage = avarage(jhonsTeam);

const highestScore =
  mikesTeamAvarage > jhonsTeamAvarage ? mikesTeamAvarage : jhonsTeamAvarage;
if (mikesTeamAvarage > jhonsTeamAvarage) {
  console.log("Highest team score is Mikes ", mikesTeamAvarage);
} else if (jhonsTeamAvarage > mikesTeamAvarage) {
  console.log("Highest team score is Jhons ", jhonsTeamAvarage);
} else {
  console.log("Is equal ", mikesTeamAvarage);
}
