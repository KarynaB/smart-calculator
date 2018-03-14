class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.initialValue=initialValue;
    var mas = this.mas;
    this.mas = [this.initialValue];
    var k;
    this.k = k;
 }

  add(number) {
    // your implementation
    this.mas.push("+"+number);
    var str = this.mas.join('');
    this.k=eval(str);
    var kot = Number(this.k);
    this.valueOf = function() {
        return kot.valueOf();
    }
      return this;
  }
  
  subtract(number) {
    // your implementation
    this.mas.push("-"+number);
    var str = this.mas.join('');
    this.k=eval(str);
    var kot = Number(this.k);
    this.valueOf = function() {
        return kot.valueOf();
    }
      return this;
  }
  
  multiply(number) {
    // your implementation
    this.mas.push("*"+number);
    var str = this.mas.join('');
    this.k=eval(str);
    var kot = Number(this.k);
    this.valueOf = function() {
        return kot.valueOf();
    }
      return this;
  }
  
  devide(number) {
    // your implementation
    this.mas.push("/"+number);
    var str = this.mas.join('');
    this.k=eval(str);
    var kot = Number(this.k);
    this.valueOf = function() {
        return kot.valueOf();
    }
      return this;
  }
  
  pow(number) {
    // your implementation 
    this.mas.push("**"+number);
    var str = this.mas.join('');
    this.k=eval(str);
    var kot = Number(this.k);
    this.valueOf = function() {
        return kot.valueOf();
    }
      return this;
  }

}
module.exports = SmartCalculator;
