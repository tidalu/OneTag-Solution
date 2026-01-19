"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/src/contexts/theme-context"
import { useLanguage } from "@/src/contexts/language-context"

export function PreferenceModal() {
  const [open, setOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return

    try {
      const storedPref = window.localStorage.getItem("preferencesSet")
      console.log("[PreferenceModal] hasVisited:", storedPref)

      if (!storedPref) {
        const timer = setTimeout(() => {
          console.log("[PreferenceModal] Opening after 2s...")
          setOpen(true)
        }, 2000)
        return () => clearTimeout(timer)
      }
    } catch (err) {
      console.error("[PreferenceModal] localStorage error:", err)
    }
  }, [hydrated])

  const savePreferences = () => {
    try {
      window.localStorage.setItem("preferencesSet", "true")
    } catch (err) {
      console.error("Error saving preferences:", err)
    }
    console.log("[PreferenceModal] Saved & closing...")
    setOpen(false)
  }

  if (!hydrated || !open) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={savePreferences}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 10 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
            mass: 0.8,
          }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md text-left relative border border-gray-200 dark:border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.h2
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold mb-2 text-gray-900 dark:text-white"
          >
            Choose your preferences
          </motion.h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Please choose given options to see the page as you like
          </p>

          {/* Theme Section */}
          <div className="mb-6">
            <h3 className="font-medium mb-3 text-gray-800 dark:text-gray-200">
              Choose theme mode:
            </h3>
            <div className="flex justify-start gap-3">
              <button
                onClick={() => theme === "dark" && toggleTheme()}
                className={`px-5 py-2 rounded-xl border-2 transition-all duration-300 ${
                  theme === "light"
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-gray-700 dark:border-gray-600 bg-gray-800 text-gray-300"
                }`}
              >
                Light
              </button>
              <button
                onClick={() => theme === "light" && toggleTheme()}
                className={`px-5 py-2 rounded-xl border-2 transition-all duration-300 ${
                  theme === "dark"
                    ? "border-blue-600 bg-blue-50 text-blue-700 dark:bg-gray-800 dark:text-white"
                    : "border-gray-700 bg-gray-100 text-gray-700"
                }`}
              >
                Dark
              </button>
            </div>
          </div>

          {/* Language Section */}
          <div className="mb-8">
            <h3 className="font-medium mb-3 text-gray-800 dark:text-gray-200">
              Choose your language:
            </h3>
            <div className="flex justify-start gap-3 flex-wrap">
              {[
                { code: "en", label: "English" },
                { code: "uz", label: "O‘zbek" },
                { code: "ru", label: "Русский" },
              ].map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLanguage(code as any)}
                  className={`px-5 py-2 rounded-xl border-2 transition-all duration-300 ${
                    language === code
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={savePreferences}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Save
          </motion.button>

          <button
            onClick={savePreferences}
            className="absolute top-4 right-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-lg"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
