class MnSidenav extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.setOpenEvents()
    this.setToggleEvents()
    this.setCloseEvents()
    return self
  }

  setToggleEvents() {
    const buttons = document.querySelectorAll(`[toggle-sidenav="${this.id}"]`)

    Array
      .from(buttons)
      .forEach(button => button.addEventListener('click', event => {
        this.toggle()
        event.stopPropagation()
      }))
  }

  setOpenEvents() {
    const buttons = document.querySelectorAll(`[open-sidenav="${this.id}"]`)

    Array
      .from(buttons)
      .forEach(button => button.addEventListener('click', event => {
        this.open()
        event.stopPropagation()
      }))
  }

  setCloseEvents() {
    const buttons = document.querySelectorAll('[close-sidenav]')

    Array
      .from(buttons)
      .forEach(button => button.addEventListener('click', () => this.close()))

    document.addEventListener('click', event => {
      const clickOutside = !event.target.closest('mn-sidenav')
      const sidebarVisible = this.classList.contains('visible')

      if (clickOutside && sidebarVisible) {
        this.close()
      }
    })

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
    window.MnBackdrop.show()
  }

  close() {
    document.body.classList.remove('mn-sidenav-visible')
    this.classList.remove('visible')
    window.MnBackdrop.hide()
  }

  toggle() {
    this.classList.toggle('visible')
      ? window.MnBackdrop.show()
      : window.MnBackdrop.hide()
    document.body.classList.toggle('mn-sidenav-visible')
  }
}

customElements.define('mn-sidenav', MnSidenav)
