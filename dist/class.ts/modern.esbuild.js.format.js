(() => {
  var c = {};
  function a(r, n, t) {
    if (n in r) {
      Object.defineProperty(r, n, { value: t, enumerable: true, configurable: true, writable: true });
    } else {
      r[n] = t;
    }
    return r;
  }
  class e {
    echo() {
      return e.name;
    }
  }
  a(e, "name", "bob");
  console.log(new e().echo());
})();
