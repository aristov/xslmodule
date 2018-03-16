import { XSLAssembler } from './xsl'

export class ForEach extends XSLAssembler {
    /**
     * @param {String} select
     */
    set select(select) {
        this.setAttribute('select', select)
    }

    /**
     * @returns {String}
     */
    get select() {
        return this.getAttribute('select')
    }
}

/**
 * @param {*} [init]
 * @returns {ForEach}
 */
export function forEach(...init) {
    return new ForEach(...init)
}
