import { XSLTAssembler } from './xslt'

export class When extends XSLTAssembler {
    /**
     * @param {String} test
     */
    set test(test) {
        this.setAttribute('test', test)
    }

    /**
     * @returns {String}
     */
    get test() {
        return this.getAttribute('test')
    }
}

/**
 * @param {*} [init]
 * @returns {When}
 */
export function when(...init) {
    return new When(...init)
}
