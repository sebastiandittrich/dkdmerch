import Design from './Schema'

const classic = new Design('classic').since('2019-11-09').dark().variants(design => [
  design.hoodie().amazon('https://www.amazon.de/dp/B07ZD89TK4'),
  design.shirt().amazon('https://www.amazon.de/dp/B07Z9M7G55'),
  design.shirt().light().amazon('https://www.amazon.de/dp/B07Z9NN6FV?customId=B07537SGL9&th=1'),
  design.socks().teespring('https://teespring.com/dkd-classic?tsmac=store&tsmic=dkd&pid=655&cid=102829'),
  design.pillow().teespring('https://teespring.com/dkd-classic?tsmac=store&tsmic=dkd&pid=650'),
  design.sticker().teespring('https://teespring.com/dkd-classic?tsmac=store&tsmic=dkd&pid=794&cid=103544&sid=front'),
  design.towel().teespring('https://teespring.com/dkd-classic?tsmac=store&tsmic=dkd&pid=651&cid=102726&sid=front'),
])

const no5 = new Design('no-5').since('2019-12-08').dark().variants(design => [
  design.hoodie().amazon('https://www.amazon.de/dp/B082747X53'),
  design.sweatshirt().amazon('https://www.amazon.de/dp/B0827YY3SW'),
  design.shirt().teespring('https://teespring.com/dkd-no-5?tsmac=store&tsmic=dkd&pid=389&cid=100029'),
])

const no3 = new Design('no-3').since('2019-12-16').dark().variants(design => [
  design.hoodie().amazon(''),
  design.sweatshirt().amazon(''),
  design.shirt().teespring('https://teespring.com/de/dkd-no-3?pid=389'),
])

export const state = () => ({
  list: [
    ...no3,
    ...no5,
    ...classic,
  ],
})
