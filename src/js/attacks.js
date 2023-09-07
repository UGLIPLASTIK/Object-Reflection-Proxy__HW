/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

export default function showAttack(character) {
  const result = [];
  const { special } = character;

  for (let i = 0; i < special.length; i++) {
    result.push(special[i]);
  }

  for (const attack of result) {
    if (!('description' in attack)) {
      attack.description = 'Описание недоступно';
    }
  }

  return result;
}
