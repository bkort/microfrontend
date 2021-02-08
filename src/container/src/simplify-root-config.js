import { registerApplication, start } from 'single-spa'

registerApplication({
  name: '@simplify/filters',
  app: () => System.import('@simplify/filters'),
  activeWhen: ['/'],
})

registerApplication({
  name: '@simplify/products',
  app: () => System.import('@simplify/products'),
  activeWhen: ['/products'],
})

start({
  urlRerouteOnly: true,
})
