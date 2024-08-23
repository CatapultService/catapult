'use client'
export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='min-h-screen w-full'>
          {/* <Navbar /> */}
          <main className='flex grow'>{children}</main>
        </div>
  )
}