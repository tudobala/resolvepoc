import {
  PERSON_CREATED,
  PREFERRED_PAYMENT_METHOD_ASSIGNED,
} from '../event-types'

export default {
  Init: () => null,
  [PERSON_CREATED]: (state, { aggregateId, payload: { userId } }) => ({
    id: aggregateId,
    userId
  }),
  [PREFERRED_PAYMENT_METHOD_ASSIGNED]: (state, { payload: { paymentMethodId }}) => ({
    ...state,
    preferredPaymentMethod: paymentMethodId
  }),
}
