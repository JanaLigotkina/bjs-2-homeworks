class AlarmClock {
  constructor(alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, collbackStart, id) {
    if (id == null) {
      throw new Error('Параметр идентификатора создаваемого звонка не задан');
    }

    let existsId = this.alarmCollection.findIndex(item => item === id);

    if (existsId !== -1) {
      console.error('Такой id уже существует');
    } else {
      this.alarmCollection.push({time, collbackStart, id});
    }
  }

  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
    return;
  }

  getCurrentFormattedTime() {
    let data = new Date();
    return data.toLocaleTimeString().slice(0, 5);
  }

  // тут начинается херота
  start() {
    let _thet = this;
    function checkClock(time) {
      if (time === _thet.getCurrentFormattedTime()) {
        return _thet.alarmCollection.collbackStart();
      }
    }

    if (!this.timerId) {
     this.timerId = setInterval(() => this.alarmCollection.forEach((item) => checkClock(item.time)), 1000);
    }
  }

  stop() {
    if (this.timerId != null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    return this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведен на ${item.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  let phoneAlarm = new AlarmClock;
  phoneAlarm.addClock('13:04', () => console.log('Пара вставать'), 1);
  phoneAlarm.addClock('13:05', () => console.log('Уже пора вставать'), 2);
  phoneAlarm.addClock('13:06', () => console.log('Точно пора вставать'), 3);
  phoneAlarm.addClock('13:07', () => { console.log('Точно пора вставать'); phoneAlarm.removeClock(3); }, 3);
  // phoneAlarm.addClock('13:08', () => console.log('Точно пора вставать'));
  phoneAlarm.addClock('13:08', () => { console.log('Умываться!'); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms();}, 4);
  phoneAlarm.printAlarms();
  phoneAlarm.start();
}

testCase();