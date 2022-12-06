// map each position?
//keep track of min while adding elements
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {

  // this.stack[this.stack.length - 1] = val;
  this.stack.push(val);
  if (this.minStack.length === 0) {
    // this.minStack[this.minStack.length-1] = val;
    this.minStack.push(val);
  } else {
    // this.minStack[this.minStack.length-1] = Math.min(val,this.minStack[this.minStack.length-1])
    let min = Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }
  console.log(this.stack)
  console.log(this.minStack)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // let newLength = this.stack.length - 1;
  // console.log(this.stack.length, newLength)
  // this.stack.length = newLength;
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // this.minStack.pop();
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

// Runtime :1321ms Beats => 5 %
// Memory : 63.6MB Beats =>5.1 %