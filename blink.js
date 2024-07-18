// 依次引入三个库
const { Keypair, Connection, LAMPORTS_PER_SOL,PublicKey,Transaction ,SystemProgram,sendAndConfirmTransaction,VersionedTransaction}  = require("@solana/web3.js")
const base58  = require('bs58').default
const dotenv = require("dotenv").config()
const axios = require("axios")

// 连接到 Devnet
const devConnection = new Connection('https://devnet.helius-rpc.com/?api-key=9fc1bee2-a8b0-4ed5-93f6-a0dfc850013c')
const prdConnection = new Connection('https://api.mainnet-beta.solana.com')

// 我的地址
const add = "地址"
const myPublicKey = new PublicKey(add)
const mySceretKey = "私钥"

//blink地址
const blinkUrl =  "https://proxy.dial.to/?url=https%3A%2F%2Fsolanasummer.click%2Fon%2Fmint"

const getTransaction = (base64EncodeString) =>{
	return VersionedTransaction.deserialize(base64Decode(base64EncodeString))
}

const signTransaction = async (tx, sceretKey) =>{
	try{
		const feePayer = Keypair.fromSecretKey(base58.decode(sceretKey))
		tx.sign([feePayer])
		const txnSignature = await prdConnection.sendRawTransaction(
		      tx.serialize(),
			  {
				  preflightCommitment: "confirmed"
			  }
		);
		console.info("发送成功",txnSignature)
		return txnSignature
	} catch(e){
		console.error("失败",e)
	}
	
}

function base64Decode(str) {
  return stringToUint8Array(atob(str));
}

function stringToUint8Array(str){
  var arr = [];
  for (var i = 0, j = str.length; i < j; ++i) {
    arr.push(str.charCodeAt(i));
  }
 
  var tmpUint8Array = new Uint8Array(arr);
  return tmpUint8Array
}

// const base64String = "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAHEC1zZRQ6L8mrbGRS2mw+w4f4R6O180sAkOlIwaZJK0KcHFQLWdCtO7LEq9LuXAbSLlAe0tuTbwZoenpvlJePjYkN8oc9iQ0i2JZQf6hQXmrQWHiDbHxdwBWPXmr80R6r8Aq0cxgWv9JqiwiwRay/nNqaloEh3gqK7E00q4jMgkik5ykwRC8t7kyZu1ogIGF1b9Y0UqRXcZBArQZhzCSeEu7QiR5c5qILNB+BSbyK5xBxr0oHwliWuzejfbbXu9WVkzi2tdaMzbpPIZkgMIEcedhAxunnb6TTqIxh9Gkt9JJ3lKz6nb/5G77KvQAbEmuNja6FEIKl0rHx7NddozTIECoZLIkzF4m39XD2VtlWMVYSZUkf9SQOE6ubLw8T2kIOQga1UfcDTtRKNcazhMaHWRZOMuxlFxdcIfzVvrIXVz0Zqp8tCb3WHHz4hOze1Fh0DqG0wdHz8kBlXVWRLyTeKRwG3fbh12Whk9nL4UbO63msHLSF7V9bN5E6jPWFfv8AqQan1RcYx3TJKFZjmGkdXraLXrijm0ttXHNVWyEAAAAAirB6YPhh9DJLoFp4P5yU630paUWcpZu9gNfsedPWipUQouIYHEdvFEDB2N5tZhKGfh10G3s7f/PghvEiKcpI0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWUeG4k+0nkePCOFL31RoeoeacZaVqeSBRqOfEZdxCloBCRABCgIDBAUGBwsMAA0CDggPGqFR6t35418UAUBCDwAAAAAApEyCuQAAAAAAAA=="
// const tx = getTransaction(base64String)
// signTransaction(tx,mySceretKey)

const getBliksItem = async (url) =>{
	const data = {
		account: add
	}
	axios.post(url, data).then(res => {
		const txEncode = res.data.transaction
		console.info("服务端消息",res.data.message)
		const tx = getTransaction(txEncode)
		signTransaction(tx,mySceretKey)
	}).catch(e => {
		console.error("请求失败")
	})
}
const fuckTheBlink = ()=>{
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)
	getBliksItem(blinkUrl)

	
}

axios.defaults.timeout = 30000;

setInterval(fuckTheBlink,10000);
