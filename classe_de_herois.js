class Heroi {
    constructor(nome, idade, tipo) {
        this._nome = nome;
        this._idade = idade;
        this._tipo = tipo;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get idade() {
        return this._idade;
    }

    set idade(idade) {
        this._idade = idade;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(tipo) {
        this._tipo = tipo;
    }

    Ataque() {
        let ataqueDescricao;

        switch (this._tipo.toLowerCase()) {
            case 'mago':
                ataqueDescricao = 'usou magia';
                break;
            case 'guerreiro':
                ataqueDescricao = 'usou espada';
                break;
            case 'monge':
                ataqueDescricao = 'usou artes marciais';
                break;
            case 'ninja':
                ataqueDescricao = 'usou shuriken';
                break;
            default:
                ataqueDescricao = 'usou um ataque indefinido';
        }

        return `O ${this._tipo} atacou usando ${ataqueDescricao}`;
    }
}

// Exemplo de uso:
const mago = new Heroi('Merlin', 100, 'Mago');
console.log(mago.Ataque()); // Retorna "O Mago atacou usando magia"

const guerreiro = new Heroi('Conan', 30, 'Guerreiro');
console.log(guerreiro.Ataque()); // Retorna "O Guerreiro atacou usando espada"
