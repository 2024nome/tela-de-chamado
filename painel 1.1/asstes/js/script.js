 let usuarioLogado = false;

    let senhaNormal = 0;
    let senhaPrioridade = 0;
    let historicoNormais = [];
    let historicoPrioridade = [];

    const senhaAtualEl = document.getElementById('senha-atual');
    const listaSenhasEl = document.getElementById('lista-senhas');

    function atualizarDisplay(senha) {
      senhaAtualEl.textContent = senha;
      const li = document.createElement('li');
      li.textContent = senha;
      listaSenhasEl.prepend(li);
    }

    function gerarSenhaNormal() {
      senhaNormal++;
      const senha = `N${String(senhaNormal).padStart(3, '0')}`;
      historicoNormais.push(senha);
      atualizarDisplay(senha);
    }

    function gerarSenhaPrioridade() {
      senhaPrioridade++;
      const senha = `P${String(senhaPrioridade).padStart(3, '0')}`;
      historicoPrioridade.push(senha);
      atualizarDisplay(senha);
    }

    function chamarSenhaAnterior(tipo) {
      let lista = tipo === 'normal' ? historicoNormais : historicoPrioridade;
      if (lista.length > 1) {
        lista.pop(); // Remove a última
        const anterior = lista[lista.length - 1];
        atualizarDisplay(anterior);
      } else {
        alert('Nenhuma senha anterior disponível.');
      }
    }

    function zerarSenhas(tipo) {
      if (tipo === 'normal') {
        senhaNormal = 0;
        historicoNormais = [];
      } else {
        senhaPrioridade = 0;
        historicoPrioridade = [];
      }
      senhaAtualEl.textContent = '---';
      listaSenhasEl.innerHTML = '';
    }

    // Simular login ao clicar no botão
    document.getElementById('btn-login').addEventListener('click', () => {
      usuarioLogado = true;
      alert('Usuário autenticado com sucesso!');
    });

    // Captura das teclas
    document.addEventListener('keydown', (e) => {
      if (!usuarioLogado) {
        console.warn('Ação bloqueada: usuário não autenticado.');
        return;
      }

      switch (e.key.toLowerCase()) {
        case 'n': gerarSenhaNormal(); break;
        case 'p': gerarSenhaPrioridade(); break;
        case 'q': chamarSenhaAnterior('normal'); break;
        case 'w': chamarSenhaAnterior('prioridade'); break;
        case 'a': zerarSenhas('normal'); break;
        case 's': zerarSenhas('prioridade'); break;
      }
    });