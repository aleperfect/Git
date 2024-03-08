let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*‼️ CUCU INVOCANDO MOCHOS ‼️:* ${pesan}`
let teks = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝚀𝚄𝙴 𝙴𝚂𝙿𝙴𝚁𝙰𝙽 𝙿𝙰𝚁𝙰 𝙰𝙽𝙾𝚃𝙰𝚁𝚂𝙴 𝚄𝙽𝙰 𝚃𝙰𝚁𝙹𝙴𝚃𝙰 𝙳𝙴 𝙸𝙽𝚅𝙸𝚃𝙰𝙲𝙸𝙾́𝙽 𝙾 𝚀𝚄𝙴 𝙼𝙼𝚅𝙶*\n\n🟩 ${oi}\n\n🟩 *@𝕒𝕝𝕖.𝕚𝕫𝕟_𝟚𝟘:*\n`
for (let mem of participants) {
teks += `┊🧧 @${mem.id.split('@')[0]}\n`}
teks += `‼️ 𝐂𝐔𝐂𝐔 𝐁𝐎𝐓 ‼️`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler