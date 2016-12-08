class MnSidenav extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.setOpenEvents()
    this.setCloseEvents()
    return self
  }

  setOpenEvents() {
    const buttons = document.querySelectorAll(`button[sidenav="${this.id}"]`)
    const open = this.open
    Array
      .from(buttons)
      .forEach(button => button.addEventListener('click', open))
  }

  setCloseEvents() {
    const close = this.close
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
    const id = event.target.getAttribute('sidenav')
    const sidenav = document.querySelector(`mn-sidenav#${id}`)
    sidenav.classList.add('visible')
    document.body.classList.add('mn-sidenav-visible')
  }

  close(event) {
    event.stopPropagation()
    const clickButtonClose = event.target.getAttribute('data-close-sidenav')
    const clickOutside = event.target.tagName === 'BODY'
    const sidenav = document.querySelector('mn-sidenav.visible')

    if ((clickButtonClose || clickOutside) && sidenav) {
      document.body.classList.remove('mn-sidenav-visible')
      sidenav.classList.remove('visible')
    }
  }
}

customElements.define('mn-sidenav', MnSidenav)
