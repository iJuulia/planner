import { Tag, User, X } from 'lucide-react'
import { Button } from '../../components/button'

interface ActivityModal {
  closeCreateModal: () => void
}

export function ActivityModal({ closeCreateModal }: ActivityModal) {
  return (
    <div className='bg-black/60 fixed inset-0 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
            <button onClick={closeCreateModal}>
              <X className='size-5 text-zinc-400' />
            </button>
          </div>
          <p className='text-sm text-zinc-400'>
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className='space-y-3'>
          <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <Tag className='size-5 text-zinc-400' />
            <input
              className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
              name='title'
              placeholder='Qual a atividade?'
            />
          </div>

          <div className='h-14 py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <User className='size-5 text-zinc-400' />
            <input
              className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
              type='datetime-local'
              name='occurs_at'
              placeholder='Data e horário'
            />
          </div>

          <Button type='submit' btnSize='full'>
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}
