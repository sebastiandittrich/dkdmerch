// {
//   type: 'Towel',
//   // image: '/inventory/classic/towel.jpg',
//   // design: 'classic',
//   // since: '2019-11-09',
//   // store: 'teespring',
//   // style: 'dark',
//   link: 'https://teespring.com/dkd-classic?tsmac=store&tsmic=dkd&pid=651&cid=102726&sid=front'
// },

// const classic = new Design('classic').since('2019-11-09')

// classic.teespring().dark().towel('https://teespring.com/dkd-classic?tsmac=store&tsmic=dkd&pid=651&cid=102726&sid=front')

export default class Design {
  constructor(design) {
    this.config = { design }
  }

  generate() {
    return {
      ...this.config,
      image: `/inventory/${this.config.design}/${this.config.style}/${this.config.type}.jpg`
    }
  }

  copy(changes) {
    const copy = new this.constructor(this.config.design)
    copy.config = { ...this.config, ...changes }
    return copy
  }

  link(link) {
    return this.copy({ link }).generate()
  }

  variants(factory) {
    return factory(this)
  }

  since(since) {
    return this.copy({ since })
  }

  store(store, link) {
    return this.copy({ store }).link(link)
  }
  amazon(link) {
    return this.store('amazon', link)
  }
  teespring(link) {
    return this.store('teespring', link)
  }

  style(style) {
    return this.copy({ style })
  }
  dark() {
    return this.style('dark')
  }
  light() {
    return this.style('light')
  }

  type(type) {
    return this.copy({ type })
  }
  shirt() {
    return this.type('shirt')
  }
  hoodie() {
    return this.type('hoodie')
  }
  towel() {
    return this.type('towel')
  }
  socks() {
    return this.type('socks')
  }
  sticker() {
    return this.type('sticker')
  }
  pillow() {
    return this.type('pillow')
  }
  sweatshirt() {
    return this.type('sweatshirt')
  }
}
