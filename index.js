

class HolidayConstructor {
  constructor() {
    this.options = [
      'Hand Sanitizer',
      'Stress Ball',
      'No Wipe',
      'Abestos',
      'Hug Your Step Uncle',
      'Nerf Gun',
      'Delouse A Friend',
      'Licorice',
      'Well Liquor Appreciation',
      'Nickelback Rememberance',
      'Famous Jewish Sports History',
      'Judgment',
      'Bring Work to Your Kid'
    ];
  }

  chooseRandomThing() {
    return this.options[Math.floor(Math.random() * this.options.length)];
  }

  getToday() {
    const day = new Date().getDay();
    switch(day){
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Sunday';
    }
  }

  constructDisplay(day, thing){
    return `Today is ${this.getToday()}. It's National ${this.chooseRandomThing()} Day!`;
  }
}

const result = new HolidayConstructor().constructDisplay();

console.log(result);
