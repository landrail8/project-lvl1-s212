#!/usr/bin/env node
import readlineSync from 'readline-sync';
import brain_calc from '../games/brain-calc';
import brain_even from '../games/brain-even';
import brain_gcd from '../games/brain-gcd';


const fs = require('fs');

const walkForFiles = (dir) => {
  const files = fs.readdirSync(dir);
  const filelist = [];
  files.forEach((file) => {
    filelist.push(file);
  });
  return filelist;
};

console.log('Welcome to the Brain Games!');
console.log('We have something interesting for you ;)');


const arrgame = walkForFiles('/usr/prj/src/games');// ../games'); //  ['0. brain-even', '1. brain-calc', '2. brain-gcd'];
let i = 0;
//  const { arrgame: length } = { arrgame };

for (i = 0; i < arrgame.length; i += 1) {
  console.log(`${i} --> ${arrgame[i]}`);
}


const numberGame = readlineSync.question('Press number of the Game and play: ');
//  const pathToGame = `./games/${arrgame[numberGame]}`;


switch (numberGame) {
  case '0': {
    brain_calc();
    break; }
  case '1':
    brain_even();
    break;
  case '2':
    brain_gcd();
    break;
  default:
    brain_calc();
}

//  import index from '..';
