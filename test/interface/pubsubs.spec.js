/* eslint-env mocha */

'use strict'

const test = require('interface-ipfs-core')
const FactoryClient = require('../ipfs-factory/client')
const isNode = require('is-node')

if (isNode && process.env.TEST_PUBSUB) {
  let fc

  const common = {
    setup: function (callback) {
      fc = new FactoryClient()
      callback(null, fc)
    },
    teardown: function (callback) {
      fc.dismantle(callback)
    }
  }

  test.pubsub(common)
}
