import uuid4 from 'uuid4'
import {
  SYSTEM_SUPPORTED_PAYMENT_METHODS_CREATED,
  SYSTEM_SUPPORTED_PAYMENT_METHOD_ADDED,
  SYSTEM_SUPPORTED_PAYMENT_METHOD_REMOVED
} from '../event-types'

export default {
  createSupportedPaymentMethods: (state) => {
    if (state.createdAt) {
      throw new Error('Supported Payment Methods already exists')
    }

    return {
      type: SYSTEM_SUPPORTED_PAYMENT_METHODS_CREATED,
      payload: {}
    }
  },
  addSystemSupportedPaymentMethod: (state, { payload: { name, description } }) => {
    if (!state.createdAt) {
      throw new Error('Supported Payment Methods does not exist')
    }

    if (state.supportedPaymentMethods.find(pm => pm.name === name)) {
      throw new Error('PaymentMethod already supported')
    }

    return {
      type: SYSTEM_SUPPORTED_PAYMENT_METHOD_ADDED,
      payload: { paymentMethodId: uuid4(), name, description }
    }
  },
  removeSystemSupportedPaymentMethod: (state, { payload: { paymentMethodId } }) => {
    if (!state.createdAt) {
      throw new Error('Supported Payment Methods does not exist')
    }

    if (!state.supportedPaymentMethods.find(id => id === paymentMethodId)) {
      throw new Error('PaymentMethod not found')
    }

    return {
      type: SYSTEM_SUPPORTED_PAYMENT_METHOD_REMOVED,
      payload: { paymentMethodId }
    }
  }
}
