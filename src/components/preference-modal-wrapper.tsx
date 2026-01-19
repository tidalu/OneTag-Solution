"use client"

import dynamic from "next/dynamic"

const PreferenceModal = dynamic(
  () => import("./preference-modal").then((m) => m.PreferenceModal),
  { ssr: false }
)

export default function PreferenceModalWrapper() {
  return <PreferenceModal />
}
