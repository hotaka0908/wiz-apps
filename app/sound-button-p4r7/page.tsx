'use client'

import { useCallback, useState } from 'react'

function playPop() {
  const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.type = 'sine'
  osc.frequency.setValueAtTime(600, ctx.currentTime)
  osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15)

  gain.gain.setValueAtTime(0.8, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4)

  osc.start(ctx.currentTime)
  osc.stop(ctx.currentTime + 0.4)
}

export default function SoundButton() {
  const [pressed, setPressed] = useState(false)

  const handleClick = useCallback(() => {
    playPop()
    setPressed(true)
    setTimeout(() => setPressed(false), 150)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <button
        onClick={handleClick}
        className={`w-72 h-72 rounded-full text-white text-4xl font-black shadow-2xl select-none transition-all duration-100 cursor-pointer
          bg-gradient-to-br from-pink-500 to-indigo-500
          ${pressed ? 'scale-90 brightness-75' : 'scale-100 hover:scale-105 active:scale-90'}`}
        style={{
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation',
        }}
      >
        🔊
      </button>
    </main>
  )
}
