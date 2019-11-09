class Sphinx{
  constructor(name){
    this.name=name
    this.riddles=[]
    this.heroesEaten=0
  }

  collectRiddle(riddle){
    if (this.riddles.length < 3){
      this.riddles.push(riddle)
    } else {
      this.riddles.shift()
      this.riddles.push(riddle)
    }
  }

  attemptAnswer(answer){
    if (this.correct(answer)) {
      if (this.riddles.length > 0) {
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      } else {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
      }
    } else {
      this.heroesEaten += 1
    }
  }

  correct(answer){
    var riddles = this.riddles
    var finalAnswer = ""
    if (riddles.some(e => e.answer === answer)){
      finalAnswer = answer
      riddles.forEach(function(riddle){
        if (riddle.answer===answer){
          var index = riddles.indexOf(riddle)
          riddles.splice(index, 1)
        }
      })
      return true
    }
  }

}
module.exports = Sphinx
