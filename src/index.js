class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.initialValue=initialValue;
  }

  add(number) {
    // your implementation
    this.initialValue+=number;
      return this.initialValue;
  }
  
  subtract(number) {
    // your implementation
    this.initialValue-=number;
    return this.initialValue;
  }

  multiply(number) {
    // your implementation
    this.initialValue*=number;
    return this;
  }

  devide(number) {
    // your implementation
    this.initialValue/=number;
    return this;
  }

  pow(number) {
    // your implementation 
    this.initialValue=Math.pow(this.initialValue,number);
    return this.initialValue;
  }

}

module.exports = SmartCalculator;
