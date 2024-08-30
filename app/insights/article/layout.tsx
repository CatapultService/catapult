'use client'
export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='min-h-screen w-full'>
          <main className='flex grow'>{children}</main>
        </div>
  )
}