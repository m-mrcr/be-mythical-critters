class Dragon{
  constructor(name, rider, color){
    this.name=name
    this.rider=rider
    this.color=color
    this.hungry=true
    this.meals=0
  }

  eat(){
    this.meals += 1
    if (this.meals === 3){
      this.hungry = false
      this.meals = 0
    }
  }
  
}
module.exports = Dragon;
