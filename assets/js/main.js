// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Roster / schedule division toggle (D1 / D2)
  var toggleButtons = document.querySelectorAll("[data-panel-toggle]");
  toggleButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var group = btn.closest("[data-panel-group]");
      var target = btn.getAttribute("data-panel-toggle");
      group.querySelectorAll("[data-panel-toggle]").forEach(function (b) {
        b.classList.remove("is-active");
      });
      btn.classList.add("is-active");
      group.querySelectorAll("[data-panel]").forEach(function (panel) {
        panel.classList.toggle("is-active", panel.getAttribute("data-panel") === target);
      });
    });
  });

  // Set current year in footer
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
