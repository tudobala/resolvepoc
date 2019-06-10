export default {
  only: async store => {
    return await store.findOne('SystemSupportedPaymentMethodsReadModel', { id: 'default' })
  },
  all: async store => {
    return await store.find('SystemSupportedPaymentMethodsReadModel', { })
  }
}
