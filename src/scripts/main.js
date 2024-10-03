class User {

    constructor(name) {
      // вызывает сеттер
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Имя слишком короткое.");
        return;
      }
      this._name = value;
    }
  
  }