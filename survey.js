const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {
  rl.question(`Hi ${name}.  What do you like do?`, (hobby) => {
    rl.question(`Nice.  What do you listen to while ${hobby}?`, (music) => {
      rl.question(`What's your favourite restaurant?`, (restaurant) => {
        console.log(`${name} likes ${hobby}.  ${name} listens to ${music} while doing it. ${name}'s favourite restaurant is ${restaurant}`);
        rl.close();
      });
    });
  });
});

