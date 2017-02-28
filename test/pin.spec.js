/* eslint-env mocha */
/* eslint max-nested-callbacks: ["error", 8] */
'use strict'

const test = require('interface-ipfs-core')
const FactoryClient = require('./ipfs-factory/client')
const expect = require('chai').expect

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

test.pin(common)

describe('Timeouts', () => {
  let fc
  let ipfs

  before((done) => {
    fc = new FactoryClient({timeout: 15000})
    fc.spawnNode((err, node) => {
      expect(err).not.to.exist
      ipfs = node
      done()
    })
  })

  after((done) => {
    fc.dismantle(done)
  })

  describe('.pin (with timeout)', () => {
    it('times out after 15s', (done) => {
      ipfs.pin.add('Qmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', { recursive: true }, (err, pinset) => {
        expect(err).to.exist
        expect(pinset).not.to.exist
        done()
      })
    })
  })
})
