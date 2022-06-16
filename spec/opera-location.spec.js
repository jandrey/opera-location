/* eslint-env jasmine */
const fs = require('fs')
const mock = require('mock-require');
const operaLocation = require('../module')

describe('opera-location', function () {
  // Must have opera installed. Commented as GitHub CI doesn't have it.
  // it('outputs opera path as a node module', function (done) {
  //   const location = operaLocation()

  //   expect(fs.existsSync(location)).toBe(true)
  //   expect(location).toBeDefined()
  //   done()
  // })

  it('outputs opera path as a cli', function (done) {
    mock('child_process', {
      spawnSync: (location) => {
        return {stdout: location}
      }
    });

    const location = operaLocation()

    const { spawnSync } = require( 'child_process' );
    const output = spawnSync(location);

    expect(fs.existsSync(location)).toBe(true)
    expect(output.stdout.toString()).toBe(location)
    done()
  })
})
