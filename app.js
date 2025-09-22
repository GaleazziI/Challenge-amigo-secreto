let amigos = [];

const adicionarAmigo = () => {
    const nome = document.querySelector("#amigo").value.trim();

    if (!nome) {
        alert("Por favor, insira um nome válido!");
        return;
    }

    amigos = [...amigos, nome];''

    renderizarLista();
    document.querySelector("#amigo").value = "";
};

const renderizarLista = () => {
    const lista = document.querySelector("#listaAmigos");
    lista.textContent = "";

    for (const nome of amigos) {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.append(item);
    }
};

const sortearAmigo = () => {
    if (!amigos.length) {
        alert("Adicione pelo menos um nome para realizar o sorteio!");
        return;
    }

    const sorteado = amigos.at(Math.floor(Math.random() * amigos.length));

    document.querySelector("#resultado").innerHTML =
        `<li>🎉 O amigo secreto é: <strong>${sorteado}</strong></li>`;
};
