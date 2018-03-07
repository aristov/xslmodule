import { XSLAssembler } from './xsl'

export class Output extends XSLAssembler {
    /**
     * @param {String} method
     */
    set method(method) {
        this.setAttribute('method', method)
    }

    /**
     * @returns {String}
     */
    get method() {
        return this.getAttribute('method')
    }
}

/**
 * @param {*} [init]
 * @returns {Output}
 */
export function output(...init) {
    return new Output(...init)
}
