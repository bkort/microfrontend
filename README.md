# microfrontend

## Filters

`yarn create single-spa --framework react --dir filters`
Project setup complete!
Steps to test your React single-spa application:

1. Run 'yarn start --port 8500'
2. Go to http://single-spa-playground.org/playground/instant-test?name=@simplify/filters&url=8500 to see it working!

## Products

`yarn create single-spa --framework react --dir products`
Project setup complete!
Steps to test your React single-spa application:

1. Run 'yarn start --port 8500'
2. Go to http://single-spa-playground.org/playground/instant-test?name=@simplify/products&url=8500 to see it working!

## Utils

`yarn create single-spa --framework react --dir app-utils --moduleType util-module`
Project setup complete!
Steps to test your utility module:

1. Run 'yarn start --port 8500'
2. Go to http://single-spa-playground.org
3. Run the following in the browser console: window.importMapOverrides.addOverride('@simplify/utils', '8500')
4. Run the following in the browser console: System.import('@simplify/utils')

## Container

`yarn create single-spa --framework react --dir container --moduleType root-config `
Project setup complete!
Run 'yarn start' to boot up your single-spa root config
