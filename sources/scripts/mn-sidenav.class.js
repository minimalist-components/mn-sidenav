class MnDialog extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.setCard()
    this.setOpenEvents()
    this.setCloseEvents()
    return self
  }

  setCard() {
    const card = document.createElement('div')

    card.classList.add('mn-card')

    Array
      .from(this.classList)
      .filter(cardClass)
      // assign classes to card
      .forEach(cssClass => {
        this.classList.remove(cssClass)
        card.classList.add(cssClass)
      })

    Array
      .from(this.children)
      .forEach(putInCard)

    function putInCard(element) {
      card.appendChild(element)
    }

    this.insertBefore(card, this.firstChild)

    function cardClass(cssClass) {
      const validClasses = [
        'padding-header',
        'padding'
      ]

      const isValidClass = validClasses.indexOf(cssClass) > -1

      return isValidClass
    }
  }

  setOpenEvents() {
    const id = this.id
    const buttons = document.querySelectorAll(`button[data-open-dialog="${id}"]`)
    let openDialog = this.open

    Array
      .from(buttons)
      .forEach(setEventListener)

    function setEventListener(button) {
      button.addEventListener('click', openDialog)
    }
  }

  setCloseEvents() {
    const buttons = document.querySelectorAll('[data-close-dialog]')
    const close = this.close

    Array
      .from(buttons)
      .forEach(button => button.addEventListener('click', close))

    document.body.addEventListener('click', close)
    document.addEventListener('keyup', () => {
      const esc = event.keyCode === 27
      let isOpened = document.body.classList.contains('mn-dialog-opened')
      if (esc && isOpened) {
        const dialog = document.querySelector('mn-dialog.opened')
        document.body.classList.remove('mn-dialog-opened')
        dialog.classList.remove('opened')
      }
    })
  }

  open() {
    const id = event.target.getAttribute('data-open-dialog')
    let dialog = document.querySelector(`mn-dialog#${id}`)

    document.body.classList.add('mn-dialog-opened')

    const previousDialog = document.querySelector('mn-dialog.opened')
    if (previousDialog) {
      previousDialog.classList.remove('opened')
    }
    dialog.classList.add('opened')
  }

  close(event) {
    event.stopPropagation()
    const clickButtonClose = event.target.getAttribute('data-close-dialog')
    const clickOutside = event.target.tagName === 'MN-DIALOG'

    if (clickButtonClose || clickOutside) {
      const dialog = document.querySelector('mn-dialog.opened')
      document.body.classList.remove('mn-dialog-opened')
      dialog.classList.remove('opened')
    }
  }
}

customElements.define('mn-dialog', MnDialog)
