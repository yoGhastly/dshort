import { classes } from "../lib/classes";

export function cn(...args: string[]) {
  return args.filter(Boolean).join(" ");
}

export const Hero: React.FC = () => {
  return (
    <div className="container relative z-2">

      <h1 className={cn(
        'text-[48px] font-semibold',
        'sm:mb-4 sm:text-[72px]',
        'md:mx-auto lg:text-[96px]'
      )}>Welcome to {' '}
        <span className={cn(
          'bg-clip-text text-transparent',
          'after:content-[""]',
          'bg-gradient-to-r from-indigo-600 to-red-500')}>
          Dshort!</span>
      </h1>
      <h2 className={cn('mb-6 text-[20px] text-gray-700')}>Shorten your links with ease.</h2>
    </div>
  )
}
