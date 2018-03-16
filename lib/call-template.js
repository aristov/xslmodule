import { XSLAssembler } from './xsl'

export class CallTemplate extends XSLAssembler {
    /**
     * @param {String} name
     */
    set name(name) {
        this.setAttribute('name', name)
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.getAttribute('name')
    }
}

/**
 * @param {*} [init]
 * @returns {CallTemplate}
 */
export function callTemplate(...init) {
    return new CallTemplate(...init)
}
