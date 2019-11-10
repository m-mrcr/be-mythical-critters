class Wizard{
  constructor({name=undefined, bearded=true}){
    this.name=name
    this.bearded=bearded
    this.isRested=true
    this.spellsCast=0
  }

  incantation(spell){
    return spell.toUpperCase()
  }

  cast(){
    if(this.spellsCast < 3){
      this.spellsCast+=1
      if (this.spellsCast===3){this.isRested=false}
      return 'MAGIC BULLET'
    } else {
      return 'I SHALL NOT CAST!'
    }
  }

}
module.exports = Wizard
