"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Gift } from "lucide-react"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Wait! Don't Miss Out</h3>

          <p className="text-gray-600 mb-6">
            Get a free lead management audit worth $500 when you book a demo this week.
          </p>

          <div className="space-y-3">
            <Button className="w-full" size="lg">
              Claim Free Audit
            </Button>
            <button onClick={() => setIsVisible(false)} className="text-gray-500 text-sm hover:text-gray-700">
              No thanks, I'll pass
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
