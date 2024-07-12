import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../components/button'
import { Activities } from './activities'
import { ActivityModal } from './activity-modal'
import { Header } from './header'
import { ImportantLinks } from './important-links'
import { Invited } from './invited'

export function TripDetailsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  function openCreateModal() {
    setIsCreateModalOpen(true)
  }

  function closeCreateModal() {
    setIsCreateModalOpen(false)
  }

  return (
    <div className='max-w-6xl px-6 py-10 mx-auto space-y-8'>
      <Header />

      <main className='flex gap-16 px-4'>
        {/* Atividades */}
        <section className='flex-1 space-y-6'>
          <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-semibold'>Atividades</h1>

            <Button onClick={openCreateModal}>
              <Plus className='size-5' />
              Cadastrar atividade
            </Button>
          </div>

          <Activities />
        </section>

        {/* Informações */}
        <aside className='w-80 space-y-6'>
          <ImportantLinks />
          <hr className='line-h' />
          <Invited />
        </aside>
      </main>

      {isCreateModalOpen && (
        <ActivityModal closeCreateModal={closeCreateModal} />
      )}
    </div>
  )
}
