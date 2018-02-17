import {css as gcss} from 'glamor'
import * as cache from './cache'
import * as styles from './styles'

export default from './box'
export splitProps from './utils/split-props'
export splitBoxProps from './utils/split-box-props'

let cssWarned = false

export function css(...args) {
  if (process.env.NODE_ENV !== 'production') {
    if (!cssWarned) {
      cssWarned = true
      console.warn(
        `ui-box deprecation: the “css” export will be removed in the next major version in favour of importing glamor directly.`
      )
    }
  }
  return gcss(...args)
}

export {
  background,
  borderRadius,
  borders,
  boxShadow,
  dimensions,
  flex,
  interaction,
  layout,
  list,
  opacity,
  overflow,
  position,
  spacing,
  text,
  transform,
  propTypes,
  propNames,
  propAliases,
  propEnhancers,
} from './enhancers'

export function hydrate(entries) {
  cache.hydrate(entries)
}

export function extractStyles() {
  const output = {
    cache: cache.entries(),
    styles: styles.getAll(),
  }
  clearStyles()
  return output
}

export function clearStyles() {
  cache.clear()
  styles.clear()
}
