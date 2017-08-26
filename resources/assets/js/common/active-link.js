class HrefWatcher {
  constructor(element, binding) {
    let classNames = ''
    this.isExact = binding.modifiers.exact

    switch (typeof binding.value) {
      case 'object':
        return this.multiElement(element, binding.value)
      case 'string':
        classNames = binding.value || 'active'
        break
      case 'undefined':
        classNames = 'active'
        break
      default:
        classNames = binding.expression || 'active'
    }

    return this.singleElement(element, classNames)
  }

  singleElement(element, classNames) {
    const link = (element.tagName.toLowerCase() === 'a') ? element.href : element.querySelector('a').href
    const regexpString = '^' + link + (this.isExact ? '$' : '')
    const regexp = new RegExp(regexpString)

    if (window.location.href.match(regexp)) {
      element.classList.add(...classNames.split(' '))
    }
    else {
      element.classList.remove(...classNames.split(' '))
    }
  }

  multiElement(root, options) {
    for (let key in options) {
      // noinspection JSUnfilteredForInLoop
      const selector = options instanceof Array ? options[key].trim() : key.trim()
      // noinspection JSUnfilteredForInLoop
      const classNames = !(options instanceof Array) ? options[key].trim() || 'active' : 'active'
      const elements = this.findElements(root, selector)
      this.handleElements(elements, classNames)
    }
  }

  // noinspection JSMethodCanBeStatic
  findElements(root, selector){
    if(selector.split()[0] === '>'){
      selector = ':scope ' + selector
    }
    return root.querySelectorAll(selector)
  }

  handleElements(elements, classNames) {
    for(const element of elements){
      this.singleElement(element, classNames)
    }
  }
}

export default {
  inserted(el, binding) {
    new HrefWatcher(el, binding)
  }
}