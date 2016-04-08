const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Hero(name, weapon, fight, item) {
  this.name = name
  this.weapon = weapon
  this.fight = fight
  this.item = item
  this.health = 100
}

Hero.prototype.attack = function(target) {
  target.takeHit(this.fight)
}

Hero.prototype.takeHit = function(injury) {
  this.health -= injury
}

function Superhero(name, weapon, fight, item, superpower) {
  Hero.call(this, name, weapon, fight, item)
  this.superpower = superpower
}

Superhero.prototype = new Hero()

Superhero.prototype.usePower = function(target) {
  target.takeHit(this.superpower)
}

function Dragon(name, fight, color) {
  this.name = name
  this.fight = fight
  this.color = color
  this.health = 100
}

var superCharlie = new Superhero('Super Charlie', 'glitter', 50, '', 100 )
var garcia = new Superhero('Penelope Garcia', 'computers', 40, '', 100)
var tyler = new Hero('Tyler', 'salmons', 50, '')
var puff = new Dragon('Puff the Magic Dragon', 80, 'red')
var bowser = new Dragon('Bowser', 70, 'yellow')

rl.question('Are you ready to play? (Y or N) ', (answer) => {
  if(answer === 'Y' || answer === 'y') {
    console.log('Great, lets play!')

    rl.question('What character do you want to be? You can choose from: "superCharlie", "garcia" or "tyler" (spelling counts)  ',(answer) => {
      if(answer === 'superCharlie' || answer === 'supercharlie') {
        console.log('Good choice picking ' + answer + 'here are your stats: ')
        console.log(superCharlie)
         console.log('You open the door and before you there are items on a table: ')
         console.log('Pizza, gold ring, or computer')

         rl.question('What item do you pick up? ', (answer) => {
           console.log('You pick up the ' + answer + ' and put it in your pocket')
           superCharlie.item = answer

           rl.question('which direction do you want to move? (right or left)', (answer) => {
             if (answer === 'left' || answer === 'l') {
               console.log('Oh no! Theres a dragon!')

               rl.question('what color is the dragon? (red or yellow)', (answer)=>{
                 if (answer === 'red' || answer === 'r') {
                   console.log('You came across ' + puff.name + ' he is a friendly dragon')
                   console.log(puff.name + ' breathes bubbles')
                   console.log('You made a new friend - have fun!')
                   rl.close()
                 } else if (answer === 'yellow' || answer === 'y') {
                   console.log('look there\'s ' + bowser.name)
                   console.log(bowser.name + 'has keepers with him.  You\'re going to have to fight.')

                   rl.question('who do you want to fight? (garcia or tyler)', (answer) => {
                     if (answer === 'garcia') {
                       superCharlie.usePower(garcia)
                       if (superCharlie.health > garcia.health) {
                         console.log('You Win!')
                         rl.close()
                       } else {
                         console.log('Game Over! ' + garcia.name + 'kicked your butt')
                         rl.close()
                       }
                     } else if (answer === 'tyler'){
                       superCharlie.usePower(tyler)
                       if (superCharlie.health > tyler.health) {
                         console.log('You Win!')
                         rl.close()
                       } else {
                         console.log('Game Over! ' + tyler.name + 'kicked your butt with salmons')
                         rl.close()
                       }
                     } else {
                       console.log('your decision was incorrect. ' + bowser.name + 'ate you.  Game over.')
                       rl.close()
                     }
                   })
                 } else {
                   console.log('That was a terrible dragon- he ate you.  Game over!')
                   rl.close()
                 }
               })

             } else if (answer === 'right' || answer === 'r') {
               console.log('You win! You found the door to Narnia')
               rl.close()
             } else {
               console.log('Game over. You can only move right or left.')
               rl.close()
             }
           })
         })
      } else if (answer === 'garcia') {
          console.log(answer + ' is great! Here are her stats: ')
          console.log(garcia)
          console.log('You open the door and before you there are items on a table: ')
          console.log('donut, tablet, or pen')

          rl.question('What item do you pick up? ', (answer) => {
            console.log('You pick up the ' + answer + ' and put it in your pocket ')
            garcia.item = answer

            rl.question('which direction do you want to move? (right or left)', (answer) => {
              if (answer === 'left' || answer === 'l') {
                console.log('Oh no! There\'s a dragon!')

                rl.question('what color is the dragon? (red or yellow)', (answer)=>{
                  if (answer === 'red' || answer === 'r') {
                    console.log('You came across ' + puff.name + ' he is a friendly dragon')
                    console.log(puff.name + ' breathes bubbles')
                    console.log('You made a new friend - have fun!')
                    rl.close()
                  } else if (answer === 'yellow' || answer === 'y') {
                    console.log('look there\'s ' + bowser.name)
                    console.log(bowser.name + 'has keepers with him.  You\'re going to have to fight.')

                    rl.question('who do you want to fight? (superCharlie or tyler)', (answer) => {
                      if (answer === 'superCharlie' || answer === 'supercharlie') {
                        garcia.usePower(superCharlie)
                        if (garcia.health > superCharlie.health) {
                          console.log('You Win!')
                          rl.close()
                        } else {
                          console.log('Game Over! ' + superCharlie.name + 'kicked your butt')
                          rl.close()
                        }
                      } else if (answer === 'tyler'){
                        garcia.usePower(tyler)
                        if (garcia.health > tyler.health) {
                          console.log('You Win!')
                          rl.close()
                        } else {
                          console.log('Game Over! ' + tyler.name + 'kicked your butt with salmons')
                          rl.close()
                        }
                      } else {
                        console.log('your decision was incorrect. ' + bowser.name + 'ate you.  Game over.')
                        rl.close()
                      }
                    })
                  } else {
                    console.log('That was a terrible dragon- he ate you.  Game over!')
                  }
                })
              } else if (answer === 'right' || answer === 'r') {
                console.log('You win! You found the ice cream shop--enjoy a scoop or two')
                rl.close()
              } else {
                console.log('Game over. You can only move right or left.')
                rl.close()
              }
            })
          })
        } else if (answer === 'tyler') {
          console.log('Really? ' + answer + 'his weapon is ' + tyler.weapon + '. See his stats for yourself: ')
          console.log(tyler)
          console.log('You open the door and before you there are items on a table: ')
          console.log('bear, beer, or book')

          rl.question('What item do you pick up? ', (answer) => {
            console.log('You pick up the ' + answer + ' and put it in your pocket ')
            tyler.item = answer

            rl.question('which direction do you want to move? (right or left)', (answer) => {
              if (answer === 'left' || answer === 'l') {
                console.log('great job! you won!')
                rl.close()
              } else if (answer === 'right' || answer === 'r') {
                console.log('No dragons here- just bears.  It ate you. Game OVER!')
                rl.close()
              } else {
                console.log('Game over. You can only move right or left.')
                rl.close()
              }
            })
          })
        } else {
          console.log('that is not a valid option--maybe in future versions of the game')
          rl.close()
        }
    })
  } else if (answer === 'N' || answer === 'n') {
    console.log('How will you grade my assignment then? Should I automatically get a 10 +?')
    rl.close()
  } else {
    console.log('not a valid input-- restart and try again with either Y or N')
    rl.close()
  }
})
