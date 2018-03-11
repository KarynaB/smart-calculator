class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.initialValue = initialValue;
    return this.initialValue;
   
  }

  add(number) {
    // your implementation
    this.initialValue+=number;
    return this.initialValue;
  }
  
  subtract(number) {
    // your implementation
    this.initialValue-=number;
    return this;
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
    return this;
  }
  

}

module.exports = SmartCalculator;
