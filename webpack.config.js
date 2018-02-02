'use strict'

const path = require('path')

module.exports = [
    {
        entry : './docs/test/test2.js',
        output : {
            path : path.join(__dirname, 'docs/test'),
            filename : 'test2.build.js'
        }
    }
]
