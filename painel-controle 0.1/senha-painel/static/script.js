
    // ================================
    // 🕒 RELÓGIO EM TEMPO REAL
    // ================================
    function atualizarRelogio() {
        const agora = new Date();
        const horas = agora.getHours().toString().padStart(2, '0');
        const minutos = agora.getMinutes().toString().padStart(2, '0');
        const segundos = agora.getSeconds().toString().padStart(2, '0');
        const horaFormatada = `${horas}:${minutos}:${segundos}`;
        document.querySelector('.relogio').textContent = horaFormatada;
    }
    setInterval(atualizarRelogio, 1000);
    atualizarRelogio();

    // ================================
    // 🔊 CONTROLE DO SOM
    // ================================
    const beep = document.getElementById('beep-som');

    // ================================
    // 🔁 CONTROLE DAS SENHAS
    // ================================
    const senhaAtual = document.getElementById('senha');
    const listaSenhas = document.getElementById('lista-senhas');

    let contadorN = 0;
    let contadorP = 0;
    let senhasChamadas = [];

    function tocarSom() {
        if (beep) {
            beep.currentTime = 0;
            beep.play();
        }
    }

    function chamarSenha(tipo) {
        let novaSenha = '';

        if (tipo === 'N') {
            contadorN++;
            novaSenha = 'N' + contadorN.toString().padStart(3, '0');
        } else if (tipo === 'P') {
            contadorP++;
            novaSenha = 'P' + contadorP.toString().padStart(3, '0');
        }

        senhaAtual.textContent = novaSenha;

        senhasChamadas.unshift(novaSenha);
        const ultimas = senhasChamadas.slice(1, 6);
        listaSenhas.innerHTML = '';

        ultimas.forEach(s => {
            const li = document.createElement('li');
            li.textContent = s;
            listaSenhas.appendChild(li);
        });

        tocarSom();
    }

    function resetarSenhas() {
        contadorN = 0;
        contadorP = 0;
        senhasChamadas = [];
        senhaAtual.textContent = 'N000';
        listaSenhas.innerHTML = '';
    }

    // ================================
    // ⌨️ EVENTOS DO TECLADO
    // N = chama Normal
    // P = chama Prioritário
    // R = resetar
    // ================================
    document.addEventListener('keydown', function(event) {
        const tecla = event.key.toUpperCase();

        if (tecla === 'N') {
            chamarSenha('N');
        } else if (tecla === 'P') {
            chamarSenha('P');
        } else if (tecla === 'R') {
            resetarSenhas();
        }
    });

