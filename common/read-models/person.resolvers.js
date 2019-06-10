export default {
  findById: async (store, { id }) => {
    return await store.findOne('PersonReadModel', { id })
  },
  all: async store => {
    return await store.find('PersonReadModel', {})
  }
}
