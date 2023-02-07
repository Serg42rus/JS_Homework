class ElectricDevice
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.isPlug = false;
  }
  
  plugIn()
  {
    console.log(this.name + " прибор включен");
    this.isPlug = true;
  }
  getPowerUse()
  {
    return this.isPlug ? this.power : 0;
  }
}

const lampa = new ElectricDevice('лампа', 30);
const tv = new ElectricDevice('телевизор', 80);
const pylesos = new ElectricDevice('пылесос', 60);

console.log(lampa.getPowerUse() + tv.getPowerUse() + pylesos.getPowerUse());

lampa.plugIn();
console.log(lampa.getPowerUse() + tv.getPowerUse() + pylesos.getPowerUse());

tv.plugIn();
console.log(lampa.getPowerUse() + tv.getPowerUse() + pylesos.getPowerUse());

pylesos.plugIn();
console.log(lampa.getPowerUse() + tv.getPowerUse() + pylesos.getPowerUse());