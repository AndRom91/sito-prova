/* ==========================================================================
   Rooms Hub — script principale
   Vanilla JS, nessuna dipendenza esterna.
   ========================================================================== */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------------
     1. Header: stato "scrolled"
     ---------------------------------------------------------------------- */
  const header = document.querySelector(".site-header");

  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------------------------------------------------------------------
     2. Menu mobile
     ---------------------------------------------------------------------- */
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav-toggle");

  if (nav && navToggle) {
    const setMenu = (open) => {
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
      nav.classList.toggle("is-open", open);
    };

    navToggle.addEventListener("click", () => {
      setMenu(navToggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setMenu(false);
        navToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || navToggle.contains(event.target)) return;
      setMenu(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) setMenu(false);
    });
  }

  /* ------------------------------------------------------------------------
     3. Comparsa degli elementi allo scroll
     ---------------------------------------------------------------------- */
  const reveals = document.querySelectorAll(".reveal");

  if (reveals.length) {
    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      reveals.forEach((el) => el.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );

      reveals.forEach((el, index) => {
        // piccolo scarto progressivo per gli elementi vicini
        if (!el.style.getPropertyValue("--delay")) {
          el.style.setProperty("--delay", `${(index % 4) * 70}ms`);
        }
        observer.observe(el);
      });
    }
  }

  /* ------------------------------------------------------------------------
     4. Galleria: filtri
     ---------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll(".filter");
  const galleryItems = Array.from(document.querySelectorAll(".gallery__item"));

  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((other) => {
          other.setAttribute("aria-pressed", String(other === button));
        });

        galleryItems.forEach((item) => {
          const visible = filter === "tutte" || item.dataset.category === filter;
          item.classList.toggle("is-hidden", !visible);
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. Lightbox
     ---------------------------------------------------------------------- */
  const lightbox = document.querySelector(".lightbox");

  if (lightbox && galleryItems.length) {
    const image = lightbox.querySelector(".lightbox__img");
    const caption = lightbox.querySelector(".lightbox__caption");
    const counter = lightbox.querySelector(".lightbox__counter");
    const btnClose = lightbox.querySelector(".lightbox__close");
    const btnPrev = lightbox.querySelector(".lightbox__nav--prev");
    const btnNext = lightbox.querySelector(".lightbox__nav--next");

    let visibleItems = [];
    let currentIndex = 0;
    let lastFocused = null;

    const getVisibleItems = () => galleryItems.filter((item) => !item.classList.contains("is-hidden"));

    const render = () => {
      const item = visibleItems[currentIndex];
      if (!item) return;

      const img = item.querySelector("img");
      image.src = img.src;
      image.alt = img.alt;
      caption.textContent = item.dataset.caption || img.alt;
      counter.textContent = `${currentIndex + 1} / ${visibleItems.length}`;
    };

    const open = (item) => {
      visibleItems = getVisibleItems();
      const index = visibleItems.indexOf(item);
      if (index === -1) return;

      currentIndex = index;
      lastFocused = document.activeElement;
      render();
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
      btnClose.focus();
    };

    const close = () => {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("no-scroll");
      if (lastFocused) lastFocused.focus();
    };

    const step = (delta) => {
      if (!visibleItems.length) return;
      currentIndex = (currentIndex + delta + visibleItems.length) % visibleItems.length;
      render();
    };

    galleryItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        open(item);
      });

      // accessibilità da tastiera
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open(item);
        }
      });
    });

    btnClose.addEventListener("click", close);
    btnPrev.addEventListener("click", () => step(-1));
    btnNext.addEventListener("click", () => step(1));

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target.classList.contains("lightbox__stage")) {
        close();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (!lightbox.classList.contains("is-open")) return;

      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "Tab") {
        // mantiene il focus dentro la lightbox
        const focusables = [btnPrev, btnNext, btnClose];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     6. Form contatti
     Nota: il sito è statico, quindi il form apre il client di posta.
     Per usare un backend basta sostituire l'invio con una fetch verso
     Formspree / Netlify Forms / Getform.
     ---------------------------------------------------------------------- */
  const form = document.querySelector("#richiesta-form");

  if (form) {
    const status = form.querySelector(".form-status");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

    const rules = {
      nome: (value) => (value.trim().length >= 2 ? "" : "Inserisci il tuo nome."),
      email: (value) => (emailPattern.test(value.trim()) ? "" : "Inserisci un indirizzo email valido."),
      messaggio: (value) =>
        value.trim().length >= 10 ? "" : "Scrivi almeno una frase per aiutarci a risponderti.",
      partenza: (value, field) => {
        const arrivo = form.elements.arrivo ? form.elements.arrivo.value : "";
        if (!value || !arrivo) return "";
        return value > arrivo ? "" : "La partenza deve essere successiva all'arrivo.";
      },
      privacy: (_, field) => (field.checked ? "" : "Devi accettare l'informativa privacy."),
    };

    const showError = (field, message) => {
      const wrapper = field.closest(".field") || field.closest(".checkbox");
      const error = wrapper ? wrapper.querySelector(".field__error") : null;

      if (message) {
        field.setAttribute("aria-invalid", "true");
        if (error) error.textContent = message;
      } else {
        field.removeAttribute("aria-invalid");
        if (error) error.textContent = "";
      }
    };

    const setStatus = (type, message) => {
      status.className = "form-status is-visible form-status--" + type;
      status.textContent = message;
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      let valid = true;
      let firstInvalid = null;

      Object.keys(rules).forEach((name) => {
        const field = form.elements[name];
        if (!field) return;

        const message = rules[name](field.value || "", field);
        showError(field, message);

        if (message) {
          valid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      });

      if (!valid) {
        setStatus("error", "Controlla i campi evidenziati e riprova.");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const data = new FormData(form);
      const lines = [
        `Nome: ${data.get("nome")}`,
        `Email: ${data.get("email")}`,
        data.get("telefono") ? `Telefono: ${data.get("telefono")}` : null,
        data.get("struttura") ? `Struttura: ${data.get("struttura")}` : null,
        data.get("arrivo") ? `Arrivo: ${data.get("arrivo")}` : null,
        data.get("partenza") ? `Partenza: ${data.get("partenza")}` : null,
        data.get("ospiti") ? `Ospiti: ${data.get("ospiti")}` : null,
        "",
        String(data.get("messaggio")),
      ].filter(Boolean);

      const subject = "Richiesta informazioni — " + (data.get("struttura") || "Rooms Hub");
      const mailto =
        "mailto:info@roomshub.it?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(lines.join("\n"));

      setStatus(
        "ok",
        "Grazie! Stiamo aprendo il tuo programma di posta con la richiesta già compilata. In alternativa scrivi a info@roomshub.it."
      );

      window.location.href = mailto;
      form.reset();
    });

    // rimuove l'errore appena l'utente corregge il campo
    form.addEventListener("input", (event) => {
      const field = event.target;
      if (field.matches("input, select, textarea") && field.getAttribute("aria-invalid") === "true") {
        showError(field, "");
      }
    });
  }

  /* ------------------------------------------------------------------------
     7. Anno corrente nel footer
     ---------------------------------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
