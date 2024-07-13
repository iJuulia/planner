import { format } from 'date-fns'
import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react'
import { useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { Button } from '../../../components/button'

interface StepOneProps {
  isInputOpen: boolean
  closeInput: () => void
  openInput: () => void
  setDestination: (destination: string) => void
  setEventRange: (dates: DateRange | undefined) => void
  eventRange: DateRange | undefined
}

export function StepOne({
  isInputOpen,
  closeInput,
  openInput,
  setDestination,
  setEventRange,
  eventRange,
}: StepOneProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    return setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    return setIsDatePickerOpen(false)
  }

  const displayedDate =
    eventRange && eventRange.from && eventRange.to
      ? format(eventRange.from, "d' de ' LLL")
          .concat(' até ')
          .concat(format(eventRange.to, "d' de ' LLL"))
      : null

  return (
    <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3'>
      <div className='flex items-center gap-2 flex-1'>
        <MapPin className='size-5 text-zinc-400' />
        <input
          disabled={isInputOpen}
          className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
          type='text'
          placeholder='Para onde você vai?'
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>
      <button
        onClick={openDatePicker}
        disabled={isInputOpen}
        className='flex items-center gap-2 outline-none text-left'>
        <Calendar className='size-5 text-zinc-400' />
        <span className='text-lg text-zinc-400 min-w-40 flex-1'>
          {displayedDate || 'Quando?'}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className='bg-black/60 fixed inset-0 flex items-center justify-center'>
          <div className='rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5'>
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>Selecione a data</h2>
                <button onClick={closeDatePicker}>
                  <X className='size-5 text-zinc-400' />
                </button>
              </div>
            </div>

            <DayPicker
              mode='range'
              selected={eventRange}
              onSelect={setEventRange}
            />
          </div>
        </div>
      )}

      <hr className='line-v' />
      {isInputOpen ? (
        <Button btnColor='secondary' onClick={closeInput}>
          Alterar local/data
          <Settings2 className='size-5' />
        </Button>
      ) : (
        <Button onClick={openInput}>
          Continuar
          <ArrowRight className='size-5' />
        </Button>
      )}
    </div>
  )
}
