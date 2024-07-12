import React, { FormEvent, ReactNode } from 'react'

interface ModalFormProps {
  createEvent: (event: FormEvent<HTMLFormElement>) => void
  children: ReactNode
}

export function ModalForm({ children, createEvent }: ModalFormProps) {
  return (
    <form onSubmit={createEvent} className='space-y-3'>
      <div className='h-14 py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
        {children}
      </div>
    </form>
  )
}
