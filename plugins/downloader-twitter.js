
import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `๐ Ejemplo : \n*${usedPrefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`
          m.react(rwait)    
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
โญโโโโโโโชโซโโโโโโโฎ
โ *TWITTER DL*
โโจ Descripciรณn: ${desc}
โฐโโโโโโโชโซโโโโโโโฏ`
conn.sendFile(m.chat, HD, 'twitter.mp4', te, m)
m.react(done)
} catch (e) {
  	m.reply(`โณ๏ธ verifica que el link sea de Twitter`)
	} 
	
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(twitter|tw)$/i
handler.diamond = true

export default handler
