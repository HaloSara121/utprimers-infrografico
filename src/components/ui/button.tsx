import { cn } from '@/lib/utils'

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, ...rest }) => {
  return (
    <button
      className={cn(
        'h-12 w-40 rounded-md bg-emerald-500 font-medium hover:bg-emerald-500/80',
        className,
      )}
      {...rest}
    />
  )
}
