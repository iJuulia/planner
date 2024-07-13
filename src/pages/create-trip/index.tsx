import { FormEvent, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { useNavigate } from 'react-router-dom'
import { api } from '../../lib/axios'
import { ConfirmModal } from './confirm-modal'
import { InviteModal } from './invite-modal'
import { StepOne } from './steps/step-one'
import { StepTwo } from './steps/step-two'

export default function CreateTripPage() {
  const navigate = useNavigate()
  const [isInputOpen, setIsInputOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [eventRange, setEventRange] = useState<DateRange | undefined>()
  const [emailsToInvite, setEmailsToInvite] = useState(['john@acme.com'])

  function openInput() {
    setIsInputOpen(true)
  }

  function closeInput() {
    setIsInputOpen(false)
  }

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  function openConfirm() {
    setIsConfirmOpen(true)
  }

  function closeConfirm() {
    setIsConfirmOpen(false)
  }

  function addEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    // Previne o usuário de adicionar o mesmo email duas vezes
    if (emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([...emailsToInvite, email])

    // Limpa o input
    event.currentTarget.reset()
  }

  function removeEmail(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    )

    setEmailsToInvite(newEmailList)
  }

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!destination) {
      return
    }

    if (!eventRange?.from || !eventRange?.to) {
      return
    }

    if (emailsToInvite.length === 0) {
      return
    }

    if (!ownerName || !ownerEmail) {
      return
    }

    const response = await api.post('/trips', {
      destination,
      starts_at: eventRange.from,
      ends_at: eventRange.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    })

    const { tripId } = response.data

    navigate(`/trips/${tripId}`)
  }

  return (
    <div className='wrapper'>
      <div className='max-w-screen-md px-6 text-center space-y-10'>
        <div className='flex flex-col items-center gap-3'>
          <img src='/logo.svg' alt='plann.er' />
          <p className='text-zinc-300 text-lg'>
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className='space-y-4'>
          <StepOne
            openInput={openInput}
            closeInput={closeInput}
            isInputOpen={isInputOpen}
            eventRange={eventRange}
            setDestination={setDestination}
            setEventRange={setEventRange}
          />

          {isInputOpen && (
            <StepTwo
              emailsToInvite={emailsToInvite}
              openConfirm={openConfirm}
              openModal={openModal}
            />
          )}
        </div>

        <p className='text-sm text-zinc-500'>
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br />
          com nossos{' '}
          <a href='#' className='text-zinc-300 underline'>
            termos de uso
          </a>{' '}
          e{' '}
          <a href='#' className='text-zinc-300 underline'>
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isModalOpen && (
        <InviteModal
          emailsToInvite={emailsToInvite}
          addEmail={addEmail}
          closeModal={closeModal}
          removeEmail={removeEmail}
        />
      )}

      {isConfirmOpen && (
        <ConfirmModal
          closeConfirm={closeConfirm}
          createTrip={createTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  )
}
