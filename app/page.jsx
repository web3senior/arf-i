'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Markdown from 'react-markdown'
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

  useEffect(() => {}, [])

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <div>
            <b>
              {process.env.NEXT_PUBLIC_NAME} <small className={`text-danger`}>BETA</small>
            </b>
            <small>Powered by $FISH</small>
          </div>
          <Image aria-hidden src="/icon-arrow-down.svg" alt="Globe icon" width={16} height={16} />
        </div>

        <div>
          <a href={`https://universalswaps.io/tokens/lukso/0xf76253Bddf123543716092E77FC08Ba81D63Ff38`} target="_blank" rel="noopener noreferrer">
            Swap $FISH
          </a>
          <Image aria-hidden src="/logo.svg" alt="Globe icon" width={32} height={32} />
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
