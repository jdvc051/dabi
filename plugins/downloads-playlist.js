
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `Que esta buscado? ingrese el nombre del tema Ingresa\nEjemplo*\n*${usedPrefix + command}* bad bunny `
    m.react('π')
    let result = await yts(text)
    let ytres = result.all
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}β ${v.title}`, [
          ['β’ β’ β’γ ππ€πππ γβ’ β’ β’', `${usedPrefix}fgmp3 ${v.url}`, `πΈοΈπ *TΓ­tulo* : ${v.title}\nπΈοΈβ *DuraciΓ³n:* ${v.timestamp}\nπΈοΈπ *Vistas:* ${v.views}\nπΈοΈπ *Publicado:* ${v.ago}\n`],
          ['β’ β’ β’γ π₯ππππ γβ’ β’ β’', `${usedPrefix}fgmp4 ${v.url}`, `πΈοΈπ *TΓ­tulo* : ${v.title}\nπΈοΈβ *DuraciΓ³n:* ${v.timestamp}\nπΈοΈπ *Vistas:* ${v.views}\nπΈοΈπ *Publicado:* ${v.ago}\n`],
          ['β’ β’ β’γ ππππ€ππππ£ππ’ ππβΈ γβ’ β’ β’', `${usedPrefix}ytadoc ${v.url}`, `πΈοΈπ *TΓ­tulo* : ${v.title}\nπΈοΈβ *DuraciΓ³n:* ${v.timestamp}\nπΈοΈπ *Vistas:* ${v.views}\nπΈοΈπ *Publicado:* ${v.ago}\n`],
        ['β’ β’ β’γ ππππ€ππππ£ππ’ ππβΉ γβ’ β’ β’', `${usedPrefix}ytvdoc ${v.url}`, `πΈοΈπ *TΓ­tulo* : ${v.title}\nπΈοΈβ *DuraciΓ³n:* ${v.timestamp}\nπΈοΈπ *Vistas:* ${v.views}\nπΈοΈπ *Publicado:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, 'β­βγ *Κα΄sα΄α΄α΄α΄ π* γββ±-\nβ~~β’β’~~β’β’~~β’β’~~β’β’~~~~', `β π α΄Η«α΄Ιͺ α΄Ι΄α΄ ΚΙͺsα΄α΄ α΄α΄ Κα΄sα΄Κα΄α΄α΄α΄s α΄α΄: *${text}*\nβ°ββββββββββββββββ\nα΄ΚΙͺα΄α΄ α΄ α΄Ι΄α΄ α΄α΄α΄Ιͺα΄Ι΄ Κ α΄Κα΄sΙͺα΄Ι΄α΄ α΄Ι΄α΄ Ιͺα΄Κ`, lb, `β¦ πππππππΌπΏππ β¦`, listSections, m)
}
handler.help = ['play2']
handler.tags = ['downloader']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 

export default handler