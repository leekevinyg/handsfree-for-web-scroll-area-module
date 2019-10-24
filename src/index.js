export default {
  name: 'i18n-name',
  description: 'i18n-description',
  // TODO insert icon
  contexts: [{
    context: 'root',
    commands: [{
      name: 'i18n-command.scroll-area',
      help: 'i18n-help.scroll-area',
      action: () => {
        // TODO show element picker
      },
      group: 'i18n-group.scroll-area',
      switchToContext: 'scroll-area' // TODO configure scroll-area context and actions
    }],
    i18n: {
      en: {
        'group.scroll-area': 'Scroll area',
        'command.scroll-area': 'Scroll area',
        'help.scroll-area': 'Scrolls selected element down'
      }
    }
  }],
  i18n: {
    en: {
      name: 'Scroll area',
      description: 'Commands for scrolling a particular element on a webpage'
    }
  }
}
