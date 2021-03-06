class Spaceship {
  constructor(name, crew, phasers, shields, cloaked=false, warpDrive='disengaged', phasersCharge='uncharged'){
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.phasersCharge = phasersCharge
    if (crew.length === 0) {
      this.docked = true
    } else {
      this.crew = crew
      for (var member in crew) {
        crew[member].currentShip = this
      }
      // debugger;
      this.docked = false
    }
  }

  cloaked() {
    // debugger;
    return this.cloaked
  }
}
