import { XSLAssembler } from './xsl'

export class If extends XSLAssembler {
    /**
     * @param {String} test
     */
    set test(test) {
        this.setAttribute('test', test)
    }

    /**
     * @returns {String}
     */
    get test() {
        return this.getAttribute('test')
    }

    /**
     * @returns {String}
     */
    static get initPropertyName() {
        return 'test'
    }
}

/**
 * @param {*} [init]
 * @returns {If}
 */
export function xslIf(...init) {
    return new If(...init)
}
