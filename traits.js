const randomElement = (list) => {
  const _random = Math.floor(Math.random() * list.length);
  return list[_random];
}

const BACKGROUND_RARITY_5000 = 5000;
const BACKGROUND_RARITY_4900 = 4900;
const BACKGROUND_RARITY_4400 = 4400;
const BACKGROUND_RARITY_3500 = 3500;
const BACKGROUND_RARITY_2000 = 2000;

const getBackground = () => {
  const _random = Math.floor(Math.random() * BACKGROUND_RARITY_5000);

  if (_random < BACKGROUND_RARITY_2000) {
    return randomElement([
      'Blue'
    ]);
  } else if (_random < BACKGROUND_RARITY_3500) {
    return randomElement([
      'Green'
    ]);
  } else if (_random < BACKGROUND_RARITY_4400) {
    return randomElement([
      'Pink'
    ]);
  } else if (_random < BACKGROUND_RARITY_4900) {
    return randomElement([
      'Red'
    ]);
  } else if (_random < BACKGROUND_RARITY_5000) {
    return randomElement([
      'Yellow'
    ]);
  }
}

const DRESS_RARITY_5000 = 5000;
const DRESS_RARITY_4999 = 4999;
const DRESS_RARITY_4994 = 4994;
const DRESS_RARITY_4984 = 4984;
const DRESS_RARITY_4964 = 4964;
const DRESS_RARITY_4934 = 4934;
const DRESS_RARITY_4884 = 4884;
const DRESS_RARITY_4784 = 4784;
const DRESS_RARITY_4634 = 4634;
const DRESS_RARITY_4434 = 4434;
const DRESS_RARITY_4184 = 4184;
const DRESS_RARITY_3884 = 3884;
const DRESS_RARITY_2884 = 2884;
const DRESS_RARITY_1600 = 1600;

const getDress = () => {
  const _random = Math.floor(Math.random() * DRESS_RARITY_5000);

  if (_random < DRESS_RARITY_1600) {
    return randomElement([
      'Green', 'Grey'
    ]);
  } else if (_random < DRESS_RARITY_2884) {
    return randomElement([
      'Soft brown', 'Soft yellow'
    ])
  } else if (_random < DRESS_RARITY_3884) {
    return randomElement([
      'Orange', 'Pink'
    ])
  } else if (_random < DRESS_RARITY_4184) {
    return randomElement([
      'Peace'
    ])
  } else if (_random < DRESS_RARITY_4434) {
    return randomElement([
      'Fendi'
    ])
  } else if (_random < DRESS_RARITY_4634) {
    return randomElement([
      'Dior'
    ])
  } else if (_random < DRESS_RARITY_4784) {
    return randomElement([
      'Circles'
    ])
  } else if (_random < DRESS_RARITY_4884) {
    return randomElement([
      'Burberry'
    ])
  } else if (_random < DRESS_RARITY_4934) {
    return randomElement([
      'Flowers'
    ])
  } else if (_random < DRESS_RARITY_4964) {
    return randomElement([
      'Louis Vuitton'
    ])
  } else if (_random < DRESS_RARITY_4984) {
    return randomElement([
      'Play Station'
    ])
  } else if (_random < DRESS_RARITY_4994) {
    return randomElement([
      'Brown perks'
    ])
  } else if (_random < DRESS_RARITY_4999) {
    return randomElement([
      'Bitcoin'
    ])
  } else if (_random < DRESS_RARITY_5000) {
    return randomElement([
      'Alien Bitcoin'
    ])
  }
}

const EARRING_RARITY_5000 = 5000;
const EARRING_RARITY_4950 = 4950;
const EARRING_RARITY_4850 = 4850;
const EARRING_RARITY_4650 = 4650;
const EARRING_RARITY_4150 = 4150;
const EARRING_RARITY_3450 = 3450;
const EARRING_RARITY_2500 = 2500;
const EARRING_RARITY_1350 = 1350;

const getEarring = () => {
  const _random = Math.floor(Math.random() * EARRING_RARITY_5000);

  if (_random < EARRING_RARITY_1350) {
    return randomElement([
      'Balance'
    ]);
  } else if (_random < EARRING_RARITY_2500) {
    return randomElement([
      'Happiness'
    ])
  } else if (_random < EARRING_RARITY_3450) {
    return randomElement([
      'Infinite'
    ])
  } else if (_random < EARRING_RARITY_4150) {
    return randomElement([
      'Peace'
    ])
  } else if (_random < EARRING_RARITY_4650) {
    return randomElement([
      'Tree of Life'
    ])
  } else if (_random < EARRING_RARITY_4850) {
    return randomElement([
      'Love'
    ])
  } else if (_random < EARRING_RARITY_4950) {
    return randomElement([
      'Lotus'
    ])
  } else if (_random < EARRING_RARITY_5000) {
    return randomElement([
      'Yin & Yang'
    ])
  }
}

const EXPRESSIONS_RARITY_5000 = 5000;
const EXPRESSINOS_RARITY_4990 = 4990;
const EXPRESSINOS_RARITY_4870 = 4870;
const EXPRESSINOS_RARITY_4500 = 4500;
const EXPRESSINOS_RARITY_3300 = 3300;

const getExpressions = () => {
  const _random = Math.floor(Math.random() * EXPRESSIONS_RARITY_5000);

  if (_random < EXPRESSINOS_RARITY_3300) {
    return randomElement([
      'Blink', 'Honest', 'Meditating', 'OHM Meditation', 'Smile'      
    ]);
  } else if (_random < EXPRESSINOS_RARITY_4500) {
    return randomElement([
      'Keeping a Blue Daisy', 'Keeping a Blue Lily Flower',
      'Keeping a Pink Lily FLower', 'Keeping a Pink Tulip',
      'Keeping a white Daisy', 'Keeping a Yellow Tulip',
      'Keeping multicolor quatrifoil', 'Keping a Quatrifoil'
    ])
  } else if (_random < EXPRESSINOS_RARITY_4870) {
    return randomElement([
      'Nerd'
    ])
  } else if (_random < EXPRESSINOS_RARITY_4990) {
    return randomElement([
      'Relaxed'
    ])
  } else if (_random < EXPRESSIONS_RARITY_5000) {
    return randomElement([
      'Drinking Coke'
    ])
  }
}

const HATSHAIR_RARITY_5000 = 5000;
const HATSHAIR_RARITY_4980 = 4980;
const HATSHAIR_RARITY_4958 = 4958;
const HATSHAIR_RARITY_4925 = 4925;
const HATSHAIR_RARITY_4870 = 4870;
const HATSHAIR_RARITY_4750 = 4750;
const HATSHAIR_RARITY_4600 = 4600;
const HATSHAIR_RARITY_4380 = 4380;
const HATSHAIR_RARITY_3060 = 3060;

const getHatshair = () => {
  const _random = Math.floor(Math.random() * HATSHAIR_RARITY_5000);

  if (_random < HATSHAIR_RARITY_3060) {
    return randomElement([
      'Blonde hairs', 'Brown Hairs', 'Green hairs',
      'Orange hairs', 'Water Green hairs', 'Yellow&Orange hairs'
    ]);
  } else if (_random < HATSHAIR_RARITY_4380) {
    return randomElement([
      'Brown hat', 'Orange hat', 'Pink&Yellow hat', 'Yellow hat'
    ])
  } else if (_random < HATSHAIR_RARITY_4600) {
    return randomElement([
      'Floppy'
    ])
  } else if (_random < HATSHAIR_RARITY_4750) {
    return randomElement([
      'Santa Claus'
    ])
  } else if (_random < HATSHAIR_RARITY_4870) {
    return randomElement([
      'Graduated'
    ])
  } else if (_random < HATSHAIR_RARITY_4925) {
    return randomElement([
      'Play Station'
    ])
  } else if (_random < HATSHAIR_RARITY_4958) {
    return randomElement([
      'The North Face'
    ])
  } else if (_random < HATSHAIR_RARITY_4980) {
    return randomElement([
      'Nike'
    ])
  } else if (_random < HATSHAIR_RARITY_5000) {
    return randomElement([
      'Apple', 'Bitcoin'
    ])
  }
}

module.exports = {
  getBackground,
  getDress,
  getEarring,
  getExpressions,
  getHatshair
}