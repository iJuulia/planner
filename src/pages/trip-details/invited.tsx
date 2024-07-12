import { CircleDashed, UserCog } from 'lucide-react'
import { Button } from '../../components/button'

export function Invited() {
  return (
    <section className='space-y-6'>
      <h2 className='font-semibold text-xl'>Convidados</h2>
      <div className='space-y-5'>
        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-1.5'>
            <h3 className='font-medium text-zinc-100'>Jessica White</h3>
            <p className='text-xs text-zinc-400 truncate'>
              jessica.white44@yahoo.com
            </p>
          </div>
          <CircleDashed className='text-zinc-400 size-5 shrink-0' />
        </div>
        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-1.5'>
            <h3 className='font-medium text-zinc-100'>Dra. Rita</h3>
            <p className='text-xs text-zinc-400 truncate'>
              lacy.stiedemann@gmail.com
            </p>
          </div>
          <CircleDashed className='text-zinc-400 size-5 shrink-0' />
        </div>
      </div>

      <Button btnColor='secondary' btnSize='full'>
        <UserCog className='size-5' />
        Gerenciar convidados
      </Button>
    </section>
  )
}
