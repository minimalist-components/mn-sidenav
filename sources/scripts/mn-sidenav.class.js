class MnSidenav extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.setOpenEvents()
    this.setToggleEvents()
    this.setCloseEvents()
    return self
  }

  setToggleEvents() {
    const buttons = document.querySelectorAll(`button[toggle-sidenav="${this.id}"]`)

    Array
      .from(buttons)
      .forEach(button => button.addEventListener('click', this.toggle))
  }

  setOpenEvents() {
    const buttons = document.querySelectorAll(`button[open-sidenav="${this.id}"]`)

    Array
      .from(buttons)
      .forEach(button => button.addEventListener('click', () => this.open()))
  }

  setCloseEvents() {
    const buttons = document.querySelectorAll('button[close-sidenav]')

    Array
      .from(buttons)
      .forEach(button => button.addEventListener('click', this.close))

    document.body.addEventListener('click', this.close)

    document.addEventListener('keyup', () => {
      const esc = event.keyCode === 27
      const isOpened = document.body.classList.contains('mn-sidenav-visible')

      if (esc && isOpened) {
        const sidenav = document.querySelector('mn-sidenav.visible')
        document.body.classList.remove('mn-sidenav-visible')
        sidenav.classList.remove('visible')
      }
    })
  }

  open() {
    this.classList.add('visible')
    document.body.classList.add('mn-sidenav-visible')
  }

  close(event) {
    if (event) {
      event.stopPropagation()
      const clickButtonClose = event.target.getAttribute('close-sidenav')
      const clickOutside = event.target.tagName === 'BODY'
      const sidenav = document.querySelector('mn-sidenav.visible')

      if ((clickButtonClose || clickOutside) && sidenav) {
        document.body.classList.remove('mn-sidenav-visible')
        sidenav.classList.remove('visible')
      }
    } else {
      document.body.classList.remove('mn-sidenav-visible')
      this.classList.remove('visible')
    }
  }

  toggle(event) {
    const id = event
      ? event.target.getAttribute('toggle-sidenav')
      : this.id

    const sidenav = document.querySelector(`mn-sidenav#${id}`)
    sidenav.classList.toggle('visible')
    document.body.classList.toggle('mn-sidenav-visible')
  }
}

customElements.define('mn-sidenav', MnSidenav)
