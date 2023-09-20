import React, { InputHTMLAttributes } from 'react'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  autoComplete: string,
}

export function Input(props: TextInputInputProps) {
  return (
    <input
      className='w-full md:w-20 h-8 px-2 outline-none bg-gray-400 rounded focus:ring-2 ring-green-500 placeholder:text-xsm placeholder:text-gray-100 text-gray-900 text-xsm '
      {...props}
    />
  )
}