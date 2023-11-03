import React from 'react'
import Input from '@/components/ui/Input'
import { InputProps } from '@/components/ui/Input/Input'

const SearchInput = ({ ...props }: InputProps) => {
  return (
    <div className="relative w-4/5">
      <Input {...props} />
      <div className="absolute right-3 top-2.5 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 16a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16zm5.293-11.293a1 1 0 00-1.414-1.414l-4 4a1 1 0 001.414 1.414l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}

SearchInput.displayName = 'SearchInput'

export default SearchInput
