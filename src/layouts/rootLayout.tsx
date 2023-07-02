import Sidebar from './sidebar/Sidebar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RootLayout = ({children}:any) => {
  return (
    <div className='flex gap-5'>
        <Sidebar />
        <main className='max-w-5xl flex-1 mx-auto py-4'>{children}</main>
    </div>
  )
}

export default RootLayout;