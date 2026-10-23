"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { navigation } from "@/data/navigation";

const normalizePath = (path: string) => path.replace(/\/$/, "") || "/";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const currentPath = normalizePath(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPopState = () => setMenuOpen(false);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);

    return () => {
      if (menuOpen) document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 861px)");
    const onViewportChange = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktopQuery.addEventListener("change", onViewportChange);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktopQuery.removeEventListener("change", onViewportChange);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
    >
      <div className="container header__inner">
        <Link className="brand" href="/" onClick={() => setMenuOpen(false)}>
          <BrandMark />
          <span>
            Rooms Hub
            <small>Case &amp; camere</small>
          </span>
        </Link>

        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu-principale"
          aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle__bars" aria-hidden="true" />
        </button>

        <nav
          className={`nav${menuOpen ? " is-open" : ""}`}
          id="menu-principale"
          aria-label="Navigazione principale"
        >
          <ul className="nav__list">
            {navigation.map((item) => {
              const active = currentPath === normalizePath(item.href);

              return (
                <li key={item.href}>
                  <Link
                    className="nav__link"
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            className="btn btn--primary nav__cta"
            href="/contatti/#richiesta"
            onClick={() => setMenuOpen(false)}
          >
            Chiedi disponibilità
          </Link>
        </nav>
      </div>
    </header>
  );
}
