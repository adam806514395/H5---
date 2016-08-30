!function (t) {
    var e = t.EasySlide, i = e.utils;
    i.mixin(e.animationEffects, {
        scale: function (t, e, s, n) {
            n && (t.style["-webkit-transition"] = this.transition);
            var a = parseInt(i.attr(t, "index"), 10), r = "translateZ(0) translate" + e + "(" + s + "px)";
            this.curIndex !== a && (r += " scale(0.5)"), t.style["-webkit-transform"] = r
        }, flip: function (t, e, s, n) {
            n && (t.style["-webkit-transition"] = this.transition);
            var a = "X" === e ? "Y" : "X", r = parseInt(i.attr(t, "index"), 10);
            t.style["-webkit-backface-visibility"] = "hidden", t.style["-webkit-transform-style"] = "preserve-3d", t.style.zIndex = r;
            var l = i.getByTagName("*", t), o = window.getComputedStyle(t, null)["transition-duration"];
            o = o ? i.transitionDurationToMilliseconds(o) : 0, l.forEach(function (t) {
                i.hasAttr(t, "scroll") && i.hide(t)
            }), this.curIndex === r ? (t.style.visibility = "visible", t.style["-webkit-transform"] = "rotate" + a + "(0deg) translateZ(0)") : (t.style.visibility = "hidden", t.style["-webkit-transform"] = "rotate" + a + "(180deg) translateZ(0)"), setTimeout(function () {
                l.forEach(function (t) {
                    i.hasAttr(t, "scroll") && i.show(t)
                })
            }, o)
        }, rotate: function (t, e, s, n) {
            n && (t.style["-webkit-transition"] = this.transition);
            var a = "X" === e ? "Y" : "X", r = parseInt(i.attr(t, "index"), 10), l = "X" === e ? this.vW : this.vH;
            if (t.style["-webkit-backface-visibility"] = "hidden", t.style["-webkit-transform-style"] = "preserve-3d", t.style.position = "absolute", this.wrapAll.style.webkitPerspective = 4 * l, r === this.curIndex)t.style.zIndex = 1, t.style["-webkit-transform"] = "rotate" + a + "(0deg) translateZ(0) scale(1)"; else {
                var o = r === this.curIndex + 1, d = this.curIndex === this.slidesLen - 1 && 0 === r, y = o || d ? 1 : -1;
                t.style.zIndex = 0, t.style["-webkit-transform"] = "rotate" + a + "(" + 90 * y + "deg) translateZ(" + .888 * l / 2 + "px) translate" + e + "(" + s + "px) scale(0.888)"
            }
        }, card: function (t, e, s, n) {
            n && (t.style["-webkit-transition"] = this.transition);
            var a = parseInt(i.attr(t, "index"), 10), r = "translateZ(0) translate" + e + "(" + s + "px)", l = window.getComputedStyle(t, null)["transition-duration"];
            l = l ? i.transitionDurationToMilliseconds(l) : 0, t.style.position = "absolute", a === this.curIndex ? (t.style.zIndex = 1, t.style["-webkit-transform"] = r) : (t.style.zIndex = 0, setTimeout(function () {
                t.style["-webkit-transform"] = r
            }, l))
        }
    })
}(window);