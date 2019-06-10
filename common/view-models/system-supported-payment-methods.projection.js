import {
  SYSTEM_SUPPORTED_PAYMENT_METHODS_CREATED,
  SYSTEM_SUPPORTED_PAYMENT_METHOD_ADDED,
  SYSTEM_SUPPORTED_PAYMENT_METHOD_REMOVED
} from '../event-types'

export default {
  Init: () => null,
  [SYSTEM_SUPPORTED_PAYMENT_METHODS_CREATED]: (state, { aggregateId, payload: { id } }) => ({
    id: aggregateId,
  }),
  [SYSTEM_SUPPORTED_PAYMENT_METHOD_ADDED]: (state, { payload: { paymentMethodId }}) => ({
    ...state,
    supportedPaymentMethods: [
      ...state.supportedPaymentMethods,
      paymentMethodId
    ]
  }),
  [SYSTEM_SUPPORTED_PAYMENT_METHOD_REMOVED]: (state, { payload: { paymentMethodId }}) => ({
    ...state,
    supportedPaymentMethods: state.list.filter(id => id !== paymentMethodId)
  })
}
