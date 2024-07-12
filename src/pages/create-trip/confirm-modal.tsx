import { User, X } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../../components/button'

interface ConfirmModalProps {
  closeConfirm: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmModal({ closeConfirm, createTrip }: ConfirmModalProps) {
  return (
    <div className='bg-black/60 fixed inset-0 flex items-center justify-center'>
      <div className='w-fit max-w-prose rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>
              Confirmar criação de viagem
            </h2>
            <button onClick={closeConfirm}>
              <X className='size-5 text-zinc-400' />
            </button>
          </div>
          <p className='text-sm text-zinc-400'>
            Para concluir a criação da viagem para{' '}
            <strong>Florianópolis, Brasil</strong> nas datas de{' '}
            <strong>16 a 27 de Agosto de 2024</strong> preencha seus dados
            abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className='space-y-3'>
          <div className='h-14 py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <User className='size-5 text-zinc-400' />
            <input
              className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
              name='nome'
              placeholder='Seu nome completo'
            />
          </div>

          <div className='h-14 py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <User className='size-5 text-zinc-400' />
            <input
              className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
              type='email'
              name='email'
              placeholder='Seu e-mail pessoal'
            />
          </div>

          <Button type='submit' btnSize='full'>
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}
