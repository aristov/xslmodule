import { XSLAssembler } from './xsl'

export class Attribute extends XSLAssembler {
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
 * @returns {Attribute}
 */
export function attribute(...init) {
    return new Attribute(...init)
}
