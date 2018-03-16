import { XSLTAssembler } from './xslt'

export class ValueOf extends XSLTAssembler {
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
 * @param {*} [init]
 * @returns {ValueOf}
 */
export function valueOf(...init) {
    return new ValueOf(...init)
}
