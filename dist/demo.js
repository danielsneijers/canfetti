!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('Canfetti', [], e)
    : 'object' == typeof exports
    ? (exports.Canfetti = e())
    : (t.Canfetti = e());
})(window, function () {
  return (function (n) {
    var o = {};
    function r(t) {
      if (o[t]) return o[t].exports;
      var e = (o[t] = { i: t, l: !1, exports: {} });
      return n[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
    }
    return (
      (r.m = n),
      (r.c = o),
      (r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            r.d(
              n,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, 'a', e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ''),
      r((r.s = 0))
    );
  })([
    function (t, e, n) {
      var o;
      (o = new Canfetti()).startBurst();
      function r() {
        u.classList.toggle('hidden'), a.classList.toggle('hidden');
      }
      function i(t) {
        t.preventDefault(), t.stopImmediatePropagation(), t.stopPropagation();
      }
      var u = document.getElementById('startButton'),
        a = document.getElementById('stopButton'),
        f = document.getElementById('burstToggle');
      u.addEventListener('click', function (t) {
        i(t), o.startStream(), r();
      }),
        a.addEventListener('click', function (t) {
          i(t), o.stopStream(), r();
        }),
        f.addEventListener('click', function (t) {
          var e = !t.target.checked;
          t.stopImmediatePropagation(),
            t.stopPropagation(),
            e ? o.stopBurst() : o.startBurst();
        });
    },
  ]).default;
});
