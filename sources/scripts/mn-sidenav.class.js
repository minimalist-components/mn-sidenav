class MnSidenav extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.classList.add('mn-card')
    this.setOpenEvents()
    this.setToggleEvents()
    this.setCloseEvents()
    return self
  }

  setToggleEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[toggle-sidenav="${this.id}"]`)) {
        this.toggle()
        event.stopPropagation()
      }
    })
  }

  setOpenEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[open-sidenav="${this.id}"]`)) {
        this.open()
        event.stopPropagation()
      }
    })
  }

  setCloseEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches('button[close-sidenav]')) {
        this.close()
        event.stopPropagation()
      }
    })

    document.addEventListener('click', event => {
      const clickOutside = !event.target.matches('[open-sidenav]')
        && !event.target.matches('[close-sidenav]')
        && !event.target.matches('[toggle-sidenav]')
        && !event.target.closest('mn-sidenav')
      const sidebarVisible = this.classList.contains('visible')

      if (clickOutside && sidebarVisible) {
        this.close()
      }
    })

    document.addEventListener('keyup', event => {
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
    this.scrollTop = 0
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
      ? this.open()
      : this.close()
  }
}

customElements.define('mn-sidenav', MnSidenav)
