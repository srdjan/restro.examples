const authn    = require('restro').middleware.authn
const authr    = require('restro').middleware.authr
const resolver = require('restro').middleware.resolver
const invoker  = require('restro').middleware.invoker
const hal      = require('restro').middleware.hal
const server   = require('restro').server.server
const Pipeline = require('restro').server.pipeline
const apple    = require('./resources/apple')

const pipeline = Pipeline.expose(apple)
                      .use(authn.func)
                      .use(resolver.func)
                      .use(authr.func)
                      .use(invoker.func)
                      .use(hal.func)

const endPoint = server.createEndPoint(pipeline)
endPoint.start(8080)
