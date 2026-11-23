'use client'

import { useEffect, useState } from 'react'

// The static export bakes in the build year; this updates it in the browser so
// the footer stays current without a redeploy. Starting from the build year
// keeps the server and client HTML identical, so there's no hydration mismatch.
export const CurrentYear = ({ buildYear }: { buildYear: number }) => {
  const [year, setYear] = useState(buildYear)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return <>{year}</>
}
