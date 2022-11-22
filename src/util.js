import * as datGui from 'dat.gui'
import Stats from 'stats.js'

/**
 * https://github.com/dataarts/dat.gui
 * @returns {{rotationSpeed: number, bouncingSpeed: number}}
 */
export function initGui() {
  const controls = {
    rotationSpeed: 0.02,
    bouncingSpeed: 0.03,
  }
  const gui = new datGui.GUI()
  gui.add(controls, 'rotationSpeed', 0, 0.5)
  gui.add(controls, 'bouncingSpeed', 0, 0.5)

  return controls
}

/**
 * https://github.com/mrdoob/stats.js
 * @returns {Stats}
 */
export function initStats() {
  const stats = new Stats()

  stats.showPanel(0)

  stats.domElement.style.position = 'absolute'
  stats.domElement.style.left = '0px'
  stats.domElement.style.top = '0px'

  document.getElementById('stats').appendChild(stats.domElement)

  return stats
}
