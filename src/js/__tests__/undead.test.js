import Undead from '../class/undead';

test('Правильно создается обЪект', () => {
  const undead = new Undead('Undead');
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Undead',
    type: 'Undead',
  };

  expect(undead).toEqual(correct);
});
