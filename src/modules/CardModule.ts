export class Card {
  position = [0,0,0]
  rotation = [0,0,0]
  scale = 1

  constructor(props: any) {
    this.position = props.position
    this.rotation = props.rotation
    this.scale = props.scale
  }

  goToDemonstrate() {
    // some animation to demonstrate position
  }

  goToHand() {
    // some animation move to hand
  }

  goToDamp() {
    // some animation move to damp pack
  }

  goToBase() {
    // some animation or set position for animation move to base position
    // need get position base
  }


}