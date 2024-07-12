import { ArrowRight, UserRoundPlus } from 'lucide-react'
import { Button } from '../../../components/button'

interface StepTwoProps {
  openModal: () => void
  emailsToInvite: string[]
  openConfirm: () => void
}

export function StepTwo({
  openModal,
  emailsToInvite,
  openConfirm,
}: StepTwoProps) {
  return (
    <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3'>
      <button
        onClick={openModal}
        className='flex items-center gap-2 flex-1 text-left'>
        <UserRoundPlus className='size-5 text-zinc-400' />
        {emailsToInvite.length > 0 ? (
          <span className='text-zinc-100 text-lg flex-1'>
            {emailsToInvite.length} pessoa(s) convidada(s){' '}
          </span>
        ) : (
          <span className='text-lg text-zinc-400 outline-none flex-1'>
            Quem estará na viagem?
          </span>
        )}
      </button>

      <Button onClick={openConfirm}>
        Confirmar viagem
        <ArrowRight className='size-5' />
      </Button>
    </div>
  )
}
