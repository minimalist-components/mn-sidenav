class MnSidenav extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.setOpenEvents()
    this.setCloseEvents()
    return self
  }

  setOpenEvents() {
    const buttons = document.querySelectorAll(`button[open-sidenav="${this.id}"]`)
    const open = this.open
    Array
      .from(buttons)
      .forEach(button => button.addEventListener('click', open))
  }

  setCloseEvents() {
    const close = this.close
    const buttons = document.querySelectorAll('button[close-sidenav]')
    Array
      .from(buttons)
      .forEach(button => button.addEventListener('click', close))
    document.body.addEventListener('click', close)
    document.addEventListener('keyup', () => {
      const esc = event.keyCode === 27
      let isOpened = document.body.classList.contains('mn-sidenav-visible')
      if (esc && isOpened) {
        const sidenav = document.querySelector('mn-sidenav.visible')
        document.body.classList.remove('mn-sidenav-visible')
        sidenav.classList.remove('visible')
      }
    })
  }

  open(event) {
    const id = event
      ? event.target.getAttribute('open-sidenav')
      : this.id

    const sidenav = document.querySelector(`mn-sidenav#${id}`)
    sidenav.classList.add('visible')
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
}

customElements.define('mn-sidenav', MnSidenav)
