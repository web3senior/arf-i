'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Markdown from 'react-markdown'
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json'
import KeyManagerContract from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json'
// Import the LSP7 ABI
import LSP7DigitalAsset from '@lukso/lsp-smart-contracts/artifacts/LSP7DigitalAsset.json'
import ConnectWallet from './components/ConnectWallet'
import LSP7ABI from './abi/lsp7.json'
import { ethers } from 'ethers'
import { useAuth } from './contexts/AuthContext'
import Web3 from 'web3'
import styles from './page.module.scss'

// export const metadata = {
//   title: 'Acme Dashboard',
//   description: 'The official Next.js Course Dashboard, built with App Router.',
// }

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({ list: [] })
  const [conversation, setConversation] = useState([])
  const inputRef = useRef()
  const auth = useAuth()

  const sendMessage = (e) => {
    e.preventDefault()

    const q = inputRef.current.value
    if (q === '') return

    let newData = data.list
    newData.push({ type: `q`, content: q })
    setData({ list: newData })

    // Reset the form
    e.target.reset()

    window.setTimeout(() => {
      document.querySelector(`output`).scrollTop = document.querySelector(`output`).scrollHeight
    }, 100)

    // Cal the OpenAI
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      profile: {
        role: 'user',
        content: `Here is my profile and wallet address ${JSON.stringify(auth.profile)}`,
      },
      old_messages: conversation,
      messages: {
        role: 'user',
        content: `${q}`,
      },
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }

    // Call OpenAI
    setIsLoading(true)

    fetch('/api/openai', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)

        let newData = data.list
        newData.push({ type: `a`, content: result.output.content })
        setData({ list: newData })

        let newConversationData = conversation
        newConversationData.push(result.output)
        setConversation(newConversationData)
        // console.log(conversation)
        setIsLoading(false)

        window.setTimeout(() => {
          document.querySelector(`output`).scrollTop = document.querySelector(`output`).scrollHeight
        }, 500)
      })
      .catch((error) => console.error(error))
  }

  const handleTestSend = async (e) => {
    const RPC_ENDPOINT = 'https://rpc.testnet.lukso.network'
    const web3 = new Web3(RPC_ENDPOINT)
    const privateKey = '0xf8ede5f13b521b2b97939b657c1b1afc4ee3c1185d644b4451b995e5eb3763d0'
    const account = web3.eth.accounts.privateKeyToAccount(privateKey)
    //const myUniversalProfile = new web3.eth.Contract(UniversalProfile.abi, `0x7FBd22822B0ba60C4EFD9C9B3EE5BD60714a3023`)
    // const keyManagerAddress = await myUniversalProfile.methods.owner().call()
    //const keyManager = new web3.eth.Contract(KeyManagerContract.abi, keyManagerAddress)

    const fishToken = new web3.eth.Contract(
      LSP7ABI,
      '0x39f73b9c8d4e370fd9ff22c932ed58009680aff0' //  Token contract address
    )

    console.log(web3.utils.fromWei(await fishToken.methods.balanceOf(`0xe4dAc493FC79373936AAba777b58ED60A8eF5834`).call(), `ether`))

    const sendAbi = fishToken.methods
      .transfer(
        account.address, // (from) sender address (= our Universal Profile)
        '0xe4dAc493FC79373936AAba777b58ED60A8eF5834', // (to) recipient's address e.g. arattalabs  0x000
        web3.utils.toWei(1, `ether`), // (amount) of tokens to transfer (CHILL have 18 decimals)
        true, // (force) flag, false to only allow contract with a Universal Receiver, true for any address (EOA or any contract)
        '0x' // (data) any additional data to send alongside the transfer
      )
      .encodeABI()

    const signature = await web3.eth.accounts.signTransaction(
      {
        from: account.address, // Operation type: CALL
        to: '0x39f73b9c8d4e370fd9ff22c932ed58009680aff0', // Recipient
        gasPrice: 500000,
        data: sendAbi,
      },
      privateKey
    )

    web3.eth.sendSignedTransaction(signature.rawTransaction).on('receipt', async (res) => {
      console.log(res)
      // const events = await fishToken.getPastEvents('Transfer', { fromBlock: 0, to: 'latest' })
      // console.log(events)
    })
  }

  useEffect(() => {}, [])

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <Image aria-hidden src="/logo.svg" alt="Globe icon" width={48} height={48} />
          <div>
            <b>{process.env.NEXT_PUBLIC_NAME}</b>
            <small>Powered by $FISH</small>
          </div>
          <Image aria-hidden src="/icon-arrow-down.svg" alt="Globe icon" width={16} height={16} />
        </div>

        <div>
          <a className={`${styles.link}`} href={`https://universalswaps.io/tokens/lukso/0xf76253Bddf123543716092E77FC08Ba81D63Ff38`} target="_blank" rel="noopener noreferrer">
            Swap $FISH
          </a>
          <ConnectWallet />
        </div>
      </header>

      <main className={styles.main}>
        {data.list.length === 0 && (
          <>
            <Image className={styles.hero} src="/arfi.png" alt="Next.js logo" width={240} height={240} priority />
            <h1 className={`text-center`}>Hi there</h1>
          </>
        )}

        <output>
          {data.list.length > 0 &&
            data.list.map((item, i) => {
              return (
                <div key={i} className={`${styles.message} ms-motion-slideDownIn`} data-message-type={item.type}>
                  {item.type === `a` && <Image className={styles.logo} src={`/arf-i-pfp.png`} alt="pfp" width={48} height={48} priority />}
                  <div className={`${styles.message__content}`} data-message-type={item.type} id="typewriter">
                    <Markdown>{item.content}</Markdown>
                  </div>
                </div>
              )
            })}

          {isLoading && (
            <>
              <div className={`${styles.message} ms-motion-slideDownIn`} data-message-type={`a`}>
                <Image className={styles.logo} src={`/arf-i-pfp.png`} alt="pfp" width={48} height={48} priority />
                <div className={`${styles.message__content}`} data-message-type={`a`}>
                  <Markdown>Just a sec...</Markdown>
                </div>
              </div>
            </>
          )}
        </output>
      </main>

      <footer className={styles.footer}>
        <form method="POST" onSubmit={(e) => sendMessage(e)}>
          <input ref={inputRef} type={`text`} placeholder={`Ask ${process.env.NEXT_PUBLIC_NAME}`} />
          <button>
            <Image aria-hidden src="/icon-send.svg" alt="File icon" width={18} height={18} />
            <small>send</small>
          </button>
        </form>
      </footer>
    </div>
  )
}
