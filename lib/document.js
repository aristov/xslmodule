import { DocumentAssembler } from 'dommodule'
import { XSLElementAssembler } from 'element'

export class XSLDocumentAssembler extends DocumentAssembler {
    /**
     * @returns {Function} XSLElementAssembler
     */
    static get elementAssembler() {
        return XSLElementAssembler
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return this.elementAssembler.localName
    }

    /**
     * @returns {String}
     */
    static get namespace() {
        return this.elementAssembler.namespace
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return this.elementAssembler.prefix
    }
}
