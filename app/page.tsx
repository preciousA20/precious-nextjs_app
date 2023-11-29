import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'



export default function Home() {
  return (
    
    <main className='bg-slate-500 p-4 rounded'>
      <h1 className='bg-orange-700 underline'>How are you, and welcome to my data fetching foundamentals</h1>
      <p>Home Page</p>
      <br />
      <hr />
      <Link className='bg-green-500 p-2 mt-2 rounded-md' href="/login" >login page</Link>
    </main>
  )
}
