import { createClient } from 'hub'
// import content from './contentNick'
if (!global.content) global.content = {}

const content = global.content

const hub = createClient()

hub.set('device.content', content)
hub.set('device.menuState', false)
hub.set('device.currentCategory', content.categories[0])
hub.set('device.currentItem', content.categories[0].items[0])
hub.set('device.mobile', false)
hub.set('device.cover', true)

hub.next = () => {
  const prevItem = hub.get('device.currentItem')
  const category = hub.get('device.currentCategory')
  const compareIndex = field => {
    return field === prevItem
  }
  const oldIndex = category.items.findIndex(compareIndex)
  const newIndex = oldIndex + 1
  if (newIndex < category.items.length) {
    hub.set('device.currentItem', category.items[newIndex])
  } else {
    hub.set('device.currentItem', category.items[0])
  }
}

hub.previous = () => {
  const prevItem = hub.get('device.currentItem')
  const category = hub.get('device.currentCategory')
  const compareIndex = field => {
    return field === prevItem
  }
  const oldIndex = category.items.findIndex(compareIndex)
  const newIndex = oldIndex - 1
  if (oldIndex === 0) {
    hub.set('device.currentItem', category.items[category.items.length - 1])
  } else {
    hub.set('device.currentItem', category.items[newIndex])
  }
}

hub.switchCategory = category => {
  hub.set('device.currentCategory', category)
  hub.set('device.currentItem', category.items[0])
}

if (typeof window !== 'undefined') {
  document.addEventListener('keydown', e => {
    if (e.keyCode === 37) {
      hub.previous()
    } else if (e.keyCode === 39) {
      hub.next()
    }
  })

  hub.setSize = () => {
    hub.set('device.mobile', global.innerWidth < 700)
  }

  global.addEventListener('resize', hub.setSize)

  hub.setSize()
}

hub.switchMenuState = () =>
  hub.set('device.menuState', !hub.get('device.menuState'))

hub.removeCover = () => {
  setTimeout(() => hub.set('device.cover', false), 4000)
}

hub.removeCover()

export default hub
