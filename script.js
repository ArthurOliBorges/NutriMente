function enviarMsg() {
  const input = document.getElementById("msgInput");
  const texto = input.value.trim();
  if (texto === "") return;

  const chat = document.getElementById("chatBody");

  // mensagem do usuário
  const msgUser = document.createElement("div");
  msgUser.className = "msg user";
  msgUser.textContent = texto;
  chat.appendChild(msgUser);

  // limpa input
  input.value = "";

  // scroll vai para baixo automaticamente
  chat.scrollTop = chat.scrollHeight;

  // resposta automática
  setTimeout(() => {
    const msgBot = document.createElement("div");
    msgBot.className = "msg";
    msgBot.textContent = "  Olá! Já estamos verificando.";
    chat.appendChild(msgBot);
    chat.scrollTop = chat.scrollHeight;
  }, 600);
}
