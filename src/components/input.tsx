import { cn } from './hero'

export const Input = ({ type, value = '', onClick }: { type: string, value: string, onClick: () => void }) => {
  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      className={cn('py-2.5 px-5 mr-2 mb-2',
        'text-sm font-semibold',
        'focus:outline-none cursor-pointer',
        'rounded-full border border-indigo-600',
        'hover:bg-gray-100 hover:text-blue-700',
        'focus:z-10 focus:ring-4 focus:ring-gray-200',
      )}
    />
  );
}
