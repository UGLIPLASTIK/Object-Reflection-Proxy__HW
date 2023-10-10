import sorting from '../sorting';

test('Правильно сортируются свойства', () => {
  const testChar = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const testArr = [
    {
      key: 'name',
      value: 'мечник',
    },
    {
      key: 'level',
      value: 2,
    },
    {
      key: 'attack',
      value: 80,
    },
    {
      key: 'defence',
      value: 40,
    },
    {
      key: 'health',
      value: 10,
    },
  ];

  expect(sorting(testChar, ['name', 'level'])).toEqual(testArr);
});
