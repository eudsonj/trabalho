const usuarios = [
    { nome: "Sofia", tem: ["005", "020", "100"], precisa: ["001", "010"] },
    { nome: "Bruno", tem: ["010", "030"], precisa: ["005", "100"] }
  ];
  
  function adicionar(tipo) {
    const input = document.getElementById(tipo === "tem" ? "input-tem" : "input-preciso");
    const lista = document.getElementById(tipo === "tem" ? "lista-tem" : "lista-preciso");
    
    if (input.value.trim()) {
      const item = document.createElement("li");
      item.textContent = input.value.trim();
      lista.appendChild(item);
      input.value = '';
    }
  }
  
  function buscar() {
    const numero = document.getElementById("buscar").value.trim();
    const resultados = document.getElementById("resultado-busca");
    resultados.innerHTML = '';
  
    if (!numero) return;
  
    const encontrados = usuarios.filter(u => u.tem.includes(numero));
    encontrados.length
      ? encontrados.forEach(u => {
          const li = document.createElement("li");
          li.textContent = `${u.nome} tem a figurinha ${numero}`;
          resultados.appendChild(li);
        })
      : resultados.innerHTML = `<li>Ninguém tem a figurinha ${numero} ainda</li>`;
  
    document.getElementById("buscar").value = '';
  }
  