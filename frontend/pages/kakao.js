(function (T) {
  function Oa() {
    return function () {};
  }
  function $b(a) {
    return function (b) {
      this[a] = b;
    };
  }
  function n(a) {
    return function () {
      return this[a];
    };
  }
  function R() {}
  function m(a, b) {
    function d() {}
    d.prototype = b.prototype;
    a.prototype = new d();
    a.prototype.constructor = a;
    a.Xb = b.prototype;
    d.prototype = f;
  }
  function zc(a) {
    return 'string' == typeof a;
  }
  function Ea(a) {
    return 'number' == typeof a;
  }
  function w(a, b) {
    return a === V ? b : a;
  }
  function hb(a) {
    return a === V || a;
  }
  function ya(a, b) {
    return function () {
      a.apply(b, arguments);
    };
  }
  function ac(a, b) {
    return Array.prototype.slice.call(a, b || 0);
  }
  function K(a) {
    return a instanceof qa ? a.W() : a;
  }
  function va(a) {
    return a.sh();
  }
  function bc(a) {
    if (a instanceof ha) {
      var b = a.rb();
      return new Y(K(a.B()), K(b));
    }
    return a;
  }
  function Ac(a, b) {
    return new ha(va(a), va(b));
  }
  function cc(a, b, d) {
    for (var G in a) a.hasOwnProperty(G) && b.call(d, G, a[G]);
  }
  function Pa(a, b) {
    return a.indexOf(b);
  }
  function q(a, b, d) {
    a.forEach(b, d);
  }
  function Jb(a, b, d) {
    return a.map(b, d);
  }
  function rb(a, b) {
    for (var d = a.length - 1; 0 <= d; --d) a[d] === b && a.splice(d, 1);
  }
  function r(a) {
    return document.createElement(a);
  }
  function ib(a) {
    return (a && a.ownerDocument) || document;
  }
  function Fa(a) {
    var b = a && a.parentNode;
    b && b.removeChild(a);
  }
  function dc(a, b) {
    return (
      b &&
      (a.compareDocumentPosition
        ? !!(a.compareDocumentPosition(b) & 16)
        : a != b && a.contains(b))
    );
  }
  function Kb(a, b) {
    for (var d in b) b.hasOwnProperty(d) && a.setAttribute(d, b[d]);
  }
  function i(a, b) {
    var d = a.style,
      G;
    for (G in b) b.hasOwnProperty(G) && (d[G] = b[G]);
  }
  function za(a, b) {
    a.style.cssText += ';' + b;
  }
  function jb(a) {
    za(a, 'display:block');
  }
  function Qa(a) {
    za(a, 'display:none');
  }
  function O(a) {
    a.style.position = 'absolute';
  }
  function Dd(a) {
    return Jb(Ze, function (b) {
      return b + a + ';';
    }).join('');
  }
  function Lb(a) {
    za(a, Dd('user-select:none') + Dd('user-drag:none'));
    a.unselectable = 'on';
    a.draggable = k;
  }
  function L(a, b, d) {
    za(
      a,
      'width:' +
        (Ea(b) ? A(0, b) + 'px' : b) +
        ';height:' +
        (Ea(d) ? A(0, d) + 'px' : d)
    );
  }
  function Aa(a, b, d, G, c) {
    d === V && (d = b);
    G === V && (G = b);
    c === V && (c = d);
    b = String(
      (Ea(b) ? b + 'px' : b) +
        ' ' +
        (Ea(d) ? d + 'px' : d) +
        ' ' +
        (Ea(G) ? G + 'px' : G) +
        ' ' +
        (Ea(c) ? c + 'px' : c)
    );
    a.style.margin = b;
  }
  function sa(a, b) {
    M || (a.style.cursor = b);
  }
  function Wa(a, b) {
    var d = /^https?:/.test(b) ? 'url(' + b + ')' : b;
    a.style.background = d;
  }
  function kb(a, b, d) {
    a.style.backgroundSize = b + 'px ' + d + 'px';
  }
  function Ba(a, b) {
    a.style.zIndex = String(b);
  }
  function aa(a, b, d) {
    i(a, { left: b + 'px', top: d + 'px' });
  }
  function Ed(a, b, d) {
    Ea(b) && (b += 'px');
    d === V ? (d = b) : Ea(d) && (d += 'px');
    i(a, { transformOrigin: b + ' ' + d, webkitTransformOrigin: b + ' ' + d });
  }
  function Ra(a, b, d) {
    this.wj =
      (d ? d + ' ' : '') +
      'url(' +
      ec +
      ') no-repeat ' +
      (-a || 0) +
      'px ' +
      (-b || 0) +
      'px';
  }
  function sb(a, b) {
    i(b, { background: a.wj });
    kb(b, tb, ub);
  }
  function o(a, b, d, G, c) {
    function g(a) {
      a = a || Xa.event;
      a.target || (a.target = a.srcElement);
      return g.ri.call(g.scope || g.target, a);
    }
    var j;
    j = g;
    j.target = a;
    j.type = b;
    j.ri = d;
    j.scope = G;
    j.options = c === V ? k : c === l ? l : c;
    a.addEventListener
      ? a.addEventListener(b, j, j.options)
      : a.attachEvent('on' + b, j);
    a = $e++;
    Wc[a] = j;
    return a;
  }
  function z(a) {
    var b = Wc[a];
    b &&
      (b.target.removeEventListener
        ? b.target.removeEventListener(b.type, b, b.options)
        : b.target.detachEvent('on' + b.type, b),
      delete Wc[a]);
  }
  function ta(a, b) {
    if (b.getBoundingClientRect) {
      var d = b.getBoundingClientRect();
      return new F(
        ((M ? a.pageX - T.pageXOffset : a.clientX) - d.left) | 0,
        ((M ? a.pageY - T.pageYOffset : a.clientY) - d.top) | 0
      );
    }
    var c = (d = 0);
    do (d += b.offsetLeft || 0), (c += b.offsetTop || 0);
    while ((b = b.offsetParent));
    return new F(a.clientX - d, a.clientY - c);
  }
  function ba(a) {
    a.preventDefault && a.preventDefault();
    a.returnValue = k;
  }
  function Fd(a) {
    return 'which' in a
      ? 1 == a.which
      : a.preventDefault
      ? 0 == a.button
      : 1 == a.button;
  }
  function Ga() {
    this.o = {};
  }
  function h(a, b, d) {
    var c;
    (c = a.o[b]) &&
      q(
        c,
        function (a) {
          a && a.Pf.call(a.object || this, d);
        },
        a
      );
  }
  function Ka(a) {
    this.o = {};
    this.Wh = a;
  }
  function Ya(a) {
    Ka.call(this, a);
    for (
      var b = 0,
        a = ['webkit', 'moz'],
        d = Xa.requestAnimationFrame,
        c = Xa.cancelAnimationFrame,
        e = 0;
      e < a.length && !d;
      ++e
    )
      (d = Xa[a[e] + 'RequestAnimationFrame']),
        (c =
          Xa[a[e] + 'CancelAnimationFrame'] ||
          Xa[a[e] + 'CancelRequestAnimationFrame']);
    d ||
      (d = function (a) {
        var d = +new Date(),
          c = A(0, 16 - (d - b)),
          G = setTimeout(function () {
            a(d + c);
          }, c);
        b = d + c;
        return G;
      });
    c ||
      (c = function (a) {
        clearTimeout(a);
      });
    this.pj = d;
    this.Of = c;
    this.ba = f;
  }
  function Ha() {
    this.o = {};
  }
  function Gd(a, b) {
    b.a || b.M();
    b.Td = a;
    var d = a.a,
      c = b.a;
    d.childNodes[0] !== c && d.insertBefore(c, d.childNodes[0] || f);
  }
  function da(a, b) {
    b.a || b.M();
    b.Td = a;
    a.a.appendChild(b.a);
  }
  function Bc(a) {
    this.o = {};
    this.Mi = a.tj;
    this.ec = a.duration || 300;
    this.zg = a.Bk || 0;
    this.rf = a.Zb || Hd;
  }
  function Hd(a) {
    return a * (2 - a);
  }
  function Id(a) {
    return 1 - D(a - 1, 4);
  }
  function La(a) {
    this.o = {};
    this.ec = a.duration;
    this.rf = a.Zb || Cc.lk;
  }
  function Xc(a) {
    La.call(this, a);
    this.vc = 1;
    this.zb = a.yb;
    this.Pa = a.vb;
    this.Qa = a.wb;
    this.he = a.nf;
    this.ie = a.of;
    this.te = a.se;
    this.ve = a.ue;
  }
  function Yc(a) {
    La.call(this, a);
    this.he = a.nf;
    this.ie = a.of;
    this.te = a.se;
    this.ve = a.ue;
  }
  function fc(a) {
    La.call(this, a);
    this.vc = 1;
    this.zb = a.yb;
    this.Pa = a.vb;
    this.Qa = a.wb;
  }
  function Dc() {}
  function Zc() {
    this.ee = [];
  }
  function gc(a) {
    a.Ea();
    q(
      a.ee,
      function (a) {
        if (a.visible)
          if ('path' === a.type) {
            var d = a.Wg,
              c = a.closed,
              e = this.r.getContext('2d');
            e.save();
            e.strokeStyle = a.strokeStyle || '#000';
            e.lineWidth = a.ad || 1;
            e.fillStyle = a.fillStyle || 'transparent';
            e.lineCap = a.lineCap || 'round';
            e.beginPath();
            q(
              d,
              function (d) {
                e.moveTo(d[0] || 0, d[1] || 0);
                if (d[0] == d[2] && d[1] == d[3])
                  e.arc(d[0], d[1], a.ad / 4, 2 * Math.PI, l);
                else
                  for (var g = 2; g < d.length; g += 2)
                    e.lineTo(d[g], d[g | 1]);
                c && e.closePath();
              },
              this
            );
            e.fill('evenodd');
            e.stroke();
            e.restore();
            q(
              d,
              function (d) {
                if (a.Kj && 4 <= d.length) {
                  var c = d.slice(2, 4).concat(d.slice(0, 4));
                  Jd(this, a.ad, a.strokeStyle, c);
                }
                a.ni &&
                  4 <= d.length &&
                  ((c = d.slice(d.length - 4)),
                  Jd(this, a.ad, a.strokeStyle, c));
              },
              this
            );
          } else {
            var d = a.x,
              g = a.y,
              j = a.nj,
              E = a.oj,
              ca = d - j,
              f = g - E,
              h = d + j,
              k = g + E,
              j = 0.5522847498307936 * j,
              E = 0.5522847498307936 * E,
              s = this.r.getContext('2d');
            s.strokeStyle = a.strokeStyle || '#000';
            s.lineWidth = a.ad || 1;
            s.fillStyle = a.fillStyle || 'transparent';
            s.beginPath();
            s.moveTo(d, f);
            s.bezierCurveTo(d + j, f, h, g - E, h, g);
            s.bezierCurveTo(h, g + E, d + j, k, d, k);
            s.bezierCurveTo(d - j, k, ca, g + E, ca, g);
            s.bezierCurveTo(ca, g - E, d - j, f, d, f);
            s.fill();
            s.stroke();
          }
      },
      a
    );
  }
  function Jd(a, b, d, c) {
    var a = a.r.getContext('2d'),
      e = Math.atan2(c[3] - c[1], c[2] - c[0]);
    a.save();
    a.translate(c[2], c[3]);
    a.rotate(e);
    a.scale(1.5 * b, 1.5 * b);
    a.fillStyle = d || '#000';
    a.beginPath();
    a.moveTo(1, 0);
    a.lineTo(-1, -1);
    a.lineTo(-1, 1);
    a.fill();
    a.restore();
  }
  function vb() {
    this.Hk = '';
    this.Kk = [];
    this.ob = {};
  }
  function hc(a) {
    return document.createElementNS('http://www.w3.org/2000/svg', a);
  }
  function Kd(a, b, d, c) {
    var b = a.Vd + '-arrow-' + d + '-' + b,
      a = a.pd,
      e = document.getElementById(b);
    if (e) return e.setAttribute('style', 'stroke:none;fill:' + c), b;
    e = hc('marker');
    e.id = b;
    e.setAttribute('style', 'stroke:none;fill:' + c);
    e.setAttribute('orient', 'auto');
    e.setAttribute('viewBox', '-3,-3,6,6');
    a.appendChild(e);
    c = hc('path');
    c.setAttribute('d', 'start' === d ? 'M-3,0L3,-3v6z' : 'M3,0L-3,-3v6z');
    e.appendChild(c);
    return b;
  }
  function Ld(a, b, d) {
    var c = a.ob[d];
    rb(c, b);
    0 === c.length && delete a.ob[d];
  }
  function $c() {}
  function Md(a) {
    var b = '';
    cc(a, function (a, c) {
      b += a + '=' + c + ' ';
    });
    return b;
  }
  function Nd(a, b) {
    this.point = a;
    this.latLng = va(b);
  }
  function Sa(a, b) {
    this.width = Number(a);
    this.height = Number(b);
  }
  function Ec() {}
  function ic(a, b) {
    var d = b.a;
    b instanceof wb
      ? ((a.Ek = b), (a.overlayLayer = a.Xe = d))
      : b instanceof jc && ((a.zk = b), (a.graphicsLayer = a.yk = d));
  }
  function Mb(a) {
    this.b = a;
  }
  function Ia(a) {
    this.b = a;
  }
  function ad(a) {
    this.b = a;
    this.ph = function (a, d) {
      return new Ma(3.2 * a + 24e4, 3.2 * d + 48e4);
    };
    this.qe = function (a, d) {
      return new N(0.3125 * (a - 24e4), 0.3125 * (d - 48e4));
    };
  }
  function Za(a) {
    this.b = a;
  }
  function $a() {
    this.o = {};
  }
  function Nb(a, b, d, c, e, g, j, E) {
    this.S = a;
    this.O = b;
    this.jc = d;
    this.Je = c || f;
    this.ci = e || c || f;
    this.Xh = g || f;
    this.zj = j || f;
    this.Gb = E || '';
    this.Ib = k;
    this.o = {};
  }
  function bd(a, b) {
    a.nc = b;
    sa(a.a, b ? 'default' : 'pointer');
    sb((b && a.zj) || a.jc, a.a);
  }
  function Fc(a, b) {
    a.Ib != b &&
      ((a.Ib = b),
      sa(a.a, b ? 'default' : 'pointer'),
      sb((b && a.Xh) || a.jc, a.a));
  }
  function jc() {
    this.o = {};
    this.Tf = this.Sf = 0;
  }
  function Od(a) {
    var b = a.b,
      d = a.G,
      c = a.r,
      e = b.m(),
      g = b.i();
    Gc(a.a, 1);
    d.ja(5 * e, 5 * g);
    d = -ia(b) - 2 * e;
    b = -ja(b) - 2 * g;
    aa(c, d, b);
    a.Sf = d;
    a.Tf = b;
  }
  function wb() {
    this.o = {};
  }
  function Ob(a) {
    this.o = {};
    this.b = a;
    this.$ = [[], [], [], [], [], [], [], [], []];
  }
  function lb() {
    this.o = {};
  }
  function kc(a) {
    this.o = {};
    a = a || {};
    this.ih = [];
    this.sf = [];
    this.tf = { 2: lc(80), 5: lc(100), 9: lc(120), 11: lc(140), 13: lc(160) };
    this.Kb = a.gap || 8;
    this.We = !!a.noTip;
    this.fd = a.autoFold;
    this.ye = !!a.folding;
    this.Le = f;
    this.fd && (this.Ni = this.fd.maxHeight || 240);
    this.Nc = k;
  }
  function Pd(a, b) {
    return A(a.Sb, P(a.Mg, (((b + a.Kb / 2) / a.Kb) | 0) + a.Sb));
  }
  function lc(a) {
    var b = r('div');
    O(b);
    L(b, 29, 15);
    Aa(b, -6, 0, 0, 0);
    Wa(b, '-0px -' + a + 'px url(' + ec + ')');
    kb(b, tb, ub);
    return b;
  }
  function F(a, b) {
    this.x = Number(a);
    this.y = Number(b);
  }
  function Qd(a, b, d, c, e, g, j) {
    this.Hf = a;
    this.bg = b;
    this.xh = d;
    this.yh = c;
    this.Pg = e;
    this.Mf = g;
    this.Nf = j;
  }
  function ab(a, b) {
    this.La = Number(a);
    this.Ma = Number(b);
  }
  function qa(a, b) {
    ab.call(this, b, a);
  }
  function N(a, b) {
    ab.call(this, a, b);
  }
  function wa(a, b) {
    return b.ph(a.e(), a.c());
  }
  function Z(a, b, d, c) {
    this.pan = Number(a || 0);
    this.tilt = Number(b || 0);
    this.zoom = Number(d || 0);
    this.panoId = c || f;
  }
  function Ma(a, b) {
    ab.call(this, a, b);
  }
  function cd(a, b) {
    var d = dd(a, b);
    return new F(d.x - ia(b), d.y - ja(b));
  }
  function dd(a, b) {
    var d = b.B(),
      c = D(2, -b.k());
    return new F(
      H(a.e() * c) - H(d.e() * c),
      b.i() - H(a.c() * c) + H(d.c() * c)
    );
  }
  function Rd(a, b, d) {
    var c = D(2, -d),
      d = Ca((a.La - b.La) * c),
      a = Ca((a.Ma - b.Ma) * c);
    return 1 > d && 1 > a;
  }
  function Y(a, b) {
    a && this.tb(a, b || a);
  }
  function ha(a, b) {
    Y.call(this);
    a && this.tb(a, b);
  }
  function mc() {
    this.j = [];
    this.Ya = new Ya(13);
    this.Ya.addListener('tick', this.tc, this);
  }
  function xb() {
    this.o = {};
    this.a = yb.cloneNode(l);
    this.R = bb.IDLE;
    this.$d = f;
    this.Ma = this.La = 0;
  }
  function Sd(a, b) {
    b != a.$d &&
      (L(a.a, Math.ceil(a.Sa.m() * b), Math.ceil(a.Sa.i() * b)), (a.$d = b));
  }
  function nc(a) {
    this.o = {};
    this.x = a.x;
    this.y = a.y;
    this.zoom = a.zoom;
    this.Sa = a.tileset;
    this.R = bb.IDLE;
    a = this.a = this.Sa.qg(this.x, this.y, this.zoom);
    O(a);
    Lb(a);
    za(a, 'min-width:0;min-height:0;max-width:none;max-height:none');
    L(a, this.Sa.m(), this.Sa.i());
  }
  function mb(a, b, d) {
    ab.call(this, a, b);
    this.H = d;
  }
  function fa(a, b, d, c, e, g, j, E) {
    var f = {};
    'object' == typeof a
      ? (f = a)
      : ((f.width = a),
        (f.height = b),
        (f.urlFunc = d),
        (f.copyrights = c),
        (f.dark = e),
        (f.minZoom = g),
        (f.maxZoom = j),
        (f.getTile = E));
    this.S = f.width;
    this.O = f.height;
    this.He = f.urlFunc;
    this.md = f.copyrights || [];
    this.qg = f.getTile;
    this.Uh = f.dark || k;
    this.D = f.minZoom || 0;
    this.Q = f.maxZoom || this.D;
  }
  function Td(a, b, d) {
    for (var c = 0; c < a.md.length; ++c) {
      var e = a.md[c];
      if (b >= e.D && (e.Da ? e.Da.kd(d) : 1)) return e.Xi;
    }
    return '';
  }
  function Ud(a, b, d) {
    for (var c = 0; c < a.md.length; ++c) {
      var e = a.md[c];
      if (b >= e.D && (e.Da ? e.Da.kd(d) : 1)) return e.Gj;
    }
    return '';
  }
  function ma(a, b, d, c) {
    this.Xi = a;
    this.Gj = b;
    this.D = d || 0;
    this.Da = c ? bc(c) : f;
  }
  function xa(a) {
    return Ta + (Ua ? 'ssl.daumcdn.net/' : '') + 'map' + a + '.daumcdn.net';
  }
  function oc() {
    return Ta + 'boundary.map.daum.net';
  }
  function Pb(a) {
    return function (b, d, c) {
      var e;
      e = c + 5;
      return -751908 >> e <= b &&
        b <= 1235811 >> e &&
        -249697 >> e <= d &&
        d <= 1274461 >> e
        ? a(b, d, c)
        : af + 'white.png';
    };
  }
  function zb(a, b) {
    la[a] = Da.length;
    Da.push(b);
  }
  function Vd() {
    Da[la.ROADMAP] = ed;
    Da[la.SKYVIEW] = fd;
    Da[la.HYBRID] = fd;
    Da[la.OVERLAY] = gd;
    zb('ROADMAP_HD', Wd);
    zb('SKYVIEW_HD', Xd);
    zb('OVERLAY_HD', Yd);
    Da[la.BICYCLE] = Zd;
    Da[la.BICYCLE_HYBRID] = $d;
    zb('BICYCLE_HD', ae);
    zb('BICYCLE_HYBRID_HD', be);
    Da[la.USE_DISTRICT] = ce;
    zb('USE_DISTRICT_HD', de);
    Qb = k;
  }
  function Hc() {
    xb.call(this);
  }
  function Ic() {
    this.a = ee.pop() || hd.cloneNode(l);
  }
  function Rb() {
    this.o = {};
    this.hc = [];
    this.eg = ib(V).createDocumentFragment();
  }
  function fe(a, b, d, c, e) {
    a.Yb.qg
      ? (a = new nc({ x: b, y: d, zoom: c, tileset: e }))
      : ((a = new a.Ef()), (a.x = b), (a.y = d), (a.zoom = c), (a.Sa = e));
    return a;
  }
  function Sb(a) {
    this.o = {};
    this.Xa = [];
    this.b = a;
  }
  function bf(a, b, d, c) {
    var e = [];
    q(
      a.Xa,
      function (a) {
        a = a.sb();
        e = e.concat((b ? Ud(a, d, c) : Td(a, d, c)) || []);
      },
      a
    );
    return e;
  }
  function id() {
    Rb.call(this);
  }
  function pc(a) {
    this.o = {};
    this.l = a || {};
    this.a = f;
  }
  function Jc(a) {
    this.o = {};
    this.b = a;
    this.ea = [];
  }
  function Ab() {
    this.o = {};
  }
  function Kc(a, b) {
    a.Wf && sa(a.a, a.Xf || (b ? ge : cf));
  }
  function Bb(a) {
    Rb.call(this);
    this.j = a;
    this.fg = [];
    a.addListener('tilesloaded', this.Rf, this);
  }
  function Tb() {
    this.o = {};
    this.j = [];
    this.Oc = 0;
  }
  function $() {
    this.o = {};
  }
  function qc(a, b, d, c, e) {
    var g = d || {};
    d instanceof F && (g = { offset: d, shape: c, coords: e });
    this.Yj = a;
    this.lf = b;
    this.Jj = g.spriteSize || b;
    this.Qd = g.offset || new F((b.m() - 1) >> 1, b.i() - 1);
    this.de = g.shape || '';
    this.n = g.coords || '';
    this.Ij = g.spriteOrigin || new F(0, 0);
    this.Ih = g.alt || '';
  }
  function u(a) {
    this.o = {};
    a = a || {};
    this.$a = a.zIndex || 0;
    a.position && this.s(a.position);
    this.Ba = w(a.altitude, 0);
    this.Ha = w(a.range, 500);
    this.T = a.image || he;
    hb(a.clickable) && (this.Na = l);
    this.K = a.draggable;
    this.Hb = hb(a.active);
    this.M();
    this.eh(a.title || '');
    a.opacity && this.hf(a.opacity);
    this.F(a.map || f);
    M && ((this.bb = new Ka(750)), this.bb.addListener('tick', this.Yd, this));
  }
  function ie(a) {
    if (a.T.de) {
      var b = a.Fc,
        d = a.Ec;
      if (!b) {
        b = a.Fc = r('img');
        b.src = Ub;
        b.alt = '';
        za(
          b,
          '-webkit-touch-callout:none;min-width:0;min-height:0;max-width:99999px;max-height:none;border:0;display:block'
        );
        O(b);
        Lb(b);
        a.a.appendChild(b);
        ++je;
        d = 'daum.maps.Marker.Area:' + je.toString(36);
        b.useMap = '#' + d;
        var c = (a.zd = r('map'));
        c.id = d;
        c.name = d;
        a.a.appendChild(c);
        d = a.Ec = r('area');
        d.href = 'javascript:void(0)';
        d.alt = '';
        c.appendChild(d);
        i(d, { webkitTapHighlightColor: 'transparent' });
      }
      c = a.T.lf;
      L(b, c.width, c.height);
      d.shape = a.T.de || 'rect';
      b = a.T;
      c = b.lf;
      d.coords = b.n || [0, 0, c.m(), c.i()].join();
      d.title = a.Gb;
    } else a.fa && (a.fa.title = a.Gb);
  }
  function ke(a) {
    var b = a.T.de ? a.Ec : a.fa,
      d = M ? 'touchstart' : ua ? 'MSPointerDown' : 'mousedown';
    a.Nh = o(b, M ? 'touchend' : ua ? 'MSPointerUp' : 'click', a.jd, a);
    a.ki = o(b, d, a.hi, a);
    M ||
      ((a.Ri = o(b, 'mouseover', a.Lc, a)),
      (a.Qi = o(b, 'mouseout', a.Kc, a)),
      (a.vj =
        Cb || le
          ? o(a.a, 'contextmenu', a.li, a)
          : o(b, 'contextmenu', a.Yd, a)));
  }
  function me(a) {
    a.Ad = k;
    a.Pb = k;
    a.Zd = k;
    M && a.bb.stop();
    z(a.fi);
    z(a.ji);
    jd();
  }
  function I(a) {
    this.o = {};
    a = a || {};
    this.ck = w(a.xAnchor, 0.5);
    this.dk = w(a.yAnchor, 0.5);
    var b = (this.a = r('div'));
    O(b);
    this.J(a.zIndex || 0);
    i(b, { whiteSpace: 'nowrap' });
    a.position && this.s(a.position);
    this.Ba = w(a.altitude, 0);
    this.Ha = w(a.range, 500);
    a.clickable && (this.Na = l);
    this.Aa = l;
    a.content && this.ce(a.content);
    this.F(a.map || f);
  }
  function ne(a) {
    var b = a.a;
    Aa(b, (-b.offsetHeight * a.dk) | 0, 0, 0, (-b.offsetWidth * a.ck) | 0);
  }
  function Va() {
    this.o = {};
    this.Eb = {};
    this.Z = k;
  }
  function kd(a, b) {
    var d = [
      o(b, M ? 'touchstart' : 'mousedown', a.di, a),
      o(b, M ? 'touchmove' : 'mousemove', a.Ue, a),
      o(b, M ? 'touchend' : 'mouseup', a.Xj, a),
    ];
    q(
      ['mouseover', 'mouseout'],
      function (a) {
        var c = o(
          b,
          a,
          function (b) {
            b = this.Fa(M ? b.touches[0] : b);
            h(this, a, b);
          },
          this
        );
        d.push(c);
      },
      a
    );
    return d;
  }
  function ga(a) {
    this.l = {};
    a = a || {};
    Va.call(this);
    this.Ga = [];
    this.Xg = [];
    this.Ic = [];
    this.Ud = [];
    this.Sg = [];
    this.Eb = [];
    this.Wb(a);
    this.l.zIndex = a.zIndex || 0;
    this.Db(a);
    this.F(a.map || f);
  }
  function oe(a, b) {
    var d = (a.Sg = b || []);
    ld(d[0]) || (d = [d]);
    a.Ud = Jb(d, function (a) {
      return Jb(a, K);
    });
    a.Z = l;
  }
  function pe(a, b) {
    b = !!b;
    b != a.qd &&
      (q(
        a.Ic,
        function (a) {
          this.G.nb(a, b);
        },
        a
      ),
      (a.qd = b));
  }
  function ea(a) {
    ga.call(this, a);
  }
  function na(a) {
    this.l = {};
    a = a || {};
    Va.call(this);
    this.xb = f;
    this.Ga = [];
    this.l.zIndex = a.zIndex || 0;
    this.Wb(a);
    this.Db(a);
    this.F(a.map || f);
  }
  function qe(a, b) {
    if (!a.Da || !a.Da.Jb(b)) (a.Da = bc(b)), (a.Z = l);
  }
  function W(a) {
    this.l = {};
    a = a || {};
    Va.call(this);
    this.qb = f;
    this.Ga = [];
    this.l.zIndex = a.zIndex || 0;
    this.Wb(a);
    this.Hc || (a.radius = w(a.radius, 100));
    this.Db(a);
    this.F(a.map || f);
  }
  function re(a, b) {
    var d = a.l.center;
    if (!d || !d.va(b)) (a.n = K(b)), (a.Z = l);
  }
  function J(a) {
    a.rx = w(a.rx, 100);
    a.ry = w(a.ry, 100);
    W.call(this, a);
  }
  function B(a) {
    this.o = {};
    a = a || {};
    a.position && this.s(a.position);
    this.Ba = w(a.altitude, 0);
    this.Ha = w(a.range, 500);
    this.rj = !!a.removable;
    this.Qd = a.offset || df;
    this.M();
    this.J(a.zIndex || 0);
    se(this, a.content || '');
    this.Kf = !a.disableAutoPan;
    this.F(a.map || f);
    this.If = f;
  }
  function se(a, b) {
    a.cc = b;
    for (var d = a.Uf, c; (c = d.firstChild); ) d.removeChild(c);
    zc(b) ? (d.innerHTML = b) : d.appendChild(b);
  }
  function md(a) {
    var b = a.a,
      d = a.Uf;
    L(b, 640, 'auto');
    var c = (a.S = A(150, d.offsetWidth)),
      a = (a.O = A(23, d.offsetHeight));
    L(b, c, a);
    d.className = d.className;
  }
  function Lc() {
    this.o = {};
  }
  function Db() {
    this.o = {};
    this.Vb = new Lc();
    this.Uc = this.Aa = l;
    this.position = 0;
    this.ah = k;
    this.Hh = ['left', 'right'];
  }
  function te(a, b) {
    b = !!b;
    b != a.Uc && ((a.Uc = b) ? a.Vb.show() : a.Vb.P());
  }
  function cb(a) {
    this.o = {};
    this.a = a;
    if (
      'static' ==
      (a.currentStyle || a.ownerDocument.defaultView.getComputedStyle(a, f))
        .position
    )
      a.style.position = 'relative';
    a.style.overflow = 'hidden';
    Wa(a, 'url(' + ra + 'bg_tile.png)');
  }
  function Mc(a, b) {
    this.ja(a, b);
  }
  function rc(a, b, d) {
    var b = A(a.D, P(a.Q, b)),
      c = D(2, b - a.H);
    a.ka = d.la((a.ka.e() - d.e()) * c, (a.ka.c() - d.c()) * c);
    a.ca = d.la((a.ca.e() - d.e()) * c, (a.ca.c() - d.c()) * c);
    a.H = b;
  }
  function ia(a) {
    var b = D(2, -a.H);
    return H((a.ca.e() - a.ka.e()) * b);
  }
  function ja(a) {
    var b = D(2, -a.H);
    return H((a.ka.c() - a.ca.c()) * b);
  }
  function Eb(a, b) {
    var d = a.B(),
      c = D(2, -a.H);
    return new Ma((d.e() * c + b.e()) / c, (d.c() * c + a.i() - b.c()) / c);
  }
  function Vb(a, b) {
    this.ja(a, b);
    this.kc = db;
  }
  function nd(a, b) {
    var d;
    this.o = {};
    this.a = a;
    this.Ck = this.Hb = k;
    this.kh = 32;
    'object' === typeof b || b
      ? ((d = l), b.speed && 0 <= b.speed && (this.kh = b.speed))
      : (d = k);
    this.$c = k;
    this.Dg = this.eb = 0;
    this.ic = new Ya();
    this.ic.addListener('tick', this.Ca, this);
    this.Kd = this.ra = this.Me = this.Oe = this.Ne = 0;
    this.hb = new Ya();
    this.hb.addListener('tick', this.L, this);
    this.Ld = new Ka(this.Ui);
    this.Ld.addListener('tick', this.Ti, this);
    this.Zf = new Ka(50);
    this.Zf.addListener('tick', this.Yh, this);
    this.setActive(d);
  }
  function ue(a, b) {
    a.Ki !== b &&
      ((a.$c = k),
      b
        ? ((a.Fg = o(document, 'keydown', a.Ji, a)),
          (a.Gg = o(document, 'keyup', a.Li, a)))
        : (z(a.Fg), z(a.Gg), (a.Fg = f), (a.Gg = f), ve(a)),
      (a.Ki = b));
  }
  function ve(a) {
    a.hb.stop();
    a.Kd = 0;
    a.ra = 0;
    a.eb = 0;
  }
  function sc(a) {
    cb.call(this, a);
    this.Gh = [];
    this.b = new Mc(this.a.clientWidth, this.a.clientHeight);
    a = f;
    document.createElementNS &&
    document.implementation &&
    document.implementation.hasFeature(
      'http://www.w3.org/TR/SVG11/feature#BasicStructure',
      '1.1'
    )
      ? (a = new vb())
      : T.HTMLCanvasElement
      ? (a = new Zc())
      : document.namespaces &&
        document.namespaces.add &&
        (document.namespaces.add(
          'v',
          'urn:schemas-microsoft-com:vml',
          '#default#VML'
        ),
        (a = new $c()));
    this.G = a;
    this.ua = new Ab();
    da(this, this.ua);
    a = this.ua.a;
    a.style.cssText += 'left:0;top:0;width:100%;height:100%;touch-action:none';
    Na &&
      i(a, {
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        '-webkit-focus-ring-color': 'rgba(0, 0, 0, 0)',
      });
    this.t = new Ab();
    this.t.b = this.b;
    da(this.ua, this.t);
    this.t.addListener('pan', this.Ta, this);
    this.t.addListener('panned', this.Ye, this);
    this.t.addListener('canceled', this.ij, this);
    var b = (this.j = new Tb());
    this.u = new Bb(b);
    this.u.b = this.b;
    da(this.t, this.u);
    this.u.addListener('scaled', this.Ab, this);
    this.na = new Bb(b);
    this.na.b = this.b;
    da(this.t, this.na);
    this.na.addListener('scaled', this.Ab, this);
    b.addListener('tilesloaded', this.qh, this);
    this.ia = new Sb(this.b);
    da(this.t, this.ia);
    this.ma = new Jc(this.b);
    da(this.t, this.ma);
    this.Oa = new Db();
    this.Oa.addListener('logo', this.ej, this);
    da(this, this.Oa);
    this.I = new jc();
    this.I.b = this.b;
    this.I.be(this.G);
    da(this.t, this.I);
    this.da = new wb();
    da(this.t, this.da);
    this.xc = new Ob(this.b);
    da(this, this.xc);
    this.oe = R;
    this.Qc = f;
    this.Ug = k;
    this.gj = l;
    this.Fb = [];
    this.bb = new Ka(750);
    this.bb.addListener('tick', this.mi, this);
    M
      ? ((this.Ik = o(a, 'touchstart', this.Uj, this)),
        (this.Ei = o(a, 'touchmove', this.vg, this)),
        (this.Fi = o(a, 'touchend', this.wg, this)))
      : ((this.Dk = o(a, 'mousedown', this.Qe, this)),
        (this.Ei = o(a, 'mousemove', this.vg, this)),
        (this.Fi = o(a, 'mouseup', this.wg, this)));
    o(a, 'mouseover', this.Lc, this);
    o(a, 'mouseout', this.Kc, this);
    o(a, 'contextmenu', this.Yd, this);
  }
  function we(a, b) {
    var d = a.ua.a;
    b && !a.K
      ? ((d.style.Sj = 'none'), a.pc(f), a.ua.pc(l), (a.K = l))
      : !b &&
        a.K &&
        ((d.style.Sj = 'auto'),
        a.ga !== f && a.ub(f, l),
        a.pc('default'),
        a.ua.pc(k),
        (a.K = k));
  }
  function xe(a, b) {
    if (b && !a.ae) {
      var d = a.ua.a;
      a.Pi = o(d, 'mousewheel', a.Te, a);
      a.Oi = o(d, 'DOMMouseScroll', a.Te, a);
      a.bk = o(d, 'wheel', a.Te, a);
      a.ae = l;
    } else !b && a.ae && (z(a.Pi), z(a.Oi), z(a.bk), (a.ae = k));
  }
  function ye(a, b) {
    if (b && !a.ze) {
      var d = a.ua.a;
      a.si = o(d, Na ? 'touchstart' : 'gesturestart', a.ig, a);
      ua &&
        ((a.Ve = new T.MSGesture()),
        (a.Ve.target = a.t.a),
        (a.Pc = 0),
        (a.Wi = o(d, 'MSPointerDown', a.ig, a)),
        (a.Vi = o(d, 'selectstart', ba, a)));
      a.ze = l;
    } else
      !b &&
        a.ze &&
        (z(a.si), ua && (z(a.Wi), z(a.Vi), (a.Ve = f), (a.Pc = 0)), (a.ze = k));
  }
  function Ja(a) {
    var b = a.u.sb(),
      d = a.b.k(),
      c = a.b.C().W(a.h);
    a.Oa.V(d);
    te(a.Oa, a.Uc && 320 < a.b.m());
    var e = 480 > a.b.m(),
      b = [].concat((e ? Ud(b, d, c) : Td(b, d, c)) || []),
      b = b.concat(bf(a.ia, e, d, c), a.Gh),
      a = a.Oa,
      d = b;
    rb(d, '');
    a.Mj.innerHTML = d[0] ? ', ' + d.join(', ') : '';
  }
  function ze(a, b) {
    var d = Da[b],
      c = a.b,
      e = A(a.Id, d.D);
    c.D = e;
    e = P(a.Hd, d.Q);
    c.Q = e;
    c.k() < d.D && (rc(c, d.D, c.C()), q(a.sa, Nc), a.I.q(), a.ia.q());
    c.k() > d.Q && (rc(c, d.Q, c.C()), q(a.sa, Nc), a.I.q(), a.ia.q());
    Ae(a);
    a.u.Yc(d);
    a.u.q();
    b != la.HYBRID
      ? a.yd && (a.bf(la.OVERLAY), (a.yd = k))
      : a.ya != la.HYBRID && !a.yd && (a.ne(la.OVERLAY, l), (a.yd = l));
    Ja(a);
    c = a.Oa;
    d = d.Uh;
    i(c.a, { color: d ? '#fff' : '#000' });
    c.Mh.src = d ? ef : Be;
    c = c.Vb;
    i(c.Lf, { 'border-color': d ? '#fff' : '#000' });
    i(c.$f, { color: d ? '#fff' : '#000' });
    a.ya = b;
  }
  function Ce(a, b) {
    if (!a.A && ((a.Ug = Fb(a)), Kc(a.ua, l), a.ga === f)) {
      De.pause();
      a.Sc();
      var d = ib(a.t.a);
      M
        ? ((a.wh = o(d, 'touchmove', a.Tj, a, { passive: k })),
          (a.uh = o(d, 'touchend', a.vh, a)),
          (a.th = o(d, 'touchcancel', a.vh, a)))
        : ua
        ? ((a.Re = o(d, 'MSPointerMove', a.Jd, a)),
          (a.Se = o(d, 'MSPointerUp', a.ub, a)))
        : ((a.Re = o(d, 'mousemove', a.Jd, a)),
          (a.Se = o(d, 'mouseup', a.ub, a)));
      a.ga = l;
      d = ta(b.touches ? b.touches[0] : b, a.a);
      a.Pa = d.e();
      a.Qa = d.c();
      a.Fb = [];
    }
  }
  function Ee(a, b, d, c, e, g) {
    if (!a.A && (b || d)) {
      var j = a.b,
        E = ia(j),
        j = ja(j);
      a.Dd = a.b.C();
      b = a.Qc = new Yc({
        duration: c,
        Zb: e,
        nf: E,
        of: j,
        se: E - b,
        ue: j - d,
      });
      a.t.fj(b);
      b.start();
      g || (a.A = l);
    }
  }
  function tc(a, b, d, c) {
    Fb(a);
    a.Tb = k;
    var c = c || {},
      e = a.b,
      g = (a.Bb = a.Bb || Eb(a.b, d)),
      j = e.k() + b;
    if (j < e.D || j > e.Q) (a.Bb = f), (a.A = k);
    else {
      a.ed = !!b;
      a.ed && h(a, 'zoom_start');
      var E = D(2, -e.k()),
        ca = d.e() + H((e.B().e() - e.ca.e()) * E),
        d = d.c() - H((e.B().c() - e.ca.c()) * E);
      a.Dd = e.C();
      rc(e, j, g);
      a.Oa.V(e.k());
      g = c.duration;
      j = c.Zb;
      a.oe = c.complete || R;
      c.Lh
        ? ((c = ia(e)),
          (E = ja(e)),
          (e = cd(e.C(), e)),
          a.Pe(b, ca, d, c, E, c + (e.e() - ca), E + (e.c() - d), g, j))
        : a.$d(b, ca, d, g, j);
    }
  }
  function Ae(a) {
    Gc(a.na.a, 1);
    aa(a.na.a, 0, 0);
    Ba(a.u.a, 0);
    Ba(a.na.a, 1);
    var b = a.u;
    a.u = a.na;
    a.na = b;
    a.u.show();
  }
  function Fe(a) {
    var b = a[0],
      a = a[1];
    return D(D(b.screenX - a.screenX, 2) + D(b.screenY - a.screenY, 2), 0.5);
  }
  function Ge(a) {
    a.Be != f &&
      (Na && (z(a.Ae), (a.Ae = f)), z(a.Be), z(a.hg), (a.Be = f), (a.hg = f));
  }
  function nb(a) {
    h(a, 'idle');
  }
  function Wb(a) {
    a.u.q();
    a.I.q();
    a.ia.q();
    q(a.sa, Nc);
  }
  function Oc(a) {
    a.Ag && (a.qh(), (a.Ag = k));
  }
  function Fb(a) {
    return a.Qc && a.gj ? (a.Qc.cancel(), l) : k;
  }
  function p(a, b) {
    od = !!hb(b.tileAnimation);
    sc.call(this, a);
    this.sa = [];
    this.Mb = [];
    this.Ra = new Ec();
    ic(this.Ra, this.da);
    ic(this.Ra, this.I);
    this.I.Mb = this.Mb;
    var d = b.projectionId;
    this.Fk = d;
    this.h = d === f ? new Ia(this.b) : new ad(this.b);
    var b = b || {},
      d = b.mapTypeId || 1,
      c = Da[d],
      e = this.b;
    this.Id = w(b.minLevel, -Infinity);
    this.Hd = w(b.maxLevel, Infinity);
    var g = A(this.Id, c.D);
    e.D = g;
    c = P(this.Hd, c.Q);
    e.Q = c;
    e.V(A(e.D, P(e.Q, w(b.level, 3))));
    c = K(b.center);
    e.za(wa(c, this.h));
    e.ca = this.b.B();
    ze(this, d);
    hb(b.$scale) && ((this.Uc = l), te(this.Oa, l));
    d = hb(b.draggable);
    we(this, d);
    d && ((d = hb(b.scrollwheel)), xe(this, d), ye(this, d));
    b.disableDoubleClick ||
      (o(this.ua.a, 'dblclick', this.Yf, this),
      M &&
        ((this.od = new Ka(500)),
        this.od.addListener('tick', this.yg, this),
        o(this.ua.a, 'touchstart', this.Lj, this),
        o(this.ua.a, 'touchend', this.bi, this)));
    this.Rb = f;
    this.bh(b.keyboardShortcuts);
    this.hj = !!b.enablePanAnimation;
    this.ai = !b.disableDoubleClickZoom;
    hb(b.$status) || this.Oa.P();
    Ja(this);
    o(T, 'resize', this.Ia, this);
  }
  function Nc(a) {
    a.aa();
  }
  function He(a, b, d) {
    var d = d || {},
      c = d.padding || {},
      e = a.gd(b, c.top, c.right, c.bottom, c.left),
      c = a.b,
      g = c.k(),
      j = e.zoom;
    if (j == g) a.Vg(e.ac.W(a.h), d);
    else {
      var d = c.C(),
        e = e.ac,
        E = Math.pow(2, j - g),
        d = a.h.ab(
          a.h.qe((E * d.e() - e.e()) / (E - 1), (E * d.c() - e.c()) / (E - 1))
        );
      0 <= d.x && d.x < c.m() && 0 <= d.y && d.y < c.i()
        ? tc(a, j - g, d)
        : a.Vc(b);
    }
  }
  function oa(a, b) {
    return new U(a, b);
  }
  function pd(a) {
    var b = (a.Mc = '__daum$' + ++Ie + (+new Date()).toString(36));
    T[b] = new ka(a);
  }
  function ff(a) {
    a.aa();
  }
  function S(a, b) {
    cb.call(this, a);
    this.da = new wb();
    da(this, this.da);
    this.Ra = new Ec();
    ic(this.Ra, this.da);
    this.Tg = l;
    this.b = new Vb(a.clientWidth, a.clientHeight);
    this.h = new Za(this.b);
    pd(this);
    this.ba = Ie;
    this.l = b = b || {};
    b.serviceName = Ua ? 'maptunneling' : 'mapOpenApi';
    this.Zj = b.viewerUrl || gf;
    this.b.V(w(b.zoom, 0));
    b && b.panoId ? this.U(w(b.panoId, 0)) : this.U(0);
    t.addListener(this, 'viewpoint_changed', this.Ja);
    t.addListener(this, 'panoid_changed', this.Ja);
    this.ma = new Jc(new Mc(a.clientWidth, a.clientHeight));
    da(this, this.ma);
    var d = this.ma,
      c = new pc({ background: '#fff', opacity: 1 });
    d.me(c);
    var e = this.ma.a;
    i(e, { width: '100%', height: '100%', zIndex: 3 });
    var g = c.a;
    za(
      g,
      'z-index:3; height:92%; padding:10px 2% 5px; margin:-100$ 2% 5px; background:url(" '
    );
    i(g, {
      zIndex: 3,
      height: 'auto',
      width: '92%',
      padding: '10px',
      margin: '-100% 2% 5px',
      'background-image':
        'url("' + Ta + 't1.daumcdn.net/mapjsapi/images/bg_1x1_white_80.png")',
      'background-repeat': 'repeat',
      fontSize: '14px',
      'box-shadow': '3px 5px rgba(0, 0, 0, 0.3)',
      'word-break': 'break-all',
      transition: 'margin 1s',
    });
    T.setTimeout(function () {
      i(g, { marginTop: '5px' });
    }, 100);
    var j = r('p');
    i(j, { margin: 0 });
    j.innerHTML = '';
    j.appendChild(
      document.createTextNode(
        '[\uacf5\uc9c0]Flash Player \uc9c0\uc6d0 \uc885\ub8cc \uc608\uc815\uc5d0 \ub530\ub978 \ub85c\ub4dc\ubdf0 API \uc5c5\ub370\uc774\ud2b8 \uc548\ub0b4'
      )
    );
    var E = r('p');
    i(E, { margin: '0.5em 0px 0' });
    var ca = r('a');
    ca.href = 'https://kakaomap.tistory.com/325';
    ca.target = '_blank';
    i(ca, {
      color: '#0000FF',
      'text-decoration': 'underline',
      cursor: 'pointer',
    });
    ca.innerHTML = '';
    ca.appendChild(
      document.createTextNode(
        '\ube14\ub85c\uadf8 \uacf5\uc9c0 \ud655\uc778\ud558\uae30'
      )
    );
    E.appendChild(ca);
    ca = r('a');
    i(ca, { 'margin-left': '15px' });
    ca.href = 'https://devtalk.kakao.com/t/flash-player-api-2020-11-10/110686';
    ca.target = '_blank';
    i(ca, {
      color: '#0000FF',
      'text-decoration': 'underline',
      cursor: 'pointer',
    });
    ca.innerHTML = '';
    ca.appendChild(
      document.createTextNode(
        '\ub370\ube0c\ud1a1 \uacf5\uc9c0 \ud655\uc778\ud558\uae30'
      )
    );
    E.appendChild(ca);
    j.appendChild(E);
    g.appendChild(j);
    e.appendChild(g);
    var h, k;
    h = o(e, 'click', function () {
      i(g, { marginTop: '-100%' });
      i(e, { zIndex: -999 });
      setTimeout(function () {
        d.af(g);
        z(h);
        z(k);
        c = f;
      }, 1e3);
    });
    k = o(e, 'mousedown', ba);
  }
  function Je(a, b) {
    if (a.Tg !== b) {
      var d = a.da.a;
      b ? jb(d) : Qa(d);
      a.Tg = b;
    }
  }
  function X(a, b) {
    cb.call(this, a);
    this.l = b || {};
    this.l.imageQuality = w(b && b.imageQuality, Qb ? 1 : 0);
    this.l.disableCSS3View = b && !!b.disableCSS3View;
    this.j = [];
    pd(this);
    this.b = new Vb(a.clientWidth, a.clientHeight);
    (Ke = Ke || new Gb()).Ob(this);
    b && b.panoId && this.U(w(b.panoId, 0));
    t.addListener(this, 'viewpoint_changed', this.Ja);
    t.addListener(this, 'panoid_changed', this.Ja);
  }
  function Gb() {
    this.R = 0;
    this.j = [];
  }
  function U(a, b) {
    cb.call(this, a);
    this.l = b || {};
    this.l.imageQuality = w(b && b.imageQuality, Qb ? 1 : 0);
    this.l.disableCSS3View = b && !!b.disableCSS3View;
    this.j = [];
    pd(this);
    this.b = new Vb(a.clientWidth, a.clientHeight);
    (Le = Le || new Hb()).Ob(this);
    b && b.panoId && this.U(w(b.panoId, 0));
    t.addListener(this, 'viewpoint_changed', this.Ja);
    t.addListener(this, 'panoid_changed', this.Ja);
  }
  function Hb() {
    this.R = 0;
    this.j = [];
  }
  function ka(a) {
    this.g = a;
  }
  function Pc(a) {
    var b,
      a = a || {};
    b = 'https://' + (Ua ? 'ssl.daumcdn.net/' : '') + 'rv.map.kakao.com/';
    this.jj = a.panoramaDataUrl || b + 'roadview-search/v2/nodes';
  }
  function ob() {}
  function pa(a, b) {
    cb.call(this, a);
    this.b = new Mc(this.a.clientWidth, this.a.clientHeight);
    this.h = new ad(this.b);
    this.b.V(w(b.level, 3));
    var d = K(b.center);
    this.b.za(wa(d, this.h));
    this.b.ca = this.b.B();
    this.ya = b.mapTypeId || 1;
    this.dg = b.format || '';
    this.gb = b.marker || [];
    this.Bi = b.hasOwnProperty('link');
    this.Ig = b.link || '';
    this.Gd = new qd();
    this.Gd.b = this.b;
    da(this, this.Gd);
    this.Va();
  }
  function uc(a) {
    return a.b.C().W(a.h);
  }
  function hf(a) {
    a = a.b.C().W(a.h);
    return 'MX=' + String(a.e() | 0) + '&MY=' + String(a.c() | 0);
  }
  function qd() {
    this.o = {};
  }
  var V = void 0,
    l = !0,
    f = null,
    k = !1,
    c,
    P = Math.min,
    A = Math.max,
    D = Math.pow,
    Xb = Math.round,
    H = Math.floor,
    Ca = Math.abs,
    Me = Math.PI,
    jf = Math.sin,
    kf = Math.cos,
    Qc = Math.sqrt,
    eb = 'ActiveXObject' in T,
    Ne = eb && 'Netscape' == navigator.appName,
    pb = eb && !T.HTMLCanvasElement,
    Cb = -1 == navigator.appVersion.indexOf('MSIE 7.') ? k : l,
    le = 7 === document.documentMode ? l : k,
    Ib = pb && !T.XMLHttpRequest;
  if (Ib)
    try {
      document.execCommand('BackgroundImageCache', k, l);
    } catch (yf) {}
  var Ua = (T.kakao.maps.TUNNELING && l) || k,
    Qb = 1 < T.devicePixelRatio,
    Rc = 'https:' == T.location.protocol,
    Ta = Rc ? 'https://' : 'http://',
    af = Ta + (Ua ? 'ssl.daumcdn.net/' : 's1.daumcdn.net/') + 'dmaps/apis/',
    vc =
      Ta +
      (Ua ? 'ssl.daumcdn.net/' : '') +
      't1.daumcdn.net/localimg/localimages/07/mapjsapi/',
    ra =
      Ta + (Ua ? 'ssl.daumcdn.net/' : '') + 't1.daumcdn.net/mapjsapi/images/',
    Oe = Ta + (Ua ? 'ssl.daumcdn.net/' : '') + 'dmaps.daum.net/apis/';
  Qb && ((vc += '2x/'), (ra += '2x/'));
  Rc && !Ua && (Oe = '//spi.maps.daum.net/imap/apis/');
  var Ub = ra + 'transparent.gif',
    Na = 0 <= navigator.userAgent.indexOf('Android'),
    ua = !!navigator.msMaxTouchPoints,
    Pe = 0 <= navigator.userAgent.indexOf('Edge'),
    M =
      'ontouchstart' in document.documentElement &&
      (0 > navigator.userAgent.indexOf('Chrome') || Na),
    ld = Array.isArray
      ? Array.isArray
      : function (a) {
          return '[object Array]' === Object.prototype.toString.call(a);
        },
    y = T.daum.maps.VERSION || {};
  y.Bf = y.ROADMAP || 'var2201';
  y.zf = y.HYBRID || 'var2201';
  y.Ch = y.ROADVIEW || '3.00';
  y.pk = y.SR || '2.00';
  y.Fh = '?v=' + (y.SKYVIEW_VERSION || '141021');
  y.Eh = '?v=' + (y.SKYVIEW_HD_VERSION || '160107');
  y.Dh = y.ROADVIEW_FLASH || '130422';
  y.Cf = 'DEFUNCT';
  y.Df = 'DEFUNCT';
  y.yf = y.BICYCLE || '2.00';
  y.Ff = y.USE_DISTRICT || '1.0.0';
  var Yb = T.daum.maps.RESOURCE_PATH || {};
  Yb.Cf =
    Yb.ROADVIEW_AJAX ||
    '//t1.daumcdn.net/roadviewjscore/core/css3d/190723/standard/1563862560801/roadview.js';
  Yb.Df =
    Yb.ROADVIEW_CSS ||
    't1.daumcdn.net/roadviewjscore/core/openapi/standard/211122/roadview.js';
  var Xa = T;
  [].indexOf ||
    (Pa = function (a, b) {
      for (var d = 0, c = a.length; d < c; ++d) if (a[d] === b) return d;
      return -1;
    });
  [].forEach ||
    (q = function (a, b, d) {
      for (var c = 0, e = a.length; c < e; ++c)
        c in a && b.call(d || a, a[c], c, a);
    });
  [].map ||
    (Jb = function (a, b, d) {
      for (var c = [], e = 0, g = a.length; e < g; ++e)
        c[e] = b.call(d || a, a[e]);
      return c;
    });
  var Zb = document.documentElement.style,
    fb =
      'cssFloat' in Zb
        ? function (a) {
            a.style.cssFloat = 'left';
          }
        : function (a) {
            i(a, { display: 'inline', styleFloat: 'left' });
          },
    Ze = ['-webkit-', '-moz-', '-ms-', '-o-', ''],
    cf =
      eb || Pe
        ? 'url(' + ra + 'cursor/openhand.cur.ico), default'
        : 'url(' +
          ra +
          'cursor/openhand.cur.ico) 7 5, url(' +
          ra +
          'cursor/openhand.cur.ico), default',
    ge =
      eb || Pe
        ? 'url(' + ra + 'cursor/closedhand.cur.ico), move'
        : 'url(' +
          ra +
          'cursor/closedhand.cur.ico) 7 5, url(' +
          ra +
          'cursor/closedhand.cur.ico), move',
    Qe = Ib
      ? function (a, b) {
          var d =
            'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
            encodeURI(b) +
            '",sizingMethod=crop)';
          a.style.filter = d;
        }
      : function (a, b) {
          Wa(a, 'url(' + b + ') no-repeat');
        },
    rd =
      Zb.webkitTransition !== V
        ? 'webkitTransitionEnd'
        : Zb.transition !== V
        ? 'transitionend'
        : '',
    Gc =
      (Zb.webkitTransform !== V &&
        /iPad|iPhone|Android/i.test(navigator.userAgent)) ||
      ua
        ? function (a, b) {
            i(a, {
              transform: 'scale(' + b + ')',
              '-webkit-transform': 'scale(' + b + ')',
            });
          }
        : R,
    wc =
      Zb.opacity !== V
        ? function (a, b) {
            a.style.opacity = b;
          }
        : function (a, b) {
            a.style.filter = 'alpha(opacity=' + ((100 * b) | 0) + ')';
          },
    lf = rd
      ? function (a, b, d, c) {
          d = (d || 0) + 's';
          c = c || 'ease';
          i(a, {
            '-webkit-transition-property': b,
            transitionProperty: b,
            '-webkit-transition-duration': d,
            transitionDuration: d,
            '-webkit-transition-timing-function': c,
            transitionTimingFunction: c,
          });
        }
      : R,
    Zb = f,
    Wc = {},
    $e = 0,
    sd = document.releaseCapture
      ? function (a) {
          a.setCapture();
        }
      : R,
    jd = document.releaseCapture
      ? function () {
          document.releaseCapture();
        }
      : R;
  Ga.prototype.addListener = function (a, b, d) {
    var c = this.o;
    (c[a] = c[a] || []).push({ Pf: b, object: d || f });
  };
  Ga.prototype.removeListener = function (a, b, d) {
    if ((a = this.o[a])) {
      for (var d = d || f, c = 0, e = 0, g = a.length; e < g; ++e) {
        var j = a[e];
        if (j.Pf !== b || j.object !== d) (a[c] = j), ++c;
      }
      a.length = c;
    }
  };
  Ga.prototype.X = function () {
    this.o = f;
  };
  m(Ka, Ga);
  c = Ka.prototype;
  c.tc = function () {
    h(this, 'tick');
    this.ba = 0;
  };
  c.X = function () {
    this.stop();
    Ka.Xb.X.call(this);
  };
  c.cb = function () {
    return 0 !== this.ba;
  };
  c.ba = 0;
  c.start = function () {
    this.ba || (this.ba = setTimeout(ya(this.tc, this), this.Wh));
  };
  c.stop = function () {
    this.ba && (clearTimeout(this.ba), (this.ba = 0));
  };
  m(Ya, Ka);
  Ya.prototype.tc = function (a) {
    this.Of.call(Xa, this.ba);
    this.ba = this.pj.call(Xa, ya(this.tc, this));
    h(this, 'tick', a || 0);
  };
  Ya.prototype.start = function () {
    this.ba || this.tc();
  };
  Ya.prototype.stop = function () {
    this.cb() && (this.Of.call(Xa, this.ba), (this.ba = f));
  };
  Ya.prototype.cb = function () {
    return this.ba !== f;
  };
  m(Ha, Ga);
  c = Ha.prototype;
  c.a = f;
  c.Td = f;
  c.M = function () {
    this.a = r('div');
  };
  c.X = function () {
    Ha.Xb.X.call(this);
    this.a = f;
  };
  c.removeChild = function (a) {
    this.a.removeChild(a.a);
    a.Td = f;
  };
  c.getParent = n('Td');
  c.q = function () {
    this.a && this.Va();
  };
  c.show = function () {
    i(this.a, { display: '' });
  };
  c.P = function () {
    i(this.a, { display: 'none' });
  };
  c.Va = R;
  c.b = f;
  m(Bc, Ga);
  var Cc = {
    LINEAR: function (a) {
      return a;
    },
    EASE_IN: function (a) {
      return a * a;
    },
    EASE_OUT: Hd,
    EASE_IN_OUT: function (a) {
      return (a * a) / (a * a + (1 - a) * (1 - a));
    },
    QUARTIC_EASE_OUT: Id,
  };
  c = Bc.prototype;
  c.start = function () {
    this.Ya = new Ya(this.zg);
    this.Ya.addListener('tick', this.Ca, this);
    this.Ya.start();
  };
  c.Ca = function (a) {
    this.qf = this.qf || a;
    this.zg > a - this.qf ||
      ((this.qf = 0),
      (this.ge = this.ge || a),
      (a = P(1, (a - this.ge) / this.ec) || 0),
      (a = this.rf(a)),
      this.Mi(a),
      1 <= a && (h(this, 'done'), this.X()));
  };
  c.reset = function () {
    this.ge = f;
  };
  c.X = function () {
    this.stop();
    Bc.Xb.X.call(this);
  };
  c.stop = function () {
    this.Ya && (this.Ya.X(), (this.Ya = f));
    this.ge = f;
  };
  m(La, Ga);
  La.prototype.start = function () {
    this.Ca ||
      ((this.Ca = new Bc({
        tj: ya(this.q, this),
        Zb: this.rf,
        duration: this.ec,
      })),
      this.Ca.addListener('done', this.$h, this));
    this.Ca.start();
  };
  La.prototype.q = R;
  La.prototype.$h = function () {
    h(this, 'done');
    this.Ca = f;
  };
  La.prototype.cancel = function () {
    h(this, 'canceled');
    this.Ca && (this.Ca.X(), (this.Ca = f));
  };
  m(Xc, La);
  Xc.prototype.q = function (a) {
    h(this, 'tick', {
      Yg: a,
      yb: this.zb * a + this.vc * (1 - a),
      vb: this.Pa,
      wb: this.Qa,
      je: this.he * (1 - a) + this.te * a,
      ke: this.ie * (1 - a) + this.ve * a,
    });
  };
  m(Yc, La);
  Yc.prototype.q = function (a) {
    h(this, 'tick', {
      Yg: a,
      je: this.he + (this.te - this.he) * a,
      ke: this.ie + (this.ve - this.ie) * a,
    });
  };
  m(fc, La);
  fc.prototype.q = function (a) {
    this.Hg = a;
    h(this, 'tick', {
      Yg: a,
      yb: this.zb * a + this.vc * (1 - a),
      vb: this.Pa,
      wb: this.Qa,
    });
  };
  fc.prototype.reset = function (a) {
    this.vc = this.zb * this.Hg + this.vc * (1 - this.Hg);
    this.zb *= a;
    this.Ca.reset();
  };
  c = Dc.prototype;
  c.r = f;
  c.nd = R;
  c.X = function () {
    this.r = f;
  };
  c.ja = R;
  c.Ea = R;
  c.Cb = R;
  c.zc = R;
  c.rd = R;
  try {
    eval('document.namespaces');
  } catch (zf) {}
  m(Zc, Dc);
  c = Zc.prototype;
  c.nd = function () {
    return r('canvas');
  };
  c.create = function (a) {
    return {
      type: a,
      visible: l,
      Wg: [],
      closed: k,
      attachEvent: R,
      detachEvent: R,
    };
  };
  c.uc = function (a) {
    this.ee.push(a);
  };
  c.dc = function (a) {
    rb(this.ee, a);
    gc(this);
  };
  c.nb = function (a, b) {
    a.visible = !!b;
    gc(this);
  };
  c.ja = function (a, b) {
    L(this.r, a, b);
    this.r.width = a;
    this.r.height = b;
    this.Ea();
  };
  c.Ea = function () {
    var a = this.r.getContext('2d');
    a.setTransform(1, 0, 0, 1, 0, 0);
    a.clearRect(0, 0, this.r.width, this.r.height);
  };
  c.rc = function (a, b) {
    var d = (b.strokeColor || '#F10000').match(/\w\w/g);
    a.strokeStyle =
      'rgba(' +
      parseInt(d[0], 16) +
      ',' +
      parseInt(d[1], 16) +
      ',' +
      parseInt(d[2], 16) +
      ',' +
      w(b.strokeOpacity, 0.6) +
      ')';
    a.Kj = b.startArrow;
    a.ni = b.endArrow;
    a.lineCap = b.lineCap;
    a.ad = w(b.strokeWeight, 3);
    d = (b.fillColor || '#F10000').match(/\w\w/g);
    a.fillStyle =
      'rgba(' +
      parseInt(d[0], 16) +
      ',' +
      parseInt(d[1], 16) +
      ',' +
      parseInt(d[2], 16) +
      ',' +
      (b.fillOpacity || 0) +
      ')';
    a.zIndex = b.zIndex;
  };
  c.zc = function (a, b, d) {
    a.Wg = b;
    a.closed = d;
    gc(this);
  };
  c.rd = function (a, b, d, c, e) {
    a.x = b;
    a.y = d;
    a.nj = c;
    a.oj = e;
    gc(this);
  };
  c.wc = function (a, b) {
    a.zIndex = b;
    this.ee.sort(function (a, b) {
      return a.zIndex - b.zIndex;
    });
    gc(this);
  };
  m(vb, Dc);
  var mf = 0;
  c = vb.prototype;
  c.create = function (a) {
    a = hc(a);
    a.id = this.Vd + '-shape-' + mf++;
    return a;
  };
  c.Vd = 'daum-maps';
  c.nd = function () {
    var a = hc('svg'),
      b = (this.pd = hc('defs'));
    a.appendChild(b);
    Kb(a, {
      version: '1.1',
      style:
        'stroke:none;stroke-dashoffset:0.5;stroke-linejoin:round;fill:none;transform:translateZ(0)',
    });
    return a;
  };
  c.uc = function (a) {
    this.r.appendChild(a);
  };
  c.dc = function (a) {
    var b = Number(a.id.match(/\d+/));
    this.r.removeChild(a);
    q(
      ['start', 'end'],
      function (a) {
        (a = document.getElementById(this.Vd + '-arrow-' + a + '-' + b)) &&
          this.pd.removeChild(a);
      },
      this
    );
    Ld(this, a.id, a.zIndex);
  };
  c.ja = function (a, b) {
    Kb(this.r, { viewBox: [0, 0, a, b].join(' ') });
    L(this.r, a, b);
  };
  c.nb = function (a, b) {
    b ? jb(a) : Qa(a);
  };
  c.Ea = function () {
    for (var a = this.r; a.firstChild != a.lastChild; )
      a.removeChild(a.lastChild);
  };
  var nf = {
    dashed: [0.1, 1.9],
    shortdash: [2, 2],
    shortdot: [0.1, 1.9],
    shortdashdot: [2, 2, 0.1, 1.9],
    shortdashdotdot: [2, 2, 0.1, 1.9, 0.1, 1.9],
    dot: [0.1, 3.9],
    dash: [3, 4],
    dashdot: [3, 4, 0.1, 3.9],
    longdash: [7, 4],
    longdashdot: [7, 4, 0.1, 3.9],
    longdashdotdot: [7, 4, 0.1, 3.9, 0.1, 3.9],
  };
  vb.prototype.rc = function (a, b) {
    var d = Number(a.id.match(/\d+/)),
      c = '',
      e = w(b.strokeOpacity, 0.6);
    if (0 < e) {
      var g = b.strokeColor || '#F10000',
        j = w(b.strokeWeight, 3),
        E = nf[b.strokeStyle],
        E =
          E &&
          E.map(function (a) {
            return a * j;
          }).join(','),
        c =
          c +
          ('stroke:' +
            g +
            ';stroke-opacity:' +
            e +
            ';stroke-width:' +
            j +
            'px' +
            (E ? ';stroke-dasharray:' + E : '') +
            ';color:' +
            g +
            ';stroke-linecap:' +
            (b.lineCap || 'round') +
            ';');
      b.startArrow &&
        (c += 'marker-start:url(#' + Kd(this, d, 'start', g) + ');');
      b.endArrow && (c += 'marker-end:url(#' + Kd(this, d, 'end', g) + ');');
    }
    d = b.fillOpacity || 0;
    0 < d &&
      (c +=
        'fill:' +
        (b.fillColor || '#F10000') +
        ';fill-opacity:' +
        d +
        ';fill-rule:evenodd;');
    Kb(a, { style: c });
  };
  vb.prototype.zc = function (a, b, d, c, e) {
    var g = '';
    q(b, function (a) {
      zc(a) && (a = a.match(/\d+/g));
      g +=
        ' M' +
        a[0] +
        ' ' +
        a[1] +
        ' L' +
        a.slice(2).join(' ') +
        (d ? ' Z' : '');
    });
    Kb(a, {
      d: g || 'M0 0',
      transform: 'translate(' + -(c || 0) + ',' + -(e || 0) + ')',
    });
    if (eb) {
      var j = Number(a.id.match(/\d+/));
      q(
        ['start', 'end'],
        function (a) {
          if ((a = document.getElementById(this.Vd + '-arrow-' + a + '-' + j)))
            this.pd.removeChild(a), this.pd.appendChild(a);
        },
        this
      );
    }
  };
  vb.prototype.rd = function (a, b, d, c, e) {
    Kb(a, { cx: b, cy: d, rx: c, ry: e, gtype: 'oval' });
  };
  vb.prototype.wc = function (a, b, d) {
    var a = a.id,
      c = 0 > Pa(this.ob[d] || [], a);
    if (0 !== b - d || c)
      c
        ? (this.ob[b] = this.ob[b] || []).push(a)
        : ((this.ob[b] = this.ob[b] || []).push(a), Ld(this, a, d)),
        (d = Object.keys(this.ob).sort(function (a, b) {
          return Number(a) - Number(b);
        })),
        (b = (b = this.ob[d[Pa(d, b.toString()) + 1]]) ? b[0] : f),
        this.r.insertBefore(
          document.getElementById(a),
          b ? document.getElementById(b) : f
        );
  };
  m($c, Dc);
  c = $c.prototype;
  c.nd = function () {
    var a = r('div');
    Ba(a, 0);
    return a;
  };
  c.create = function () {
    var a = r('div');
    O(a);
    return a;
  };
  c.uc = function (a) {
    this.r.appendChild(a);
  };
  c.dc = function (a) {
    this.r.removeChild(a);
  };
  c.ja = function (a, b) {
    L(this.r, a, b);
  };
  c.nb = function (a, b) {
    var d = a.firstChild;
    b ? jb(d) : Qa(d);
  };
  c.Ea = function () {
    this.r.innerHTML = '';
  };
  c.rc = function (a, b) {
    var d = b.strokeStyle || 'solid';
    'dashed' == d && (d = 'shortdot');
    var c = b.startArrow ? 'block' : 'none',
      e = b.endArrow ? 'block' : 'none',
      g = b.lineCap || 'round';
    'butt' == g && (g = 'flat');
    var j = w(b.strokeOpacity, 0.6),
      f = b.fillOpacity || 0,
      d = {
        color: b.strokeColor || '#F10000',
        opacity: j,
        endcap: g,
        weight: w(b.strokeWeight, 3) + 'px',
        startarrow: c,
        endarrow: e,
        dashstyle: d,
      },
      c = { color: b.fillColor || '#F10000', opacity: f },
      j =
        '<v:shape unselectable=on coordsize=1,1 style=position:absolute;width:1px;height:1px path="%PATH%">' +
        ((0 < j ? '<v:stroke ' + Md(d) + ' />' : '<v:stroke on=False />') +
          (0 < f ? '<v:fill ' + Md(c) + ' />' : '<v:fill on=False />')) +
        '</v:shape>';
    if (a.__tmpl__) {
      var f = a.getElementsByTagName('stroke')[0],
        e = a.getElementsByTagName('fill')[0],
        h;
      for (h in d) f[h] = d[h];
      for (h in c) e[h] = c[h];
    } else a.insertAdjacentHTML('beforeEnd', j);
    a.__tmpl__ = j;
  };
  c.zc = function (a, b, d) {
    var c = '';
    q(b, function (a) {
      zc(a) && (a = a.match(/\d+/g));
      c +=
        'm' + a[0] + ',' + a[1] + 'l' + a.slice(2).join(',') + (d ? 'x' : 'e');
    });
    c || (c = 'm 0,0 e');
    a.innerHTML = a.__tmpl__.replace(/%PATH%/, c);
  };
  c.rd = function (a, b, d, c, e) {
    b |= 0;
    d |= 0;
    c |= 0;
    e |= 0;
    a.innerHTML = a.__tmpl__.replace(
      /%PATH%/,
      'm' +
        b +
        ',' +
        (d - e) +
        ' qx' +
        (b - c) +
        ',' +
        d +
        ' ' +
        b +
        ',' +
        (d + e) +
        ' ' +
        (b + c) +
        ',' +
        d +
        ' ' +
        b +
        ',' +
        (d - e)
    );
  };
  c.wc = function (a, b) {
    Ba(a, b);
  };
  var t = {
    xf: { zoom_end: 'zoom_changed' },
    addListener: function (a, b, d) {
      b = t.xf[b] || b;
      a.addListener(b, d);
    },
    removeListener: function (a, b, d) {
      b = t.xf[b] || b;
      a.removeListener(b, d);
    },
    $e: k,
    Ua: function () {
      t.$e = l;
      setTimeout(t.Wa, 0);
    },
    fb: function () {
      return t.$e;
    },
    Wa: function () {
      t.$e = k;
    },
    Wj: function (a, b, d) {
      h(a, b, d);
    },
  };
  Sa.prototype.toString = function () {
    return '(' + this.m() + ', ' + this.i() + ')';
  };
  Sa.prototype.m = n('width');
  Sa.prototype.i = n('height');
  var df = new Sa(0, 0);
  Sa.prototype.Jb = function (a) {
    return a instanceof Sa && this.m() == a.m() && this.i() == a.i();
  };
  Mb.prototype.lb = R;
  Mb.prototype.Vf = R;
  Mb.prototype.ab = R;
  Mb.prototype.pe = R;
  m(Ia, Mb);
  c = Ia.prototype;
  c.ph = function (a, b) {
    return new Ma(a, b);
  };
  c.qe = function (a, b) {
    return new N(a, b);
  };
  c.lb = function (a) {
    var a = K(a),
      b = this.b,
      a = wa(a, this),
      d = b.B(),
      c = D(2, -b.k());
    return new F(
      H(a.e() * c) - H(d.e() * c) - ia(b),
      b.i() - H(a.c() * c) + H(d.c() * c) - ja(b)
    );
  };
  c.Vf = function (a) {
    a = new F(a.e() + ia(this.b), a.c() + ja(this.b));
    a = Eb(this.b, a).W(this);
    return va(a);
  };
  c.ab = function (a) {
    a = K(a);
    return dd(wa(a, this), this.b);
  };
  c.pe = function (a) {
    a = Eb(this.b, a).W(this);
    return va(a);
  };
  m(ad, Ia);
  m(Za, Mb);
  Za.prototype.lb = function (a, b, d) {
    var c = this.b,
      e = c.ib,
      g,
      j;
    if (!e || !e.getPointFromPanTilt) return new F(-1e4, -1e4);
    if (a instanceof Z)
      (d = w(a.pan, Number(e.getPan()) || 0)),
        (g = w(a.tilt, Number(e.getTilt()) || 0));
    else {
      j = c.v();
      c = a.e() - j.e();
      j = a.c() - j.c();
      a = 0.4 * Qc(Math.pow(c, 2) + Math.pow(j, 2));
      if (d && d < a) return new F(-1e4, -1e4);
      d = 90 - 180 * (Math.atan2(j, c) / Math.PI);
      b === V || (g = 180 * (Math.atan2(-b + 1.7, a) / Math.PI));
    }
    b = e.getPointFromPanTilt(d, g);
    return new F(b.x, b.y);
  };
  Za.prototype.ab = function (a, b, d) {
    return this.lb(a, b, d);
  };
  Za.prototype.$j = function (a, b) {
    var a = K(a),
      d = this.b.v(),
      c = a.e() - d.e(),
      e = a.c() - d.c(),
      d = 0.4 * Qc(Math.pow(c, 2) + Math.pow(e, 2)),
      g = 0,
      c = 90 - 180 * (Math.atan2(e, c) / Math.PI);
    b === V || (g = 180 * (Math.atan2(-b, d) / Math.PI));
    return new Z(c, g);
  };
  m($a, Ha);
  c = $a.prototype;
  c.M = function () {
    this.a = r('div');
    O(this.a);
    Ba(this.a, 1);
  };
  c.Od = 0;
  c.Pd = 0;
  c.Y = function (a, b) {
    this.Od = Xb(a);
    this.Pd = Xb(b);
    aa(this.a, this.Od, this.Pd);
  };
  c.$b = function (a, b) {
    var d = (this.Od += Xb(a)),
      c = (this.Pd += Xb(b));
    aa(this.a, d, c);
  };
  c.fj = function (a) {
    a.addListener('tick', this.Ta, this);
    a.addListener('done', this.Ye, this);
    a.addListener('canceled', this.Kh, this);
  };
  c.Ta = function (a) {
    this.Y(a.je, a.ke);
    h(this, 'pan', a);
  };
  c.Ye = function () {
    h(this, 'panned');
  };
  c.Kh = function () {
    h(this, 'canceled');
  };
  m(Nb, Ha);
  c = Nb.prototype;
  c.M = function () {
    this.a = r('button');
    fb(this.a);
    sa(this.a, 'pointer');
    L(this.a, this.S, this.O);
    Lb(this.a);
    this.a.style.border = 'none';
    Kb(this.a, { title: this.Gb, type: 'button' });
    bd(this, k);
    this.Je &&
      (o(this.a, 'mouseover', this.Lc, this),
      o(this.a, 'mouseout', this.Kc, this));
    o(this.a, 'mousedown', this.Qe, this);
    o(document, 'mouseup', this.ub, this);
    o(this.a, 'click', this.jd, this);
  };
  c.nc = k;
  c.Lc = function () {
    !this.nc && !this.Ib && sb(this.Je, this.a);
  };
  c.Kc = function () {
    !this.nc && !this.Ib && sb(this.jc, this.a);
  };
  c.Qe = function (a) {
    ba(a);
    Fd(a) && !this.nc && !this.Ib && sb(this.ci || this.jc, this.a);
  };
  c.ub = function () {
    !this.nc && !this.Ib && sb(this.jc, this.a);
  };
  c.jd = function () {
    !this.nc && !this.Ib && (sb(this.Je || this.jc, this.a), h(this, 'click'));
  };
  var tb = 116,
    ub = 264,
    ec = ra + 'control.png';
  m(jc, $a);
  c = jc.prototype;
  c.M = function () {
    jc.Xb.M.call(this);
    var a = this.G;
    a.r || (a.r = a.nd());
    this.r = a.r;
    O(this.r);
    o(this.r, 'mousedown', ba);
    Od(this);
    this.a.appendChild(this.r);
  };
  c.Va = function () {
    Od(this);
    q(
      this.Mb,
      function (a) {
        a.aa();
      },
      this
    );
  };
  c.scale = function (a) {
    a.addListener('done', this.Ab, this);
    a.addListener('tick', this.cf, this);
    this.lj = { x: this.Sf, y: this.Tf };
  };
  c.cf = function (a) {
    var b = a.yb,
      d = a.vb,
      a = a.wb,
      c = this.lj,
      e = this.r,
      g = this.b,
      j = 5 * g.m(),
      g = 5 * g.i();
    aa(e, (c.x - d) * b + d, (c.y - a) * b + a);
    L(e, Math.ceil(j * b), Math.ceil(g * b));
  };
  c.Ab = function () {
    this.q();
  };
  c.be = $b('G');
  m(wb, $a);
  wb.prototype.M = function () {
    var a = (this.a = r('div'));
    O(a);
    Ba(a, 1);
    L(a, '100%', 0);
    i(a, { transform: 'translateZ(0)' });
  };
  m(Ob, Ha);
  Ob.prototype.M = function () {
    var a = (this.a = r('div'));
    sa(a, 'auto');
    O(a);
    Ba(a, 2);
    aa(a, 0, 0);
  };
  Ob.prototype.le = function (a, b) {
    a.parentNode != this.a &&
      (Ea(b) ? this.$[b].push(a) : this.$[td].push({ mj: b, element: a }),
      this.a.appendChild(a),
      O(a),
      this.q());
  };
  Ob.prototype.Xd = function (a) {
    a.parentNode == this.a &&
      (q(this.$, function (b) {
        rb(b, a);
      }),
      this.a.removeChild(a),
      this.q());
  };
  Ob.prototype.Va = function () {
    if (0 != this.getParent().a.offsetHeight) {
      var a = this.b.m(),
        b = this.b.i() - 20,
        d = 0;
      q(this.$[xc], function (a) {
        d += 3;
        aa(a, d, 3);
        d += a.offsetWidth;
      });
      d = 0;
      q(this.$[ud], function (b) {
        d += 3;
        aa(b, (a - b.offsetWidth) >> 1, d);
        d += b.offsetHeight;
      });
      d = 0;
      q(this.$[yc], function (b) {
        d += 3 + b.offsetWidth;
        aa(b, a - d, 3);
      });
      d = this.$[xc].length ? this.$[xc][0].offsetHeight + 3 : 0;
      q(this.$[vd], function (a) {
        d += 3;
        aa(a, 3, d);
        d += a.offsetHeight;
      });
      d = this.$[yc].length ? this.$[yc][0].offsetHeight + 3 : 0;
      q(this.$[Sc], function (b) {
        d += 3;
        aa(b, a - 3 - b.offsetWidth, d);
        d += b.offsetHeight;
      });
      d = 0;
      q(this.$[wd], function (a) {
        d += 3;
        aa(a, d, b - 3 - a.offsetHeight);
        d += a.offsetWidth;
      });
      d = b;
      q(this.$[xd], function (b) {
        d -= 3 + b.offsetHeight;
        aa(b, (a - b.offsetWidth) >> 1, d);
      });
      d = 0;
      q(this.$[yd], function (c) {
        d += 3 + c.offsetWidth;
        aa(c, a - d, b - 3 - c.offsetHeight);
      });
      q(this.$[td], function (d) {
        var c = 0,
          g = 0,
          j = d.element,
          f = d.mj,
          h;
        if ((h = f.top)) g += h;
        if ((h = f.right)) c += a - j.offsetWidth - h;
        if ((h = f.bottom)) g += b + 20 - j.offsetHeight - h;
        if ((h = f.left)) c += h;
        aa(d.element, c, g);
      });
    }
  };
  var xc = 0,
    ud = 1,
    yc = 2,
    wd = 3,
    xd = 4,
    yd = 5,
    vd = 6,
    Sc = 7,
    td = 8,
    gb = {
      sk: xc,
      rk: ud,
      tk: yc,
      ik: wd,
      hk: xd,
      jk: yd,
      nk: vd,
      ok: Sc,
      kk: td,
    };
  m(lb, Ha);
  lb.prototype.F = function (a) {
    this.f != a &&
      (a
        ? ((this.f = a),
          this.a ||
            ((this.a = r('div')),
            L(this.a, 106, 32),
            i(this.a, {
              'box-sizing': 'content-box',
              backgroundColor: '#fff',
              padding: '2px',
              'border-radius': '3px',
              'box-shadow': '0 2px 2px 0 rgba(0,0,0,.15)',
            }),
            (this.Nd = new Nb(43, 32, of, f, f, f, pf, '\uc9c0\ub3c4')),
            (this.fe = new Nb(
              63,
              32,
              qf,
              f,
              f,
              f,
              rf,
              '\uc2a4\uce74\uc774\ubdf0'
            )),
            da(this, this.Nd),
            da(this, this.fe),
            this.Nd.addListener('click', this.Yi, this),
            this.fe.addListener('click', this.Hj, this)),
          this.L(),
          this.f.addListener('maptypeid_changed', this.L, this))
        : (this.f.removeListener('maptypeid_changed', this.L, this),
          (this.f = a)));
  };
  lb.prototype.L = function () {
    var a = this.f.ud(),
      b = a == la.NORMAL,
      a = a == la.SKYVIEW || a == la.HYBRID;
    bd(this.Nd, b);
    bd(this.fe, a);
    i(this.Nd.a, {
      color: b ? '#fff' : '#000',
      'font-weight': b ? 'bold' : 'normal',
    });
    i(this.fe.a, {
      color: a ? '#fff' : '#000',
      'font-weight': a ? 'bold' : 'normal',
    });
  };
  lb.prototype.Yi = function () {
    this.f.Wc(la.NORMAL);
    this.f.q();
  };
  lb.prototype.Hj = function () {
    this.f.Wc(la.HYBRID);
    this.f.q();
  };
  var of = new Ra(5, 225),
    pf = new Ra(5, 183),
    qf = new Ra(48, 183),
    rf = new Ra(48, 225);
  m(kc, Ha);
  c = kc.prototype;
  c.F = function (a) {
    if (this.f != a)
      if (a) {
        this.f = a;
        if (!this.a) {
          var b = (this.a = r('div'));
          L(b, 32);
          i(b, {
            'border-radius': '3px',
            'box-shadow': '0 2px 2px 0 rgba(0,0,0,.15)',
          });
          var d = (this.zh = new Nb(
              32,
              32,
              new Ra(40, 0, '#fff'),
              f,
              new Ra(72, 0, '#fff'),
              new Ra(72, 0, '#fff'),
              f,
              '\ud655\ub300'
            )),
            c = (this.wf = new Nb(
              32,
              32,
              new Ra(40, 32, '#fff'),
              f,
              new Ra(72, 32, '#fff'),
              new Ra(72, 32, '#fff'),
              f,
              '\ucd95\uc18c'
            ));
          da(this, d);
          var e = d.a;
          i(e, {
            'border-bottom': '1px solid #e2e2e2',
            'border-radius': '3px 3px 0 0',
          });
          d.addListener('click', this.fk, this);
          da(this, c);
          var g = c.a;
          i(g, {
            'border-top': '1px solid #e2e2e2',
            'border-radius': '0 0 3px 3px',
          });
          c.addListener('click', this.gk, this);
          pb &&
            setTimeout(function () {
              e.style.cssText = e.style.cssText;
              g.style.cssText = g.style.cssText;
            }, 0);
          c = r('div');
          fb(c);
          Wa(c, 'url(' + ra + 'bg_zoom_control.png) repeat');
          i(c, { padding: '7px 0', transition: 'height, margin 0.1s' });
          d = this.a;
          d.childNodes[1] !== c && d.insertBefore(c, d.childNodes[1] || f);
          d = this.xd = r('div');
          sa(d, 'pointer');
          d.style.position = 'relative';
          kb(d, tb, ub);
          i(d, { transition: 'height 0.1s', margin: '2px 0' });
          c.appendChild(d);
          o(d, 'click', this.rg, this);
          c = this.Ak = r('div');
          O(c);
          L(c, 4, '100%');
          i(c, { backgroundColor: '#3396FF', left: '50%' });
          Aa(c, 0, 0, 0, -2);
          d.appendChild(c);
          var j = r('div');
          L(j, 4, 2);
          i(j, { 'margin-bottom': '-2px', bottom: 0 });
          O(j);
          Wa(j, '-50px -127px url(' + ec + ')');
          kb(j, tb, ub);
          c.appendChild(j);
          j = r('div');
          L(j, 4, 2);
          i(j, { 'margin-top': '-2px', top: 0 });
          O(j);
          Wa(j, '-40px -100px url(' + ec + ')');
          kb(j, tb, ub);
          c.appendChild(j);
          c = this.sg = r('div');
          O(c);
          L(c, 4, '100%');
          i(c, {
            backgroundColor: '#ccc',
            transition: 'height 0.1s',
            left: '50%',
          });
          Aa(c, 0, 0, 0, -2);
          d.appendChild(c);
          c = this.mf = r('div');
          sa(c, 'row-resize');
          O(c);
          L(c, 20, 10);
          Aa(c, -4, 0, 0, -10);
          Wa(c, '-40px -80px url(' + ec + ')');
          kb(c, tb, ub);
          d.appendChild(c);
          i(c, { left: '50%', transition: 'top 0.1s' });
          o(c, 'mousedown', this.Ai, this);
          c = this.cd = r('div');
          Qa(c);
          O(c);
          Aa(c, 41, 0, 0, -30);
          kb(c, tb, ub);
          b.appendChild(c);
          this.We ||
            (this.sf = [
              o(d, 'mouseover', this.hh, this),
              o(d, 'mouseout', this.tg, this),
            ]);
          this.fd && o(T, 'resize', this.Qf, this);
        }
        a.addListener('zoom_changed', this.L, this);
        a.addListener('min_zoom_changed', this.L, this);
        a.addListener('max_zoom_changed', this.L, this);
        a.addListener('maptypeid_changed', this.L, this);
        this.Qf();
        this.L();
      } else
        this.f.removeListener('zoom_changed', this.L, this),
          this.f.removeListener('min_zoom_changed', this.L, this),
          this.f.removeListener('max_zoom_changed', this.L, this),
          this.f.removeListener('maptypeid_changed', this.L, this),
          (this.f = a);
  };
  c.hh = function (a) {
    dc(this.a, a.target) && jb(this.cd);
  };
  c.tg = function (a) {
    dc(this.a, a.target) && Qa(this.cd);
  };
  c.Ai = function (a) {
    ba(a);
    sd(this.mf);
    this.ih = [
      o(ib(), 'mousemove', this.gi, this),
      o(ib(), 'mouseup', this.qj, this),
    ];
  };
  c.gi = function (a) {
    ba(a);
    a = ta(a, this.xd);
    a = Pd(this, a.c());
    i(this.mf, { top: this.Kb * (a - this.Sb) + 'px' });
    L(this.sg, 4, this.Kb * (a - this.Sb));
  };
  c.qj = function (a) {
    jd();
    q(this.ih, function (a) {
      z(a);
    });
    this.rg(a);
  };
  c.L = function () {
    var a = this.f.td(),
      b = this.f.b.D,
      d = this.f.b.Q;
    Fc(this.zh, k);
    Fc(this.wf, k);
    a == b && Fc(this.zh, l);
    a == d && Fc(this.wf, l);
    this.Nc |= b != this.Sb || d != this.Mg;
    if (!this.Le && this.Nc) {
      var c = this.Kb,
        e = c * (d - b);
      L(this.xd, 32, e);
      L(this.cd, 30, e);
      var e = 0,
        g;
      for (g in this.tf) Fa(this.tf[g]);
      for (var j = b; j <= d; j++) {
        if ((g = this.tf[j])) aa(g, 0, e), this.cd.appendChild(g);
        e += c;
      }
      this.Nc = k;
    }
    this.Sb = b;
    this.Mg = d;
    i(this.mf, { top: this.Kb * (a - this.Sb) + 'px' });
    L(this.sg, 4, this.Kb * (a - this.Sb));
  };
  c.Qf = function () {
    !this.ye && this.fd
      ? (this.ag = this.f.gc().clientHeight <= this.Ni)
      : this.ye && (this.ag = this.ye);
    var a = this.ag;
    if (a !== this.Le) {
      this.Le = a;
      var b = this.xd,
        d = this.wf;
      a
        ? (Qa(b),
          Aa(d.a, -1, 0, 0),
          this.We ||
            (Qa(this.cd),
            q(this.sf, function (a) {
              z(a);
            })))
        : (jb(b),
          Aa(d.a, 0),
          this.We ||
            (this.sf = [
              o(this.a, 'mouseover', this.hh, this),
              o(this.a, 'mouseout', this.tg, this),
            ]),
          (this.Nc = l),
          this.L());
    }
  };
  c.rg = function (a) {
    a = ta(a, this.xd);
    a = Pd(this, a.c());
    this.f.mb(a, { animate: l });
  };
  c.fk = function () {
    var a = this.f;
    a.mb(a.b.k() - 1, { animate: l });
  };
  c.gk = function () {
    var a = this.f;
    a.mb(a.b.k() + 1, { animate: l });
  };
  F.prototype.toString = function () {
    return '(' + this.e() + ', ' + this.c() + ')';
  };
  F.prototype.e = n('x');
  F.prototype.c = n('y');
  var Re = new F(0, 0);
  F.prototype.Jb = function (a) {
    return a instanceof F && this.e() == a.e() && this.c() == a.c();
  };
  var qb = new Qd(6378137, 1 / 298.257223563, 5e5, 2e5, 1, 38, 127);
  Qd.prototype.inverse = function (a, b) {
    var d = Math.sin,
      c = Math.cos,
      e = Math.pow,
      g = Math.sqrt,
      j = this.Hf,
      f = this.xh,
      h = this.yh,
      k = this.Pg,
      l = this.Mf,
      o = this.Nf,
      s = 0,
      q = 0,
      v = 0,
      m = 0,
      p = 0,
      i = 0,
      n = 0,
      r = 0,
      C = 0,
      u = 0,
      t = 0,
      x = 0,
      w = 0,
      Q = 0,
      v = this.bg;
    1 < v && (v = 1 / v);
    m = h;
    p = Math.atan(1) / 45;
    s = l * p;
    q = o * p;
    v = 1 / v;
    i = (j * (v - 1)) / v;
    n = (e(j, 2) - e(i, 2)) / e(j, 2);
    v = (e(j, 2) - e(i, 2)) / e(i, 2);
    i = (j - i) / (j + i);
    r =
      j *
      (1 - i + (5 * (e(i, 2) - e(i, 3))) / 4 + (81 * (e(i, 4) - e(i, 5))) / 64);
    C =
      (3 *
        j *
        (i - e(i, 2) + (7 * (e(i, 3) - e(i, 4))) / 8 + (55 * e(i, 5)) / 64)) /
      2;
    u = (15 * j * (e(i, 2) - e(i, 3) + (3 * (e(i, 4) - e(i, 5))) / 4)) / 16;
    t = (35 * j * (e(i, 3) - e(i, 4) + (11 * e(i, 5)) / 16)) / 48;
    x = (315 * j * (e(i, 4) - e(i, 5))) / 512;
    s = r * s - C * d(2 * s) + u * d(4 * s) - t * d(6 * s) + x * d(8 * s);
    w = (b + s * k - f) / k;
    Q = (j * (1 - n)) / e(g(1 - n * e(d(0), 2)), 3);
    s = w / Q;
    for (f = 1; 5 >= f; f++)
      (i = r * s - C * d(2 * s) + u * d(4 * s) - t * d(6 * s) + x * d(8 * s)),
        (Q = (j * (1 - n)) / e(g(1 - n * e(d(s), 2)), 3)),
        (s += (w - i) / Q);
    Q = (j * (1 - n)) / e(g(1 - n * e(d(s), 2)), 3);
    r = j / g(1 - n * e(d(s), 2));
    i = d(s);
    n = c(s);
    C = i / n;
    v *= e(n, 2);
    m = a - m;
    i = C / (2 * Q * r * e(k, 2));
    u =
      (C * (5 + 3 * e(C, 2) + v - 4 * e(v, 2) - 9 * e(C, 2) * v)) /
      (24 * Q * e(r, 3) * e(k, 4));
    t =
      (C *
        (61 +
          90 * e(C, 2) +
          46 * v +
          45 * e(C, 4) -
          252 * e(C, 2) * v -
          3 * e(v, 2) +
          100 * e(v, 3) -
          66 * e(C, 2) * e(v, 2) -
          90 * e(C, 4) * v +
          88 * e(v, 4) +
          225 * e(C, 4) * e(v, 2) +
          84 * e(C, 2) * e(v, 3) -
          192 * e(C, 2) * e(v, 4))) /
      (720 * Q * e(r, 5) * e(k, 6));
    Q =
      (C * (1385 + 3633 * e(C, 2) + 4095 * e(C, 4) + 1575 * e(C, 6))) /
      (40320 * Q * e(r, 7) * e(k, 8));
    s = s - e(m, 2) * i + e(m, 4) * u - e(m, 6) * t + e(m, 8) * Q;
    i = 1 / (r * n * k);
    Q = (1 + 2 * e(C, 2) + v) / (6 * e(r, 3) * n * e(k, 3));
    v =
      (5 +
        6 * v +
        28 * e(C, 2) -
        3 * e(v, 2) +
        8 * e(C, 2) * v +
        24 * e(C, 4) -
        4 * e(v, 3) +
        4 * e(C, 2) * e(v, 2) +
        24 * e(C, 2) * e(v, 3)) /
      (120 * e(r, 5) * n * e(k, 5));
    n =
      (61 + 662 * e(C, 2) + 1320 * e(C, 4) + 720 * e(C, 6)) /
      (5040 * e(r, 7) * n * e(k, 7));
    m = m * i - e(m, 3) * Q + e(m, 5) * v - e(m, 7) * n;
    return [(q + m) / p, s / p];
  };
  c = ab.prototype;
  c.La = 0;
  c.Ma = 0;
  c.toString = function () {
    return '(' + this.La + ', ' + this.Ma + ')';
  };
  c.e = n('La');
  c.c = n('Ma');
  c.va = function (a) {
    return this.La == a.La && this.Ma == a.Ma;
  };
  c.la = function (a, b) {
    return new this.constructor(this.La + a, this.Ma + b);
  };
  m(qa, ab);
  c = qa.prototype;
  c.toString = function () {
    return '(' + this.Ma + ', ' + this.La + ')';
  };
  c.n = f;
  c.jg = function () {
    return this.c();
  };
  c.lg = function () {
    return this.e();
  };
  c.W = function () {
    var a = Math.sin,
      b = Math.cos,
      d = Math.pow,
      c = Math.sqrt,
      e = qb.Hf,
      g = qb.bg,
      j = qb.xh,
      f = qb.Pg,
      h = 0,
      k = 0,
      l = 0,
      i = 0,
      s = 0,
      o = 0,
      v = 0,
      m = 0,
      n = 0,
      q = 0,
      p = 0,
      r = 0,
      u = 0,
      t = 0,
      l = qb.Mf,
      m = qb.Nf,
      o = qb.yh,
      s = g;
    1 < s && (s = 1 / s);
    i = Math.atan(1) / 45;
    h = this.jg() * i;
    k = this.lg() * i;
    l *= i;
    i *= m;
    s = 1 / s;
    v = (e * (s - 1)) / s;
    m = (d(e, 2) - d(v, 2)) / d(e, 2);
    s = (d(e, 2) - d(v, 2)) / d(v, 2);
    v = (e - v) / (e + v);
    n =
      e *
      (1 - v + (5 * (d(v, 2) - d(v, 3))) / 4 + (81 * (d(v, 4) - d(v, 5))) / 64);
    q =
      (3 *
        e *
        (v - d(v, 2) + (7 * (d(v, 3) - d(v, 4))) / 8 + (55 * d(v, 5)) / 64)) /
      2;
    p = (15 * e * (d(v, 2) - d(v, 3) + (3 * (d(v, 4) - d(v, 5))) / 4)) / 16;
    r = (35 * e * (d(v, 3) - d(v, 4) + (11 * d(v, 5)) / 16)) / 48;
    u = (315 * e * (d(v, 4) - d(v, 5))) / 512;
    k -= i;
    l = n * l - q * a(2 * l) + p * a(4 * l) - r * a(6 * l) + u * a(8 * l);
    v = l * f;
    t = a(h);
    l = b(h);
    i = t / l;
    s *= d(l, 2);
    m = e / c(1 - m * d(a(h), 2));
    h = n * h - q * a(2 * h) + p * a(4 * h) - r * a(6 * h) + u * a(8 * h);
    a = [];
    h *= f;
    n = (m * t * l * f) / 2;
    q = (m * t * d(l, 3) * f * (5 - d(i, 2) + 9 * s + 4 * d(s, 2))) / 24;
    p =
      (m *
        t *
        d(l, 5) *
        f *
        (61 -
          58 * d(i, 2) +
          d(i, 4) +
          270 * s -
          330 * d(i, 2) * s +
          445 * d(s, 2) +
          324 * d(s, 3) -
          680 * d(i, 2) * d(s, 2) +
          88 * d(s, 4) -
          600 * d(i, 2) * d(s, 3) -
          192 * d(i, 2) * d(s, 4))) /
      720;
    t =
      (m *
        t *
        d(l, 7) *
        f *
        (1385 - 3111 * d(i, 2) + 543 * d(i, 4) - d(i, 6))) /
      40320;
    h = h + d(k, 2) * n + d(k, 4) * q + d(k, 6) * p + d(k, 8) * t;
    a[1] = h - v + j;
    h = m * l * f;
    v = (m * d(l, 3) * f * (1 - d(i, 2) + s)) / 6;
    s =
      (m *
        d(l, 5) *
        f *
        (5 -
          18 * d(i, 2) +
          d(i, 4) +
          14 * s -
          58 * d(i, 2) * s +
          13 * d(s, 2) +
          4 * d(s, 3) -
          64 * d(i, 2) * d(s, 2) -
          25 * d(i, 2) * d(s, 3))) /
      120;
    l =
      (m * d(l, 7) * f * (61 - 479 * d(i, 2) + 179 * d(i, 4) - d(i, 6))) / 5040;
    a[0] = o + k * h + d(k, 3) * v + d(k, 5) * s + d(k, 7) * l;
    return new N(2.5 * a[0], 2.5 * a[1]);
  };
  m(N, ab);
  var db = new N(0, 0);
  N.prototype.sh = function () {
    var a = qb.inverse(0.4 * this.e(), 0.4 * this.c());
    return new qa(a[1], a[0]);
  };
  Z.prototype.toString = function () {
    return (
      '(' +
      this.pan +
      ', ' +
      this.tilt +
      ', ' +
      this.k() +
      ' ,' +
      this.N() +
      ')'
    );
  };
  Z.prototype.k = n('zoom');
  Z.prototype.N = n('panoId');
  var Tc = new Z(0, 0, 0);
  m(Ma, ab);
  Ma.prototype.W = function (a) {
    return a.qe(this.e(), this.c());
  };
  c = Y.prototype;
  c.tb = function (a, b) {
    this.ha = P(a.e(), b.e());
    this.qa = P(a.c(), b.c());
    this.oa = A(a.e(), b.e());
    this.pa = A(a.c(), b.c());
  };
  c.ha = Infinity;
  c.qa = Infinity;
  c.oa = -Infinity;
  c.pa = -Infinity;
  c.toString = function () {
    return (
      '((' + this.ha + ', ' + this.qa + '), (' + this.oa + ', ' + this.pa + '))'
    );
  };
  c.B = function () {
    return new N(this.ha, this.qa);
  };
  c.rb = function () {
    return new N(this.oa, this.pa);
  };
  c.Gi = function (a) {
    return this.oa > a.ha && this.pa > a.qa && this.ha < a.oa && this.qa < a.pa;
  };
  c.kd = function (a) {
    return (
      this.ha <= a.e() && a.e() < this.oa && this.qa <= a.c() && a.c() < this.pa
    );
  };
  c.extend = function (a) {
    var b = a.e(),
      a = a.c();
    this.ha = P(b, this.ha);
    this.oa = A(b, this.oa);
    this.qa = P(a, this.qa);
    this.pa = A(a, this.pa);
    return this;
  };
  c.Bg = function () {
    return !isFinite(this.ha);
  };
  c.Jb = function (a) {
    return (
      a instanceof Y &&
      this.ha == a.ha &&
      this.oa == a.oa &&
      this.qa == a.qa &&
      this.pa == a.pa
    );
  };
  var sf = new Y(db);
  m(ha, Y);
  ha.prototype.B = function () {
    return new qa(this.qa, this.ha);
  };
  ha.prototype.rb = function () {
    return new qa(this.pa, this.oa);
  };
  ha.prototype.toString = function () {
    return (
      '((' + this.qa + ', ' + this.ha + '), (' + this.pa + ', ' + this.oa + '))'
    );
  };
  mc.prototype.we = function (a, b) {
    b && (this.j.push({ Ke: a, url: b }), this.Ya.start(), (a.Ub = l));
  };
  mc.prototype.pause = function () {
    this.Ya.stop();
  };
  mc.prototype.tc = function () {
    for (var a = 4; 0 < a; ) {
      var b = this.j.pop();
      if (!b) {
        this.Ya.stop();
        break;
      }
      b.Ke.Ub && (this.Jc(b.Ke, b.url), (b.Ke.Ub = k), --a);
    }
  };
  mc.prototype.Jc = function (a, b) {
    Qe(a, b);
  };
  var De = new mc();
  m(xb, Ga);
  var yb = r('img');
  yb.galleryimg = 'no';
  yb.src = Ub;
  yb.alt = '';
  O(yb);
  Lb(yb);
  za(yb, 'min-width:0;min-height:0;max-width:none;max-height:none');
  var bb = { IDLE: 0, LOADING: 1, Af: 2, Bh: 3 },
    od = l;
  c = xb.prototype;
  c.x = 0;
  c.y = 0;
  c.zoom = 0;
  c.Sa = f;
  c.aa = function () {
    this.R = bb.LOADING;
    !eb && rd && od && (wc(this.a, 0), lf(this.a, 'opacity', 0.2));
    this.Fd = o(this.a, 'load', this.w, this);
    Sd(this, 1);
    this.kf(this.Sa.He(this.x, this.y, this.zoom));
  };
  c.kf = function (a) {
    this.a.src = a || ra + 'nodata.png';
  };
  c.X = function () {
    xb.Xb.X.call(this);
    this.a && (z(this.Fd), Fa(this.a), (this.Fd = this.Sa = this.a = f));
  };
  c.cancel = function () {
    z(this.Fd);
    this.a.src = Ub;
    this.R = bb.Bh;
    h(this, 'canceled', this);
  };
  c.Ob = function () {
    this.a.src = Ub;
    this.R = bb.IDLE;
  };
  c.Y = function (a, b) {
    this.La = a;
    this.Ma = b;
    aa(this.a, a, b);
  };
  c.w = function () {
    this.R = bb.Af;
    z(this.Fd);
    !eb && this.a && rd && od && wc(this.a, 1);
    h(this, 'loaded', this);
  };
  m(nc, xb);
  var Se = bb;
  nc.prototype.aa = function () {
    this.R = Se.LOADING;
    this.Rj = setTimeout(ya(this.w, this), 0);
  };
  nc.prototype.X = function () {
    Ga.prototype.X.call(this);
    this.a && (clearTimeout(this.Rj), Fa(this.a), (this.Sa = this.a = f));
  };
  nc.prototype.w = function () {
    this.R = Se.Af;
    h(this, 'loaded', this);
  };
  m(mb, ab);
  mb.prototype.H = 0;
  mb.prototype.k = n('H');
  mb.prototype.va = function (a) {
    return this.H == a.k() && mb.Xb.wk.call(this, a);
  };
  mb.prototype.la = function (a, b) {
    return new mb(this.e() + a, this.c() + b, this.H);
  };
  fa.prototype.m = n('S');
  fa.prototype.i = n('O');
  Rc &&
    !Ua &&
    (oc = function () {
      return '//spi.maps.daum.net/boundary';
    });
  var Uc = new Y(new N(-310763.0075, 1248227.06), new N(1616006.44, 2802998)),
    Te = new Y(new N(281515, 157035), new N(531417.5, -133097.5)),
    ed,
    zd = (ed = new fa(
      256,
      256,
      Pb(function (a, b, d) {
        return (
          xa(a & 3) + '/map_2d/' + y.Bf + '/L' + d + '/' + b + '/' + a + '.png'
        );
      }),
      [
        new ma(
          '\uad6d\ud1a0\uc9c0\ub9ac\uc815\ubcf4\uc6d0, OpenStreetMap',
          'NGII, OSM',
          3,
          Uc
        ),
        new ma('', ''),
      ],
      k,
      1,
      14
    )),
    fd,
    Ad = (fd = new fa(
      256,
      256,
      Pb(function (a, b, d) {
        return (
          xa(a & 3) + '/map_skyview/L' + d + '/' + b + '/' + a + '.jpg' + y.Fh
        );
      }),
      [
        new ma('TerraMetrics', 'TerraMetrics', 9),
        new ma(
          '\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4',
          '\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4',
          0,
          Te
        ),
        new ma('\uad6d\ud1a0\uc9c0\ub9ac\uc815\ubcf4\uc6d0', 'NGII', 0),
      ],
      l,
      0,
      14
    )),
    gd,
    Ue = (gd = new fa(
      256,
      256,
      function (a, b, d) {
        return (
          xa(a & 3) +
          '/map_hybrid/' +
          y.zf +
          '/L' +
          d +
          '/' +
          b +
          '/' +
          a +
          '.png'
        );
      },
      [new ma('', '')]
    )),
    tf = new fa(
      256,
      256,
      function (a, b, d) {
        return (
          xa(a & 3) +
          '/map_roadviewline/' +
          y.Ch +
          '/L' +
          d +
          '/' +
          b +
          '/' +
          a +
          '.png'
        );
      },
      [new ma('KnWorks', 'KnWorks')]
    ),
    uf = new fa(256, 256, function (a, b, d) {
      var c;
      c = d + 5;
      return !(
        -7488 >> c <= a &&
        a <= 68e4 >> c &&
        -102176 >> c <= b &&
        b <= 635e3 >> c
      )
        ? ''
        : Ta +
            (Ua ? 'ssl.daumcdn.net/' : '') +
            'r' +
            (a & 3) +
            '.maps.daum-img.net/mapserver/file/realtimeroad/L' +
            d +
            '/' +
            b +
            '/' +
            a +
            '.png?v=' +
            ((+new Date() / 6e4) | 0);
    }),
    vf = new fa(256, 256, function (a, b, d) {
      return (
        xa(a & 3) + '/map_shaded_relief/0.01/L' + d + '/' + b + '/' + a + '.png'
      );
    }),
    Bd,
    Zd,
    $d,
    Ve =
      (Bd =
      Zd =
      $d =
        new fa(
          256,
          256,
          function (a, b, d) {
            return (
              xa(a & 3) +
              '/map_bicycle/2d/' +
              y.yf +
              '/L' +
              d +
              '/' +
              b +
              '/' +
              a +
              '.png'
            );
          },
          [
            new ma('', '', 0, Uc),
            new ma(
              '\ud589\uc815\uc548\uc804\ubd80',
              '\ud589\uc815\uc548\uc804\ubd80',
              1
            ),
          ]
        )),
    ce,
    We = (ce = new fa(256, 256, function (a, b, d) {
      return (
        xa(a & 3) +
        '/map_usedistrict/' +
        y.Ff +
        '/L' +
        d +
        '/' +
        b +
        '/' +
        a +
        '.png'
      );
    }));
  new fa(256, 256, function (a, b, d) {
    return oc() + '/mapserver/db/BBOUN_L/L' + d + '/' + b + '/' + a + '.png';
  });
  new fa(256, 256, function (a, b, d) {
    return oc() + '/mapserver/db/HBOUN_L/L' + d + '/' + b + '/' + a + '.png';
  });
  if (Qb) {
    var Wd,
      zd = (Wd = new fa(
        256,
        256,
        Pb(function (a, b, d) {
          return (
            xa(a & 3) +
            '/map_2d_hd/' +
            y.Bf +
            '/L' +
            d +
            '/' +
            b +
            '/' +
            a +
            '.png'
          );
        }),
        [
          new ma(
            '\uad6d\ud1a0\uc9c0\ub9ac\uc815\ubcf4\uc6d0, OpenStreetMap',
            'NGII, OSM',
            3,
            Uc
          ),
          new ma('', ''),
        ],
        k,
        1,
        14
      )),
      Xd,
      Ad = (Xd = new fa(
        256,
        256,
        Pb(function (a, b, d) {
          return (
            xa(a & 3) +
            '/map_skyview_hd/L' +
            d +
            '/' +
            b +
            '/' +
            a +
            '.jpg' +
            y.Eh
          );
        }),
        [
          new ma('TerraMetrics', 'TerraMetrics', 9),
          new ma(
            '\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4',
            '\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4',
            0,
            Te
          ),
          new ma('\uad6d\ud1a0\uc9c0\ub9ac\uc815\ubcf4\uc6d0', 'NGII', 0),
        ],
        l,
        1,
        14
      )),
      Yd,
      Ue = (Yd = new fa(256, 256, function (a, b, d) {
        return (
          xa(a & 3) +
          '/map_hybrid_hd/' +
          y.zf +
          '/L' +
          d +
          '/' +
          b +
          '/' +
          a +
          '.png'
        );
      })),
      ae,
      be,
      Ve =
        (ae =
        Bd =
        be =
          new fa(
            256,
            256,
            function (a, b, d) {
              return (
                xa(a & 3) +
                '/map_bicycle/2dhd/' +
                y.yf +
                '/L' +
                d +
                '/' +
                b +
                '/' +
                a +
                '.png'
              );
            },
            [
              new ma('', '', 0, Uc),
              new ma(
                '\ud589\uc815\uc548\uc804\ubd80',
                '\ud589\uc815\uc548\uc804\ubd80',
                1
              ),
            ]
          )),
      de,
      We = (de = new fa(256, 256, function (a, b, d) {
        return (
          xa(a & 3) +
          '/map_usedistrict_hd/' +
          y.Ff +
          '/L' +
          d +
          '/' +
          b +
          '/' +
          a +
          '.png'
        );
      }));
    new fa(256, 256, function (a, b, d) {
      return (
        oc() + '/mapserver/db/BBOUN_L_HD/L' + d + '/' + b + '/' + a + '.png'
      );
    });
    new fa(256, 256, function (a, b, d) {
      return (
        oc() + '/mapserver/db/HBOUN_L_HD/L' + d + '/' + b + '/' + a + '.png'
      );
    });
  }
  var la = {
      ROADMAP: 1,
      NORMAL: 1,
      SKYVIEW: 2,
      HYBRID: 3,
      OVERLAY: 4,
      ROADVIEW: 5,
      TRAFFIC: 6,
      TERRAIN: 7,
      BICYCLE: 8,
      BICYCLE_HYBRID: 9,
      USE_DISTRICT: 10,
    },
    Da = [zd, zd, Ad, Ad, Ue, tf, uf, vf, Ve, Bd, We];
  m(Hc, xb);
  Hc.prototype.kf = function (a) {
    this.a.src = a || Ub;
  };
  m(Ic, Hc);
  var hd = r('div');
  O(hd);
  Lb(hd);
  var ee = [];
  Ic.prototype.kf = function (a) {
    De.we(this.a, a);
  };
  Ic.prototype.X = function () {
    var a = this.a;
    Fa(a);
    a.style.filter = '';
    ee.push(a);
    this.Yb = this.a = f;
  };
  m(Rb, $a);
  c = Rb.prototype;
  c.Yb = f;
  c.Yc = function (a) {
    this.Ea();
    this.Yb = a;
  };
  c.sb = n('Yb');
  c.Ef = xb;
  c.Va = function () {
    var a = this.Yb;
    if (a) {
      var b = a.m(),
        d = a.i(),
        c = this.b,
        e = c.m(),
        g = c.i(),
        j = c.k(),
        f = D(2, -j),
        h = c.B(),
        k = new mb(H((h.e() / a.S) * D(2, -j)), H((h.c() / a.O) * D(2, -j)), j),
        i,
        m = k.k();
      i = new Ma((k.e() * a.S) / D(2, -m), (k.c() * a.O) / D(2, -m));
      var m = H(i.e() * f) - H(h.e() * D(2, -j)) - ia(c),
        c = H(h.c() * D(2, -j)) + H(-i.c() * f) + g - d - ja(c),
        g = 1 + (((g + d - 1) / d) | 0),
        s = k.c(),
        o = s + g,
        n = 1 + (((e + b - 1) / b) | 0),
        p = k.e(),
        r = p + n,
        t = [],
        u = [],
        x = n * g,
        C = this.hc,
        w = 0;
      q(
        C,
        function (a) {
          var b = a.x,
            d = a.y;
          p <= b && b < r && s <= d && d < o && j == a.zoom
            ? ((u[(d - s) * n + b - p] = l), --x, (C[w] = a), ++w)
            : t.push(a);
        },
        this
      );
      if (0 < x) {
        for (var e = this.eg, k = [], A = 0, z = g * n; A < z; ++A)
          if (!u[A]) {
            var B = (A / n) | 0,
              Q = A % n,
              F = fe(this, Q + p, B + s, j, a);
            k.push(F);
            F.Y(Q * b + m, c - B * d);
            e.appendChild(F.a);
            C[w++] = F;
          }
        this.re(k);
        this.a.appendChild(e);
      }
      C.length = w;
      this.yc(t);
      a = H((h.e() - i.e()) * f);
      f = H((h.c() - i.c()) * f);
      this.Oj = {
        Sh: p,
        Rh: n,
        Qh: s,
        Th: g,
        fh: a,
        gh: f,
        offsetX: m,
        offsetY: c,
        Qj: b,
        Pj: d,
        zoom: j,
      };
    }
  };
  c.zb = 1;
  c.xj = 0;
  c.yj = 0;
  c.xg = [];
  c.scale = function (a) {
    this.xg = Jb(this.hc, function (a) {
      return { x: a.La, y: a.Ma };
    });
    a.addListener('tick', this.cf, this);
    a.addListener('done', this.Ab, this);
  };
  c.cf = function (a) {
    var b = a.yb,
      d = a.vb,
      c = a.wb;
    512 < b ||
      q(
        this.hc,
        function (a, g) {
          var j = this.xg[g];
          a.Y((j.x - d) * b + d, (j.y - c) * b + c);
          Sd(a, b);
        },
        this
      );
  };
  c.Ab = function () {
    this.zb = 1;
    this.xj = this.yj = 0;
    h(this, 'scaled');
  };
  c.Ea = function () {
    this.yc(this.hc);
    this.uf = k;
  };
  c.sc = function (a, b) {
    var d = this.Yb,
      c = this.Oj,
      e = (c.fh -= a),
      g = (c.gh += b),
      j = c.Qj,
      f = c.Pj,
      h = H(e / j),
      k = H(g / f);
    if (this.uf || !(0 == h && 0 == k)) {
      this.uf = l;
      var i = c.Sh,
        m = c.Rh,
        n = c.Qh,
        o = c.Th,
        g = c.offsetX,
        e = c.offsetY,
        c = c.zoom,
        i = i + h,
        n = n + k,
        g = g + h * j,
        e = e - k * f,
        p = n + o,
        r = i + m,
        t = [],
        u = m * o,
        x = this.hc,
        w = [],
        C = [],
        A = 0;
      q(
        x,
        function (a) {
          var b = a.x,
            d = a.y;
          i <= b && b < r && n <= d && d < p
            ? ((t[(d - n) * m + b - i] = l), --u, (x[A] = a), ++A)
            : Cb || pb
            ? C.push(a)
            : w.push(a);
        },
        this
      );
      if (0 < u) {
        for (var h = this.eg, k = [], D = 0, o = o * m; D < o; ++D)
          if (!t[D]) {
            var z = (D / m) | 0,
              F = D % m,
              Q,
              B = F + i,
              y = z + n;
            C[0]
              ? ((Q = C.pop()),
                Q.Ob(),
                (Q.x = B),
                (Q.y = y),
                (Q.zoom = c),
                (Q.Sa = d))
              : ((Q = fe(this, B, y, c, d)), h.appendChild(Q.a));
            k.push(Q);
            Q.Y(F * j + g, e - z * f);
            x[A++] = Q;
          }
        this.re(k);
        this.a.appendChild(h);
      }
      this.yc(w);
    }
  };
  c.re = function (a) {
    q(a, function (a) {
      a.aa();
    });
  };
  c.yc = function (a) {
    q(a, function (a) {
      a.X();
    });
    a.length = 0;
  };
  m(Sb, $a);
  Sb.prototype.Y = function (a, b) {
    q(this.Xa, function (d) {
      d.Y(a, b);
    });
  };
  Sb.prototype.q = function () {
    Sb.Xb.q.call(this);
    q(this.Xa, function (a) {
      a.q();
    });
  };
  Sb.prototype.sc = function (a, b) {
    q(this.Xa, function (d) {
      d.sc(a, b);
    });
  };
  m(id, Rb);
  id.prototype.Ef = Ib ? Ic : Hc;
  m(pc, $a);
  pc.prototype.M = function () {
    var a = this.l.opacity || '',
      b = this.l.background || '';
    this.a = r('div');
    O(this.a);
    L(this.a, '100%', '100%');
    b && Wa(this.a, b);
    a && wc(this.a, a);
  };
  pc.prototype.hf = function (a) {
    this.l.opacity = a;
    this.a && wc(this.a, a);
  };
  pc.prototype.mg = function () {
    return this.l.opacity;
  };
  m(Jc, $a);
  c = Jc.prototype;
  c.M = function () {
    var a = this.b,
      b = (this.S = a.m()),
      a = (this.O = a.i());
    this.a = r('div');
    this.ja(b, a);
    O(this.a);
    Ba(this.a, 1);
  };
  c.ja = function (a, b) {
    L(this.a, a, b);
  };
  c.me = function (a, b) {
    var d = ia(this.b),
      c = ja(this.b);
    b ? (this.ea.unshift(a), Gd(this, a)) : (this.ea.push(a), da(this, a));
    a.Y(-d, -c);
  };
  c.af = function (a) {
    for (var b = this.ea.length - 1; 0 <= b; --b)
      if (this.ea[b] == a) {
        this.removeChild(this.ea[b]);
        this.ea.splice(b, 1);
        break;
      }
  };
  c.Y = function (a, b) {
    q(this.ea, function (d) {
      d.Y(a, b);
    });
  };
  c.$b = function (a, b) {
    q(this.ea, function (d) {
      d.$b(a, b);
    });
  };
  m(Ab, $a);
  Ab.prototype.M = function () {
    var a = (this.a = r('div'));
    O(a);
  };
  Ab.prototype.Wf = k;
  Ab.prototype.pc = function (a) {
    this.Wf = a;
    Kc(this, k);
  };
  Ab.prototype.Xf = f;
  m(Bb, Rb);
  Bb.prototype.re = function (a) {
    q(
      a,
      function (a) {
        a.Ub || this.j.we(a);
      },
      this
    );
    this.j.Jg();
  };
  Bb.prototype.yc = function (a) {
    q(
      a,
      function (a) {
        (a.R === bb.LOADING || a.Ub) && a.cancel();
        this.fg.push(a);
      },
      this
    );
    a.length = 0;
  };
  Bb.prototype.Ea = function () {
    this.yc(this.hc);
    this.Rf();
    this.uf = k;
  };
  Bb.prototype.Rf = function () {
    for (var a; (a = this.fg.pop()); ) a.X();
  };
  m(Tb, Ga);
  Tb.prototype.we = function (a) {
    a.Ub = l;
    this.j.push(a);
  };
  Tb.prototype.remove = function (a) {
    this.j[this.j.indexOf(a)] = f;
    a.Ub = k;
  };
  Tb.prototype.Jg = function () {
    for (
      var a, b = P(64, this.j.length), b = A(b - this.Oc, 0), d = 0;
      d < b;
      d++
    )
      (a = this.j.pop()),
        a.R === bb.IDLE &&
          (this.Oc++,
          (a.Ub = k),
          a.addListener('loaded', this.w, this),
          a.addListener('canceled', this.w, this),
          a.aa());
  };
  Tb.prototype.w = function (a) {
    a.removeListener('loaded', this.w, this);
    a.removeListener('canceled', this.w, this);
    this.Oc--;
    0 == this.Oc &&
      (0 < this.j.length
        ? setTimeout(ya(this.Jg, this), 16)
        : 0 === this.Oc && 0 == this.j.length && h(this, 'tilesloaded'));
  };
  m($, Ga);
  $.prototype.f = f;
  $.prototype.F = function (a) {
    a != this.f && (this.f && this.f.$g(this), (this.f = a) && a.Jf(this));
  };
  $.prototype.p = n('f');
  $.prototype.jb = function () {
    this.onAdd();
  };
  $.prototype.onAdd = R;
  $.prototype.kb = function () {
    this.onRemove();
  };
  $.prototype.onRemove = R;
  c = $.prototype;
  c.ea = f;
  c.wd = n('ea');
  c.h = f;
  c.wa = n('h');
  c.aa = function () {
    this.draw();
  };
  $.prototype.draw = R;
  qc.prototype.vd = n('Qd');
  var he = new qc(
    ra + 'marker.png',
    new Sa(29, 42),
    new F(14, 39),
    'poly',
    '14,39,9,27,4,21,1,16,1,10,4,4,11,0,18,0,25,4,28,10,28,16,25,21,20,27'
  );
  m(u, $);
  c = u.prototype;
  c.Aa = l;
  c.Za = k;
  c.Nj = 8;
  c.n = db;
  c.Rc = Re;
  c.s = function (a) {
    this.n = a instanceof Z ? a : K(a);
    this.z();
  };
  c.z = function () {
    var a = this.wa();
    a &&
      ((a = this.Rc = a.lb(this.n, this.Ba, this.Ha)),
      aa(this.a, a.e(), a.c()),
      this.Ka());
  };
  c.v = function () {
    return this.n instanceof Z ? this.n : va(this.n);
  };
  c.Xc = function (a) {
    this.Ha = a;
    this.p() instanceof oa && this.z();
  };
  c.Bc = n('Ha');
  c.oc = function (a) {
    this.Ba = a;
    this.p() instanceof oa && this.z();
  };
  c.fc = n('Ba');
  var je = 0;
  c = u.prototype;
  c.M = function () {
    var a = this.a;
    a || ((a = this.a = r('div')), O(a));
    Aa(a, -this.T.vd().c(), 0, 0, -this.T.vd().e());
    (a = this.fa) ||
      ((a = this.fa = r('img')),
      za(
        a,
        'min-width:0;min-height:0;max-width:99999px;max-height:none;border:0;display:block'
      ),
      O(a),
      Lb(a),
      this.a.appendChild(a));
    var b = this.T.lf,
      d = this.T.Ij;
    i(a, {
      clip:
        'rect(' +
        d.y +
        'px ' +
        (d.x + b.width) +
        'px ' +
        (d.y + b.height) +
        'px ' +
        d.x +
        'px)',
      top: -d.y + 'px',
      left: -d.x + 'px',
    });
    b = this.T.Yj;
    d = this.fa;
    Ib &&
      /\.png$/i.test(b) &&
      ((d.onload = function () {
        this.onload = R;
        this.src = Ub;
      }),
      (d.style.filter =
        'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
        b +
        '",sizingMethod="scale")'));
    d.src = b;
    this.fa.alt = this.T.Ih;
    b = this.T.Jj;
    L(a, b.width, b.height);
    this.Hb && ie(this);
  };
  c.Sc = function () {
    z(this.Nh);
    z(this.ki);
    z(this.Ri);
    z(this.Qi);
    z(this.vj);
  };
  c.jd = function (a) {
    if (this.K || this.Na) ba(a), t.Ua(a);
  };
  c.Za = l;
  c.jb = function () {
    this.wd().Xe.appendChild(this.a);
    this.n instanceof Z && this.p() instanceof p && (this.n = db);
    this.p().addListener('idle', this.Ka, this);
    this.Hb && ie(this);
    ke(this);
  };
  c.kb = function () {
    Fa(this.a);
    this.p().removeListener('idle', this.Ka, this);
    this.Hb &&
      (this.Sc(),
      me(this),
      Fa(this.Fc),
      Fa(this.zd),
      (this.zd = this.Ec = this.Fc = f));
  };
  c.aa = function () {
    Ba(this.a, this.$a);
    this.z();
  };
  c.nb = function (a) {
    this.Aa = !!a;
    this.Ka();
  };
  c.Ie = n('Aa');
  c.Cj = function (a) {
    a = a || he;
    this.Sc();
    this.T = a;
    Fa(this.Fc);
    Fa(this.zd);
    this.Ec = this.zd = this.Fc = f;
    this.M();
    ke(this);
  };
  c.vi = n('T');
  c.$a = 0;
  c.J = function (a) {
    this.$a = a;
    Ba(this.a, a);
  };
  c.xa = n('$a');
  c.Lc = function () {
    this.Pb ||
      (h(this, 'mouseover'),
      !this.K && !this.Na ? sa(this.fa, 'inherit') : sa(this.fa, 'pointer'));
  };
  c.Kc = function () {
    this.Pb || (h(this, 'mouseout'), sa(this.fa, ''));
  };
  c.Gb = '';
  c.eh = function (a) {
    this.Gb = String(a);
    this.T.de
      ? (this.fa && (this.fa.title = ''), (this.Ec.title = this.Gb))
      : (this.fa.title = this.Gb);
  };
  c.yi = n('Gb');
  c.Ka = function () {
    var a = this.p().b,
      b = this.n,
      d = this.Aa && a.ld(this.Rc);
    b instanceof Z && ((b = b.N()), (d = d && (!b || a.va(b))));
    d != this.Za && ((this.Za = d) ? jb(this.a) : Qa(this.a));
  };
  c.li = function (a) {
    if (this.K || this.Na) t.Ua(), ba(a);
  };
  c.Yd = function (a) {
    t.Ua();
    !M && ba(a);
    this.Pb && (this.Zd = l);
    this.Na && h(this, 'rightclick');
  };
  c.Aj = function (a) {
    this.Na = !!a;
  };
  c.ui = n('Na');
  c.Kg = function (a) {
    this.Lg = this.K;
    this.K = !!a;
    this.Cg = l;
  };
  c.Zg = function () {
    this.Lg != V && (this.K = this.Lg);
    this.Cg = k;
  };
  c.df = function (a) {
    this.Cg || (this.K = !!a);
  };
  c.Fe = n('K');
  c.hi = function (a) {
    if (this.K || this.Na)
      if ((h(this, 'mousedown'), !this.Pb)) {
        ba(a);
        this.K ? t.Ua(a) : this.p().Ze();
        sa(this.fa, ge || '');
        this.Pb = l;
        var a = M ? a.touches[0] : a,
          b = M ? 'touchmove' : ua ? 'MSPointerMove' : 'mousemove',
          d = M ? 'touchend' : ua ? 'MSPointerUp' : 'mouseup';
        this.mh = new F(a.clientX, a.clientY);
        this.lh = this.wa().ab(this.n);
        this.fi = o(ib(this.a), b, this.ii, this);
        this.ji = o(ib(this.a), d, this.ei, this);
        M && this.bb.start();
      }
  };
  c.ii = function (a) {
    var b = M ? a.touches[0] : a,
      d = this.mh.e() - b.clientX,
      b = this.mh.c() - b.clientY,
      c = !!(Math.abs(d) + Math.abs(b) > this.Nj);
    this.K
      ? (ba(a),
        this.Ad
          ? (a = this.wa()) &&
            this.s(a.pe(new F(this.lh.e() - d, this.lh.c() - b)))
          : c &&
            ((this.Ad = l),
            h(this, 'dragstart'),
            sd(this.a),
            M && this.bb.stop()))
      : c && (this.Ad = l);
  };
  c.ei = function (a) {
    h(this, 'mouseup');
    if (
      'which' in a
        ? 3 == a.which
        : 2 == a.button || (!a.preventDefault && 0 == a.button)
    )
      this.Zd = l;
    this.Ad
      ? this.K && h(this, 'dragend')
      : this.Na &&
        (this.p().Ze(),
        this.Pb && !this.Zd
          ? h(this, 'click')
          : this.Pb && (Cb || le) && this.Zd && h(this, 'rightclick'));
    me(this);
    sa(this.fa, 'pointer');
  };
  c.hf = function (a) {
    Ea(a) && ((this.Rg = a), wc(this.fa, this.Rg));
  };
  c.mg = n('Rg');
  m(I, $);
  c = I.prototype;
  c.n = db;
  c.Rc = Re;
  c.s = function (a) {
    this.n = a instanceof Z ? a : K(a);
    this.z();
  };
  c.z = function () {
    var a = this.wa();
    a &&
      ((a = this.Rc = a.lb(this.n, this.Ba, this.Ha)),
      aa(this.a, a.e(), a.c()),
      this.Ka());
  };
  c.v = function () {
    return this.n instanceof Z ? this.n : va(this.n);
  };
  c.Xc = function (a) {
    this.Ha = a;
    this.p() instanceof oa && this.z();
  };
  c.Bc = n('Ha');
  c.oc = function (a) {
    this.Ba = a;
    this.p() instanceof oa && this.z();
  };
  c.fc = n('Ba');
  c.jd = function () {
    h(this, 'click');
  };
  c.jb = function () {
    this.Za = k;
    this.Na &&
      (this.Ga = [
        o(this.a, 'click', t.Ua),
        o(this.a, 'mousedown', t.Ua),
        o(this.a, 'touchstart', t.Ua),
        o(this.a, 'MSPointerDown', t.Ua),
      ]);
    this.p().addListener('idle', this.Ka, this);
    this.Ka();
  };
  c.kb = function () {
    Fa(this.a);
    this.Na && (this.Ga.forEach(z), (this.Ga.length = 0));
    this.p().removeListener('idle', this.Ka, this);
  };
  c.aa = function () {
    this.z();
  };
  c.cc = f;
  c.ce = function (a) {
    var b = this.cc;
    this.cc = a;
    'string' == typeof a
      ? (this.a.innerHTML = a)
      : a && (b && (this.a.innerHTML = ''), this.a.appendChild(a));
    ne(this);
  };
  c.Ee = n('cc');
  c.Aa = l;
  c.Za = k;
  c.nb = function (a) {
    this.Aa = !!a;
    this.Ka();
  };
  c.Ie = n('Aa');
  c.Ka = function () {
    var a = this.Aa;
    if (this.p())
      var b = this.p().b,
        a = a && b.ld(this.Rc);
    var d = this.n;
    d instanceof Z && ((d = d.N()), (a = a && (!d || b.va(d))));
    a != this.Za &&
      ((b = this.a),
      (this.Za = a) ? (this.wd().Xe.appendChild(b), ne(this)) : Fa(b));
  };
  c.$a = 0;
  c.J = function (a) {
    this.$a = a;
    Ba(this.a, a);
  };
  c.xa = n('$a');
  m(Va, $);
  c = Va.prototype;
  c.F = function (a) {
    if (a != this.f) {
      if (this.f) {
        var b = this.f;
        0 <= Pa(b.Mb, this) &&
          (this.kb(), (this.h = this.ea = f), this.be(f), rb(b.Mb, this));
      }
      if ((this.f = a) && 0 > Pa(a.Mb, this))
        a.Mb.push(this),
          (this.ea = a.Ra),
          (this.h = a.h),
          this.be(a.G),
          this.jb(),
          a.A || this.aa();
    }
  };
  c.be = $b('G');
  c.sj = function (a) {
    q(a, z);
  };
  c.di = function (a) {
    ba(a);
    var b = this.f,
      a = (this.Gf = M ? a.touches[0] : a),
      d = this.Fa(a);
    h(this, 'mousedown', d);
    this.ga = l;
    b = ta(a, b.gc());
    this.Pa = b.e();
    this.Qa = b.c();
  };
  c.Ue = function (a) {
    var b = this.f,
      a = (this.Gf = M ? a.touches[0] : a),
      b = ta(a, b.gc()),
      d = b.e() - this.Pa,
      c = b.c() - this.Qa;
    if (this.ga && (Ca(d) > Xe || Ca(c) > Xe)) this.ga = k;
    this.ga ||
      ((this.Pa = b.e()), (this.Qa = b.c()), h(this, 'mousemove', this.Fa(a)));
  };
  c.Xj = function (a) {
    a = this.Fa((M ? a.touches[0] : a) || this.Gf);
    h(this, 'mouseup', a);
    this.ga && h(this, 'click', a);
    this.ga = f;
  };
  var Xe = M ? 10 : 3;
  Va.prototype.Fa = function (a) {
    var b = this.f,
      a = ta(a, b.gc()),
      b = Eb(b.b, a).W(this.h);
    return new Nd(a, b);
  };
  Va.prototype.Wb = function (a) {
    q(
      'fillColor fillOpacity strokeWeight strokeColor strokeOpacity strokeStyle'.split(
        ' '
      ),
      function (b) {
        a[b] === V || (this.Eb[b] = a[b]);
      },
      this
    );
  };
  m(ga, Va);
  c = ga.prototype;
  c.Db = function (a) {
    a.path && oe(this, a.path);
    a.pathHint &&
      ((a = a.pathHint || ''), zc(a) && (a = [a]), (this.kj = a), (this.Z = l));
  };
  c.Cb = function (a) {
    var b = this.l.zIndex;
    this.Db(a);
    this.Wb(a);
    this.f && (this.pb(), this.L());
    b !== a.zIndex && a.zIndex !== V && this.J(a.zIndex);
  };
  c.jb = function () {
    this.qd = l;
    this.pb();
    this.J(this.l.zIndex);
  };
  c.kb = function () {
    this.Tc();
  };
  c.bc = k;
  c.pb = function () {
    var a = this.G;
    if (a) {
      var b = this.Eb,
        d = this.Ic,
        c = b.length,
        e = d.length;
      e > c &&
        ((c = d.splice(c, e - c)),
        q(c, a.dc, a),
        (c = this.Ga.splice(b.length)),
        q(c, this.sj, this));
      q(
        b,
        function (b, c) {
          var e = d[c],
            G = !!e;
          G ||
            ((e = a.create('path')),
            (e.zIndex = this.l.zIndex),
            d.push(e),
            this.Ga.push(kd(this, e)));
          a.rc(e, b);
          a.nb(e, this.qd);
          G || a.uc(e);
        },
        this
      );
    }
  };
  c.Tc = function () {
    var a = this.Ic;
    if (a.length) {
      var b = this.Ga,
        d = this.G;
      q(b, function (a) {
        q(a, z);
      });
      q(a, d.dc, d);
      b.length = 0;
      a.length = 0;
      b = [];
      a = [];
    }
  };
  c.ng = function () {
    return this.Sg.slice();
  };
  c.dh = function (a) {
    oe(this, a);
    this.L();
  };
  c.aa = function () {
    this.Z = l;
    this.L();
  };
  c.L = function () {
    if (this.Z) {
      this.Z = k;
      var a = this.wa();
      if (a) {
        var b = this.Xg;
        b.length = 0;
        var d = Infinity,
          c = Infinity,
          e = -Infinity,
          g = -Infinity,
          j = this.p().b.k(),
          h = 1 * D(2, j - 1),
          i,
          m = a.b,
          n = m.B(),
          o = n.e(),
          p = n.c(),
          r = D(2, -m.k()),
          t = ia(m),
          u = m.i() - ja(m);
        i = function (b) {
          b = K(b);
          b = wa(b, a);
          return new F(((b.e() - o) * r - t) | 0, (u - (b.c() - p) * r) | 0);
        };
        var x = this.kj || [];
        q(this.Ud, function (a, f) {
          var k = [],
            l = 0,
            m = NaN,
            n = NaN,
            o = x[f];
          q(a, function (a, b) {
            if (!(o && o[b] < j)) {
              var f = a.e(),
                p = a.c();
              if (!(Ca(f - m) + Ca(p - n) < h)) {
                m = f;
                n = p;
                var q = i(a),
                  f = q.x,
                  p = q.y;
                d = P(d, f);
                c = P(c, p);
                e = A(e, f);
                g = A(g, p);
                k[l++] = q;
              }
            }
          });
          b.push(k);
        });
        this.ha = d;
        this.qa = c;
        this.oa = e;
        this.pa = g;
        var w = Infinity,
          z = Infinity,
          B = -Infinity,
          C = -Infinity,
          y = this.p().b,
          H = y.m(),
          I = y.i();
        if (
          this.oa < -ia(y) - 2 * H ||
          this.pa < -ja(y) - 2 * I ||
          this.ha > -ia(y) + 3 * H ||
          this.qa > -ja(y) + 3 * I
        )
          pe(this, k);
        else {
          pe(this, l);
          var J = [];
          q(
            this.Xg,
            function (a) {
              var b = f,
                d = -2,
                c = f,
                e = 2 * H,
                g = 2 * I,
                G = ia(y) + e,
                j = ja(y) + g;
              q(
                a,
                function (a) {
                  var h = a.e() + G,
                    k = a.c() + j,
                    i;
                  if (!(i = this.bc))
                    if (!(i = y.ld(a, e, g)))
                      if ((i = c)) {
                        var l = c;
                        i = a.e() + ia(y);
                        var m = a.c() + ja(y),
                          n = l.e() + ia(y),
                          l = l.c() + ja(y),
                          o = y.S + 0,
                          E = y.O + 0;
                        i = !(
                          (0 > i && 0 > n) ||
                          (0 > m && 0 > l) ||
                          (i >= o && n >= o) ||
                          (m >= E && l >= E)
                        );
                      }
                  i
                    ? (b ||
                        (c
                          ? ((b = [c.e() + G, c.c() + j]),
                            (d = 2),
                            (w = P(w, c.e())),
                            (z = P(z, c.c())),
                            (B = A(B, c.e())),
                            (C = A(C, c.c())))
                          : ((b = []), (d = 0)),
                        J.push(b)),
                      (w = P(w, h)),
                      (z = P(z, k)),
                      (B = A(B, h)),
                      (C = A(C, k)),
                      (b[d] = h),
                      (b[d | 1] = k),
                      (d += 2))
                    : (b &&
                        ((w = P(w, h)),
                        (z = P(z, k)),
                        (B = A(B, h)),
                        (C = A(C, k)),
                        (b[d] = h),
                        (b[d | 1] = k)),
                      (b = f));
                  c = a;
                },
                this
              );
            },
            this
          );
          q(
            this.Ic,
            function (a) {
              q(
                J,
                function (a) {
                  4 > a.length && ((a[2] = a[0]), (a[3] = a[1]));
                },
                this
              );
              this.G.zc(a, J, this.bc);
            },
            this
          );
        }
      }
    }
  };
  c.qd = l;
  c.kg = function () {
    var a = 0;
    q(
      this.Ud,
      function (b) {
        var d = b.length;
        if (0 < d)
          for (
            var c = K(b[this.bc ? d - 1 : 0]), e = this.bc ? 0 : 1;
            e < d;
            ++e
          ) {
            var g = K(b[e]),
              f = g.e() - c.e(),
              c = g.c() - c.c();
            a += Qc(f * f + c * c);
            c = g;
          }
      },
      this
    );
    return 0.4 * a;
  };
  c.xa = function () {
    return this.l.zIndex;
  };
  c.J = function (a) {
    var b = this.Ic,
      d = this.l.zIndex;
    this.G &&
      q(
        b,
        function (b) {
          this.G.wc(b, a, d);
          b.zIndex = a;
        },
        this
      );
    this.l.zIndex = a;
  };
  c.Wb = function (a) {
    var b = (this.Eb[0] = this.Eb[0] || {}),
      d =
        'strokeWeight strokeColor strokeOpacity strokeStyle startArrow endArrow'.split(
          ' '
        );
    this.bc && d.push('fillColor', 'fillOpacity');
    q(d, function (d) {
      a[d] === V || (b[d] = a[d]);
    });
    a.additionalStyles &&
      ((this.Eb = [b].concat(a.additionalStyles)), (this.Z = l));
  };
  m(ea, ga);
  ea.prototype.bc = l;
  ea.prototype.ti = function () {
    var a = 0;
    q(this.Ud, function (b) {
      var d = b.length;
      if (0 < d)
        for (var c = K(b[d - 1]), e = 0; e < d; ++e) {
          var g = c,
            c = K(b[e]);
          a += c.e() * g.c() - g.e() * c.c();
        }
    });
    return 0.08 * Math.abs(a);
  };
  m(na, Va);
  c = na.prototype;
  c.Db = function (a) {
    a.bounds && qe(this, a.bounds);
  };
  c.Cb = function (a) {
    var b = this.l.zIndex;
    this.Db(a);
    this.Wb(a);
    this.f && (this.pb(), this.z());
    b !== a.zIndex && a.zIndex !== V && this.J(a.zIndex);
  };
  c.Da = sf;
  c.jb = function () {
    this.pb();
    this.J(this.l.zIndex);
  };
  c.kb = function () {
    this.Tc();
  };
  c.pb = function () {
    var a = this.G;
    if (a) {
      var b = this.xb,
        d = !!b;
      d || ((b = this.xb = a.create('path')), (this.Ga = kd(this, b)));
      a.rc(b, this.Eb);
      d || a.uc(b);
    }
  };
  c.Tc = function () {
    if (this.xb) {
      var a = this.Ga;
      q(a, z);
      this.G.dc(this.xb);
      a.length = 0;
      eventIds_ = [];
      this.xb = f;
    }
  };
  c.Vc = function (a) {
    qe(this, a);
    this.z();
  };
  c.Lb = function () {
    return Ac(this.Da.B(), this.Da.rb());
  };
  c.aa = function () {
    this.Z = l;
    this.z();
  };
  c.z = function () {
    if (this.Z) {
      this.Z = k;
      var a = this.wa();
      if (a) {
        var b = a.ab(this.Da.B()),
          a = a.ab(this.Da.rb()),
          d = this.p().b,
          c = 2 * d.m(),
          e = 2 * d.i(),
          d = a.y + e,
          e = b.y + e,
          b = b.x + c,
          a = a.x + c;
        this.G.zc(this.xb, [[b, e, b, d, a, d, a, e]], l);
      }
    }
  };
  c.xa = function () {
    return this.l.zIndex;
  };
  c.J = function (a) {
    var b = this.l.zIndex;
    this.G && (this.G.wc(this.xb, a, b), (this.xb.zIndex = a));
    this.l.zIndex = a;
  };
  m(W, Va);
  c = W.prototype;
  c.Db = function (a) {
    a.center && re(this, a.center);
    a.radius && this.qc(a.radius);
    a.rx && this.qc({ rx: a.rx });
    a.ry && this.qc({ ry: a.ry });
  };
  c.Cb = function (a) {
    var b = this.l.zIndex;
    this.Db(a);
    this.Wb(a);
    this.f && (this.pb(), this.z());
    b !== a.zIndex && a.zIndex !== V && this.J(a.zIndex);
  };
  c.Wd = 0;
  c.n = db;
  c.jb = function () {
    this.pb();
    this.J(this.l.zIndex);
  };
  c.kb = function () {
    this.Tc();
  };
  c.pb = function () {
    var a = this.G;
    if (a) {
      var b = this.qb,
        d = !!b;
      d || ((b = this.qb = a.create('ellipse')), (this.Ga = kd(this, b)));
      a.rc(b, this.Eb);
      d || a.uc(b);
    }
  };
  c.Tc = function () {
    if (this.qb) {
      var a = this.Ga;
      q(a, z);
      this.G.dc(this.qb);
      a.length = 0;
      eventIds_ = [];
      this.qb = f;
    }
  };
  c.s = function (a) {
    re(this, a);
    this.z();
  };
  c.v = function () {
    return va(this.n);
  };
  c.qc = function (a) {
    var b = this.l.radius,
      a = 2.5 * a;
    b != a && ((this.Wd = a), (this.Z = l));
  };
  c.jf = function (a) {
    this.qc(a);
    this.z();
  };
  c.Ge = function () {
    return 0.4 * this.Wd;
  };
  c.aa = function () {
    this.Z = l;
    this.z();
  };
  c.z = function () {
    if (this.Z) {
      this.Z = k;
      var a = this.wa();
      if (a) {
        var b = this.Hc ? this.lc : this.Wd,
          d = this.Hc ? this.mc : b,
          c = a.lb(this.n.la(-b, d)),
          b = a.lb(this.n.la(b, -d)),
          a = a.ab(this.n),
          d = this.p().b;
        this.G.rd(
          this.qb,
          a.x + 2 * d.m(),
          a.y + 2 * d.i(),
          (b.e() - c.e()) / 2,
          (b.c() - c.c()) / 2
        );
      }
    }
  };
  c.Lb = function () {
    var a = this.Hc ? this.lc : this.Wd,
      b = this.Hc ? this.mc : a,
      c = this.n.la(-a, -b),
      a = this.n.la(a, b);
    return Ac(c, a);
  };
  c.xa = function () {
    return this.l.zIndex;
  };
  c.J = function (a) {
    var b = this.l.zIndex;
    this.G && (this.G.wc(this.qb, a, b), (this.qb.zIndex = a));
    this.l.zIndex = a;
  };
  m(J, W);
  c = J.prototype;
  c.Hc = l;
  c.lc = 0;
  c.mc = 0;
  c.qc = function (a, b) {
    var c = {};
    'object' == typeof a ? (c = a) : ((c.rx = a), (c.ry = b));
    c.rx && this.lc != 2.5 * c.rx && ((this.lc = 2.5 * c.rx), (this.Z = l));
    c.ry && this.mc != 2.5 * c.ry && ((this.mc = 2.5 * c.ry), (this.Z = l));
  };
  c.jf = function (a, b) {
    this.qc(a, b);
    this.z();
  };
  c.Ge = function () {
    return { rx: 0.4 * this.lc, ry: 0.4 * this.mc };
  };
  c.og = function () {
    return 0.4 * this.lc;
  };
  c.pg = function () {
    return 0.4 * this.mc;
  };
  m(B, $);
  B.prototype.Aa = l;
  B.prototype.Za = k;
  B.prototype.S = 0;
  B.prototype.O = 0;
  var wf =
    'touchstart mousedown MSPointerDown mousewheel DOMMouseScroll wheel contextmenu dblclick'.split(
      ' '
    );
  c = B.prototype;
  c.M = function () {
    var a = (this.a = r('div'));
    sa(a, 'default');
    O(a);
    Wa(a, '#fff');
    za(a, 'border:1px solid #7681A8');
    q(wf, function (b) {
      o(a, b, t.Ua);
    });
    var b = (this.Jh = r('div'));
    O(b);
    a.appendChild(b);
    L(b, 11, 9);
    b = this.Uf = r('div');
    O(b);
    aa(b, 0, 0);
    a.appendChild(b);
    this.rj &&
      ((b = r('img')),
      (b.alt = 'close'),
      (b.width = 14),
      (b.height = 13),
      (b.src = vc + 'bt_close.gif'),
      O(b),
      i(b, { right: '5px', top: '5px' }),
      sa(b, 'pointer'),
      a.appendChild(b),
      o(b, 'click', this.close, this));
  };
  c.n = db;
  c.s = function (a) {
    this.n = a instanceof Z ? a : K(a);
    this.z();
  };
  c.v = function () {
    return this.n instanceof Z ? this.n : va(this.n);
  };
  c.Xc = function (a) {
    this.Ha = a;
    this.p() instanceof oa && this.z();
  };
  c.Bc = n('Ha');
  c.oc = function (a) {
    this.Ba = a;
    this.p() instanceof oa && this.z();
  };
  c.fc = n('Ba');
  c.jb = function () {
    this.cg = l;
    this.wd().Xe.appendChild(this.a);
    md(this);
  };
  c.kb = function () {
    Fa(this.a);
  };
  c.aa = function () {
    this.z();
  };
  c.z = function () {
    var a = this.wa();
    if (a) {
      this.Ka();
      var b = this.p(),
        c = b.b,
        f = this.a,
        e = this.Jh,
        g = this.S,
        j = this.O,
        h = a.ab(this.n, this.Ba, this.Ha),
        i = this.gb,
        i = i ? -i.T.vd().c() : 0,
        c =
          this.Kf ||
          j + 30 < h.y + i ||
          h.y + j + 30 >= c.i() ||
          b instanceof oa;
      this.If !== c &&
        (Qe(e, c ? vc + 'triangle.png' : vc + 'triangle_down.png'),
        kb(e, 11, 9),
        (this.If = c));
      aa(e, (g - 11) >> 1, c ? j : -9);
      e = [-(g >> 1), c ? -j - 9 : 9];
      a = a.lb(this.n, this.Ba, this.Ha);
      aa(
        f,
        e[0] + a.e() + this.Qd.m(),
        e[1] + a.c() + this.Qd.i() + (c ? i : 0)
      );
      this.cg &&
        this.Kf &&
        ((this.cg = k),
        b.Rd(
          Math.max(0, h.e() - e[0] - b.b.m() + 11) +
            Math.min(0, h.e() + e[0] - 10),
          Math.min(0, h.c() + e[1] + i - 10)
        ));
    }
  };
  c.Ka = function () {
    var a = this.p().b,
      b = this.n,
      c = this.Aa;
    b instanceof Z && ((b = b.N()), (c = c && (!b || a.va(b))));
    c != this.Za && ((this.Za = c) ? (jb(this.a), md(this)) : Qa(this.a));
  };
  c.cc = f;
  c.ce = function (a) {
    se(this, a);
    md(this);
    this.z();
  };
  c.Ee = n('cc');
  c.gb = f;
  c.open = function (a, b) {
    this.gb = b || f;
    b && (this.s(b.v()), this.oc(b.fc()));
    this.F(a);
  };
  c.close = function () {
    this.F(f);
  };
  c.$a = 0;
  c.J = function (a) {
    this.$a = a;
    Ba(this.a, a);
  };
  c.xa = n('$a');
  c.rc = Oa();
  m(Lc, Ha);
  Lc.prototype.M = function () {
    var a = (this.a = r('div'));
    za(a, 'color:#000;text-align:center;font-size:10px');
    fb(a);
    var b = (this.Lf = r('div'));
    fb(b);
    Aa(b, 2, 3, 0, 4);
    i(b, {
      height: '6px',
      transition: 'width 0.1s',
      border: '2px solid #000',
      'border-top': 'none',
    });
    a.appendChild(b);
    var c = (this.$f = r('div'));
    fb(c);
    Aa(c, 0, 4, 0, 0);
    i(c, {
      'font-family': 'AppleSDGothicNeo-Regular,"\ub3cb\uc6c0",dotum,sans-serif',
      'font-weight': 'bold',
    });
    a.appendChild(c);
    pb &&
      setTimeout(function () {
        a.style.cssText = a.style.cssText;
        b.style.cssText = b.style.cssText;
      }, 0);
  };
  Lc.prototype.V = function (a) {
    var b = 0 > a ? Ye[0] / D(2, -a) : Ye[a];
    this.$f.innerHTML = 1e3 > b ? b + 'm' : b / 1e3 + 'km';
    b = 58;
    switch (a) {
      case 0:
      case 1:
        b = 76;
        break;
      case 2:
        b = 56;
        break;
      case 3:
      case 4:
        b = 46;
    }
    i(this.Lf, { width: b + 'px' });
  };
  var Ye = [
    10, 20, 30, 50, 100, 250, 500, 1e3, 2e3, 4e3, 8e3, 16e3, 32e3, 64e3, 128e3,
  ];
  m(Db, Ha);
  Db.prototype.M = function () {
    var a = (this.a = r('div'));
    O(a);
    sa(a, 'default');
    Ba(a, 1);
    Aa(a, 0, 6, 0);
    i(a, { height: '19px', 'line-height': '14px', left: '0', bottom: '0' });
    da(this, this.Vb);
    this.Vb.P();
    var b = (this.Ph = r('div'));
    Aa(b, 0, 4, 0);
    fb(b);
    var c = (this.uk = r('a'));
    o(c, 'click', this.Oh, this);
    c.target = '_blank';
    c.href = 'http://map.kakao.com/';
    c.title =
      'Kakao \uc9c0\ub3c4\ub85c \ubcf4\uc2dc\ub824\uba74 \ud074\ub9ad\ud558\uc138\uc694.';
    fb(c);
    L(c, 32, 10);
    var f = (this.Mh = r('img'));
    fb(f);
    L(f, 32, 10);
    f.src = Be;
    f.alt = 'Kakao \uc9c0\ub3c4\ub85c \uc774\ub3d9';
    i(f, { border: 'none' });
    c.appendChild(f);
    b.appendChild(c);
    c = this.Mj = r('div');
    i(c, { font: '11px/11px Arial, Tahoma, Dotum, sans-serif' });
    fb(c);
    b.appendChild(c);
    a.appendChild(b);
    o(a, 'mousedown', ba);
  };
  Db.prototype.Oh = function (a) {
    ba(a);
    h(this, 'logo');
  };
  var ef = ra + 'm_bi_w.png',
    Be = ra + 'm_bi_b.png';
  Db.prototype.V = function (a) {
    this.Vb.V(a);
  };
  Db.prototype.nb = function (a) {
    a = !!a;
    a != this.Aa && ((this.Aa = a) ? jb(this.a) : Qa(this.a));
  };
  Db.prototype.s = function (a, b) {
    if (!(this.kc == a && this.ah == b)) {
      this.kc = a || 0;
      this.ah = b;
      var c = {},
        f = b ? 'right' : 'left';
      Ea(a) ? ((c[this.Hh[a]] = 0), (c.bottom = 0)) : (c = a);
      q(['top', 'bottom', 'left', 'right'], function (a) {
        var b = c[a];
        c[a] = b === V ? '' : Ea(b) ? b + 'px' : b;
      });
      i(this.a, c);
      i(this.Vb.a, { float: f });
      i(this.Ph, { float: f });
    }
  };
  m(cb, Ha);
  c = Mc.prototype;
  c.S = 640;
  c.O = 480;
  c.D = 0;
  c.Q = 14;
  c.ja = function (a, b) {
    this.S = a;
    this.O = b;
  };
  c.m = n('S');
  c.i = n('O');
  c.za = function (a) {
    var b = this.ca.e(),
      c = this.ca.c(),
      f = D(2, -this.H);
    this.ka = new Ma(
      b + H((a.e() - b) * f - this.S / 2) / f,
      c + H((a.c() - c) * f - this.O / 2) / f
    );
  };
  c.C = function () {
    return this.ka.la(this.S / D(2, -this.H) / 2, this.O / D(2, -this.H) / 2);
  };
  c.ca = new Ma(1838720, 4066832);
  c.ka = new Ma(1838720, 4066832);
  c.B = n('ka');
  c.H = 3;
  c.V = function (a) {
    this.H = A(this.D, P(this.Q, a));
  };
  c.k = n('H');
  c.ld = function (a, b, c) {
    var f = a.e() + ia(this),
      a = a.c() + ja(this);
    return (
      f >= (-b || 0) &&
      a >= (-c || 0) &&
      f < this.S + (b || 0) &&
      a < this.O + (c || 0)
    );
  };
  c.moveBy = function (a, b) {
    var c = D(2, -this.H);
    this.ka = this.ka.la(a / c, b / c);
  };
  c.Yc = $b('Yb');
  c = Vb.prototype;
  c.ja = function (a, b) {
    this.S = a;
    this.O = b;
  };
  c.m = n('S');
  c.i = n('O');
  c.s = $b('kc');
  c.v = n('kc');
  c.ib = f;
  c.Sd = 0;
  c.U = $b('Sd');
  c.N = n('Sd');
  c.H = 0;
  c.V = function (a) {
    this.H = A(P(a, 3), -3);
  };
  c.k = n('H');
  c.ld = function (a) {
    var b = a.e(),
      a = a.c();
    return 0 <= b && 0 <= a && b < this.S && a < this.O;
  };
  c.va = function (a) {
    return this.Sd == a;
  };
  m(nd, Ga);
  c = nd.prototype;
  c.qi = 15;
  c.ec = 45;
  c.Ii = 16;
  c.Ui = 250;
  c.Di = 8;
  c.Ci = 400;
  c.Cd = { 33: 1, 34: 2, 35: 4, 36: 8 };
  c.Md = { 37: 1, 38: 2, 39: 4, 40: 8, 98: 8, 100: 1, 102: 4, 104: 2 };
  c.Ah = { 107: -1, 109: 1, 187: -1, 189: 1 };
  c.jh = {
    17: 'ctrl',
    18: 'alt',
    9: 'tab',
    91: 'left command window',
    92: 'right window',
    93: 'right command menu',
  };
  c.setActive = function (a) {
    this.Hb !== a &&
      (a
        ? (this.oi = Jb(
            ['click', 'focusin', 'focus'],
            function (a) {
              return o(document, a, this.pi, this, l);
            },
            this
          ))
        : (q(
            this.oi,
            function (a) {
              z(a);
            },
            this
          ),
          ue(this, k)),
      (this.Hb = a));
  };
  c.pi = function (a) {
    a = a.target;
    ue(
      this,
      (this.a == a || dc(this.a, a)) &&
        0 > Pa(['INPUT', 'BUTTON', 'TEXTAREA'], a.tagName)
    );
  };
  c.Ji = function (a) {
    var b = a.keyCode;
    if (t.fb()) t.Wa(a);
    else if (b in this.jh) this.$c = l;
    else if (!this.$c || this.hb.cb())
      b in this.Md
        ? ((this.ra |= this.Md[b]), this.Ue(), ba(a))
        : b in this.Cd
        ? ((this.eb |= this.Cd[b]), this.Pe(), ba(a))
        : b in this.Ah && this.H(b);
  };
  c.Li = function (a) {
    var b = a.keyCode;
    this.Zf.start();
    if (t.fb()) t.Wa(a);
    else if (b in this.jh) this.$c = k;
    else if (!this.$c || this.hb.cb())
      if (91 === b || 92 === b) ve(this);
      else if (b in this.Md) {
        if (!this.hb.cb() && (this.Ld.stop(), !this.ic.cb())) {
          var c = this.Ci,
            a = (this.ra & 1 ? -c : 0) + (this.ra & 4 ? c : 0),
            c = (this.ra & 2 ? -c : 0) + (this.ra & 8 ? c : 0);
          this.Me = this.Di;
          this.Ne = a;
          this.Oe = c;
          this.ic.start();
        }
        this.ra &= ~this.Md[b];
        this.hb.cb() && !this.ra && (this.hb.stop(), (this.Kd = 0));
      } else b in this.Cd && (this.eb &= ~this.Cd[b]);
  };
  c.Yh = function () {
    h(this, 'keyup');
  };
  c.Ca = function () {
    var a = kf((Me / 2) * (++this.Dg / this.Me)) / this.qi,
      b = {};
    0 >= a
      ? (this.ic.stop(), (this.Dg = 0))
      : ((b.x = this.Ne * a), (b.y = this.Oe * a), h(this, 'move', b));
  };
  c.L = function () {
    var a = (this.ra & 1 ? -1 : 0) + (this.ra & 4 ? 1 : 0),
      b = (this.ra & 2 ? -1 : 0) + (this.ra & 8 ? 1 : 0),
      c = {},
      f;
    if (a || b)
      (f =
        this.Kd < this.ec ? (jf(Me * (++this.Kd / this.ec - 0.5)) + 1) / 2 : 1),
        (f *= this.kh),
        (c.x = a * f),
        (c.y = b * f),
        h(this, 'move', c);
  };
  c.Ti = function () {
    this.hb.start();
    this.Ld.stop();
  };
  c.Ue = function () {
    this.hb.cb() || this.Ld.start();
  };
  c.H = function (a) {
    h(this, 'zoom', this.Ah[a]);
  };
  c.Pe = function () {
    if (!this.ic.cb()) {
      var a = this.a.getBoundingClientRect(),
        b = a.right - a.left,
        a = a.bottom - a.top,
        b = (this.eb & 4 ? b : 0) + (this.eb & 8 ? -b : 0),
        a = (this.eb & 1 ? -a : 0) + (this.eb & 2 ? a : 0);
      this.Me = this.Ii;
      this.Ne = b;
      this.Oe = a;
      this.ic.start();
    }
  };
  m(sc, cb);
  c = sc.prototype;
  c.Lc = function (a) {
    dc(this.t.a, a.relatedTarget || a.fromElement) || h(this, 'mouseover');
  };
  c.Kc = function (a) {
    dc(this.t.a, a.relatedTarget || a.toElement) || h(this, 'mouseout');
  };
  c.Yd = function (a) {
    t.fb(a) ? t.Wa(a) : (ba(a), h(this, 'rightclick', this.Fa(a)));
  };
  c.K = k;
  c.Uc = k;
  c.yg = function () {
    this.Gc = this.Bd = k;
  };
  c.Lj = function (a) {
    if (this.A || 1 < a.touches.length) this.od.stop(), (this.Bd = this.Gc = k);
    else if (((a = this.Vh = a.touches[0]), (a = ta(a, this.a)), this.Bd)) {
      var b = a.c() - this.oh;
      Ca(a.e() - this.nh) > Vc || Ca(b) > Vc
        ? ((this.nh = a.e()), (this.oh = a.c()))
        : (this.Gc = l);
      this.od.stop();
      this.Bd = k;
    } else (this.nh = a.e()), (this.oh = a.c()), this.od.start(), (this.Bd = l);
  };
  c.bi = function () {
    this.Gc && (this.Yf(this.Vh), (this.Gc = k));
  };
  c.ya = 0;
  c.yd = k;
  c.ne = function (a, b) {
    var c = this.ia,
      f = Da[a],
      e = new id();
    e.b = c.b;
    b ? (c.Xa.unshift(e), Gd(c, e)) : (c.Xa.push(e), da(c, e));
    e.Yc(f);
    e.q();
    Ja(this);
  };
  c.bf = function (a) {
    for (var b = this.ia, a = Da[a], c = b.Xa.length - 1; 0 <= c; --c)
      if (b.Xa[c].sb() == a) {
        b.removeChild(b.Xa[c]);
        b.Xa.splice(c, 1);
        break;
      }
    Ja(this);
  };
  c.A = k;
  c.rh = 0;
  c.Bb = f;
  c.ga = f;
  c.Tb = k;
  c.Pa = 0;
  c.Qa = 0;
  c.ug = f;
  c.dd = k;
  c.Uj = function (a) {
    t.fb(a)
      ? t.Wa(a)
      : 1 == a.touches.length
      ? ((this.dd = l),
        (this.ug = this.Fa(a.touches[0])),
        this.bb.start(),
        Ce(this, a))
      : this.dd && (ba(a), (this.dd = k), this.ub(a.touches[0], l));
  };
  c.Qe = function (a) {
    t.fb(a)
      ? t.Wa(a)
      : (Fd(a) && Ce(this, a), this.A || h(this, 'mousedown', this.Fa(a)));
  };
  c.Tj = function (a) {
    ba(a);
    this.Jd(a.targetTouches[0]);
  };
  c.vh = function (a) {
    if (this.dd)
      return (
        (this.dd = k), this.ub(a.changedTouches[0], 'touchcancel' == a.type)
      );
  };
  c.vg = function (a) {
    this.ga === f && h(this, 'mousemove', this.Fa(a));
  };
  c.wg = function (a) {
    this.A || h(this, 'mouseup', this.Fa(a));
  };
  var Vc = M ? 10 : 3;
  c = sc.prototype;
  c.Jd = function (a) {
    var b = ta(a, this.a),
      c = b.e() - this.Pa,
      G = b.c() - this.Qa;
    ua &&
      ((this.Ng = b.e()),
      (this.Og = b.c()),
      this.De && a.Vj && ((c = Xb(a.Vj)), (G = Xb(a.Jk))));
    if (this.ga && (Ca(c) > Vc || Ca(G) > Vc)) {
      this.ga = k;
      sd(this.t.a);
      if (!this.K) return;
      h(this, 'dragstart');
      this.Tb = l;
      this.bb.stop();
      this.na.Yc(f);
    }
    !this.ga &&
      this.K &&
      ((this.Pa = b.e()),
      (this.Qa = b.c()),
      this.b.moveBy(-c, G),
      this.t.$b(c, G),
      this.ma.$b(-c, -G),
      !Ib && !M && (this.u.sc(c, G), this.ia.sc(c, G)),
      h(this, 'drag'),
      h(this, 'center_changed'),
      h(this, 'bounds_changed'),
      this.Fb.push({ time: a.timeStamp, x: b.e(), y: b.c() }),
      3 < this.Fb.length && this.Fb.shift());
  };
  c.Fa = function (a) {
    var a = ta(a, this.a),
      b = Eb(this.b, a).W(this.h);
    return new Nd(a, b);
  };
  c.ub = function (a, b) {
    jd();
    this.Sc();
    if (!b)
      if (this.ga)
        this.hd ||
          (t.fb(a)
            ? t.Wa(a)
            : (h(this, 'click', this.Fa(a)),
              this.Ug &&
                (this.b.C().va(this.Dd) ||
                  (h(this, 'center_changed'), h(this, 'bounds_changed')),
                nb(this)))),
          (this.Tb = k),
          Oc(this),
          (this.hd = k);
      else {
        var c = 0,
          G = 0,
          e = 1,
          g = 0;
        if (this.hj && 1 < this.Fb.length)
          var g = this.Fb[0],
            j = this.Fb[this.Fb.length - 1],
            c = j.x - g.x,
            G = j.y - g.y,
            e = Qc(D(c, 2) + D(G, 2)),
            g = 1e3 * (e / (j.time - g.time));
        if (500 <= g)
          (g = P(g, 1500)),
            Ee(this, ((-c / e) * g) / 2, ((-G / e) * g) / 2, g, Id, l);
        else {
          this.Tb = k;
          Oc(this);
          if (Ib || M) this.u.q(), this.ia.q();
          this.I.q();
          Ja(this);
          nb(this);
        }
        this.yg();
        h(this, 'dragend');
      }
    this.Pc = 0;
    this.bb.stop();
    Kc(this.ua, k);
    this.ga = f;
  };
  c.Sc = function () {
    z(this.Re);
    z(this.Se);
    z(this.wh);
    z(this.uh);
    z(this.th);
    this.th = this.uh = this.wh = this.Se = this.Re = f;
  };
  c.Yf = function (a) {
    if (!this.A)
      if (t.fb(a)) t.Wa(a);
      else {
        var b = ta(a, this.a),
          c = this.Fa(a),
          a = new Ka(0);
        a.addListener(
          'tick',
          function () {
            h(this, 'dblclick', c);
            this.ai && tc(this, -1, b);
            this.Pc = 0;
          },
          this
        );
        a.start();
      }
  };
  c.Ta = function (a) {
    var b = this.b,
      c = ia(b),
      f = ja(b),
      c = H(a.je - c),
      f = H(a.ke - f);
    if (c || f)
      b.moveBy(-c, f),
        this.ma.Y(-a.je, -a.ke),
        !Ib && !M && (this.A || Wb(this));
  };
  c.Ye = function () {
    Wb(this);
    Ja(this);
    this.Qc = f;
    this.Tb = k;
    Oc(this);
    this.A = k;
    h(this, 'center_changed');
    h(this, 'bounds_changed');
    nb(this);
  };
  c.ij = function () {
    Wb(this);
    Ja(this);
    this.Qc = f;
    this.A = k;
  };
  c.Nb = 0;
  c.Te = function (a) {
    if (t.fb(a)) t.Wa(a);
    else if ((ba(a), !this.Eg)) {
      var b = 10 * a.wheelDelta || -120 * (a.detail || a.deltaY);
      this.Nb = 120 > Ca(b) ? this.Nb + (a.wheelDelta || 0) : this.Nb + b;
      this.A && +new Date() < this.rh
        ? (this.Nb = 0)
        : a.axis == a.VERTICAL_AXIS &&
          120 <= Ca(this.Nb) &&
          ((this.Nb = 0),
          (b = 0 < (a.wheelDelta || -a.detail || -a.deltaY) ? -1 : 1),
          (a = ta(a, this.a)),
          tc(this, b, a));
    }
  };
  c.$d = function (a, b, c, f, e) {
    f = w(f, 300);
    0 === f
      ? (this.I.q(), this.Ab())
      : ((this.A = 0 !== f),
        (this.rh = +new Date() + 200),
        this.ia.P(),
        this.da.P(),
        (a = D(2, -a)),
        this.vf
          ? this.vf.reset(a, f)
          : ((b = this.vf =
              new fc({ duration: f, Zb: e, vb: b, wb: c, yb: a })),
            Cb || pb ? this.I.P() : this.I.scale(b),
            this.u.scale(b),
            b.start(),
            this.na.Ea()));
  };
  c.Pe = function (a, b, c, f, e, g, j, h, i) {
    0 === h
      ? (this.b.za(this.Bb),
        this.t.Y(g, j),
        this.ma.Y(-g, -j),
        this.I.q(),
        this.Ab())
      : ((this.Eg = this.A = l),
        this.ia.P(),
        this.da.P(),
        (a = D(2, -a)),
        (b = new Xc({
          duration: h,
          yb: a,
          Zb: i,
          vb: b,
          wb: c,
          nf: f,
          of: e,
          se: g,
          ue: j,
        })),
        Cb || pb ? this.I.P() : this.I.scale(b),
        (c = this.t),
        b.addListener('tick', c.Ta, c),
        this.u.scale(b),
        b.start(),
        this.na.Ea());
  };
  c.Ab = function () {
    Ae(this);
    this.u.Yc(this.na.sb());
    this.u.q();
    this.ia.show();
    this.ia.q();
    if (Cb || pb) this.I.show(), this.I.q();
    this.da.show();
    q(this.sa, Nc);
    Ja(this);
    Oc(this);
    this.Eg = this.A = k;
    this.vf = this.Bb = f;
    this.oe();
    this.oe = R;
    this.ed && h(this, 'zoom_changed');
    this.b.C().va(this.Dd) || h(this, 'center_changed');
    h(this, 'bounds_changed');
    nb(this);
    this.Nb = 0;
    if (Cb || pb) {
      var a = this.a;
      setTimeout(function () {
        a.className = a.className;
      }, 0);
    }
  };
  c.ig = function (a) {
    if (!this.De && !this.A)
      if (t.fb(a)) t.Wa(a);
      else {
        Fb(this);
        var b = new F(this.b.m() / 2, this.b.i() / 2);
        if (ua) {
          this.Ve.addPointer(a.pointerId);
          b = ta(a, this.a);
          if (2 > ++this.Pc) {
            this.Ng = b.e();
            this.Og = b.c();
            return;
          }
          b = new F((b.e() + this.Ng) / 2, (b.c() + this.Og) / 2);
        } else if (Na) {
          if (2 != a.touches.length) return;
          this.Zh = Fe(a.touches);
          var b = ta(a.touches[0], this.a),
            c = ta(a.touches[1], this.a),
            b = new F((b.e() + c.e()) / 2, (b.c() + c.c()) / 2);
        } else b = ta(a, this.a);
        this.Pa = b.e();
        this.Qa = b.c();
        this.De = l;
        this.ub(a, l);
        this.Dd = this.b.C();
        this.Ce = Eb(this.b, b);
        Ed(this.u.a, b.e() - ia(this.b), b.c() - ja(this.b));
        Ed(this.I.a, b.e() - ia(this.b), b.c() - ja(this.b));
        this.na.P();
        this.ia.P();
        this.da.P();
        Ge(this);
        this.Be = ua
          ? o(this.t.a, 'MSGestureChange', this.gg, this)
          : o(this.t.a, Na ? 'touchmove' : 'gesturechange', this.gg, this);
        this.hg = ua
          ? o(this.t.a, 'MSGestureEnd', this.sd, this)
          : o(this.t.a, Na ? 'touchend' : 'gestureend', this.sd, this);
        ua && (this.Ae = o(this.t.a, 'MSPointerUp', this.sd, this));
        Na && (this.Ae = o(this.t.a, 'touchcancel', this.sd, this));
      }
  };
  c.gg = function (a) {
    ba(a);
    var b = a.scale;
    if (Na) {
      if (2 != a.touches.length) return;
      b = this.Ed = Fe(a.touches) / this.Zh;
    } else ua && (this.Ed = b *= this.Ed || 1);
    Gc(this.u.a, b);
    Gc(this.I.a, b);
    b = a;
    Na &&
      ((b = a.touches[0]),
      (a = a.touches[1]),
      (b = { pageX: (b.pageX + a.pageX) / 2, pageY: (b.pageY + a.pageY) / 2 }));
    this.Jd(b);
  };
  c.sd = function (a) {
    ba(a);
    Ge(this);
    var b = Na || ua ? this.Ed || 1 : a.scale;
    this.Ed = 1;
    this.Tb = k;
    var a = this.b,
      c = Math.round(Math.log(b) * Math.LOG2E),
      f = this.b.k(),
      a = A(a.D, P(a.Q, f - c)),
      f = f - a;
    (this.ed = !!f) && h(this, 'zoom_start');
    b = D(2, f) / b;
    f = cd(this.Ce, this.b).e();
    c = cd(this.Ce, this.b).c();
    this.A = l;
    b = new fc({ duration: 100, vb: f, wb: c, yb: b });
    this.u.scale(b);
    this.I.scale(b);
    b.start();
    this.ed && rc(this.b, a, this.Ce);
    this.De = k;
    this.Pc = 0;
  };
  c.mi = function () {
    this.hd = l;
    this.Gc = k;
    h(this, 'rightclick', this.ug);
  };
  c.ej = function () {
    var a = this.b.C().W(this.h);
    T.open(
      'http://map.kakao.com/?urlX=' +
        (a.e() | 0) +
        '&urlY=' +
        (a.c() | 0) +
        '&urlLevel=' +
        this.b.k() +
        '&map_type=' +
        (1 == this.ya ? 'TYPE_MAP' : 'TYPE_SKYVIEW') +
        '&map_hybrid=' +
        (3 == this.ya ? 'true' : 'false'),
      '_blank'
    );
  };
  c.qh = function () {
    this.Tb || this.A ? (this.Ag = l) : h(this, 'tilesloaded');
  };
  m(p, sc);
  c = p.prototype;
  c.gc = n('a');
  c.C = function () {
    var a = this.b.C().W(this.h);
    return va(a);
  };
  c.za = function (a, b) {
    if (!this.A) {
      var a = K(a),
        b = b || {},
        c = this.b,
        f = c.C(),
        e = wa(a, this.h),
        g = c.k(),
        j = D(2, -g),
        i;
      if ((i = b.offset))
        (g = this.b.k()), (e = e.la(i.x / j || 0, -i.y / j || 0));
      if (!Rd(e, f, g)) {
        Fb(this);
        c.za(e);
        f = ia(c);
        e = ja(c);
        if (-1e4 > f || 1e4 < f || -1e4 > e || 1e4 < e)
          (c.ca = c.B()), this.u.Ea(), (f = e = 0);
        this.na.P();
        this.t.Y(f, e);
        this.ma.Y(-f, -e);
        Wb(this);
        Ja(this);
        h(this, 'center_changed');
        h(this, 'bounds_changed');
        nb(this);
      }
    }
  };
  c.td = function () {
    return this.b.k();
  };
  c.mb = function (a, b) {
    if (!this.A) {
      Fb(this);
      var c = this.b,
        f = c.k(),
        e,
        g = D(2, -f),
        a = w(a, f),
        f = A(c.D, P(c.Q, a)) - f;
      if (0 != f) {
        var b = b || {},
          j = b.anchor,
          h = b.animate;
        e = (h = h == l ? 3 > Ca(f) : h || k) ? w(h.duration, 300) : 0;
        h = (h && h.complete) || R;
        j
          ? ((this.Bb = j = wa(K(j), this.h)),
            (c = new F(
              H((j.e() - c.ka.e()) * g),
              H((c.ka.c() - j.c()) * g) + c.i()
            )))
          : ((this.Bb = c.C()), (c = new F(c.m() >> 1, c.i() >> 1)));
        tc(this, f, c, { duration: e, complete: h });
      }
    }
  };
  c.Ej = function (a) {
    this.Id = a;
    var a = this.b,
      b = A(this.Id, this.u.sb().D);
    a.D = b;
    a.k() < a.D && this.mb(a.D);
    h(this, 'min_zoom_changed');
  };
  c.Dj = function (a) {
    this.Hd = a;
    var a = this.b,
      b = P(this.Hd, this.u.sb().Q);
    a.Q = b;
    a.k() > a.Q && this.mb(a.Q);
    h(this, 'max_zoom_changed');
  };
  c.Lb = function () {
    var a = D(2, -this.b.k()),
      b = this.b.B(),
      a = b.la(this.b.m() / a, this.b.i() / a);
    return Ac(b.W(this.h), a.W(this.h));
  };
  c.gd = function (a, b, c, f, e) {
    var b = 0 !== b ? b || 32 : 0,
      c = 0 !== c ? c || b : 0,
      f = 0 !== f ? f || b : 0,
      e = 0 !== e ? e || c : 0,
      g = this.b,
      j = K(a.B()),
      h = K(a.rb()),
      a = wa(j, this.h),
      j = wa(h, this.h),
      g = A(
        4,
        (j.e() - a.e()) / A(1, g.m() - c - e),
        (j.c() - a.c()) / A(1, g.i() - b - f)
      ),
      g = Math.ceil(Math.log(g) / Math.log(2)),
      h = D(2, -g);
    return {
      zoom: g,
      ac: new Ma(
        (a.e() + j.e() + (c - e) / h) / 2,
        (a.c() + j.c() + (b - f) / h) / 2
      ),
    };
  };
  c.Vc = function (a, b, c, f, e) {
    if (!this.A) {
      Fb(this);
      var a = bc(a),
        g = this.b,
        b = this.gd(a, b, c, f, e),
        a = g.k() != b.zoom,
        c = g.C(),
        f = b.ac,
        c = c.e() != f.e() || c.c() != f.c();
      if (a || c) {
        a && h(this, 'zoom_start');
        g.V(b.zoom);
        g.za(b.ac);
        this.Oa.V(this.b.k());
        b = ia(g);
        f = ja(g);
        if (-1e4 > b || 1e4 < b || -1e4 > f || 1e4 < f)
          (g.ca = g.B()), this.u.Ea(), (b = f = 0);
        this.t.Y(b, f);
        this.ma.Y(-b, -f);
        Wb(this);
        Ja(this);
        c && h(this, 'center_changed');
        a && h(this, 'zoom_changed');
        h(this, 'bounds_changed');
        nb(this);
      }
    }
  };
  c.Wc = function (a) {
    ze(this, a);
    h(this, 'maptypeid_changed');
  };
  c.ud = n('ya');
  c.le = function (a, b) {
    b = b === V ? Sc : b;
    if (a instanceof lb || a instanceof kc) a.F(this), (a = a.a);
    this.xc.le(a, b);
  };
  c.Xd = function (a) {
    a instanceof lb || a instanceof kc
      ? (a.F(f), (a = a.a) && this.xc.Xd(a))
      : this.xc.Xd(a);
  };
  c.Bj = function (a, b) {
    this.Oa.s(a, b);
  };
  c.Jf = function (a) {
    0 > Pa(this.sa, a) &&
      (this.sa.push(a), (a.ea = this.Ra), (a.h = this.h), a.jb(), a.aa());
  };
  c.$g = function (a) {
    0 <= Pa(this.sa, a) && (a.kb(), (a.ea = f), (a.h = f), rb(this.sa, a));
  };
  c.Rd = function (a, b, c) {
    var c = c || {},
      f = c.animate || {},
      c = w(f.duration || 300),
      e = f.timingFunc || Cc.EASE_OUT,
      f = hb(f.cancelable);
    Math.abs(a) < this.b.m() && Math.abs(b) < this.b.i() && 0 < c
      ? (Fb(this), Ee(this, a, b, c, e, f))
      : ((a = Eb(this.b, new F((this.b.m() >> 1) + a, (this.b.i() >> 1) + b)).W(
          this.h
        )),
        this.za(a));
  };
  c.Vg = function (a, b, c, f, e) {
    b =
      b !== V && 'number' !== typeof b
        ? b
        : { padding: { top: b, right: c, bottom: f, left: e } };
    a instanceof Y
      ? He(this, a, b)
      : a instanceof ha
      ? He(this, bc(a), b)
      : ((a = K(a)),
        (a = dd(wa(a, this.h), this.b)),
        this.Rd(a.e() - (this.b.m() >> 1), a.c() - (this.b.i() >> 1), b));
  };
  c.Ia = function () {
    var a = this.b,
      b = this.a.clientWidth,
      c = this.a.clientHeight,
      f = D(2, -a.k());
    if (!(b == a.m() && c == a.i())) {
      f = (c - a.i()) / f;
      a.ja(b, c);
      var e = a.B(),
        e = e.la(0, -f);
      a.ka = e;
      e = a.ca;
      f = e.la(0, -f);
      a.ca = f;
      this.ma.ja(b, c);
      Wb(this);
      this.xc.q();
      Ja(this);
      h(this, 'center_changed');
      h(this, 'bounds_changed');
      nb(this);
    }
  };
  c.df = function (a) {
    we(this, a);
  };
  c.Fe = n('K');
  c.Fj = function (a) {
    xe(this, a);
    ye(this, a);
  };
  c.zi = n('ae');
  c.pc = function (a) {
    var b = this.ua;
    b.Xf = a;
    Kc(b, k);
  };
  c.wa = n('h');
  c.Ze = function () {
    this.hd = l;
    setTimeout(
      ya(function () {
        this.hd = k;
      }, this),
      0
    );
  };
  c.bh = function (a) {
    this.Rb
      ? this.Rb.setActive(a)
      : ((this.Rb = new nd(this.a, a)),
        this.Rb.addListener('move', this.Si, this),
        this.Rb.addListener('zoom', this.ek, this),
        this.Rb.addListener('keyup', this.uj, this));
  };
  c.wi = function () {
    return this.Rb.Hb;
  };
  c.Si = function (a) {
    var b = H(a.x),
      a = H(a.y);
    this.b.moveBy(b, -a);
    this.t.$b(-b, -a);
    this.ma.$b(b, a);
    this.u.sc(-b, -a);
    this.ia.sc(-b, -a);
    Ja(this);
    h(this, 'center_changed');
    h(this, 'bounds_changed');
    nb(this);
  };
  c.ek = function (a) {
    this.mb(this.b.k() + a, { animate: l });
  };
  c.uj = function () {
    this.A || this.I.q();
  };
  c.Hi = function (a, b, c) {
    c = c || {};
    if (!this.A) {
      a instanceof N || a instanceof qa
        ? ((c.center = a), (c.level = b))
        : (c = a);
      var b = this.b,
        f = b.k();
      c.level = w(c.level, f);
      var a = K(c.center),
        e = c.animate,
        g = e ? w(e.duration, 300) : 0,
        e = e ? e.timingFunc : Cc.EASE_OUT,
        h = b.C(),
        a = wa(a, this.h),
        c = A(b.D, P(b.Q, c.level)) - f,
        i = D(2, -f);
      if (!Rd(a, h, f) || 0 !== c)
        (this.Bb = a),
          (f = new F(
            H((a.e() - b.ka.e()) * i),
            H((b.ka.c() - a.c()) * i) + b.i()
          )),
          tc(this, c, f, { duration: g, Zb: e, Lh: l }),
          b.za(a);
    }
  };
  c.me = function (a, b) {
    this.ma.me(a, b);
  };
  c.af = function (a) {
    this.ma.af(a);
  };
  c.sb = function () {
    return this.u.sb();
  };
  m(oa, cb);
  oa.prototype.sa = [];
  var Ie = 0,
    Cd = { qk: 0, mk: 1 };
  c = oa.prototype;
  c.Mc = '';
  c.Jf = function (a) {
    0 > Pa(this.sa, a) &&
      (this.sa.push(a),
      (a.ea = this.Ra),
      (a.h = this.h),
      a.Kg && a.Kg(k),
      a.jb(),
      a.aa());
  };
  c.$g = function (a) {
    0 <= Pa(this.sa, a) &&
      (a.kb(), (a.ea = f), (a.h = f), a.Zg && a.Zg(), rb(this.sa, a));
  };
  c.Ja = function () {
    q(this.sa, ff);
  };
  c.Rd = Oa();
  c.wa = n('h');
  c.Ze = R;
  m(S, oa);
  var gf = Oe + 'roadview2.0/RoadView.swf?v=' + y.Dh;
  c = S.prototype;
  c.j = [];
  c.ta = function (a, b) {
    var c = ac(arguments),
      h = this.b.ib;
    if (this.w) return h[c[0]].apply(h, c.slice(1));
    if (h) this.j.push(c);
    else if (this.b.N() || this.pf) {
      var h = this.Zj,
        e = this.b,
        c = r('object');
      c.id = 'daum:roadview:' + this.ba;
      O(c);
      eb && !Ne
        ? ((c.classid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'),
          (c.codebase =
            'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,124,0'))
        : ((c.type = 'application/x-shockwave-flash'), (c.data = h));
      var g = e.m(),
        j = e.i();
      c.width = '100%';
      c.height = '100%';
      g = {
        width: g,
        height: j,
        jsNamespace: this.Mc,
        pan: this.Ta,
        tilt: this.bd,
        zoom: e.k(),
      };
      e = e.N();
      this.pf
        ? ((g.storeId = this.pf), e && (g.storePanoId = e))
        : ((g.panoId = e),
          (e = this.b.v()),
          (g.panoX = e.e()),
          (g.panoY = e.c()));
      this.vk && (g.poiSearchData = 'true');
      this.Gk && (g.findwayMode = 'true');
      this.l.serviceName || (g.serviceName = 'mapinternalapi');
      var i = [];
      q([g, this.l], function (a) {
        for (var b in a)
          a.hasOwnProperty(b) &&
            'viewerUrl' != b &&
            i.push(encodeURIComponent(b) + '=' + encodeURIComponent(a[b]));
      });
      var h = {
          movie: h,
          flashvars: i.join('&'),
          allowScriptAccess: 'always',
          allowFullScreen: 'true',
          allowNetworking: 'all',
          wmode: 'opaque',
          bgcolor: '#000000',
        },
        k;
      for (k in h)
        h.hasOwnProperty(k) &&
          ((e = r('param')), (e.name = k), (e.value = h[k]), c.appendChild(e));
      k = this.a;
      h = f;
      eb && !Ne
        ? (k.insertAdjacentHTML('beforeEnd', c.outerHTML), (h = k.lastChild))
        : (k.appendChild(c), (h = c));
      o(T, 'resize', ya(this.Ia, this));
      this.b.ib = h;
    }
  };
  c.w = k;
  c.ef = function () {
    for (this.w = l; this.j[0]; ) {
      var a = this.j.shift();
      this.ta.apply(this, a);
    }
    a = this.ta('getMapLocation');
    this.b.s(new N(a.x, a.y));
    this.Ja();
    h(this, 'init');
    h(this, 'panoid_changed');
    h(this, 'position_changed');
    h(this, 'viewpoint_changed');
  };
  c.Qb = n('w');
  c.ak = k;
  c.Sd = 0;
  c.pf = 0;
  c.ff = function () {
    this.b.U(Number(this.ta('getPanoId')));
  };
  c.gf = function () {
    this.ak = l;
  };
  c.N = function () {
    return this.b.N();
  };
  c.U = function (a, b) {
    var c, f;
    b && ((b = K(b)), this.b.s(b), (c = b.e()), (f = b.c()));
    this.b.U(a);
    this.ta('moveRoadByPanoId', a, c, f);
  };
  c.Ta = 0;
  c.bd = 0;
  c.H = 0;
  c.show = function () {
    var a = this.b.ib;
    a && za(a, 'left:auto;top:auto');
  };
  c.P = function () {
    var a = this.b.ib;
    a && (za(a, 'left:-99999px;top:-99999px'), this.ta('hide'));
  };
  c.remove = function () {
    var a = this.b,
      b = a.ib;
    delete T[this.Mc];
    this.a.removeChild(b);
    a.ib = f;
  };
  c.Ia = function () {
    var a = this.a;
    this.b.ja(a.clientWidth, a.clientHeight);
    this.Ja();
  };
  c.Zc = function (a) {
    this.Ta = ((a.pan % 360) + 360) % 360;
    this.bd = A(-90, P(90, a.tilt));
    var b = A(-3, P(3, a.zoom | 0));
    this.b.V(b);
    a.panoId
      ? this.ta('moveRoad', a.panoId, this.Ta, this.bd, a.zoom)
      : this.ta('setPanTiltZoom', this.Ta, this.bd, b);
  };
  c.Cc = function () {
    return new Z(this.ta('getPan'), this.ta('getTilt'), this.ta('getZoom'));
  };
  c.Dc = function () {
    return new Z(
      this.ta('getPan'),
      this.ta('getTilt'),
      this.ta('getZoom'),
      this.b.N()
    );
  };
  c.s = function (a) {
    this.b.v().va(a) ||
      (this.b.s(a),
      this.w && (h(this, 'position_changed'), h(this, 'panoid_changed')));
  };
  c.v = function () {
    return va(this.b.v());
  };
  c.send = function () {
    return this.ta.apply(this, arguments);
  };
  m(X, oa);
  c = X.prototype;
  c.tb = function (a) {
    if (!this.g) {
      var b = this.a;
      b.innerHTML =
        '<div style="overflow:hidden;position:absolute;left:0;top:0;width:100%;height:100%;margin:0;border:0;padding:0"></div>';
      i(b, { overflow: 'hidden' });
      b.firstChild.offsetParent !== b && i(b, { position: 'relative' });
      this.da = new wb();
      da(this, this.da);
      var c = this.da;
      i(c.a, { top: 0 });
      this.Ra = new Ec();
      ic(this.Ra, c);
      var c = b.clientWidth,
        f = b.clientHeight;
      this.b = new Vb(c, f);
      this.b.V(w(a.zoom, 0));
      this.b.U(w(a.panoId, 0));
      this.b.s(new N(a.panoX || 0), new N(a.panoY || 0));
      this.h = new Za(this.b);
      a.jsNamespace = this.Mc;
      a.width = c;
      a.height = f;
      cc(this.l, function (b, c) {
        b in a || (a[b] = c);
      });
      b = this.g = new T.daum.maps.RoadviewAjax(b.firstChild, a);
      this.b.ib = b;
      o(T, 'resize', ya(this.Ia, this));
    }
  };
  c.Ia = function () {
    if (this.g) {
      var a = this.a,
        b = a.clientWidth,
        a = a.clientHeight;
      this.b.ja(b, a);
      this.g.setSize(b, a);
      this.Ja();
    }
  };
  c.Cc = function () {
    var a;
    return (a = this.g) ? new Z(a.getPan(), a.getTilt(), a.getZoom()) : Tc;
  };
  c.Dc = function () {
    var a = this.g;
    return a ? new Z(a.getPan(), a.getTilt(), a.getZoom(), this.b.N()) : Tc;
  };
  c.ff = function () {
    this.g && this.b.U(Number(this.g.getPanoId() || 0));
  };
  c.gf = Oa();
  c.kc = db;
  c.s = function (a) {
    this.b.v().va(a) ||
      (this.b.s(a),
      this.w && (h(this, 'position_changed'), h(this, 'panoid_changed')));
  };
  c.v = function () {
    return va(this.b.v());
  };
  c.U = function (a, b) {
    var c, f;
    b && ((b = K(b)), (c = b.e()), (f = b.c()));
    this.j
      ? this.j.push(arguments)
      : this.g
      ? (this.b.U(a), this.g.setPanoId(a, c, f))
      : this.tb({ panoId: a, panoX: c, panoY: f });
  };
  c.Zc = function (a, b) {
    if (this.j) this.j.push(arguments);
    else {
      var c = this.g;
      this.b.V(a.zoom);
      a.panoId && c.setPanoId(a.panoId);
      c.setViewpoint(a.pan, a.tilt, a.zoom, b);
    }
  };
  c.N = function () {
    return this.b.N();
  };
  c.w = k;
  c.ef = function () {
    this.w = l;
    var a = this.g.getMapLocation();
    this.b.s(new N(a.x, a.y));
    this.Ja();
    h(this, 'init');
    h(this, 'panoid_changed');
    h(this, 'position_changed');
    h(this, 'viewpoint_changed');
  };
  c.Qb = n('w');
  c.show = Oa();
  c.P = Oa();
  c.remove = Oa();
  c.send = function (a) {
    if (this.g) return this.g[a].apply(this.g, ac(arguments, 1));
  };
  c.Ac = function () {
    var a = this.j;
    this.j = f;
    q(
      a,
      function (a) {
        a.callee.apply(this, ac(a));
      },
      this
    );
  };
  Gb.SCRIPT_URL = Ta + Yb.Cf;
  var Ke = f;
  Gb.prototype.Ob = function (a) {
    switch (this.R) {
      case 0:
        this.Jc();
      case 1:
        this.j.push(a);
        break;
      case 2:
        a.Ac();
    }
  };
  Gb.prototype.Jc = function () {
    this.R = 1;
    var a = r('script');
    a.charset = 'UTF-8';
    a.onload = ya(this.w, this);
    a.onerror = ya(this.xe, this);
    a.src = Gb.SCRIPT_URL;
    ib(a).getElementsByTagName('head')[0].appendChild(a);
  };
  Gb.prototype.w = function () {
    this.R = 2;
    q(this.j, function (a) {
      a.Ac();
    });
    this.j.length = 0;
  };
  Gb.prototype.xe = function () {
    this.R = 3;
  };
  m(U, oa);
  c = U.prototype;
  c.Ob = function () {
    this.tb();
  };
  c.tb = function (a) {
    if (!this.g) {
      var a = a || {},
        b = this.a;
      b.innerHTML =
        '<div style="overflow:hidden;position:absolute;left:0;top:0;width:100%;height:100%;margin:0;border:0;padding:0"></div>';
      i(b, { overflow: 'hidden' });
      b.firstChild.offsetParent !== b && i(b, { position: 'relative' });
      this.da = new wb();
      da(this, this.da);
      var c = this.da;
      i(c.a, { top: 0 });
      this.Ra = new Ec();
      ic(this.Ra, c);
      var c = b.clientWidth,
        f = b.clientHeight;
      this.b = new Vb(c, f);
      this.b.V(w(a.zoom, 0));
      this.b.U(w(a.panoId, 0));
      this.b.s(new N(a.panoX || 0), new N(a.panoY || 0));
      this.h = new Za(this.b);
      a.jsNamespace = this.Mc;
      a.width = c;
      a.height = f;
      cc(this.l, function (b, c) {
        b in a || (a[b] = c);
      });
      b = this.g = new T.daum.maps.RoadviewAjax(b.firstChild, a);
      this.b.ib = b;
      this.Ac();
      o(T, 'resize', ya(this.Ia, this));
    }
  };
  c.Ia = function () {
    if (this.g) {
      var a = this.a,
        b = a.clientWidth,
        a = a.clientHeight;
      this.b.ja(b, a);
      this.g.setSize(b, a);
      this.Ja();
    }
  };
  c.Cc = function () {
    var a;
    return (a = this.g) ? new Z(a.getPan(), a.getTilt(), a.getZoom()) : Tc;
  };
  c.Dc = function () {
    var a = this.g;
    return a ? new Z(a.getPan(), a.getTilt(), a.getZoom(), this.b.N()) : Tc;
  };
  c.ff = function () {
    this.g && this.b.U(Number(this.g.getPanoId() || 0));
  };
  c.gf = Oa();
  c.kc = db;
  c.s = function (a) {
    this.b.v().va(a) ||
      (this.b.s(a),
      this.w && (h(this, 'position_changed'), h(this, 'panoid_changed')));
  };
  c.v = function () {
    return va(this.b.v());
  };
  c.U = function (a, b) {
    var c, f;
    b && ((b = K(b)), (c = b.e()), (f = b.c()));
    this.j
      ? this.j.push(arguments)
      : (this.tb(), this.b.U(a), this.g.setPanoId(a, c, f));
  };
  c.Zc = function (a, b) {
    if (this.j) this.j.push(arguments);
    else {
      this.tb();
      var c = this.g;
      this.b.V(a.zoom);
      a.panoId && c.setPanoId(a.panoId);
      c.setViewpoint(a.pan, a.tilt, a.zoom, b);
    }
  };
  c.N = function () {
    return this.b.N();
  };
  c.w = k;
  c.ef = function () {
    this.w = l;
    var a = this.g.getMapLocation();
    this.b.s(new N(a.x, a.y));
    this.Ja();
    h(this, 'init');
    h(this, 'panoid_changed');
    h(this, 'position_changed');
    h(this, 'viewpoint_changed');
  };
  c.Qb = n('w');
  c.show = Oa();
  c.P = Oa();
  c.remove = Oa();
  c.send = function (a) {
    if (this.g) return this.g[a].apply(this.g, ac(arguments, 1));
  };
  c.Ac = function () {
    if (this.j !== f) {
      var a = this.j;
      this.j = f;
      q(
        a,
        function (a) {
          a.callee.apply(this, ac(a));
        },
        this
      );
    }
  };
  Hb.SCRIPT_URL = Ta + Yb.Df.replace(/^\/\//g, '');
  var Le = f;
  Hb.prototype.Ob = function (a) {
    switch (this.R) {
      case 0:
        this.Jc();
      case 1:
        this.j.push(a);
        break;
      case 2:
        a.Ac();
    }
  };
  Hb.prototype.Jc = function () {
    this.R = 1;
    var a = r('script');
    a.charset = 'UTF-8';
    a.onload = ya(this.w, this);
    a.onerror = ya(this.xe, this);
    a.src = Hb.SCRIPT_URL;
    ib(a).getElementsByTagName('head')[0].appendChild(a);
  };
  Hb.prototype.w = function () {
    this.R = 2;
    q(this.j, function (a) {
      a.Ob();
    });
    this.j.length = 0;
  };
  Hb.prototype.xe = function () {
    this.R = 3;
  };
  c = ka.prototype;
  c.cj = function () {
    this.g.ef();
    this.g.Ia();
  };
  c.aj = function (a) {
    h(this.g, 'error', a);
  };
  c.Zi = function (a) {
    this.g.Qb() &&
      ((this.g.Ta = a.pan),
      (this.g.bd = a.tilt),
      h(this.g, 'viewpoint_changed', V));
  };
  c.Qg = function (a) {
    this.g.Qb() && (this.g.b.V(a), h(this.g, 'viewpoint_changed', V));
  };
  c.$i = function (a) {
    this.g.ff();
    this.g.gf();
    this.g.s(new N(a.photox, a.photoy));
  };
  c.dj = function () {
    Je(this.g, k);
  };
  c.bj = function () {
    Je(this.g, l);
  };
  Pc.prototype.xi = function (a, b, c) {
    var a = K(a),
      h = 5;
    100 <= b && (h = 1);
    var h =
        this.jj +
        '?PX=%x&PY=%y&RAD=%r&INPUT=wcong&PAGE_SIZE=' +
        h +
        '&SERVICE=mapjsapiv3',
      h = h
        .replace(/%x/g, String(a.e()))
        .replace(/%y/g, String(a.c()))
        .replace(/%r/g, String(b)),
      e = {
        method: 'GET',
        oncomplete: function (a) {
          var b = { service: k };
          Number(a.street_view.cnt)
            ? ((b.service = l),
              (a = a.street_view.streetList[0]),
              (b.id = a.id),
              (b.photox = a.wcongx),
              (b.photoy = a.wcongy),
              (b.addr = a.addr),
              (b.st_name = a.st_name | 0),
              (b.st_type = a.st_type),
              (b.date = a.date),
              c(b.id, b))
            : c(f);
        },
        onerror: function () {
          c(f);
        },
      };
    if (T.XMLHttpRequest) {
      var g = new XMLHttpRequest();
      g.open(e.method, h);
      g.onreadystatechange = function () {
        if (4 === g.readyState)
          if (200 === g.status) e.oncomplete(JSON.parse(g.responseText));
          else e.onerror();
      };
      g.send();
    } else e.onerror();
  };
  ob.prototype.f = f;
  ob.prototype.F = function (a) {
    this.f && this.f.bf(5);
    a && a.ne(5);
    this.f = a;
  };
  ob.prototype.p = n('f');
  m(pa, cb);
  var xf =
    (Rc ? 'https://spi.maps.daum.net/map2' : 'http://map2.daum.net') + '/map/';
  c = pa.prototype;
  c.C = function () {
    return va(uc(this));
  };
  c.za = function (a) {
    a = K(a);
    this.b.za(wa(a, this.h));
    this.b.ca = this.b.B();
    this.Va();
  };
  c.td = function () {
    return this.b.k();
  };
  c.mb = function (a) {
    rc(this.b, a, this.b.C());
    this.Va();
  };
  c.Vc = function (a, b, c, f, e) {
    a = bc(a);
    a = this.gd(a, b, c, f, e);
    this.b.V(a.zoom);
    this.b.za(a.ac);
    this.Va();
  };
  c.Lb = function () {
    var a = D(2, -this.b.k()),
      b = this.b.B(),
      a = b.la(this.b.m() / a, this.b.i() / a);
    return Ac(b.W(this.h), a.W(this.h));
  };
  c.ud = n('ya');
  c.Wc = function (a) {
    this.ya = a;
    this.Va();
  };
  c.gd = function (a, b, c, f, e) {
    var b = 0 !== b ? b || 32 : 0,
      c = 0 !== c ? c || b : 0,
      f = 0 !== f ? f || b : 0,
      e = 0 !== e ? e || c : 0,
      g = this.b,
      h = wa(a.B(), this.h),
      a = wa(a.rb(), this.h),
      g = A(
        4,
        (a.e() - h.e()) / A(1, g.m() - c - e),
        (a.c() - h.c()) / A(1, g.i() - b - f)
      ),
      g = Math.ceil(Math.log(g) / Math.log(2));
    D(2, -g);
    return {
      zoom: g,
      ac: new Ma(
        (h.e() + a.e() + (c - e) / g) / 2,
        (h.c() + a.c() + (b - f) / g) / 2
      ),
    };
  };
  c.Va = function () {
    var a = this.Gd,
      b = [];
    b.push('IW=' + String(this.b.m() | 0) + '&IH=' + String(this.b.i() | 0));
    b.push(hf(this));
    b.push('SCALE=' + String(0.3125 * (1 << this.b.k())));
    /png|gif|bmp/i.test(this.dg) &&
      b.push('FORMAT=' + String(this.dg).toUpperCase());
    var c,
      f = [],
      e = ld(this.gb) ? this.gb : [this.gb];
    cc(
      e,
      function (a, b) {
        var c = K(b.position || uc(this)),
          d;
        f.push('CX=' + String(c.e() | 0) + '&CY=' + String(c.c() | 0));
        (d = b.text) &&
          f.push(
            'TX=%x&TY=%y&TEXT=%text'
              .replace(/%x/, String(c.e() | 0))
              .replace(/%y/, String((18.4375 * (1 << this.b.k()) + c.c()) | 0))
              .replace(/%text/, encodeURI(String(d)))
          );
      },
      this
    );
    (c = f.join('&')) && b.push(c);
    b.push('service=open');
    c = 'imageservice?';
    if (2 == this.ya || 3 == this.ya) c = 'skyview' + c;
    3 == this.ya && (c += 'RDR=HybridRender&');
    a.T.src = xf + c + b.join('&');
    if (!this.Bi || this.Ig) {
      a = this.Gd;
      if (!(b = this.Ig)) {
        b =
          '"mapCenterX":' +
          uc(this).e() +
          ',"mapCenterY":' +
          uc(this).c() +
          ',"mapLevel":' +
          this.b.k() +
          ',"coordinate":"wcongnamul"';
        c = 'TYPE_MAP';
        e = 'false';
        1 != this.ya && ((c = 'TYPE_SKYVIEW'), 3 == this.ya && (e = 'true'));
        var b = b + (',"map_type":"' + c + '"') + (',"map_hybrid":"' + e + '"'),
          g = '';
        c = ld(this.gb) ? this.gb : [this.gb];
        cc(
          c,
          function (a, b) {
            0 < a && (g += ',');
            var c = K(b.position || uc(this));
            g += '{"coordinate":"wcongnamul","x":' + c.e() + ',"y":' + c.c();
            b.text && (g += ',"content":"' + b.text + '"');
            g += '}';
          },
          this
        );
        if ((c = g)) b += ',"markInfo":[' + c + ']';
        b = 'http://map.daum.net?mapJson=' + encodeURIComponent('{' + b + '}');
      }
      a.a.href = b;
    }
  };
  m(qd, Ha);
  qd.prototype.M = function () {
    var a = (this.a = r('a'));
    a.target = '_blank';
    var b = (this.T = r('img'));
    i(b, { border: 0 });
    a.appendChild(b);
    L(b, this.b.m(), this.b.i());
  };
  var x = T,
    x = (x.kakao = x.kakao || {}),
    x = (x.maps = x.maps || {});
  x.Point = F;
  F.prototype.equals = F.prototype.Jb;
  x.Viewpoint = Z;
  x.Coords = N;
  N.prototype.getX = N.prototype.e;
  N.prototype.getY = N.prototype.c;
  N.prototype.toLatLng = N.prototype.sh;
  N.prototype.equals = N.prototype.va;
  x.LatLng = qa;
  qa.prototype.getLat = qa.prototype.jg;
  qa.prototype.getLng = qa.prototype.lg;
  qa.prototype.toCoords = qa.prototype.W;
  qa.prototype.equals = qa.prototype.va;
  x.CoordsBounds = Y;
  Y.prototype.getSouthWest = Y.prototype.B;
  Y.prototype.getNorthEast = Y.prototype.rb;
  Y.prototype.extend = Y.prototype.extend;
  Y.prototype.isEmpty = Y.prototype.Bg;
  Y.prototype.intersects = Y.prototype.Gi;
  Y.prototype.contain = Y.prototype.kd;
  Y.prototype.equals = Y.prototype.Jb;
  x.LatLngBounds = ha;
  ha.prototype.getSouthWest = ha.prototype.B;
  ha.prototype.getNorthEast = ha.prototype.rb;
  ha.prototype.extend = ha.prototype.extend;
  ha.prototype.isEmpty = ha.prototype.Bg;
  ha.prototype.contain = ha.prototype.kd;
  ha.prototype.equals = ha.prototype.Jb;
  x.Size = Sa;
  Sa.prototype.equals = Sa.prototype.Jb;
  x.Map = p;
  p.prototype.getNode = p.prototype.gc;
  p.prototype.getMapTypeId = p.prototype.ud;
  p.prototype.setMapTypeId = p.prototype.Wc;
  p.prototype.getLevel = p.prototype.td;
  p.prototype.setLevel = p.prototype.mb;
  p.prototype.getCenter = p.prototype.C;
  p.prototype.setCenter = p.prototype.za;
  p.prototype.panBy = p.prototype.Rd;
  p.prototype.panTo = p.prototype.Vg;
  p.prototype.jump = p.prototype.Hi;
  p.prototype.getBounds = p.prototype.Lb;
  p.prototype.setBounds = p.prototype.Vc;
  p.prototype.relayout = p.prototype.Ia;
  p.prototype.addControl = p.prototype.le;
  p.prototype.removeControl = p.prototype.Xd;
  p.prototype.addOverlayMapTypeId = p.prototype.ne;
  p.prototype.removeOverlayMapTypeId = p.prototype.bf;
  p.prototype.getDraggable = p.prototype.Fe;
  p.prototype.setDraggable = p.prototype.df;
  p.prototype.getZoomable = p.prototype.zi;
  p.prototype.setZoomable = p.prototype.Fj;
  p.prototype.setCursor = p.prototype.pc;
  p.prototype.getProjection = p.prototype.wa;
  p.prototype.setCopyrightPosition = p.prototype.Bj;
  p.prototype.setKeyboardShortcuts = p.prototype.bh;
  p.prototype.getKeyboardShortcuts = p.prototype.wi;
  p.prototype.setMaxLevel = p.prototype.Dj;
  p.prototype.setMinLevel = p.prototype.Ej;
  x.MapTypeId = la;
  Ia.prototype.pointFromCoords = Ia.prototype.lb;
  Ia.prototype.coordsFromPoint = Ia.prototype.Vf;
  Ia.prototype.containerPointFromCoords = Ia.prototype.ab;
  Ia.prototype.coordsFromContainerPoint = Ia.prototype.pe;
  Za.prototype.viewpointFromCoords = Za.prototype.$j;
  x.ControlPosition = gb;
  gb.TOPLEFT = xc;
  gb.TOP = ud;
  gb.TOPRIGHT = yc;
  gb.BOTTOMLEFT = wd;
  gb.BOTTOM = xd;
  gb.BOTTOMRIGHT = yd;
  gb.LEFT = vd;
  gb.RIGHT = Sc;
  x.CopyrightPosition = { BOTTOMLEFT: 0, BOTTOMRIGHT: 1 };
  x.MapTypeControl = lb;
  x.ZoomControl = kc;
  x.AbstractOverlay = $;
  $.prototype.getMap = $.prototype.p;
  $.prototype.setMap = $.prototype.F;
  $.prototype.getPanels = $.prototype.wd;
  $.prototype.getProjection = $.prototype.wa;
  x.Marker = u;
  u.prototype.setMap = u.prototype.F;
  u.prototype.getMap = u.prototype.p;
  u.prototype.setImage = u.prototype.Cj;
  u.prototype.getImage = u.prototype.vi;
  u.prototype.setPosition = u.prototype.s;
  u.prototype.getPosition = u.prototype.v;
  u.prototype.setVisible = u.prototype.nb;
  u.prototype.getVisible = u.prototype.Ie;
  u.prototype.setZIndex = u.prototype.J;
  u.prototype.getZIndex = u.prototype.xa;
  u.prototype.setTitle = u.prototype.eh;
  u.prototype.getTitle = u.prototype.yi;
  u.prototype.setClickable = u.prototype.Aj;
  u.prototype.getClickable = u.prototype.ui;
  u.prototype.setDraggable = u.prototype.df;
  u.prototype.getDraggable = u.prototype.Fe;
  u.prototype.setAltitude = u.prototype.oc;
  u.prototype.getAltitude = u.prototype.fc;
  u.prototype.setRange = u.prototype.Xc;
  u.prototype.getRange = u.prototype.Bc;
  u.prototype.setOpacity = u.prototype.hf;
  u.prototype.getOpacity = u.prototype.mg;
  x.MarkerImage = qc;
  qc.prototype.getOffset = qc.prototype.vd;
  x.InfoWindow = B;
  B.prototype.open = B.prototype.open;
  B.prototype.close = B.prototype.close;
  B.prototype.getMap = B.prototype.p;
  B.prototype.setPosition = B.prototype.s;
  B.prototype.getPosition = B.prototype.v;
  B.prototype.setContent = B.prototype.ce;
  B.prototype.getContent = B.prototype.Ee;
  B.prototype.setZIndex = B.prototype.J;
  B.prototype.getZIndex = B.prototype.xa;
  B.prototype.setAltitude = B.prototype.oc;
  B.prototype.getAltitude = B.prototype.fc;
  B.prototype.setRange = B.prototype.Xc;
  B.prototype.getRange = B.prototype.Bc;
  x.CustomOverlay = x.Billboard = I;
  I.prototype.setMap = I.prototype.F;
  I.prototype.getMap = I.prototype.p;
  I.prototype.setPosition = I.prototype.s;
  I.prototype.getPosition = I.prototype.v;
  I.prototype.setContent = I.prototype.ce;
  I.prototype.getContent = I.prototype.Ee;
  I.prototype.setVisible = I.prototype.nb;
  I.prototype.getVisible = I.prototype.Ie;
  I.prototype.setZIndex = I.prototype.J;
  I.prototype.getZIndex = I.prototype.xa;
  I.prototype.setAltitude = I.prototype.oc;
  I.prototype.getAltitude = I.prototype.fc;
  I.prototype.setRange = I.prototype.Xc;
  I.prototype.getRange = I.prototype.Bc;
  x.Polyline = ga;
  ga.prototype.setMap = ga.prototype.F;
  ga.prototype.getMap = ga.prototype.p;
  ga.prototype.setOptions = ga.prototype.Cb;
  ga.prototype.setPath = ga.prototype.dh;
  ga.prototype.getPath = ga.prototype.ng;
  ga.prototype.getLength = ga.prototype.kg;
  ga.prototype.setZIndex = ga.prototype.J;
  ga.prototype.getZIndex = ga.prototype.xa;
  x.Polygon = ea;
  ea.prototype.setMap = ea.prototype.F;
  ea.prototype.getMap = ea.prototype.p;
  ea.prototype.setOptions = ea.prototype.Cb;
  ea.prototype.setPath = ea.prototype.dh;
  ea.prototype.getPath = ea.prototype.ng;
  ea.prototype.getLength = ea.prototype.kg;
  ea.prototype.getArea = ea.prototype.ti;
  ea.prototype.setZIndex = ea.prototype.J;
  ea.prototype.getZIndex = ea.prototype.xa;
  x.Rectangle = na;
  na.prototype.setMap = na.prototype.F;
  na.prototype.getMap = na.prototype.p;
  na.prototype.setOptions = na.prototype.Cb;
  na.prototype.setBounds = na.prototype.Vc;
  na.prototype.getBounds = na.prototype.Lb;
  na.prototype.setZIndex = na.prototype.J;
  na.prototype.getZIndex = na.prototype.xa;
  x.Circle = W;
  W.prototype.setMap = W.prototype.F;
  W.prototype.getMap = W.prototype.p;
  W.prototype.setOptions = W.prototype.Cb;
  W.prototype.setPosition = W.prototype.s;
  W.prototype.getPosition = W.prototype.v;
  W.prototype.setRadius = W.prototype.jf;
  W.prototype.getRadius = W.prototype.Ge;
  W.prototype.getBounds = W.prototype.Lb;
  W.prototype.setZIndex = W.prototype.J;
  W.prototype.getZIndex = W.prototype.xa;
  x.Ellipse = J;
  J.prototype.setMap = J.prototype.F;
  J.prototype.getMap = J.prototype.p;
  J.prototype.setOptions = J.prototype.Cb;
  J.prototype.setPosition = J.prototype.s;
  J.prototype.getPosition = J.prototype.v;
  J.prototype.setRadius = J.prototype.jf;
  J.prototype.getRadius = J.prototype.Ge;
  J.prototype.setRadiusX = J.prototype.og;
  J.prototype.getRadiusX = J.prototype.og;
  J.prototype.setRadiusY = J.prototype.pg;
  J.prototype.getRadiusY = J.prototype.pg;
  J.prototype.getBounds = J.prototype.Lb;
  J.prototype.setZIndex = J.prototype.J;
  J.prototype.getZIndex = J.prototype.xa;
  x.event = t;
  t.addListener = t.addListener;
  t.removeListener = t.removeListener;
  t.trigger = t.Wj;
  t.preventMap = t.Ua;
  x.Roadview = oa;
  oa.prototype.getProjection = oa.prototype.wa;
  oa.ImageQuality = Cd;
  Cd.STANDARD = 0;
  Cd.HIGH = 1;
  x.FlashRoadview = S;
  S.prototype.isLoaded = S.prototype.Qb;
  S.prototype.getPanoId = S.prototype.N;
  S.prototype.setPanoId = S.prototype.U;
  S.prototype.getViewpoint = S.prototype.Cc;
  S.prototype.getViewpointWithPanoId = S.prototype.Dc;
  S.prototype.setViewpoint = S.prototype.Zc;
  S.prototype.getPosition = S.prototype.v;
  S.prototype.getInfo = S.prototype.xk;
  S.prototype.show = S.prototype.show;
  S.prototype.hide = S.prototype.P;
  S.prototype.remove = S.prototype.remove;
  S.prototype.relayout = S.prototype.Ia;
  x.AjaxRoadview = X;
  X.prototype.isLoaded = X.prototype.Qb;
  X.prototype.getPanoId = X.prototype.N;
  X.prototype.setPanoId = X.prototype.U;
  X.prototype.getViewpoint = X.prototype.Cc;
  X.prototype.getViewpointWithPanoId = X.prototype.Dc;
  X.prototype.setViewpoint = X.prototype.Zc;
  X.prototype.getPosition = X.prototype.v;
  X.prototype.show = X.prototype.show;
  X.prototype.hide = X.prototype.P;
  X.prototype.remove = X.prototype.remove;
  X.prototype.relayout = X.prototype.Ia;
  x.CSSRoadview = U;
  U.prototype.isLoaded = U.prototype.Qb;
  U.prototype.getPanoId = U.prototype.N;
  U.prototype.setPanoId = U.prototype.U;
  U.prototype.getViewpoint = U.prototype.Cc;
  U.prototype.getViewpointWithPanoId = U.prototype.Dc;
  U.prototype.setViewpoint = U.prototype.Zc;
  U.prototype.getPosition = U.prototype.v;
  U.prototype.show = U.prototype.show;
  U.prototype.hide = U.prototype.P;
  U.prototype.remove = U.prototype.remove;
  U.prototype.relayout = U.prototype.Ia;
  x.RoadviewClient = Pc;
  Pc.prototype.getNearestPanoId = Pc.prototype.xi;
  x.RoadviewBridge = ka;
  ka.prototype.onFinishedInitialize = ka.prototype.cj;
  ka.prototype.onError = ka.prototype.aj;
  ka.prototype.onChangedDirection = ka.prototype.Zi;
  ka.prototype.onChangedZoom = ka.prototype.Qg;
  ka.prototype.onChangingZoom = ka.prototype.Qg;
  ka.prototype.onChangedMapPosition = ka.prototype.$i;
  ka.prototype.onStartAutoDrive = ka.prototype.dj;
  ka.prototype.onFinishAutoDrive = ka.prototype.bj;
  x.RoadviewOverlay = ob;
  ob.prototype.setMap = ob.prototype.F;
  ob.prototype.getMap = ob.prototype.p;
  x.StaticMap = pa;
  pa.prototype.getNode = pa.prototype.gc;
  pa.prototype.getMapTypeId = pa.prototype.ud;
  pa.prototype.setMapTypeId = pa.prototype.Wc;
  pa.prototype.getLevel = pa.prototype.td;
  pa.prototype.setLevel = pa.prototype.mb;
  pa.prototype.getCenter = pa.prototype.C;
  pa.prototype.setCenter = pa.prototype.za;
  x.Tileset = fa;
  fa.add = zb;
  x.disableBusSymbol = function () {
    ed.He = Pb(function (a, b, c) {
      return xa(a & 3) + '/map_office/2d/L' + c + '/' + b + '/' + a + '.png';
    });
    gd.He = Pb(function (a, b, c) {
      return (
        xa(a & 3) + '/map_office/hybrid/L' + c + '/' + b + '/' + a + '.png'
      );
    });
    Qb && Vd();
  };
  x.disableHD = Vd;
  x.TilesetCopyright = ma;
  x.TimingFunc = Cc;
})(window);