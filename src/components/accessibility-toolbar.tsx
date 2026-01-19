"use client";

import { motion } from "framer-motion";
import { Plus, Minus, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/src/contexts/theme-context";
import { useLanguage } from "../contexts/language-context";

interface AccessibilityToolbarProps {
  onClose?: () => void;
}

const accessibilityModal = {
  en: {
    title: 'Accessibility',
    reduceText: 'Reduce Text',
    enlargeText: 'Enlarge Text',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
  },
  ru: {
    title: 'Доступность',
    reduceText: 'Уменьшить текст',
    enlargeText: 'Увеличить текст',
    lightMode: 'Светлый режим',
    darkMode: 'Тёмный режим',
  },
  uz: {
    title: 'Qulaylik va kirish imkoniyati',
    reduceText: 'Matnni kichraytirish',
    enlargeText: 'Matnni kattalashtirish',
    lightMode: 'Yorug‘ rejim',
    darkMode: 'Qorong‘i rejim',
  },
}

export function AccessibilityToolbar({ onClose }: AccessibilityToolbarProps) {
  const [fontSize, setFontSize] = useState(100);
  const { theme, toggleTheme } = useTheme();
  const {language} = useLanguage()

  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      const newSize = fontSize - 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute right-0 mt-2.5 w-52 glass bg-[#fffffff5]! dark:bg-[#141c30f0]! rounded-2xl shadow-xl border border-border/50 overflow-hidden backdrop-blur-xl z-50 p-4"
    >
      <h3 className="font-medium mb-4 text-center">{accessibilityModal[language].title}</h3>

      {/* Font Size Controls */}
      {/* <div className="mb-4">
        <label className="text-sm text-muted-foreground mb-2 block">Font Size</label>
      </div> */}
      <div className="flex flex-col gap-1">
        <button
          onClick={decreaseFontSize}
          className="w-full glass flex items-center gap-6 py-1 px-1.5 hover:bg-primary/10 text-sm rounded-[6px] cursor-pointer transition-all duration-300"
          aria-label="Decrease font size"
        >
          <Minus className="w-4 h-4" />
          <span className="block w-full text-center">{accessibilityModal[language].reduceText}</span>
        </button>

          <button
            onClick={increaseFontSize}
            className="w-full glass flex items-center gap-6 py-1 px-1.5 hover:bg-primary/10 text-sm rounded-[6px] cursor-pointer transition-all duration-300"
            aria-label="Increase font size"
          >
            <Plus className="w-4 h-4" />
            <span className="block w-full text-center">{accessibilityModal[language].enlargeText}</span>
          </button>

        {/* Theme Toggle */}
        <button
          onClick={() => {
            toggleTheme();
            onClose?.();
          }}
          className="w-full glass flex items-center gap-6 py-1 px-1.5 hover:bg-primary/10 text-sm rounded-[6px] cursor-pointer transition-all duration-300"
        >
          {theme === "light" ? (
            <>
              <Moon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm block w-full text-center">{accessibilityModal[language].darkMode}</span>
            </>
          ) : (
            <>
              <Sun className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm block w-full text-center">{accessibilityModal[language].lightMode}</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
