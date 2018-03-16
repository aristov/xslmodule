import { XSLTAssembler } from './xslt'

export class CallTemplate extends XSLTAssembler {
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
