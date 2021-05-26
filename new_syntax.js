"use strcit";
const MIN_ZP = 6000 / 21;
class UserClass {
  constructor(name, surName, age) {
    this.name = name;
    this.surName = surName;
    this.age = age;
  }
  set FullName(newFullName) {
    if (typeof newFullName !== "string") {
      throw new TypeError();
    }
    const nameArray = newFullName.split(" ");
    if (nameArray.length !== 2) {
      throw new RangeError();
    }

    this.name = nameArray[0];
    this.surName = nameArray[1];
  }
  get FullName() {
    return `${this.name} ${this.surName}`;
  }
  get IsAdult() {
    if (this.age >= 18) {
      return `${this.name} is ${this.age} old and he is adult`;
    }
    return false;
  }
  static isUser(obj) {
    return obj instanceof User;
  }
}

const user1 = new UserClass("User1", "Test", 21);
const user2 = new UserClass("User2", "Test", 17);

/*Реализовать класс Рабочий(Worker)
У рабочего есть имя. фамилия, ставка за день, количество отработаных дней
Метод, который возвращает з.п рабочего
*/
class Worker {
  constructor(name, surName, workDays = 0, moneyForDay = MIN_ZP) {
    if (typeof workDays !== "number") {
      throw new TypeError("Parameters have unappropriate type");
    }
    if (workDays < 0 || workDays > 31) {
      throw new RangeError("Not range");
    }
    if (moneyForDay < 0) {
      throw new RangeError();
    }

    this.name = name;
    this.surName = surName;
    this.moneyForDay = moneyForDay;
    this.workDays = workDays;
  }
  set moneyForDay(newMoneyForDay) {
    if (typeof newMoneyForDay != "number") {
      throw new TypeError("Parameters have unappropriate type");
    }
    if (newMoneyForDay < 0) {
      throw new RangeError();
    }
    this._moneyForDay = newMoneyForDay;
  }
  get moneyForDay() {
    return this._moneyForDay;
  }

  set workDays(newWorkDays) {
    if (typeof newWorkDays != "number") {
      throw new TypeError("Parameters have unappropriate type");
    }
    if (newWorkDays < 0) {
      throw new RangeError();
    }
    this._workDays = newWorkDays;
  }
  get workDays() {
    return this._workDays;
  }

  getMoneyForAllDays() {
    return `${this.moneyForDay * this.workDays} this worker have`;
  }
}
const worker1 = new Worker("Worker1", "W1", 21, 10);

/* Собственный вес ownWeight */
/*Масса топлива
Fuel
volume
destiny */

class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }
  get MassFuel() {
    return this.volume * this.density;
  }
}

class Auto {
  constructor(ownWeight, fuel) {
    this.ownWeight = ownWeight;
    this.fuel = fuel;
  }
  get AllAutoMass() {
    return this.ownWeight + this.fuel.MassFuel();
  }
}

const benzin = new Fuel(50, 0.9);
const auto = new Auto(2000, benzin);

class Friend {
  constructor(name, appleAmount, friend) {
    this.name = name;
    this.appleAmount = appleAmount;
    this.friend = friend;
  }
  getAllAppleAmount() {
    return this.appleAmount + this.friend.appleAmount;
  }
}

const myFriend = new Friend("Petr", 40000);
const me = new Friend("Vova", 10, myFriend);
