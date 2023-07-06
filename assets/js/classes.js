// ideia por cima do projeto, terão um guerreiro(warrior), um mago(wizard), um goblin e um gigante(giant), eles tem caracteristicas em comum todos tem que ter uma barra de vida mas cada um com o seu maximo de vida e é preciso saber com quanto de vida que cada um esta na hora da luta, tem que ter o nome, e terão medidas de forca e defesa diferentes um dos outros.

class Character {

    _life = 1;
    fullLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Warrior extends Character {
    constructor(name) {
        super(name)
        this.life = 120;
        this.fullLife = this.life;
        this.attack = 10;
        this.defense = 5;
    }
}

class Wizard extends Character {
    constructor(name) {
        super(name)
        this.life = 100;
        this.fullLife = this.life;
        this.attack = 15;
        this.defense = 4;
    }
}

class Goblin extends Character {
    constructor() {
        super('Goblin');
        this.life = 80;
        this.fullLife = this.life;
        this.attack = 5;
        this.defense = 6;
    }
}

class Giant extends Character {
    constructor() {
        super('Gigante');
        this.life = 130;
        this.fullLife = this.life;
        this.attack = 20;
        this.defense = 1;
    }
}

class Stage {
    constructor(f1, f2, f1El, f2El, logObj) {
        this.f1 = f1;
        this.f2 = f2;
        this.f1El = f1El;
        this.f2El = f2El;
        this.log = logObj;
    }

    start() {
        this.update()

        this.f1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.f1, this.f2))
        this.f2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.f2, this.f1))
    }

    update() {
        // fighter 1
        this.f1El.querySelector('.name').innerHTML = `${this.f1.name} - ${this.f1.life.toFixed(1)} HP`;
        let f1pct = (this.f1.life / this.f1.fullLife) * 100;
        this.f1El.querySelector('.bar').style.width = `${f1pct}%`;

        // fighter 2
        this.f2El.querySelector('.name').innerHTML = `${this.f2.name} - ${this.f2.life.toFixed(1)} HP`;
        let f2pct = (this.f2.life / this.f2.fullLife) * 100;
        this.f2El.querySelector('.bar').style.width = `${f2pct}%`;
    }

    doAttack(attacking, attacked) {
        if(attacking.life <= 0) {
            alert(`${attacking.name} morreu`);
            return;
        }else if(attacked.life <= 0) {
            alert(`${attacked.name} morreu`)
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            this.log.addMsg(`${attacking.name} deu ${actualAttack} de dano em ${attacked.name}`)
        }else {
            this.log.addMsg(`${attacked.name} conseguiu defender`)
        }






        this.update();
    }
}

class Log {
    list = [];

    constructor(listEl) {
        this.listEl = listEl;
    }

    addMsg(msg) {
        this.list.push(msg);
        this.render()
    }

    render() {
        this.listEl.innerHTML = '';

        for(let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}