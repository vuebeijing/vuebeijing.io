/**
 * Adds a class to an element.
 *
 * @param {Object} element
 * @param {string} className
 */
export function addClass(element, className) {
  if (element && !element.classList.contains(className)) {
    element.classList.add(className)
  } else {
    console.warn('Element missing or class allready added')
  }
}

/**
 * Removes a class from an element.
 *
 * @param {Object} element
 * @param {string} className
 */
export function removeClass(element, className) {
  if (element && element.classList.contains(className)) {
    element.classList.remove(className)
  }
}
