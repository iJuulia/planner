import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'px-5 rounded-lg font-medium flex items-center gap-2 justify-center',

  variants: {
    btnColor: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
    },

    btnSize: {
      default: 'py-2',
      full: 'w-full h-11',
    },
  },

  defaultVariants: {
    btnColor: 'primary',
    btnSize: 'default',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function Button({
  children,
  btnColor,
  btnSize,
  ...btnProps
}: ButtonProps) {
  return (
    <button {...btnProps} className={buttonVariants({ btnColor, btnSize })}>
      {children}
    </button>
  )
}
