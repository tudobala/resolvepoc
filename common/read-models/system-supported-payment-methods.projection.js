import {
  SYSTEM_SUPPORTED_PAYMENT_METHODS_CREATED,
  SYSTEM_SUPPORTED_PAYMENT_METHOD_ADDED,
  SYSTEM_SUPPORTED_PAYMENT_METHOD_REMOVED
} from '../event-types'

export default {
  Init: async store => {
    await store.defineTable('SystemSupportedPaymentMethodsReadModel', {
      indexes: {
        id: 'string'
      },
      fields: ['supportedPaymentMethods']
    })
  },

  [SYSTEM_SUPPORTED_PAYMENT_METHODS_CREATED]: async (store, { aggregateId }) => {
    const systemSupportedPaymentMethods = {
      id: aggregateId,
      supportedPaymentMethods: [],
    }

    await store.insert('SystemSupportedPaymentMethodsReadModel', systemSupportedPaymentMethods)
  },

  [SYSTEM_SUPPORTED_PAYMENT_METHOD_ADDED]: async (store, { aggregateId, payload: { paymentMethodId, name, description } }) => {
    const systemSupportedPaymentMethods = await store.findOne(
      'SystemSupportedPaymentMethodsReadModel',
      { id: aggregateId }
    )

    systemSupportedPaymentMethods.supportedPaymentMethods.push({ paymentMethodId, name, description })

    await store.update(
      'SystemSupportedPaymentMethodsReadModel',
      { id: aggregateId },
      { $set: { supportedPaymentMethods: systemSupportedPaymentMethods.supportedPaymentMethods } })
  },

  [SYSTEM_SUPPORTED_PAYMENT_METHOD_REMOVED]: async (store, { aggregateId, payload: { paymentMethodId } }) => {
    const systemSupportedPaymentMethods = await store.findOne(
      'SystemSupportedPaymentMethodsReadModel',
      { id: aggregateId }
    )

    const listWithoutpaymentMethodId = systemSupportedPaymentMethods.supportedPaymentMethods.filter(pm => pm.paymentMethodId !== paymentMethodId)

    await store.update(
      'SystemSupportedPaymentMethodsReadModel',
      { id: aggregateId },
      { $set: { supportedPaymentMethods: listWithoutpaymentMethodId } })
  }

}
