// Relógio
function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');
  document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Controle de senha
let contadorN = 0;
let contadorP = 0;

function chamarSenha(tipo) {
  if (tipo === 'N') {
    contadorN++;
    atualizarSenha(`N${contadorN.toString().padStart(3, '0')}`);
  } else if (tipo === 'P') {
    contadorP++;
    atualizarSenha(`P${contadorP.toString().padStart(3, '0')}`);
  }
}

function atualizarSenha(senha) {
  document.getElementById('senha').textContent = senha;
  const lista = document.getElementById('lista-senhas');
  const li = document.createElement('li');
  li.textContent = senha;
  lista.prepend(li);
  if (lista.children.length > 5) {
    lista.removeChild(lista.lastChild);
  }
}

// Teclado: pressionar "N" ou "P"
document.addEventListener('keydown', (e) => {
  const tecla = e.key.toUpperCase();
  if (tecla === 'N' || tecla === 'P') {
    chamarSenha(tecla);
  }
});

// Modo Dark/Light
const toggleButton = document.getElementById('toggle-theme');
const iconTema = document.getElementById('icon-tema');
const body = document.body;

function atualizarIcone() {
  iconTema.textContent = body.classList.contains('dark') ? '🌞' : '🌙';
}

const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'dark') {
  body.classList.add('dark');
}
atualizarIcone();

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('tema', body.classList.contains('dark') ? 'dark' : 'light');
  atualizarIcone();
});
