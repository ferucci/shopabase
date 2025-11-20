'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export const Search = () => {

  const [search, updateSearch] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const updateFilter = (value: string | null) => {
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }

    router.replace(`${pathname}?${params.toString()}`)
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    const searchParam = params.get('search')

    if (searchParam) {
      updateSearch(searchParam)
    } else {
      updateSearch('')
    }

  }, [])

  return (
    <div className="search">
      <div className="search-wrapper">
        <input
          value={search}
          onChange={(e) => updateSearch(e.target.value)}
          className="search-wrapper_input"
          type="text"
        />
      </div>
      <div className="search-btn">
        <button onClick={() => updateFilter(search)}></button>
      </div>
    </div>
  )

}