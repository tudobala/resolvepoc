import uuid4 from 'uuid4'

import {
  PERSON_CREATED,
  PREFERRED_PAYMENT_METHOD_ASSIGNED,
  PERSON_DELETED,
} from '../event-types'

export default {
  createPerson: (state, { payload: { userId } }) => {
    if (state.createdAt) {
      throw new Error('Person already exists')
    }

    return {
      type: PERSON_CREATED,
      payload: { userId }
    }
  },

  assignPreferredPaymentMethod: (state, { payload: { paymentMethodId } }) => {
    if (!state.createdAt) {
      throw new Error('Person does not exist')
    }

    return {
      type: PREFERRED_PAYMENT_METHOD_ASSIGNED,
      payload: { paymentMethodId }
    }
  },

  deletePerson: state => {
    if (!state.createdAt) {
      throw new Error('Person does not exist')
    }

    return {
      type: PERSON_DELETED,
      payload: {}
    }
  }
}
