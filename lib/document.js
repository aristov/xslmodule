import { XSLAssembler } from './xsl'

export class XSLDocument extends XSLAssembler {
    /**
     * @param {String} validation
     */
    set validation(validation) {
        this.setAttribute('validation', validation)
    }

    /**
     * @returns {String}
     */
    get validation() {
        return this.getAttribute('validation')
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.setAttribute('type', type)
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.getAttribute('type')
    }
}

/**
 * @param {*} [init]
 * @retuns {XSLDocument}
 */
export function document(...init) {
    return new XSLDocument(...init)
}
