"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {!isOpen && (
        <Button
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg z-50"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50">
          <div className="flex items-center justify-between p-4 border-b bg-blue-600 text-white rounded-t-lg">
            <h3 className="font-semibold">Chat with Sales</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 h-full flex flex-col justify-center items-center text-center">
            <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Ready to get started?</h4>
            <p className="text-gray-600 text-sm mb-4">
              Chat with our sales team to learn how iLMS can transform your lead management process.
            </p>
            <Button className="w-full">Start Conversation</Button>
          </div>
        </div>
      )}
    </>
  )
}
