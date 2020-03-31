module.exports = {
    part1 : "<!DOCTYPE html> <html lang='en'> <head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><meta http-equiv='X-UA-Compatible' content='ie=edge'><title>Copiar HTML</title></head><body>Olá ",
    part2: ", <br>Você solicitou sua senha por esquecimento.<br>Aqui está o token para atulizar sua senha, copie e cole no app onde solicitado:<br><input type='text' id='tokenArea' readonly><button onclick='selection(tokenArea)'>Copiar</button><script>function selection(obj){obj.select();document.execCommand('copy');};function init(str){const el = document.getElementById('tokenArea');el.value = str;return el;};var tokenArea = init('",
    part3: "');</script></body></html>"
};