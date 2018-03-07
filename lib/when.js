import { XSLAssembler } from './xsl'

export class When extends XSLAssembler {
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
