
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `Que esta buscado? ingrese el nombre del tema\n\nEjemplo *${usedPrefix + command}* ozuna`
	let vid = (await yts(text)).all[0]
	if (!vid) throw `tema no encontrado/ o el serve esta caido intente de nuevo`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('π§')
	let play = `β­ββββͺ~*ββα°±β’β’β’ββ¨ΝΝPΝΝΜΈLΝΜΈAΝΝΜΈYΝΝΜΈβ©ββ’β’β’α°±ββ*~*
ββπ *TΓ­tulo* : ${title}
ββπ *π³π΄ππ²ππΈπΏπ²πΈπΎπ½:* ${description}
ββπ *Publicado:* ${ago}
βββ *DuraciΓ³n:* ${timestamp}
ββπ *Vistas:* ${views}
ββ
ββΒ Β Β Β Β Β Β  *βββββββββββββ%100*
β°ββ’ββββ’β’β’β¦πβ³β¦β’β’β’ββββ’ββ―β€`
 await conn.sendButton(m.chat, play, lb, thumbnail, [
    ['AUDIO', `${usedPrefix}fgmp3 ${url}`],
    ['VIDEO', `${usedPrefix}fgmp4 ${url}`]
  ], m, rpl)
}
handler.help = ['play']
handler.tags = ['downloader']
handler.command = ['play', 'playvid']

handler.register = true
export default handler

