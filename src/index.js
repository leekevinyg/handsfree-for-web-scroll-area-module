function scrollArea() { // eslint-disable-line
  return {
    name: 'Scroll area',
    description: 'Allows you pick an area to scroll on the page',
    contexts: [{
      context: 'root',
      commands: [{
        name: 'scroll area',
        action() {
          return {
            context: 'pickLabel',
            labels: 'div',
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
      commands: [{
        name: 'up',
        action: () => {},
        group: 'Scroll Direction',
        help: 'Scrolls a selected element up',
        switchToContext: 'root'
      }, {
        name: 'down',
        action: () => {},
        group: 'Scroll Direction',
        help: 'Scrolls a selected element down',
        switchToContext: 'root'
      }]
    }]
  }
}

