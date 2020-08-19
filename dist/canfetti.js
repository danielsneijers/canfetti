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
    var r = {};
    function i(t) {
      if (r[t]) return r[t].exports;
      var e = (r[t] = { i: t, l: !1, exports: {} });
      return n[t].call(e.exports, e, e.exports, i), (e.l = !0), e.exports;
    }
    return (
      (i.m = n),
      (i.c = r),
      (i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (i.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (i.t = function (e, t) {
        if ((1 & t && (e = i(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (i.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var r in e)
            i.d(
              n,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return n;
      }),
      (i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return i.d(e, 'a', e), e;
      }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = ''),
      i((i.s = 2))
    );
  })({
    2: function (t, e, n) {
      'use strict';
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      n.r(e);
      var c = (function () {
          function t() {
            var e = this;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (this.particlesArray = []),
              (this.particlesAmount = 200),
              (this.particlesOutViewport = 0),
              (this.shouldRender = !0),
              (this.drawParticleWhenInViewport = function (t) {
                t.inViewport || (e.particlesOutViewport += 1), t.draw();
              });
          }
          return (
            (function (t, e, n) {
              e && r(t.prototype, e), n && r(t, n);
            })(t, [
              {
                key: 'stopDrawing',
                value: function () {
                  this.shouldRender = !1;
                },
              },
              {
                key: 'startDrawing',
                value: function () {
                  this.shouldRender = !0;
                },
              },
              {
                key: 'drawConfetti',
                value: function () {
                  this.isDoneRendering
                    ? (this.particlesArray = [])
                    : ((this.particlesOutViewport = 0),
                      this.particlesArray.forEach(
                        this.drawParticleWhenInViewport
                      ));
                },
              },
              {
                key: 'isDoneRendering',
                get: function () {
                  return (
                    !!this.particlesArray.length &&
                    this.particlesArray.length === this.particlesOutViewport
                  );
                },
              },
            ]),
            t
          );
        })(),
        i = [
          '#fce18a',
          '#ff726d',
          '#b48def',
          '#f4306d',
          '#3aaab8',
          '#38ba9e',
          '#bb3d72',
          '#006ded',
        ];
      function o() {
        return Math.random() * Math.PI * 2;
      }
      function a(t) {
        var e = 0 < arguments.length && void 0 !== t ? t : 1;
        return Math.round(Math.random() * e);
      }
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var u = (function () {
        function n(t, e) {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, n),
            (this.x = t),
            (this.y = e),
            this
          );
        }
        return (
          (function (t, e, n) {
            e && s(t.prototype, e), n && s(t, n);
          })(n, [
            {
              key: 'add',
              value: function (t) {
                var e = t.x,
                  n = t.y;
                return (this.x += e), (this.y += n), this;
              },
            },
            {
              key: 'multiply',
              value: function (t) {
                return (this.x *= t), (this.y *= t), this;
              },
            },
            {
              key: 'asArray',
              value: function () {
                return [this.x, this.y];
              },
            },
          ]),
          n
        );
      })();
      function f(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var l = (function () {
        function r(t) {
          var e =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, r),
            (this.sqWidth = 20),
            (this.sqHeight = 20),
            (this.rotationDegree = 0),
            (this.substractWidth = !0),
            (this.deltaTime = 0.016),
            (this.color = (function () {
              var t = Math.floor(Math.random() * i.length);
              return i[t];
            })()),
            (this.gravity = new u(0, 9.8)),
            (this.ctx = t),
            (this.position = new u(e, n)),
            (this.velocity = new u(
              Math.sin(o()) * Math.random() * 500,
              Math.cos(o()) * Math.random() * 500
            ));
        }
        return (
          (function (t, e, n) {
            e && f(t.prototype, e), n && f(t, n);
          })(r, [
            {
              key: 'draw',
              value: function () {
                var t, e, n;
                this.inViewport &&
                  ((e = (t = this.updateParticle()).translateX),
                  (n = t.translateY),
                  this.ctx.save(),
                  this.ctx.translate(e, n),
                  this.ctx.rotate(
                    (function (t) {
                      return (t * Math.PI) / 180;
                    })(this.rotationDegree)
                  ),
                  this.ctx.translate(-e, -n),
                  (this.ctx.fillStyle = this.color),
                  this.ctx.fillRect(
                    this.position.x,
                    this.position.y,
                    this.sqWidth,
                    this.sqHeight
                  ),
                  this.ctx.restore());
              },
            },
            {
              key: 'updateParticle',
              value: function () {
                return (
                  this.updateRotation(a(15)),
                  this.updateSubtractWidth(),
                  this.updateSqWidth(),
                  this.updatePosition()
                );
              },
            },
            {
              key: 'updatePosition',
              value: function () {
                var t = new u(
                  this.velocity.x * this.deltaTime,
                  this.velocity.y * this.deltaTime
                );
                return (
                  this.velocity.add(this.gravity).multiply(0.99),
                  this.position.add(t),
                  {
                    translateX: this.sqWidth / 2 + this.position.x,
                    translateY: this.sqHeight / 2 + this.position.y,
                  }
                );
              },
            },
            {
              key: 'updateRotation',
              value: function (t) {
                this.rotationDegree += t;
              },
            },
            {
              key: 'updateSubtractWidth',
              value: function () {
                this.sqWidth <= -20 && (this.substractWidth = !1),
                  20 <= this.sqWidth && (this.substractWidth = !0);
              },
            },
            {
              key: 'updateSqWidth',
              value: function () {
                this.sqWidth = this.substractWidth
                  ? this.sqWidth - a(5)
                  : this.sqWidth + a(5);
              },
            },
            {
              key: 'inViewport',
              get: function () {
                return this.position.y < this.ctx.canvas.scrollHeight;
              },
            },
          ]),
          r
        );
      })();
      function h(t) {
        return (h =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function p(t, e) {
        return (p =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function d(n) {
        var r = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var t,
            e = y(n);
          return (function (t, e) {
            return !e || ('object' !== h(e) && 'function' != typeof e)
              ? (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t)
              : e;
          })(
            this,
            r
              ? ((t = y(this).constructor), Reflect.construct(e, arguments, t))
              : e.apply(this, arguments)
          );
        };
      }
      function y(t) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var v = (function () {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && p(t, e);
        })(a, c);
        var o = d(a);
        function a(t, e, n) {
          var r;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
            (r = o.call(this));
          for (var i = 0; i < r.particlesAmount; i += 1)
            r.particlesArray.push(new l(t, e, n));
          return r;
        }
        return a;
      })();
      function b(t) {
        return (b =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function w(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function m(t, e, n) {
        return (m =
          'undefined' != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = O(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, e);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(t, e, n || t);
      }
      function g(t, e) {
        return (g =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function x(n) {
        var r = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var t,
            e = O(n);
          return (function (t, e) {
            return !e || ('object' !== b(e) && 'function' != typeof e)
              ? (function (t) {
                  if (void 0 !== t) return t;
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                })(t)
              : e;
          })(
            this,
            r
              ? ((t = O(this).constructor), Reflect.construct(e, arguments, t))
              : e.apply(this, arguments)
          );
        };
      }
      function O(t) {
        return (O = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var P = (function () {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && g(t, e);
        })(i, c);
        var r = x(i);
        function i(t) {
          var e;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, i),
            ((e = r.call(this)).addNewParticlesToStream = function () {
              for (var t = 0; t < e.particlesAmount / 60; t += 1)
                e.particlesArray.push(new l(e.ctx, e.randomCenterX, -10));
            }),
            (e.ctx = t);
          for (var n = 0; n < e.particlesAmount / 2; n += 1)
            e.particlesArray.push(new l(e.ctx, e.randomCenterX, -10));
          return e;
        }
        return (
          (function (t, e, n) {
            e && w(t.prototype, e), n && w(t, n);
          })(i, [
            {
              key: 'drawConfetti',
              value: function () {
                this.shouldRender && this.addNewParticlesToStream(),
                  m(O(i.prototype), 'drawConfetti', this).call(this);
              },
            },
            {
              key: 'randomCenterX',
              get: function () {
                return Math.floor(Math.random() * this.ctx.canvas.width);
              },
            },
          ]),
          i
        );
      })();
      function S(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var R = (function () {
        function n() {
          var r = this,
            t = (0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : {}
            ).canvasId,
            e = void 0 === t ? 'canfetti' : t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, n),
            (this.setCanvasSize = function () {
              var t = window.devicePixelRatio,
                e = window.innerWidth * t,
                n = window.innerHeight * t;
              (r.canvasSize = { width: e, height: n }),
                r.canvas.setAttribute('width', ''.concat(e)),
                r.canvas.setAttribute('height', ''.concat(n)),
                r.ctx.scale(t, t);
            }),
            (this.startStream = function () {
              return (
                r.emitters.push(new P(r.ctx)),
                r.isActive || ((r.isActive = !0), r.render()),
                r
              );
            }),
            (this.startBurst = function () {
              return (
                window.addEventListener('click', r.addBurstEmitter),
                r.isActive || ((r.isActive = !0), r.render()),
                r
              );
            }),
            (this.stopBurst = function () {
              return (
                window.removeEventListener('click', r.addBurstEmitter),
                r.isActive || ((r.isActive = !0), r.render()),
                r
              );
            }),
            (this.stopStream = function () {
              r.emitters.forEach(function (t) {
                return t.stopDrawing();
              });
            }),
            (this.addBurstEmitter = function (t) {
              var e = t.clientX,
                n = t.clientY;
              r.emitters.push(new v(r.ctx, e, n)),
                r.isActive || ((r.isActive = !0), r.render());
            }),
            (this.render = function () {
              var t, e, n;
              r.allEmittersDoneRendering && (r.isActive = !1),
                r.emitters.length &&
                  ((e = (t = r.canvasSize).width),
                  (n = t.height),
                  r.ctx.clearRect(0, 0, e, n),
                  r.emitters.forEach(r.drawEmitterParticles),
                  window.requestAnimationFrame(r.render));
            }),
            (this.drawEmitterParticles = function (t, e) {
              t.isDoneRendering ? r.emitters.splice(e, 1) : t.drawConfetti();
            }),
            (this.canvas = document.getElementById(e)),
            (this.canvasSize = { width: 0, height: 0 }),
            (this.ctx = this.canvas.getContext('2d')),
            (this.emitters = []),
            (this.isActive = !1),
            (this.burstEnabled = !1),
            this.setCanvasSize(),
            window.addEventListener('resize', this.setCanvasSize),
            this
          );
        }
        return (
          (function (t, e, n) {
            e && S(t.prototype, e), n && S(t, n);
          })(n, [
            {
              key: 'allEmittersDoneRendering',
              get: function () {
                return this.emitters.every(function (t) {
                  return t.isDoneRendering;
                });
              },
            },
          ]),
          n
        );
      })();
      e.default = R;
    },
  }).default;
});
