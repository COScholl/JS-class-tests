class Animal {
  type: string;

  constructor(type: string) {
    this.type = type;
  }
  identify() {
    console.log(this.type);
  }
}

const cat = new Animal('Cat');
cat.identify();
