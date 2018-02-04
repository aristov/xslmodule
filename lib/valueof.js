import { XSLAssembler } from './xsl'

export class ValueOf extends XSLAssembler {
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

export function valueOf(...init) {
    return new ValueOf(...init)
}
