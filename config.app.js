const appConfig = {
  routes: 'client/routes.js',
  aggregates: [
    {
      name: 'SystemSupportedPaymentMethodsAggregate',
      commands: 'common/aggregates/system-supported-payment-methods.commands.js',
      projection: 'common/aggregates/system-supported-payment-methods.projection.js'
    },
    {
      name: 'PersonAggregate',
      commands: 'common/aggregates/person.commands.js',
      projection: 'common/aggregates/person.projection.js'
    },
  ],
  readModels: [
    {
      name: 'SystemSupportedPaymentMethodsReadModel',
      projection: 'common/read-models/system-supported-payment-methods.projection.js',
      resolvers: 'common/read-models/system-supported-payment-methods.resolvers.js',
      connectorName: 'default'
    },
    {
      name: 'PersonReadModel',
      projection: 'common/read-models/person.projection.js',
      resolvers: 'common/read-models/person.resolvers.js',
      connectorName: 'default'
    },
  ],
  viewModels: [
    {
      name: 'SystemSupportedPaymentMethodsViewModel',
      projection: 'common/view-models/system-supported-payment-methods.projection.js',
    },
    {
      name: 'PersonViewModel',
      projection: 'common/view-models/person.projection.js',
    }
  ],
  redux: {
    reducers: { 'reducer-name': 'client/reducers/reducer-name.js' },
    middlewares: ['client/middlewares/middleware-name.js']
  }
}

export default appConfig
