'use client'

import { useState, useEffect, useRef } from 'react'

export default function CountUpTimer() {
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => prev + 10)
      }, 10)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running])

  const hours = Math.floor(elapsed / 3600000)
  const minutes = Math.floor((elapsed % 3600000) / 60000)
  const seconds = Math.floor((elapsed % 60000) / 1000)
  const centiseconds = Math.floor((elapsed % 1000) / 10)

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white">
      <h1 className="text-2xl font-semibold mb-10 tracking-widest text-gray-400 uppercase">
        Count-Up Timer
      </h1>

      <div className="font-mono text-7xl sm:text-8xl font-bold tabular-nums mb-12 tracking-tight">
        {hours > 0 && (
          <span className="text-indigo-400">{pad(hours)}:</span>
        )}
        <span>{pad(minutes)}:</span>
        <span>{pad(seconds)}</span>
        <span className="text-4xl sm:text-5xl text-gray-500">.{pad(centiseconds)}</span>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setRunning((r) => !r)}
          className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors ${
            running
              ? 'bg-yellow-500 hover:bg-yellow-400 text-gray-900'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white'
          }`}
        >
          {running ? 'Pause' : elapsed === 0 ? 'Start' : 'Resume'}
        </button>
        <button
          onClick={() => { setRunning(false); setElapsed(0) }}
          className="px-8 py-3 rounded-full text-lg font-semibold bg-gray-700 hover:bg-gray-600 text-white transition-colors"
        >
          Reset
        </button>
      </div>
    </main>
  )
}
