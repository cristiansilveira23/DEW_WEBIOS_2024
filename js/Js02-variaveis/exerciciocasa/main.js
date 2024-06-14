// Classe Jogador
class Jogador {
    constructor(nome, numero, posicao) {
      this.nome = nome;
      this.numero = numero;
      this.posicao = posicao;
      this.gols = 0;
    }
  
    marcarGol() {
      this.gols++;
      console.log(`${this.nome} marcou um gol!`);
    }
  }
  
  // Classe Time
  class Time {
    constructor(nome) {
      this.nome = nome;
      this.jogadores = [];
      this.gols = 0;
    }
  
    addJogador(jogador) {
      this.jogadores.push(jogador);
    }
  
    marcarGol(jogador) {
      jogador.marcarGol();
      this.gols++;
    }
  }
  
  // Criar times e jogadores
  const timeA = new Time("Time A");
  const timeB = new Time("Time B");
  
  const jogador1 = new Jogador("Jogador 1", 10, "Atacante");
  const jogador2 = new Jogador("Jogador 2", 7, "Meio-campo");
  const jogador3 = new Jogador("Jogador 3", 9, "Defensor");
  
  timeA.addJogador(jogador1);
  timeA.addJogador(jogador2);
  timeB.addJogador(jogador3);
  
  // Simular jogo
  console.log("Início do jogo!");
  console.log(`Time A: ${timeA.nome} x Time B: ${timeB.nome}`);
  
  for (let i = 0; i < 90; i++) {
    // Simular jogada
    const jogada = Math.random() < 0.5 ? timeA : timeB;
    const jogador = jogada.jogadores[Math.floor(Math.random() * jogada.jogadores.length)];
  
    // Marcar gol
    if (Math.random() < 0.2) {
      jogada.marcarGol(jogador);
    }
  
    // Exibir placar
    console.log(`Placar: ${timeA.gols} x ${timeB.gols}`);
  }
  
  console.log("Fim do jogo!");
  console.log(`Placar final: ${timeA.gols} x ${timeB.gols}`);
