'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

export const Filter = () => {
  const catalogList = ['Игровая приставка', 'Периферия для ПК', 'Игры и софт']

  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const catalogRef = useRef<HTMLDivElement>(null)

  useClickOutside(catalogRef, () => setIsOpen(false))

  const updateFilter = (value: string | null) => {
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set('category', value)
    } else {
      params.delete('category')
    }

    router.replace(`${pathname}?${params.toString()}`)
    setIsOpen(false)
  }

  return (
    <div className="catalog-button" ref={catalogRef}>

      <button onClick={() => setIsOpen(!isOpen)}>
        <span className="catalog-button_burger"></span><span className="catalog-button_text">Каталог</span>
      </button>

      <div className="catalog" style={{ display: isOpen ? 'block' : 'none' }}>
        <ul className="catalog-list">
          {catalogList.map(item =>
            <li
              onClick={() => updateFilter(item)}
              key={item}>{item}
            </li>
          )}
        </ul>
      </div>

    </div>
  )
}