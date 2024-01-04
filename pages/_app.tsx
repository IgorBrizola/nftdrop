import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {  ThirdwebProvider } from "@thirdweb-dev/react";
import { metamaskWallet } from "@thirdweb-dev/react";


export default function App({ Component, pageProps }: AppProps) {
  return( 
    <ThirdwebProvider supportedWallets={[metamaskWallet()]}
    activeChain="ethereum" 
    clientId="d5f2f2ec58622525f986b9416638b1cd">

  <Component {...pageProps} />


  </ThirdwebProvider>

  
  )
}
