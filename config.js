const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255618211989";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255618211989";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_22_09_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MixcbiAgICAgICAgMTczLFxuICAgICAgICAxODUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyLFxuICAgICAgICA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDY4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDkxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICAzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDQyLFxuICAgICAgICA2MixcbiAgICAgICAgNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDM3LFxuICAgICAgICA4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVUMGpmdStjM1A3RVNHNSt1UlU4YUpwYWdjeGtmTm1Vb3FzYWRxTjNQRnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdtOFptWHdQUjdhbW9rbFNxbHIyUVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTQxZjMzODItN2FiNi00MjBjLTk1ZGYtNGNjOGI1YWFkMzNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICAyMzMsXG4gICAgICAyMTQsXG4gICAgICAxMjIsXG4gICAgICA3OSxcbiAgICAgIDE5NSxcbiAgICAgIDQ0LFxuICAgICAgMjQ4LFxuICAgICAgMTg2LFxuICAgICAgNDgsXG4gICAgICAxNjMsXG4gICAgICA2MSxcbiAgICAgIDE5MSxcbiAgICAgIDY2LFxuICAgICAgMTk3LFxuICAgICAgMTc4LFxuICAgICAgNDgsXG4gICAgICAxODksXG4gICAgICA3MyxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgMjU0LFxuICAgICAgNjUsXG4gICAgICAxMjEsXG4gICAgICAzNixcbiAgICAgIDEwMyxcbiAgICAgIDEyMixcbiAgICAgIDE3LFxuICAgICAgMTk2LFxuICAgICAgMTE0LFxuICAgICAgNDAsXG4gICAgICAyMDksXG4gICAgICAxMDgsXG4gICAgICA1MixcbiAgICAgIDc2LFxuICAgICAgMjIzLFxuICAgICAgMjMsXG4gICAgICAxOTIsXG4gICAgICAyMjcsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUWTlNQUtNUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjE4MjExOTg5OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTc2OTAyMTA4NDg5NDY6MzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTStDb1pRQ0VQMjZsTGNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxY0llSUdZNzd3UmpoRjRTVkZGeGVScWtuclAzTDVDdFlmdEdjVGxXZ0JJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVXK0NhZUlFNVd1WXBqTzc0NHp6aUZ4NEhJWmR5Zys1T3JRU0ZBR0hCZUE4NjdmN2dQSUN6aGswbGM5a3d0aWRWd0FuOFU5Zm04Y1VudmxydEVnTUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdLWE9JTjdXME1JOG10WDJOSmFNSVRoK2lvTTJxUDVWZzZTb0U0QlFKenkwdGJyQXVNWmFkcHR0UlVWQnNnVVg5c29pcVdocERBb1pWZ2JKMnhqeWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYxODIxMTk4OTozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYyOTEzMjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFdGpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUV0ai5qc29uIjogIntcImtleURhdGFcIjpcIk1EVmNVSzltdEhTcXFpM3F6YzZQYWpBcGdGaW5CVlN6b3B6Vnd6L0pQb3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTc5MzU0OTU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjYwNjI0NTM5ODZcIn0iCn0="  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
