const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class GameTable {
    constructor(moves) {
        this.moves = moves;
        this.table = this.generateTable();
    }

    generateTable() {
        const table = [[' ']];
        for (const move of this.moves) {
            table[0].push(move);
            table.push([move]);
        }

        for (let i = 1; i <= this.moves.length; i++) {
            for (let j = 1; j <= this.moves.length; j++) {
                if (i === j) {
                    table[i].push('Draw');
                } else if ((j - i + this.moves.length) % this.moves.length <= this.moves.length / 2) {
                    table[i].push('Win');
                } else {
                    table[i].push('Lose');
                }
            }
        }

        return table;
    }

    displayTable() {
        for (const row of this.table) {
            console.log(row.join('\t'));
        }
    }
    
     
}

class Rules {
    constructor(moves) {
        this.moves = moves;
    }

    determineWinner(playerMove, computerMove) {
        const indexPlayer = this.moves.indexOf(playerMove) + 1;
        const indexComputer = this.moves.indexOf(computerMove) + 1;
        return new GameTable(this.moves).table[indexPlayer][indexComputer];
    }
}

class KeyGenerator {
    generateKey() {
        return crypto.randomBytes(32).toString('hex');
    }
}

class HMACGenerator {
    generateHMAC(key, message) {
        const hmac = crypto.createHmac('sha256', Buffer.from(key, 'hex'));
        hmac.update(message);
        return hmac.digest('hex');
    }
}

function displayOptions(moves) {
    console.log('Available moves:');
    moves.forEach((move, index) => {
        console.log(`${index + 1}. ${move}`);
    });
    console.log('0. exit');
    console.log('?. help');
}

function main() {
    const args = process.argv.slice(2);
    const uniqueValues = new Set(Array.from(args));


    if (args.length < 3 )  {
      console.log('Invalid number of arguments. Please provide more than 3 an odd number of unique moves. \nExample: rock spock paper');
      process.exit();

    } else if (args.length % 2 === 0) {
      console.log('Invalid number of arguments. Please provide an odd number of unique moves. \nExample: rock spock paper');
      process.exit();

    } else if (args.length !== Array.from(uniqueValues).length) {
      console.log('Invalid number of arguments. Please provide unique count of moves. \nExample: rock spock paper');
      process.exit();
    } 


    const moves = args;
    const gameTable = new GameTable(moves);
    const keyGenerator = new KeyGenerator();
    const key = keyGenerator.generateKey();

    const computerMove = moves[Math.floor(Math.random() * moves.length)];
    const hmacGenerator = new HMACGenerator();
    const hmac = hmacGenerator.generateHMAC(key, computerMove);

    console.log(`\nHMAC: ${hmac}`);
    displayOptions(moves);

    process.stdin.setEncoding('utf-8');

    rl.question('Enter your move: ', (input) => {
        const userInput = input.trim();

        if (userInput === '0') {
            process.exit();
        } else if (userInput === '?') {
          console.log('\n');
          gameTable.displayTable();
          process.exit();
        } else {
            const userChoice = parseInt(userInput, 10);

            if (!isNaN(userChoice) && userChoice >= 1 && userChoice <= moves.length) {
                const playerMove = moves[userChoice - 1];
                const result = new Rules(moves).determineWinner(playerMove, computerMove);
                console.log(`\nYour move: ${playerMove}`);
                console.log(`Computer's move: ${computerMove}`);
                console.log(`Result: ${result}`);
                console.log(`HMAC key: ${key}`);
                process.exit();
            } else {
                console.log(`Invalid input. Please enter a number between 1 and ${moves.length}, '0' for exit, or '?' for help.`);
                displayOptions(moves);
            }
        }
    });
}

if (require.main === module) {
    main();
}



