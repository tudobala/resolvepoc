import {
  SYSTEM_SUPPORTED_PAYMENT_METHODS_CREATED,
  SYSTEM_SUPPORTED_PAYMENT_METHOD_ADDED,
  SYSTEM_SUPPORTED_PAYMENT_METHOD_REMOVED
} from '../event-types'

export default {
  Init: () => ({ supportedPaymentMethods: [] }),
  [SYSTEM_SUPPORTED_PAYMENT_METHODS_CREATED]: (state, { timestamp }) => ({
    ...state,
    createdAt: timestamp
  }),
  [SYSTEM_SUPPORTED_PAYMENT_METHOD_ADDED]: (state, { paymentMethodId, name }) => ({
    ...state,
    supportedPaymentMethods: [...state.supportedPaymentMethods, { paymentMethodId, name }]
  }),
  [SYSTEM_SUPPORTED_PAYMENT_METHOD_REMOVED]: (state, { paymentMethodId }) => ({
    ...state,
    supportedPaymentMethods: state.supportedPaymentMethods.filter(pm => pm.paymentMethodId !== paymentMethodId)
  })
}
