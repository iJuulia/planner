import { AtSign, Plus, X } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../../components/button'

interface InviteModalProps {
  closeModal: () => void
  emailsToInvite: string[]
  addEmail: (event: FormEvent<HTMLFormElement>) => void
  removeEmail: (email: string) => void
}

export function InviteModal({
  closeModal,
  emailsToInvite,
  addEmail,
  removeEmail,
}: InviteModalProps) {
  return (
    <div className='bg-black/60 fixed inset-0 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold'>Selecionar convidados</h2>
          <button onClick={closeModal}>
            <X className='size-5 text-zinc-400' />
          </button>
        </div>
        <p className='text-sm text-zinc-400 mt-2'>
          Os convidados irão receber e-mails para confirmar a participação na
          viagem.
        </p>
        <div className='flex flex-wrap gap-2'>
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                <span className='text-zinc-300'>{email}</span>
                <button onClick={() => removeEmail(email)}>
                  <X className='size-4 text-zinc-400' />
                </button>
              </div>
            )
          })}
        </div>

        <hr className='line-h' />
        <form
          onSubmit={addEmail}
          className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
          <div className='px-2 flex items-center flex-1 gap-2'>
            <AtSign className='size-5 text-zinc-400 ml-2' />
            <input
              className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
              type='email'
              name='email'
              placeholder='Digite o e-mail do convidado'
            />
          </div>

          <Button type='submit'>
            Convidar
            <Plus className='size-5' />
          </Button>
        </form>
      </div>
    </div>
  )
}
