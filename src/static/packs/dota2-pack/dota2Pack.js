import uniqId from 'uniqid'

// 24 карты,
// карты преспешников до 15 карт, остальные каты действия/помощи
// свойства постоянные/разовые/усиления
// общая сумма силы от 30-40

// тестовая колода

// {
//   id: uniqId(),
//   title: 'some title',
//   description: 'some description',
//   health: 0, // 0 if it not person card
//   force: 0, // 0 if it not person card
//   imgUrl: ''
// },
const dota2Pack = [
  {
    id: uniqId(),
    title: 'Крипочек',
    description: 'Тупо крипочек, толком нихуя не умеет',
    health: 2,
    force: 1,
    imgUrl: './crip.jpg'
  },
  {
    id: uniqId(),
    title: 'Крипочек',
    description: 'Тупо крипочек, толком нихуя не умеет',
    health: 2,
    force: 1,
    imgUrl: './crip.jpg'
  },
  {
    id: uniqId(),
    title: 'Крипочек',
    description: 'Тупо крипочек, толком нихуя не умеет',
    health: 2,
    force: 1,
    imgUrl: './crip.jpg'
  },
  {
    id: uniqId(),
    title: 'Крипочек',
    description: 'Тупо крипочек, толком нихуя не умеет',
    health: 2,
    force: 1,
    imgUrl: './crip.jpg'
  },
  {
    id: uniqId(),
    title: 'Крипочек',
    description: 'Тупо крипочек, толком нихуя не умеет',
    health: 2,
    force: 1,
    imgUrl: './crip.jpg'
  },
  {
    id: uniqId(),
    title: 'Мипо',
    description: 'Пуф. Сыграй сколько угодно карт Мипо на базу в свой ход.',
    health: 3,
    force: 2,
    imgUrl: './meepo.png'
  },
  {
    id: uniqId(),
    title: 'Мипо',
    description: 'Пуф. Сыграй сколько угодно карт Мипо на базу в свой ход.',
    health: 3,
    force: 2,
    imgUrl: './meepo.png'
  },
  {
    id: uniqId(),
    title: 'Мипо',
    description: 'Пуф. Сыграй сколько угодно карт Мипо на базу в свой ход.',
    health: 3,
    force: 2,
    imgUrl: './meepo.png'
  },
  {
    id: uniqId(),
    title: 'Мипо',
    description: 'Пуф. Сыграй сколько угодно карт Мипо на базу в свой ход.',
    health: 3,
    force: 2,
    imgUrl: './meepo.png'
  },
  {
    id: uniqId(),
    title: 'Алхимик',
    description: 'Жадность не порок. Получите по балу за каждого убитого босса на базе если герой находился на базе в момент убийства босса',
    health: 5,
    force: 3,
    imgUrl: './alchemist.png'
  },
  {
    id: uniqId(),
    title: 'Паджеро',
    description: 'Тушку мне!. Хукает любого персонажа на базу куда был сыгран',
    health: 6,
    force: 2,
    imgUrl: './pudge.png'
  },
  {
    id: uniqId(),
    title: 'Король скелетов',
    description: 'Даже смерть мне не указ! После захвата базы или убийства верните на руку.',
    health: 4,
    force: 4,
    imgUrl: './meepo.png'
  },
]


export default dota2Pack
