import {
  PERSON_CREATED,
} from '../event-types'

export default {
  Init: () => ({}),
  [PERSON_CREATED]: (state, { timestamp }) => ({
    ...state,
    createdAt: timestamp
  })
}
