import { X } from 'lucide-react'
import React, { ReactNode } from 'react'

interface ModalHeadingProps {
  title: string
  text: ReactNode
  closeModal: () => void
}

export function ModalHeading({ title, text, closeModal }: ModalHeadingProps) {
  return (
    <div className='space-y-2'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <button onClick={closeModal}>
          <X className='size-5 text-zinc-400' />
        </button>
      </div>
      <p className='text-sm text-zinc-400'>{text}</p>
    </div>
  )
}
