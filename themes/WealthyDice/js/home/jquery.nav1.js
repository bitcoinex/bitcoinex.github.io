(function (e) { "use strict"; e.fn.onePageNav = function (t) { var n = e.extend({}, e.fn.onePageNav.defaults, t), r = {}; r.sections = {}; r.bindNav = function (t, n, i) { var s = t.parent(), o = t.attr("href"), u = e(window); if (!s.hasClass(i.currentClass)) { if (i.begin) { i.begin() } r.adjustNav(n, s, i.currentClass); u.unbind(".onePageNav"); e.scrollTo(o, i.scrollSpeed, { offset: { top: -70 }, easing: "easeInCubic", onAfter: function () { if (i.changeHash) { window.location.hash = o } u.bind("scroll.onePageNav", function () { r.scrollChange(n, i.currentClass) }); if (i.end) { i.end() } } }) } }; r.adjustNav = function (e, t, n) { e.find("." + n).removeClass(n); t.addClass(n) }; r.getPositions = function (t) { t.find("a.link_onepage").each(function () { var t = e(this).attr("href"), n = e(t).offset(), i = n.top; r.sections[t.substr(1)] = Math.round(i) }) }; r.getSection = function (t) { var n = "", i = Math.round(e(window).height() / 2); for (var s in r.sections) { if (r.sections[s] - i < t) { n = s } } return n }; var i = false; r.scrollChange = function (t, n) { r.getPositions(t); var s = e(window).scrollTop(), o = r.getSection(s); if (s > 2700 & i == false) { counterNumber(); i = true } if (o == "texas") { e("#news1").addClass("cbp-so-side"); e("#tableservice").addClass("cbp-so-side"); e(".grid_item").addClass("animated"); e("#blockTitle1").addClass("uk-animation-scale-down") } else if (o == "game") { e(".luxe-animate").addClass("animated"); e("#blockTitle2").addClass("uk-animation-scale-down") } else if (o == "section-3") { e("#blockTitle4").addClass("uk-animation-scale-down") } else if (o == "section-4") { e("#sponsorpoker").find(".one_sixth_sponsor").addClass("one_sixth_sponsor_after"); e("#blockTitle5").addClass("uk-animation-scale-down") } else if (o == "tournaments") { e("#blockTitle4").addClass("uk-animation-scale-down") } else if (o == "section-6") { e("#blockTitle7").addClass("uk-animation-scale-down") } if (o !== "") { r.adjustNav(t, t.find("a[href=#" + o + "]").parent(), n) } }; r.init = function (t, n) { t.find("a.link_onepage").bind("click", function (i) { r.bindNav(e(this), t, n); i.preventDefault() }); r.getPositions(t); var i = false; e(window).bind("scroll.onePageNav", function () { i = true }); setInterval(function () { if (i) { i = false; r.scrollChange(t, n.currentClass) } }, 250) }; return this.each(function () { var t = e(this), i = e.meta ? e.extend({}, n, t.data()) : n; r.init(t, i) }) }; e.fn.onePageNav.defaults = { currentClass: "current", changeHash: false, scrollSpeed: 750, begin: false, end: false} })(jQuery)