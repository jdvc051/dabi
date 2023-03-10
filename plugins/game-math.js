let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.math = conn.math ? conn.math : {}
    
    if (args.length < 1) throw `
  ๐งฎ ๐ณ๐๐๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐๐ : 
  
${Object.keys(modes).join(' | ')} 

_๐๐ด๐๐๐๐๐๐ : ${usedPrefix+command} normal_
`.trim()
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) throw `
  ๐งฎ Dificultades disponibles : 
  
 ${Object.keys(modes).join(' | ')}

_๐๐ด๐๐๐๐๐๐ : ${usedPrefix+command} normal_
`.trim()
    
  let id = m.chat
    await conn.sendPresenceUpdate('composing', m.chat)
    if (id in conn.math) return conn.reply(m.chat, 'โ ๏ธ ๐๐๐๐๐๐๐ ๐๐๐ข ๐๐๐๐๐๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐ ๐๐๐๐', conn.math[id][0])
    let math = genMath(mode)
    conn.math[id] = [
        await conn.reply(m.chat, `โโโโโโเณเณโโโโโโ\nโ๐ฒ๐๐ฐ๐ฝ๐๐พ ๐ด๐ *${math.str}* =\nโโคโโโโโ โ. โ .โ โโโโโโฅ\nโ๐๐๐๐๐๐: ${(math.time / 1000).toFixed(2)} ๐๐๐๐๐๐๐\nโโคโโโโโ โ. โ .โ โโโโโโฅ\nโ๐ ๐๐๐๐๐๐๐๐๐๐ : ${math.bonus} XP\nโโโโโ โช โขโโข โซ โโโโโ`, m),
        math, 4,
        setTimeout(() => {
            if (conn.math[id]) conn.reply(m.chat, `โณ ๐๐ ๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐!\n๐ป๐ ๐๐๐๐๐๐๐๐๐ ๐๐: *${math.result}*`, conn.math[id][0])
      delete conn.math[id]
        }, math.time)
    ]
}
handler.help = ['Mates <modo>']
handler.tags = ['game']
handler.command = ['mates', 'mate', 'matemรกticas', 'math'] 

 
let modes = {
    noob: [-3, 3,-3, 3, '+-', 15000, 10],
  fรกcil: [-10, 10, -10, 10, '*/+-', 20000, 40],
  normal: [-40, 40, -20, 20, '*/+-', 40000, 150],
  difรญcil: [-100, 100, -70, 70, '*/+-', 60000, 350],
  extremo: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  imposible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
  imposible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
    '+': '+',
    '-': '-',
    '*': 'ร',
    '/': 'รท'
}

function genMath(mode) {
    let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
    let a = randomInt(a1, a2)
    let b = randomInt(b1, b2)
    let op = pickRandom([...ops])
    let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
    if (op == '/') [a, result] = [result, a]
    return {
        str: `${a} ${operators[op]} ${b}`,
        mode,
        time,
        bonus,
        result
    }
}

function randomInt(from, to) {
    if (from > to) [from, to] = [to, from]
    from = Math.floor(from)
    to = Math.floor(to)
    return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

handler.modes = modes

export default handler
