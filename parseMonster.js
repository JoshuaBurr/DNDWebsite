function parseMonster (info) {
  for row in info {
    console.log(row)
  }
  put in variables and return parsedInfo
}

function populateMonsters (parsedInfo) {
  var mainDiv = document.getElementById('main');
  var mainTable = document.createElement('div');
  mainDiv.appendChild(mainTable);
  monsterNameCell.appendTextNode(parsedInfo.monsterName);

}
