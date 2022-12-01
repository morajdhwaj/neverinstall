import Head from 'next/head'
import Image from 'next/image'
import BannerPage from '../components/HomePage/BannerPage'
import BrowserPage from '../components/HomePage/BrowserPage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='max-w-6xl m-auto '>
      <BannerPage/>
      <BrowserPage/>

    </div>

  )
}
