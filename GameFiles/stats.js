//Variable Defintions
var version ="0.0.1";

var playerData = {
  playerName: "Tom",
  playergold: 0,
  playerStudySkill: 1,
  playerStudySkillExp: 0,
  playerStudySkillNextLevel: 13,
  playerKnowledgeSkill: 0,
  playerCodingSkill: 1,
  playerLanguageSkillC: 0,
  playerLanguageSkillHTML: 0 ,
  playerLanguageSkillCSS: 0 ,
  playerLanguageSkillJS: 0,
  playerLanguageSkillSQL: 0,
  playerHardwareSkill: 0,
  playerCloudSkill: 0
}

//JS functions

function buildStudySkill() {
  playerData.playerStudySkillExp += playerData.playerStudySkill
  playerData.playerKnowledgeSkill += playerData.playerStudySkill/10
  updateDisplay()
  levelUpStudy()
  checkUpgrade()
}

function levelUpStudy(){
  if(playerData.playerStudySkillExp >= playerData.playerStudySkillNextLevel ){
    playerData.playerStudySkill++
    playerData.playerStudySkillExp -= playerData.playerStudySkillNextLevel
    playerData.playerStudySkillNextLevel = Math.round(playerData.playerStudySkillNextLevel*=1.5)
  }
}

//Update main.html Display
function updateDisplay(){
  document.getElementById('knowledgeDisplay').innerHTML = playerData.playerKnowledgeSkill.toFixed(2)
  document.getElementById('studyDisplay').innerHTML = playerData.playerStudySkill
  document.getElementById('studyExpDisplay').innerHTML = playerData.playerStudySkillExp
  document.getElementById('studyExpNLDisplay').innerHTML = playerData.playerStudySkillNextLevel
}
//Update unlocks
function checkUpgrade() {
  if(playerData.playerKnowledgeSkill >= 5){
    document.getElementById('upgrade').style.display = "block"
  }
}
