import {
  PERSON_CREATED,
  PREFERRED_PAYMENT_METHOD_ASSIGNED,
  PERSON_DELETED,
} from '../event-types'

export default {
  Init: async store => {
    await store.defineTable('PersonReadModel', {
      indexes: {
        id: 'string'
      },
      fields: ['userId', 'preferredPaymentMethod']
    })
  },

  [PERSON_CREATED]: async (store, { aggregateId, payload: { userId } }) => {
    const person = {
      id: aggregateId,
      userId
    }

    await store.insert('PersonReadModel', person)
  },

  [PREFERRED_PAYMENT_METHOD_ASSIGNED]: async (store, { aggregateId, payload: { paymentMethodId } }) => {
    await store.update(
      'PersonReadModel',
      { id: aggregateId },
      { $set: { preferredPaymentMethod: paymentMethodId } })
  },

  [PERSON_DELETED]: async (store, { aggregateId }) => {
    await store.delete('PersonReadModel', { id: aggregateId })
  },

}
