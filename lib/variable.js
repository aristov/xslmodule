import { XSLAssembler } from './xsl'

export class Variable extends XSLAssembler {
    /**
     * @param {String|null} name
     */
    set name(name) {
        this.setAttribute('name', name)
    }

    /**
     * @returns {String|null}
     */
    get name() {
        return this.getAttribute('name')
    }

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
