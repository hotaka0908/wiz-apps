'use client'

import { useState } from 'react'

export default function GlowingButton() {
  const [on, setOn] = useState(false)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 gap-10">
      <h1 className="text-gray-500 text-sm tracking-widest uppercase">押して光らせよう</h1>
      <button
        onClick={() => setOn((o) => !o)}
        style={
          on
            ? {
                boxShadow:
                  '0 0 50px 20px rgba(253,224,71,0.75), 0 0 120px 60px rgba(253,186,5,0.35)',
              }
            : {}
        }
        className={`w-48 h-48 rounded-full text-2xl font-bold transition-all duration-300 cursor-pointer select-none ${
          on
            ? 'bg-yellow-300 text-gray-900 scale-110'
            : 'bg-gray-700 text-gray-300 scale-100 hover:bg-gray-600'
        }`}
      >
        {on ? '光ってる！' : 'PUSH'}
      </button>
      <p className="text-gray-600 text-xs">
        {on ? 'もう一度押すと消えます' : 'ボタンを押してください'}
      </p>
    </main>
  )
}
