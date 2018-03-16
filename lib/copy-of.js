import { XSLTAssembler } from './xslt'

export class CopyOf extends XSLTAssembler {
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

    /**
     * @returns {String}
     */
    static get initPropertyName() {
        return 'select'
    }
}

/**
 * @param {{select}|String} init
 * @returns {CopyOf}
 */
export function copyOf(...init) {
    return new CopyOf(...init)
}
