import { XSLTAssembler } from './xslt'

export class Variable extends XSLTAssembler {
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

/**
 * @param {*} [init]
 * @returns {Variable}
 */
export function variable(...init) {
    return new Variable(...init)
}
