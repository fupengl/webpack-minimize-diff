class Test {
  static name = 'bob'

  echo() {
    return Test.name;
  }
}
console.log(new Test().echo());