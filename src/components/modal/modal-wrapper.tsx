import React, { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
}

export function ModalWrapper({ children }: ModalProps) {
  return (
    <div className='bg-black/60 fixed inset-0 flex items-center justify-center'>
      <div className='w-fit max-w-prose rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5'>
        {children}
      </div>
    </div>
  )
}
