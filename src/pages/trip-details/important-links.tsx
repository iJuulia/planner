import { Link2, Plus } from 'lucide-react'
import { Button } from '../../components/button'

export function ImportantLinks() {
  return (
    <section className='space-y-6'>
      <h2 className='font-semibold text-xl'>Links importantes</h2>
      <div className='space-y-5'>
        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-1.5'>
            <h3 className='font-medium text-zinc-100'>Reserva do AirBnb</h3>
            <a
              href='#'
              className='text-xs text-zinc-400 truncate hover:text-zinc-200'>
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>

          {/* shrink-0 faz com que o ícone não diminua de tamanho ainda que seja "espremido" pelos elementos ao redor */}
          <Link2 className='text-zinc-400 size-5 shrink-0' />
        </div>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <div className='space-y-1.5'>
          <h3 className='font-medium text-zinc-100'>Reserva do AirBnb</h3>
          <a
            href='#'
            className='text-xs text-zinc-400 truncate hover:text-zinc-200'>
            https://www.airbnb.com.br/rooms/104700011
          </a>
        </div>
        <Link2 className='text-zinc-400 size-5 shrink-0' />
      </div>

      <Button btnColor='secondary' btnSize='full'>
        <Plus className='size-5' />
        Cadastrar novo link
      </Button>
    </section>
  )
}
