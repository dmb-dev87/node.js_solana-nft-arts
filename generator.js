const Jimp = require('jimp');
const fs = require('fs');

const Traits = require('./traits');

const base_uri = "ipfs://QmPZepqs94GxFaDCoW1CMFnFsrNMWwCH8ReVxmZU54JreJ";

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const build = async (index, onComplete) => {
  const _path = './';
  var _traits = [];

  const background = Traits.getBackground();
  const backgroundJimp = await Jimp.read(_path +
    '/Traits/Background/' +
    background +
    '.png');
  _traits.push({
    'trait_type': 'Background',
    'value': background
  });

  var _composedImage = backgroundJimp;

  const dress = Traits.getDress();
  const dressJimp = await Jimp.read(_path +
    '/Traits/Dress/' +
    dress +
    '.png');
  _traits.push({
    'trait_type': 'Dress',
    'value': dress
  });

  _composedImage.blit(dressJimp, 0, 0);

  const earring = Traits.getEarring();
  const earringJimp = await Jimp.read(_path +
    '/Traits/Ear Ring/' +
    earring +
    '.png');
  _traits.push({
    'trait_type': 'Ear Ring',
    'value': earring
  });

  _composedImage.blit(earringJimp, 0, 0);

  const expression = Traits.getExpressions();
  const expressionJimp = await Jimp.read(_path +
    '/Traits/Expressions/' +
    expression +
    '.png');
  _traits.push({
    'trait_type': 'Expressions',
    'value': expression
  });

  _composedImage.blit(expressionJimp, 0, 0);

  const hatshair = Traits.getHatshair();
  const hatshairJimp = await Jimp.read(_path +
    '/Traits/Hats_hairs/' +
    hatshair +
    '.png');
  _traits.push({
    'trait_type': 'Hats Hair',
    'value': hatshair
  });

  _composedImage.blit(hatshairJimp, 0, 0);

  await _composedImage.write('assets/' + index + '.png');
  await sleep(20);
  const _readableStream = await fs.createReadStream(_path +
    '/assets/' +
    index +
    '.png');

  await fs.writeFileSync("assets/" + index + '.json', JSON.stringify({
    "name": "Buddha NFT #" + index,
    "description": "A collection of Buddha NFTs on the Ethereum Blockchain",
    "image": base_uri + '/' + index + ".png",
    "attributes": _traits,
    "symbol": "SBB",
    "creators": [
      "0x04BFca9b23e8110E10C28941E9A9c2f833019d0D"
    ],
    "collection": {
      "name": "Buddha NFTs"
    },
    "external_link": "https://www.cryptobuddhas.org/"
  }));

  onComplete();
}

module.exports = {
  build
}