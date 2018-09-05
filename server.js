const Discord = require("discord.js");
const  client = new Discord.Client();
const datos = require("./datos.json")
let prefix = datos.prefix
client.on("ready", () => {
   console.log("Encendido");
});
client.on("message", (message) => {
if(message.content.startsWith("Arturo")){
    message.channel.send("ctmare")
}
if(message.content.startsWith(prefix+"help")){
    message.channel.send("te hemos enviado el mensaje")
}
});
client.login(datos.token);