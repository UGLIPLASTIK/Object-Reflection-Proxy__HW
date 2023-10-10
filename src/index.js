/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
import showAttack from './js/destructuring';
import sorting from './js/sorting';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

console.log(showAttack(character));

// const testChar = {
//   name: 'мечник',
//   health: 10,
//   level: 2,
//   attack: 80,
//   defence: 40,
// };
