import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { useRouter } from 'next/router'
import { app } from '../firebase'
import BottomBar from '../components/bottombar'
import TopBar from '../components/topbar'
import ModalLoading from '../components/loadingmodal'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  
  useEffect(() => {
    app.analytics()

    if(!localStorage.getItem('RocketLaunches::Theme')) {
      localStorage.setItem('RocketLaunches::Theme', 'dark')
    }
    if(!localStorage.getItem('RocketLaunches::Measures')) {
      localStorage.setItem('RocketLaunches::Measures', 'metric')
    }
    if(localStorage.getItem('RocketLaunches::Theme') === 'light') {
      document.querySelector('body').classList.add('light')
    }
    document.querySelector('body').classList.remove('dark')
  }, [])

  return (
    <>
      <TopBar />

      <main className="component">
        <Component {...pageProps} />
      </main>
      
      <ModalLoading />
      <BottomBar />
      <GlobalStyle />
    </>
  )
}

export default MyApp