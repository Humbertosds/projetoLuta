let warrior = new Warrior('Guerreiro')
let wizard = new Wizard('Mago')
let goblin = new Goblin()
let giant = new Giant()

let log = new Log(document.querySelector('.log'))


const stage = new Stage(
    wizard,
    giant,
    document.querySelector('#person'),
    document.querySelector('#monster'),
    log
)

stage.start()







console.log(warrior.name)
console.log(warrior.attack)
console.log(warrior.life)
console.log(warrior.defense)

console.log(wizard.name)
console.log(wizard.attack)
console.log(wizard.life)
console.log(wizard.defense)

console.log(goblin.name)
console.log(goblin.attack)
console.log(goblin.life)
console.log(goblin.defense)

console.log(giant.name)
console.log(giant.attack)
console.log(giant.life)
console.log(giant.defense)

