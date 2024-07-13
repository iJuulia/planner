import { CheckCircle2, CircleDashed, UserCog } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/button'
import { api } from '../../lib/axios'

interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function Invited() {
  const { tripId } = useParams()
  const [participants, setParticipants] = useState<Participant[] | []>()

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants))
  }, [tripId])

  return (
    <section className='space-y-6'>
      <h2 className='font-semibold text-xl'>Convidados</h2>
      <div className='space-y-5'>
        {participants?.map((participant, index) => {
          return (
            <div
              key={participant.id}
              className='flex items-center justify-between gap-4'>
              <div className='space-y-1.5'>
                <h3 className='font-medium text-zinc-100'>
                  {participant.name ?? `Convidado ${index}`}
                </h3>
                <p className='text-xs text-zinc-400 truncate'>
                  {participant.email}
                </p>
              </div>
              {participant.is_confirmed ? (
                <CheckCircle2 className='text-green-400 size-5 shrink-0' />
              ) : (
                <CircleDashed className='text-zinc-400 size-5 shrink-0' />
              )}
            </div>
          )
        })}
      </div>

      <Button btnColor='secondary' btnSize='full'>
        <UserCog className='size-5' />
        Gerenciar convidados
      </Button>
    </section>
  )
}
