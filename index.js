function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
// Helper: Return all players as an array of objects with name included
function allPlayers() {
  const teams = Object.values(gameObject());
  const playersArray = [];

  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    const players = team.players;

    for (let name in players) {
      const stats = players[name];
      const playerWithName = {
        name: name,
        number: stats.number,
        shoe: stats.shoe,
        points: stats.points,
        rebounds: stats.rebounds,
        assists: stats.assists,
        steals: stats.steals,
        blocks: stats.blocks,
        slamDunks: stats.slamDunks
      };
      playersArray.push(playerWithName);
    }
  }

  return playersArray;
}

// 1. Return number of points scored by a player
function numPointsScored(playerName) {
  const player = allPlayers().find(p => p.name === playerName);
  return player ? player.points : 0;
}

// 2. Return shoe size of a player
function shoeSize(playerName) {
  const player = allPlayers().find(p => p.name === playerName);
  return player ? player.shoe : 0;
}

// 3. Return player stats (excluding name)
function playerStats(playerName) {
  const player = allPlayers().find(function(p) {
    return p.name === playerName;
  });

  if (!player) return {};

  const stats = {};
  for (let key in player) {
    if (key !== 'name') {
      stats[key] = player[key];
    }
  }

  return stats;
}

// 4. Return number of rebounds for player with biggest shoe
function bigShoeRebounds() {
  const biggest = allPlayers().reduce((max, player) => {
    return player.shoe > max.shoe ? player : max;
  }, allPlayers()[0]);

  return biggest.rebounds;
}

// 5. Return team colors
function teamColors(teamName) {
  for (let key in gameObject()) {
    if (gameObject()[key].teamName === teamName) {
      return gameObject()[key].colors;
    }
  }
  return [];
}

// 6. Return team names
function teamNames() {
  return Object.values(gameObject()).map(team => team.teamName);
}

// 7. Return player numbers of a team
function playerNumbers(teamName) {
  for (let key in gameObject()) {
    if (gameObject()[key].teamName === teamName) {
      return Object.values(gameObject()[key].players).map(player => player.number);
    }
  }
  return [];
}

module.exports = {
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
  doesLongNameStealATon,
};
