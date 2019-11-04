function scrollArea() { // eslint-disable-line
  return {
    name: 'Scroll area',
    description: 'Allows you pick an area to scroll on the page',
    contexts: [{
      context: 'root',
      commands: [{
        name: 'scroll area',
        action: () => {
          const allElementsOnPage = Array.from(document.getElementsByTagName('*'))
          const scrollableElements = allElementsOnPage.filter((element) => {
            const computedStyle = getComputedStyle(element)
            const canScrollNow = element.scrollHeight > element.clientHeight &&
              (computedStyle.overflowY === 'auto' || computedStyle.overflowY === 'scroll')
            return canScrollNow
          })

          for (let i = 0; i < scrollableElements.length; i++) {
            const scrollableElement = scrollableElements[i]
            if (!scrollableElement.classList.contains('hands-free-scrollable')) {
              scrollableElement.className += ' hands-free-scrollable'
            }
          }

          if (scrollableElements.length === 0) {
            return {
              context: 'root'
            }
          }

          return {
            context: 'pickLabel',
            labels: '.hands-free-scrollable',
            selectedElementHandler: el => ({
              selectedElement: el
            })
          }
        },
        group: 'scroll area',
        help: 'scroll a particular area on the page'
      }]
    }, {
      context: 'scroll-area',
      name: 'Scroll Area',
      switchOnSelectElement: el => el.classList.contains('hands-free-scrollable'),
      commands: [{
        name: 'up',
        action: ({ selectedElement, tools }) => {
          tools.scroll.up(tools.jQuery(selectedElement))
        },
        group: 'Scroll Direction',
        help: 'Scrolls a selected element up'
      }, {
        name: 'down',
        action: ({ selectedElement, tools }) => {
          tools.scroll.down(tools.jQuery(selectedElement))
        },
        group: 'Scroll Direction',
        help: 'Scrolls a selected element down'
      }]
    }]
  }
}
