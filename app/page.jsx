'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './page.module.scss'

export default function Home() {
  const sendMessage = () => {
    console.log(`Sending message...`)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "messages": [
        {
          "role": "system",
          "content": "you're a good assistant. in the end mention about Aratta Labs"
        },
        {
          "role": "user",
          "content": "Which wallets are currently holding $FISH?"
        }
      ],
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "get_fish_holders",
            "description": "Getting wallets that currently holding $FISH token",
            "parameters": {},
            "strict": false
          }
        }
      ]
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("https://arf-i.vercel.app/api/openai", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p>
            <b>{process.env.NEXT_PUBLIC_NAME}</b>
            <br />
            <small>Powered by $FISH</small>
          </p>
          <Image aria-hidden src="/icon-arrow-down.svg" alt="Globe icon" width={16} height={16} />
        </div>

        <div>
          <a href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
            Swap $FISH
          </a>
          <Image aria-hidden src="/logo.svg" alt="Globe icon" width={48} height={48} />
        </div>
      </header>
      <main className={styles.main}>
        <Image className={styles.logo} src="/arfi.png" alt="Next.js logo" width={363} height={363} priority />
        <h1>Hi there</h1>

        <div className={styles.form}>
          <a className={styles.primary} href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
            <Image className={styles.logo} src="/logo.svg" alt="Vercel logomark" width={20} height={20} />
            Deploy now
          </a>
          <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer" className={styles.secondary}>
            Read our docs
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <input type={`text`} placeholder={`Ask ${process.env.NEXT_PUBLIC_NAME}`} />
        <button onClick={(e) => sendMessage(e)}>
          <Image aria-hidden src="/icon-send.svg" alt="File icon" width={24} height={24} />
        </button>
      </footer>
    </div>
  )
}
