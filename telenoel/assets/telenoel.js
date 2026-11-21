/* TéléNoël — scripts du site. Aucun appel réseau, aucun cookie, aucun stockage. */
(function () {
  "use strict";
  var doc = document;
  var root = doc.documentElement;
  var reduceQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };

  /* ——— Menu mobile ——— */
  var toggle = doc.querySelector(".tn-menu-toggle");
  var menu = doc.getElementById("tn-menu");
  if (toggle && menu) {
    var mq = window.matchMedia("(max-width: 900px)");
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      if (mq.matches) menu.hidden = !open; else menu.hidden = false;
    };
    setOpen(false);
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a") && mq.matches) setOpen(false);
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setOpen(false); toggle.focus(); }
    });
    (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(function () { setOpen(false); });
  }

  /* ——— Apparition douce des sections ——— */
  var reveals = doc.querySelectorAll(".tn-reveal");
  if ("IntersectionObserver" in window && !reduceQuery.matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ——— Compteur avant Noël (même règle que l'application : jours calendaires de Paris) ——— */
  var counter = doc.querySelector("[data-christmas-countdown]");
  function parisDay(date) {
    // en-CA donne AAAA-MM-JJ ; le fuseau Europe/Paris gère heure d'été et d'hiver.
    var parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
    return parts.split("-").map(Number);
  }
  function countdown(now) {
    var p = parisDay(now), y = p[0], m = p[1], d = p[2];
    var today = Date.UTC(y, m - 1, d);
    var day = 86400000;
    if (m === 12 && d === 24) return { mode: "eve", days: 1, headline: "Demain, c’est Noël !", unit: "Jour avant Noël", tagline: "Chaque jour un peu plus de magie" };
    if (m === 12 && d === 25) return { mode: "christmas", days: 0, headline: "Joyeux Noël !", unit: "", tagline: "Belles histoires et doux moments" };
    if (m === 12 && d > 25) {
      var next = Math.round((Date.UTC(y + 1, 11, 25) - today) / day);
      return { mode: "afterglow", days: next, headline: "La magie de Noël continue !", unit: "", tagline: "De belles histoires vous attendent encore" };
    }
    var days = Math.round((Date.UTC(y, 11, 25) - today) / day);
    return { mode: "countdown", days: days, headline: "La magie de Noël approche…", unit: days > 1 ? "Jours avant Noël" : "Jour avant Noël", tagline: "Chaque jour un peu plus de magie" };
  }
  if (counter && window.Intl) {
    var numberEl = counter.querySelector("[data-cd-number]");
    var unitEl = counter.querySelector("[data-cd-unit]");
    var headEl = counter.querySelector("[data-cd-headline]");
    var tagEl = counter.querySelector("[data-cd-tagline]");
    var lastKey = "";
    var animateNumber = function (target) {
      if (reduceQuery.matches || target < 2) { numberEl.textContent = String(target); return; }
      var start = null, duration = 1100;
      var step = function (t) {
        if (start === null) start = t;
        var k = Math.min(1, (t - start) / duration);
        var eased = 1 - Math.pow(1 - k, 3);
        numberEl.textContent = String(Math.round(target * eased));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    var render = function (first) {
      var c = countdown(new Date());
      var key = c.mode + c.days;
      if (key === lastKey) return;
      lastKey = key;
      counter.setAttribute("data-mode", c.mode);
      headEl.textContent = c.headline;
      tagEl.textContent = c.tagline;
      if (c.mode === "christmas") {
        numberEl.textContent = "🎄"; numberEl.setAttribute("aria-hidden", "true"); unitEl.textContent = "";
      } else if (c.mode === "afterglow") {
        numberEl.textContent = "✦"; numberEl.setAttribute("aria-hidden", "true"); unitEl.textContent = "";
      } else {
        numberEl.removeAttribute("aria-hidden");
        unitEl.textContent = c.unit;
        if (first) animateNumber(c.days); else numberEl.textContent = String(c.days);
      }
      counter.querySelector("[data-cd-sr]").textContent =
        c.mode === "countdown" || c.mode === "eve" ? c.headline + " " + c.days + " " + c.unit.toLowerCase() + "." : c.headline;
    };
    counter.classList.add("is-live");
    render(true);
    // Vérification légère du changement de date (minuit à Paris), seulement quand la page est visible.
    setInterval(function () { if (!doc.hidden) render(false); }, 60000);
    doc.addEventListener("visibilitychange", function () { if (!doc.hidden) render(false); });
  }

  /* ——— Neige légère (désactivée si animations réduites, appareil modeste ou page masquée) ——— */
  var snowHost = doc.querySelector("[data-snow]");
  var lowPower = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) ||
    (navigator.deviceMemory && navigator.deviceMemory <= 2) ||
    (navigator.connection && navigator.connection.saveData);
  if (snowHost && !reduceQuery.matches && !lowPower) {
    var layer = doc.createElement("div");
    layer.className = "tn-snow";
    layer.setAttribute("aria-hidden", "true");
    var count = window.innerWidth < 600 ? 12 : 22;
    for (var i = 0; i < count; i++) {
      var f = doc.createElement("i");
      var size = 3 + (i % 4);
      f.style.left = (3 + ((i * 37) % 94)) + "%";
      f.style.width = f.style.height = size + "px";
      f.style.opacity = String(0.18 + (i % 4) * 0.08);
      f.style.animationDuration = (11 + (i % 5) * 1.7) + "s";
      f.style.animationDelay = (-(i / count) * 14) + "s";
      f.style.setProperty("--drift", (i % 2 ? 18 : -18) + "px");
      layer.appendChild(f);
    }
    doc.body.appendChild(layer);
  }
  var syncPaused = function () {
    root.classList.toggle("tn-paused", doc.hidden);
    var s = doc.querySelector(".tn-snow");
    if (s) s.classList.toggle("paused", doc.hidden);
  };
  doc.addEventListener("visibilitychange", syncPaused);
  if (reduceQuery.addEventListener) reduceQuery.addEventListener("change", function () {
    var s = doc.querySelector(".tn-snow");
    if (s && reduceQuery.matches) s.remove();
  });
})();
