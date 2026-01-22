"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/src/contexts/language-context";
import { useTheme } from "@/src/contexts/theme-context";
import Image from "next/image";
import { AccessibilityToolbar } from "./accessibility-toolbar";

// const navLinks = [
//   { href: "/solutions", label: "nav.solutions", subLink : [
//     {href: "/a", label: "nav.solutions"},
//     {href: "/b", label: "nav.solutions"},
//     {href: "/c", label: "nav.solutions" , subLink : [
//       {href: "/ca", label: "nav.solutions"},
//       {href: "/cb", label: "nav.solutions"},
//       {href: "/cc", label: "nav.solutions"},
//     ]}
//   ] },
//   { href: "/cases", label: "nav.cases" },
//   { href: "/about", label: "nav.about" },
//   { href: "/contact", label: "nav.contact" },
// ];

// subLinks: [
//   { href: "/esl-shield-series", label: "nav.ShieldSeriesESL" },
//   { href: "/valley-series-ESL", label: "nav.ValleySeriesESL" },
//   { href: "/essence-series-ESL", label: "nav.EssenceSeriesESL" },
// ],

const navLinks = [
  {
    // href: "/solutions",
    label: "nav.solutions",
    subLinks: [
      {
        href: "/electronic-shelf-labels",
        label: "nav.electronicShelfLabels",
      },
      { href: "/esl-cloud-platform", label: "nav.ESLCloudPlatform" },
      { href: "/esl-accessories", label: "nav.eslAccessories" },
    ],
  },
  { href: "/cases", label: "nav.cases" },
  { href: "/about", label: "nav.about" },
  { href: "/contact", label: "nav.contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [mounted, setMounted] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const accessRef = useRef<HTMLDivElement>(null);

  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const pathname = usePathname();
  let customNavbar = false;

  if (
    pathname === "/esl-accessories" ||
    pathname === "/esl-cloud-platform" ||
    pathname === "/electronic-shelf-labels"
  ) {
    customNavbar = true;
  }

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }

      if (
        showLangMenu &&
        langRef.current &&
        !langRef.current.contains(event.target as Node)
      ) {
        setShowLangMenu(false);
      }

      if (
        showAccessibility &&
        accessRef.current &&
        !accessRef.current.contains(event.target as Node)
      ) {
        setShowAccessibility(false);
      }
    };

    // Only add listener if any menu is open
    if (isOpen || showLangMenu || showAccessibility) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, showLangMenu, showAccessibility]); // Add all states
  //  Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const languages = [
    { code: "uz" as const, label: "O'zbek", flag: "/uz.svg" },
    { code: "ru" as const, label: "Русский", flag: "/ru.svg" },
    { code: "en" as const, label: "English", flag: "/gb.svg" },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  return (
    <motion.nav
      // initial={{ y: -100, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`fixed h-12 lg:h-16 top-0 left-0 right-0 z-50 transition-all duration-500 blue-nav mt-2`}
    >
      <div className="container mx-auto max-w-344 h-full px-2 sm:px-4">
        <div
          className={`flex items-center justify-between h-full rounded-sm ${
            scrolled
              ? "md-glass max-mmd:shadow-lg max-mmd:backdrop-blur-md"
              : theme === "dark"
              ? "bg-fill-tertiary"
              : "bg-fill-tertiary"
          } ${isOpen ? "rounded-b-none md:rounded-b-sm md-glass" : ""}
          ${customNavbar && 'md-glass'}
          `}
        >
          {/* Mobile Logo */}
          <div
            className={`md:hidden px-2 sm:px-4 rounded-sm py-2 border border-transparent`}
          >
            <Link href="/" className={`flex items-center gap-3 group`}>
              <motion.div className="relative w-30 2lg:w-32 xxl:w-36 aspect-40/10">
                  <Image
                    src={theme === "dark" ? "/logo2.svg" : "/logo1.svg"}
                    key={theme}
                    alt="Onetag Smart Solutions - Electronic Shelf Labels Provider"
                    fill
                    priority
                    className="object-contain transition-all duration-300"
                  />
              </motion.div>
            </Link>
          </div>

          {/* Logo */}
          <div
            className={`hidden md:block px-4 rounded-sm py-2 border border-transparent ${
              scrolled
                ? "glass shadow-lg backdrop-blur-md"
                : theme === "dark"
                ? "bg-fill-tertiary"
                : "bg-fill-tertiary"
            }
            ${customNavbar ? "glass" : ""}
            `}
          >
            <Link href="/" className={`flex items-center gap-3 group`}>
              <motion.div className="relative w-30 2lg:w-32 xxl:w-36 aspect-40/10">
                <motion.div>
                  <Image
                    src={theme === "dark" ? "/logo2.svg" : "/logo1.svg"}
                    key={theme}
                    alt="Onetag Smart Solutions - Electronic Shelf Labels Provider"
                    fill
                    priority
                    className="object-contain transition-all duration-300"
                  />
                </motion.div>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center gap-4 lg:gap-6 px-4 rounded-sm py-1.5 3md:py-2 border bg-fill-tertiary border-transparent ${
              scrolled || customNavbar
                ? "glass bg-fill-tertiary shadow-lg backdrop-blur-md"
                : theme === "dark"
                ? "bg-fill-tertiary"
                : "bg-fill-tertiary"
            }`}
          >
            {/* {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="relative group">
                <span className="text-sm 2md:text-base font-light text-foreground/70 hover:text-foreground transition-all duration-300">
                  {t(link.label)}
                </span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent"
                    // transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))} */}
            {navLinks.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                t={t}
                scrolled={scrolled}
                theme={theme}
              />
            ))}

            <div className="flex items-center gap-2">
              {/* Accessibility Toolbar */}
              <div ref={accessRef} className="relative">
                <motion.button
                  whileHover={{ scale: 1.05, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowAccessibility(!showAccessibility);
                    setShowLangMenu(false);
                  }}
                  aria-label="setting for page"
                  className="p-2 lg:p-2.5 rounded-xl hover:bg-primary/10 transition-all cursor-pointer"
                >
                  <Settings className="w-5 h-5 text-muted-foreground" />
                </motion.button>

                <AnimatePresence>
                  {showAccessibility && (
                    <AccessibilityToolbar
                      onClose={() => setShowAccessibility(false)}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Language Selector */}
              <div ref={langRef} className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowLangMenu(!showLangMenu);
                    setShowAccessibility(false);
                  }}
                  className="p-2 lg:p-2.5 rounded-xl hover:bg-primary/10 transition-all flex items-center gap-2 cursor-pointer"
                >
                  {currentLang && (
                    <Image
                      src={currentLang.flag}
                      alt={currentLang.label}
                      width={22}
                      height={22}
                      className="rounded-full"
                    />
                  )}
                </motion.button>

                <AnimatePresence>
                  {showLangMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="absolute right-0 mt-2 w-44 glass bg-[#fffffff5]! dark:bg-[#141c30f0]! rounded-2xl shadow-xl border border-border/50 overflow-hidden backdrop-blur-xl"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setShowLangMenu(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left text-base font-light transition-all duration-300 ${
                            language === lang.code
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-primary/5"
                          }`}
                        >
                          <Image
                            src={lang.flag}
                            alt={lang.label}
                            width={22}
                            height={22}
                            className="rounded-full"
                          />
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              {/* <motion.button
                whileHover={{ rotate: 20, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="p-2.5 rounded-xl hover:bg-primary/10 transition-all"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Sun className="w-5 h-5 text-muted-foreground" />
                )}
              </motion.button> */}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <div ref={accessRef} className="relative">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowAccessibility(!showAccessibility);
                  setShowLangMenu(false);
                }}
                aria-label="setting for page"
                className="p-2 lg:p-2.5 rounded-xl hover:bg-primary/10 transition-all cursor-pointer"
              >
                <Settings className="w-5 h-5" />
              </motion.button>

              <AnimatePresence>
                {showAccessibility && (
                  <AccessibilityToolbar
                    onClose={() => setShowAccessibility(false)}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen((prev) => !prev)}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-2 rounded-xl hover:bg-primary/10 transition-all"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/*Fixed Mobile Navigation */}
      {/* <AnimatePresence> */}
      <div>
        {isOpen && (
          <motion.div
            ref={menuRef}
            // initial={{ opacity: 0, height: 0 }}
            // animate={{ opacity: 1, height: "auto" }}
            // exit={{ opacity: 0, height: 0 }}
            // transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`md:hidden glass backdrop-blur border-t-0! border-border/50 rounded-b-sm mx-2 sm:mx-4 ${
              theme === "dark" ? "bg-gray-900/80" : "bg-white/70"
            }`}
          >
            <div className="container mx-auto px-6 pt-2 pb-6 space-y-2.5">
              {/* {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {t(link.label)}
                </Link>
              ))} */}

              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-base font-medium transition-colors duration-300 ${
                          pathname === link.href
                            ? "text-primary"
                            : "text-foreground/70 hover:text-foreground"
                        }`}
                      >
                        {t(link.label)}
                      </Link>
                    ) : (
                      <p
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-base font-medium transition-colors duration-300 ${
                          pathname === link.href
                            ? "text-primary"
                            : "text-foreground/70 hover:text-foreground"
                        }`}
                      >
                        {t(link.label)}
                      </p>
                    )}

                    {/* Render subLinks if they exist */}
                    {link.subLinks && (
                      <ul className="ml-2">
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.href}>
                            <Link
                              href={subLink.href}
                              onClick={() => setIsOpen(false)}
                              className={`block py-1 text-sm transition-colors duration-300 ${
                                pathname === subLink.href
                                  ? "text-primary"
                                  : "text-foreground/70 hover:text-foreground"
                              }`}
                            >
                              {t(subLink.label)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Theme + Language Switcher */}
              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                {/* Theme Toggle */}
                {/* <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-primary/10 transition-all"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                  <span className="text-sm font-medium">
                    {theme === "light" ? t("Dark Mode") : t("Light Mode")}
                  </span>
                </motion.button> */}

                {/* Language Selector */}
                <div className="flex items-center gap-3">
                  {languages.map((lang, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                        language === lang.code
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "hover:bg-primary/10"
                      }`}
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.label}
                        width={22}
                        height={22}
                        className="rounded-full"
                      />
                      <span>{lang.code.toUpperCase()}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      {/* </AnimatePresence> */}
    </motion.nav>
  );
}

function NavItem({ item, level = 1, t, scrolled, theme }: any) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hasSub = Array.isArray(item?.subLinks) && item.subLinks.length > 0;

  // show on hover (desktop) and click (touch)
  const onEnter = () => setOpen(true);
  const onLeave = () => setOpen(false);
  const onToggle = (e: React.MouseEvent) => {
    // prevent Link navigation when toggling top-level menu
    if (hasSub && level === 1) {
      e.preventDefault();
      setOpen((v) => !v);
    }
  };

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Link
        href={item.href ?? "#"}
        onClick={onToggle}
        className={`inline-flex items-center gap-2 px-2 py-1 ${
          pathname === item.href
            ? "text-primary"
            : "text-foreground/70 hover:text-foreground"
        } text-sm 2md:text-base font-light transition-all`}
        aria-haspopup={hasSub ? "menu" : undefined}
        aria-expanded={hasSub ? open : undefined}
      >
        {t ? t(item.label) : item.label}
        {/* optional arrow indicator for items with submenu */}
        {hasSub && (
          <span
            aria-hidden
            className={`transition-all! duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        )}
      </Link>

      {/* submenu */}
      <AnimatePresence>
        {hasSub && open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-40 mt-2 ${
              level === 1
                ? "left-0 min-w-[200px]"
                : "left-full top-0 ml-2 min-w-[200px]"
            } absolute right-0 mt-3.5 w-52 glass bg-[#fffffff5]! dark:bg-[#141c30f0]! rounded-2xl shadow-xl border border-border/50 overflow-hidden backdrop-blur-xl z-50 p-4 ${
              scrolled
                ? "md-glass shadow-lg backdrop-blur-md"
                : theme === "dark"
                ? "bg-fill-tertiary"
                : "md-glass"
            }`}
            // className={`absolute z-40 mt-2 ${
            //   level === 1
            //     ? "left-0 min-w-[200px]"
            //     : "left-full top-0 ml-2 min-w-[200px]"
            // } bg-background shadow-lg rounded-md p-2`}
            role="menu"
          >
            {item.subLinks.map((sub: any) => (
              <FlyoutItem
                key={`${sub.href ?? sub.label}`}
                item={sub}
                level={level + 1}
                t={t}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* FlyoutItem - reuses NavItem behavior for recursion */
function FlyoutItem({ item, level = 2, t }: any) {
  return (
    <div className="relative" role="none">
      <NavItem item={item} level={level} t={t} />
    </div>
  );
}
