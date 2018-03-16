import { XSLTAssembler } from './xslt'

export class Copy extends XSLTAssembler {
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
 * @returns {Copy}
 */
export function copy(...init) {
    return new Copy(...init)
}
