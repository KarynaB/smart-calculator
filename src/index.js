class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.initialValue=initialValue;
    var kot = Number(this.initialValue);

    this.valueOf = function() {
        return kot.valueOf();
    }
  }

  add(number) {
    // your implementation
    this.initialValue+=number;
    var kot = Number(this.initialValue);

    this.valueOf = function() {
        return kot.valueOf();
    }
      return this;
  }
  
  subtract(number) {
    // your implementation
    this.initialValue-=number;
    var kot = Number(this.initialValue);

    this.valueOf = function() {
        return kot.valueOf();
    }
      return this;
  }
  
  multiply(number) {
    // your implementation
    this.initialValue*=number;
    var kot = Number(this.initialValue);

    this.valueOf = function() {
        return kot.valueOf();
    }
      return this;
  }
  
  devide(number) {
    // your implementation
    this.initialValue/=number;
    var kot = Number(this.initialValue);
    this.valueOf = function() {
        return kot.valueOf();
    }
      return this;
  }
  
  pow(number) {
    // your implementation 
    this.initialValue=Math.pow(this.initialValue,number);
    var kot = Number(this.initialValue);

    this.valueOf = function() {
        return kot.valueOf();
    }
      return this;
  }
  

}

module.exports = SmartCalculator;
