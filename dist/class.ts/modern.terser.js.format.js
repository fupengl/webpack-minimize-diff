(() => {
  class e {
    echo() {
      return e.name;
    }
  }
  var n, a, o;
  (o = "bob"), (a = "name") in (n = e) ? Object.defineProperty(n, a, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (n[a] = o), console.log(new e().echo());
})();
