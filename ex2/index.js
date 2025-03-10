criarTabuleiroXadrez(8);

function criarTabuleiroXadrez(n) {
    let tabuleiro = "";
    for (let i = 0; i < n; i++) {
        let linha = "";
        for (let j = 0; j < n; j++) {
            if ((i + j) % 2 === 0) {
                linha += "  ";
            } else {
                linha += "#";
            }
        }
        tabuleiro += linha + "\n";
    }
    console.log(tabuleiro);
}