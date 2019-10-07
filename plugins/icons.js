import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

// internal icons
import { faCheck,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle
}
  from '@fortawesome/pro-solid-svg-icons'

import { faTimesCircle, faKeynote } from '@fortawesome/pro-light-svg-icons'

library.add(
  faCheck,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faTimesCircle,
  faKeynote
)

Vue.component('vue-fontawesome', FontAwesomeIcon)
