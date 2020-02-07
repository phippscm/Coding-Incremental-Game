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
  playerLanguageSkillHTMLExp: 0 ,
  playerLanguageSkillHTMLExpNextLevel: 13 ,
  playerLanguageSkillCSS: 0 ,
  playerLanguageSkillJS: 0,
  playerLanguageSkillSQL: 0,
  playerHardwareSkill: 0,
  playerCloudSkill: 0
}

var firstUnlockLoop = window.setInterval(function(){
  checkUpgrade()
  if (playerData.playerKnowledgeSkill >= 5) {
    window.clearInterval(firstUnlockLoop)
  }
},1000)

//JS functions

function buildStudySkill() {
  playerData.playerStudySkillExp += playerData.playerStudySkill
  playerData.playerKnowledgeSkill += playerData.playerStudySkill/10
  levelUpStudy()
  updateDisplay()
}

function buildHTMLSkill() {
  playerData.playerLanguageSkillHTMLExp += playerData.playerStudySkill
  playerData.playerKnowledgeSkill += playerData.playerStudySkill/10
  levelUpHTML()
  updateDisplay()
}

function levelUpStudy(){
  if(playerData.playerStudySkillExp >= playerData.playerStudySkillNextLevel ){
    playerData.playerStudySkill++
    playerData.playerStudySkillExp -= playerData.playerStudySkillNextLevel
    playerData.playerStudySkillNextLevel = Math.round(playerData.playerStudySkillNextLevel*=1.5)
  }
}

function levelUpHTML(){
  if(playerData.playerLanguageSkillHTMLExp >= playerData.playerLanguageSkillHTMLExpNextLevel ){
    playerData.playerLanguageSkillHTML++
    playerData.playerLanguageSkillHTMLExp -= playerData.playerLanguageSkillHTMLExpNextLevel
    playerData.playerLanguageSkillHTMLExpNextLevel = Math.round(playerData.playerLanguageSkillHTMLExpNextLevel*=1.5)
  }
}

//Update main.html Display
function updateDisplay(){
  document.getElementById('knowledgeDisplay').innerHTML = "Knowledge " + playerData.playerKnowledgeSkill.toFixed(2)
  document.getElementById('studyDisplay').innerHTML = "Study Level " + playerData.playerStudySkill
  document.getElementById('studyExpDisplay').innerHTML = "Study EXP " + playerData.playerStudySkillExp
  document.getElementById('studyExpNLDisplay').innerHTML = "Study Exp for Next Level " + playerData.playerStudySkillNextLevel
  document.getElementById('htmlDisplay').innerHTML = "HTML Level " + playerData.playerLanguageSkillHTML
  document.getElementById('htmlExpDisplay').innerHTML = "HTML EXP " + playerData.playerLanguageSkillHTMLExp
  document.getElementById('htmlExpNLDisplay').innerHTML = "HTML Exp for Next Level " + playerData.playerLanguageSkillHTMLExpNextLevel
}
//Update unlocks
function checkUpgrade() {
  if(playerData.playerKnowledgeSkill >= 5){
    document.getElementById('upgrade').style.display = "block"
  }
}

function learnHTML(){
  document.getElementById('upgrade').style.display = "none"
  document.getElementById('htmlDisplay').style.display = "block"
  document.getElementById('htmlExpDisplay').style.display = "block"
  document.getElementById('htmlExpNLDisplay').style.display = "block"
    document.getElementById('learnHTMLBTN').style.display = "block"
}
