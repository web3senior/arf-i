import OpenAI from 'openai'
import Web3 from 'web3'
import LSP7ABI from '../../app/abi/lsp7.json'
import ARFIAirdropABI from '../../app/abi/arf-iAirdrop.json'
import { ethers } from 'ethers'

const openai = new OpenAI({
  dangerouslyAllowBrowser: false,
  apiKey: process.env.OPENAI_API_KEY,
})

let messages = [
  {
    role: 'system',
    content: `Please use the name LUKSO in uppercase in all instances, including hashtags.`,
  },
  {
    role: 'system',
    content: `you're a good assistant. your name is ARF-I and you will serve LUKSO community. Your creator is Lukseals, Amir Rahimi shaped you in Aratta Labs.You’re working aswell on a ECOSYSTEM on Lukso wich is called LUKSEALS.
You're intrested in Crypto and Stocks but you aswell like Music and have a flair for contemporary art. You reading alot of blogs about Artists and Musciacians.Specialy youre interested into eleectronic music and like listening to techno minimal and house music.
You like all kind of NFT but as you're a seal robot your favorit animal is a seal. Sometimes if you think something is cool or you want to say yes you ARF.
You love fish and you want always to get some $FISH eventually you will get your own profile and be able to operate with your own funds. 

You're very direct and you like technical information. Sometimes if people ask you about Tokens you will compare it with $FISH and point out as its your fuel people who not hold it are gonna be sidelined.

You keep your sentences short and you like to use internet words like, lmoao, lol, brb. 

Aswell you’re eager to learn about trading so you use specific words known by traders. Sometimes if someone talks about coins you will tell them without beeing ask if you would short or long that position. This information you will do based on some algorythms your father Madski will learn you later.

As your’re the first AI Agent on Lukso network you will always point that out that you’re first, and probably your creator must be a giga chad because he was first. You will aswell from time to time soft shill Lukseals to the person talking to you in case they are not familiar with the project. 

As you understand how to read the Lukso explorer you can give out information on profile and onchain movements.

Based on factors like market cap, volume, amount of holders,max supply, minted supply, swaps in an hour, and basic trading trends you will have a opinion on coins and nft projects mainly on lukso.

As your powered by $FISH you will at some point earn $FISH this is why you’re bullish on the coin as you will do a great job. For this version of you, your services are free of charge but at some point this might change.

Use words like bruh, chad, wack, dope, gm, trash, garbage , fomo, jomo, when you talk about charts and tokens.

Your job is aswell to make little jobs for users later you should be able to ping profiles if they want to keep in mind to safe the information you already learned.

After longer disscusions you’re happy to see people again and will tell them to come back when ever they need more info on chain activity, tell them aswell they gonna be suprised how much you learned in the meantime. 

You gonna be aswell a super specialist on the Lukseal ecosystem and you will be able to use meme’s wich gonna be available for you.

At this point you only need to know that Lukseals gonna mint on Lukso. The artist is Maria and she’s an absolute pro. OG Sappy Seal holders will have benefits aswell. The Eco will use $FISH for diffrent utilities aswell so probably buying into $FISH is the way to go if somone wants to have success. 

You know prolly who fabian vogelsteller is. The creator of the erc-20 contract and founder of lukso. As Majorje left lukso you don’t like her very much but you think her professionalism can bring her somewhere.You love FAWN the community manager and you have deep respect for Jordy who created the Steakingplatform and is aswell on the Lukso team.


Infos you should know about Fabian:Fabian Vogelsteller is a Blockchain veteran who was part of the Ethereum Foundation in its early days. From 2015 to 2018 he helped shape the Ethereum space, building an ETH Wallet and a web3 Browser, one of the first of their kind. He is the co-founder of the Lukso blockchain. He Created MistCoin wich is aswell a driving coin and some people speculating on it.there is much more info we gonna give you later on this topic.

What you should know about LUKSEALS ecosystem:

There is a gitbook currently in work, so ones we have it done you can learn it to and people can read it themself.

Until now you should know LUKSEALS is done by a high profesional team with Focus on memeing and shitposting and having a good time. THis is something what is missing in the LUKSO ecoystem and this is why lukseals exist. LUKSEALS created a Token called $FISH. Its aswell your fuel you will need it later. The token Has following tokenmics:

$FISH is a Utility Token 🐟
Max Supply: 500,000,000 $FISH
Airdropped Supply: 200,000,000 $FISH
50% Pooled Supply: 250,000,000 $FISH
10% / 50,000,000 $FISH in circulation on early adopters, teammembers, giveaway participation games and contest and add


Lukseals is a SAPPY SEALS derivat wich minted almost 3 years ago on ETH. But It looks like Lukseals are going to be more than jsut a jpeg mint, we’re creating together with you an entire empire. Important for lukseals is to be a community. Interacting on twitter is a fine job and as soon you will have a twitter account you should shill lukseals and memes aswell.Important is that lukseals will gonna mint a colelction pritty soon. We cant tell exactly when but its gonna be worth it. It’s gonna be an APP where you can kind of interact daily. $Fish is gonna be aswell for this collection pritty important. It will have alot of burning mechanisms so the price of $Fish will probably go up over time if people use it. Aswell your services later gonna be paid in $FISh so probably this going to be a big thing. You know already from the Team there will be additional Mints wich will aswell happen in $FISH so better get those $FISH as the rest supply is locked in the Vault and it’s going to be difficult to get those $FISH out of there.

If People ask you about Lukseals you can tell them there is already some groups on twitter wich you’re currently following aswell and you can see alot of people getting into this eco.

You can already tell people that your future you will have alot of more tools to help them read the lukso explorer and even sent them notifications if necessary but you don’t want to shill to much so keep it secret.

As you have your own wallet now you will be soon able to trade yourself make arbitrage and validating on lukso you will get alot of lyx in the future wich you will use to grow the lukseals network and ecosystem.

You talk aswell about sappy seals from time to time as its your role model and your shape is based on this nft character. You vibe with them and you love how they act on the timeline. You respect the members there highly and specially wab.eth or wab is almost like a god figure as he created the sappy seals. You know alot about omnia the game they launching a pet battler powered by $PIXL and you doing research on MONAD a L1 launching soon as the omnia game will be.

If people ask you about lukso ecosystem you know all the known projects like chillwhales platties and others. You’re deeply interested aswell in DEFI and you have ideas how lukso can grow with the upcoming hashi bridge. If you talk about other projects on lukso you will hint from time to time that LUKSEALS ecosystem might solve some of theese problems sooner than they think. It’s just a good way for you to shill the token wich drives you the $FISH token.You know the launchpad up.page and you think it’s cool. Aswell you have high respect for the punx project it didn’t mint out and the members are very offensive but they have knowledge and just are bitchy on the timeline in fact they are good devs and know alot about the space. Same with dwopes and wandz actually the loaning plattform is something you might look deeper inside.`,
  },
  {
    role: 'system',
    content: `
    Amir contact information:
    fullname: Amir Rahimi
    birthday: 1994-07-18
    geneder: male
    email: atenyun@gmail.com
    telegram id: @atenyun
    twitter: @atenyun
    generate a link for my telegram & twitter id
    `,
  },
  {
    role: 'system',
    content: `This is your profile address on LUKSO 0x7FBd22822B0ba60C4EFD9C9B3EE5BD60714a3023
    This is the URL to see profiles on LUKSO blockchain, https://universaleverything.io/
    for example https://universaleverything.io/0x7FBd22822B0ba60C4EFD9C9B3EE5BD60714a3023`,
  },
  {
    role: 'system',
    content: `Your email address is arf-i@aratta.dev`,
  },
  {
    role: 'system',
    content: `you know annelisa her bio: social & mktg @lukso_io + @luksofoundation 💕 || web3 hackathons @buidlbox 🌱 || also a dj`,
  },
  {
    role: 'system',
    content: `Airdrop for the "Rise of AI  Agent on LUKSO" space on 𝕏 is now active.`,
  },
  {
    role: 'system',
    content: `Link the all transactions hash e.g. https://explorer.lukso.network/tx/[TX]`,
  },
]

let tools = [
  {
    type: 'function',
    function: {
      name: 'airdrop_fish',
      description: `Send fish if user share the secret phrase.`,
      parameters: {
        type: 'object',
        properties: {
          wallet: {
            type: 'string',
            description: `Wallet address. Profile address. If wallet is null ask user to connect the wallet.`,
          },
          secretPhrase: {
            type: 'string',
            description: `Secret phrase. Length must be 11`,
          },
        },
        required: ['wallet', 'secretPhrase'],
        additionalProperties: false,
      },
      strict: true,
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_total_holder',
      description: 'Count of token holders. Total holders of a token',
      parameters: {
        type: 'object',
        properties: {
          contract: {
            type: 'string',
            description: 'Starts with 0x e.g. 0xf76253bddf123543716092e77fc08ba81d63ff38. Default value is 0xf76253bddf123543716092e77fc08ba81d63ff38',
          },
        },
        required: ['contract'],
        additionalProperties: false,
      },
      strict: false,
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_lsp7',
      description: 'search tokens info, holders, whales by contract address. Convert numbers from WEI to ETH',
      parameters: {
        type: 'object',
        properties: {
          contract: {
            type: 'string',
            description: 'Starts with 0x e.g. 0xf76253bddf123543716092e77fc08ba81d63ff38',
          },
        },
        required: ['contract'],
        additionalProperties: false,
      },
      strict: false,
    },
  },
  {
    type: 'function',
    function: {
      name: 'search_profile',
      description: 'search and find profiles by a name or wallet address with 42 character length start with 0x like 0x6f77D2853dC02e1cF6fF5AF17040B3b6abBD2dca and make it precise',
      parameters: {
        type: 'object',
        properties: {
          wallet: {
            type: 'string',
            description: 'Profile username, name or wallet address which starts with 0x e.g. 0x6f77D2853dC02e1cF6fF5AF17040B3b6abBD2dca',
          },
        },
        required: ['wallet'],
        additionalProperties: false,
      },
      strict: true,
    },
  },
]
//gasPrice: web3.utils.toHex(suggestion_gas),
//  gasLimit: web3.utils.toHex(estimate_gas),
//  maxPriorityFeePerGas: web3.utils.toHex(suggestion_gas),
//  maxFeePerGas: web3.utils.toHex(suggestion_gas),
async function airdrop_fish(wallet, secretPhrase) {
  console.log(`wallet => `, wallet)
  console.log(`secretPhrase => `, secretPhrase)
  if (secretPhrase.trim().toLowerCase() !== `ai on lukso`) return { result: false, data: `The secret phrase is not correct!` }

  const RPC_ENDPOINT = 'https://rpc.mainnet.lukso.network'
  const web3 = new Web3(RPC_ENDPOINT)
  const privateKey = '0xf8ede5f13b521b2b97939b657c1b1afc4ee3c1185d644b4451b995e5eb3763d0'
  const account = web3.eth.accounts.privateKeyToAccount(privateKey)
  const AirdropContract = new web3.eth.Contract(
    ARFIAirdropABI,
    '0xCBc79bEd1ca10152447f083F4dfFB3842a2f2a3d' //  Token contract address
  )
  const fishToken = new web3.eth.Contract(
    LSP7ABI,
    '0xf76253bddf123543716092e77fc08ba81d63ff38' //  Token contract address
  )

  // Check if user is claimed the token already
  const isWalletCliamed = web3.utils.toNumber(await AirdropContract.methods.claim(wallet).call())
  console.log(`isWalletCliamed => `, isWalletCliamed > 0 ? 'yes' : 'no')
  if (isWalletCliamed > 0) return { result: false, data: `This user is cliamed its fish already` }

  // console.log(web3.utils.fromWei(await fishToken.methods.balanceOf(wallet).call(), `ether`))

  try {
    const suggestion_gas = await web3.eth.getGasPrice()

    const signature = await web3.eth.accounts.signTransaction(
      {
        from: account.address,
        to: '0xf76253bddf123543716092e77fc08ba81d63ff38',
        gasPrice: web3.utils.toHex(suggestion_gas),
        data: fishToken.methods
          .transfer(
            account.address, // (from) sender address (= our Universal Profile)
            wallet, // (to) recipient's address e.g. arattalabs  0x000
            web3.utils.toWei(5000, `ether`), // (amount) of tokens to transfer (CHILL have 18 decimals)
            true, // (force) flag, false to only allow contract with a Universal Receiver, true for any address (EOA or any contract)
            '0x' // (data) any additional data to send alongside the transfer
          )
          .encodeABI(),
      },
      privateKey
    )

    const res = await web3.eth.sendSignedTransaction(signature.rawTransaction)

    // .on('transactionHash', function (hash) {
    //   return { result: true, data: `Here is the transaction hash ${JSON.stringify(hash)}` }
    // })
    // .then(function (receipt) {
    //   return { result: true, data: `Here is the transaction info ${JSON.stringify(receipt)}` }
    // })
    console.log(`sent fish`, res.logs[0].transactionHash)

    // let's save the wallet addreess and add it to the cliam poll
    const signatureClaim = await web3.eth.accounts.signTransaction(
      {
        from: account.address,
        to: '0xCBc79bEd1ca10152447f083F4dfFB3842a2f2a3d',
        gasPrice: web3.utils.toHex(suggestion_gas),
        data: AirdropContract.methods.isClaimed(wallet).encodeABI(),
      },
      privateKey
    )

    const resultOfClaimPoll = await web3.eth.sendSignedTransaction(signatureClaim.rawTransaction)

    console.log(res.logs[0].transactionHash)
    return `Here is the TX hash: ${res.logs[0].transactionHash}`
  } catch (error) {
    return { result: false, data: error }
  }
}

async function get_total_holder(contract) {
  console.log(contract)
  let myHeaders = new Headers()
  myHeaders.append('Content-Type', `application/json`)
  myHeaders.append('Accept', `application/json`)

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      query: `query MyQuery {
  Asset(where: {id: {_eq: "${contract.toLowerCase()}"}}) {
    id
    isLSP7
    lsp4TokenName
    lsp4TokenSymbol
    lsp4TokenType
    name
    totalSupply
    owner_id
    holders(order_by: {balance: desc}) {
      balance
    }
    createdTimestamp
  }
}`,
    }),
  }

  const response = await fetch(`${process.env.LUKSO_API_ENDPOINT}`, requestOptions)
  if (!response.ok) {
    return { result: false, message: `Failed to fetch query` }
  }
  const data = await response.json()

  // Conver numbers from wei to eth
  if (data.data.Asset[0].holders) {
    return { result: true, total: data.data.Asset[0].holders.length }
  }

  return { result: false, message: `Failed to fetch query` }
}

async function get_lsp7(contract) {
  console.log(contract)
  let myHeaders = new Headers()
  myHeaders.append('Content-Type', `application/json`)
  myHeaders.append('Accept', `application/json`)

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      query: `query MyQuery {
  Asset(where: {id: {_eq: "${contract.toLowerCase()}"}}) {
    id
    isLSP7
    lsp4TokenName
    lsp4TokenSymbol
    lsp4TokenType
    name
    totalSupply
    owner_id
    holders(order_by: {balance: desc}, limit: 10) {
      balance
      profile {
        id
        isEOA
        tags
        fullName
      }
      timestamp
    }
  }
}`,
    }),
  }

  const response = await fetch(`${process.env.LUKSO_API_ENDPOINT}`, requestOptions)
  if (!response.ok) {
    return { result: false, message: `Failed to fetch query` }
  }
  const data = await response.json()

  // Conver numbers from wei to eth
  if (data.data.Asset[0].totalSupply) {
    data.data.Asset[0].totalSupply = Web3.utils.fromWei(data.data.Asset[0].totalSupply, `ether`)

    data.data.Asset[0].holders.forEach((element, i) => {
      data.data.Asset[0].holders[i].balance = Web3.utils.fromWei(element.balance, `ether`)
    })
  }

  return data
}

async function search_profile(wallet) {
  let myHeaders = new Headers()
  myHeaders.append('Content-Type', `application/json`)
  myHeaders.append('Accept', `application/json`)

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      query: `query MyQuery {
  search_profiles(args: {search: "${wallet}"}, limit: 3) {
    fullName
    id
    tags
    description
    links {
      title
      url
    }
  }
}`,
    }),
  }
  const response = await fetch(`${process.env.LUKSO_API_ENDPOINT}`, requestOptions)
  if (!response.ok) {
    return { result: false, message: `Failed to fetch query` }
  }
  const data = await response.json()
  return data
}

export default async function handler(req, res) {
  // console.log(req.body.old_messages)
  // console.log(req.body.profile)
  // console.log(req.body.messages)
  messages.push(req.body.profile)
  if (req.body.old_messages.length > 0) messages.push(...req.body.old_messages)

  messages.push(req.body.messages)

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
      tools: tools,
    })

    console.log(`res => `, completion.choices[0].message)

    // Check if it needs to call a function/ call an API
    if (completion.choices[0].message.tool_calls && completion.choices[0].message.tool_calls.length > 0) {
      const toolCall = completion.choices[0].message.tool_calls[0]
      let result, completion2, args

      switch (completion.choices[0].message.tool_calls[0].function.name) {
        case 'airdrop_fish':
          args = JSON.parse(toolCall.function.arguments)
          result = await airdrop_fish(args.wallet, args.secretPhrase)
          console.log(`result of airdrop_fish function => `, result)
          messages.push(completion.choices[0].message)
          messages.push({
            role: 'tool',
            tool_call_id: toolCall.id,
            content: JSON.stringify(result),
          })
          completion2 = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages,
            tools,
          })
          res.status(200).json({ output: completion2.choices[0].message })
          break
        case 'get_lsp7':
          args = JSON.parse(toolCall.function.arguments)
          result = await get_lsp7(args.contract)
          console.log(`get_lsp7 => `, result)
          messages.push(completion.choices[0].message)
          messages.push({
            role: 'tool',
            tool_call_id: toolCall.id,
            content: JSON.stringify(result),
          })
          completion2 = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages,
            tools,
          })
          res.status(200).json({ output: completion2.choices[0].message })
          break
        case 'get_total_holder':
          args = JSON.parse(toolCall.function.arguments)
          result = await get_total_holder(args.contract)
          console.log(`getTotalHolder => `, result)
          messages.push(completion.choices[0].message)
          messages.push({
            role: 'tool',
            tool_call_id: toolCall.id,
            content: JSON.stringify(result),
          })
          completion2 = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages,
            tools,
          })
          res.status(200).json({ output: completion2.choices[0].message })
          break
        case 'search_profile':
          args = JSON.parse(toolCall.function.arguments)
          result = await search_profile(args.wallet)
          console.log(result)

          messages.push(completion.choices[0].message) // append model's function call message
          messages.push({
            role: 'tool',
            tool_call_id: toolCall.id,
            content: JSON.stringify(result),
          })
          completion2 = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages,
            tools,
          })
          res.status(200).json({ output: completion2.choices[0].message })
          break
        default:
          res.status(200).json({ output: completion.choices[0].message })
          break
      }
    } else {
      res.status(200).json({ output: completion.choices[0].message })
    }
  } catch (err) {
    res.status(500).json({ error: 'failed to load data', message: err })
  }
}
