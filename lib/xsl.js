import { ElementAssembler } from 'dommodule'

const NAMESPACE = 'http://www.w3.org/1999/XSL/Transform'
const PREFIX = 'xsl'
const LOCAL_NAME = 'transform'
const LOCAL_NAME_RE = /[A-Z]/g
const LOCAL_NAME_SEPARATOR = '-'

export class XSLAssembler extends ElementAssembler {
    /**
     * @returns {String}
     */
    static get namespace() {
        return NAMESPACE
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return PREFIX
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return this === XSLAssembler?
            LOCAL_NAME :
            this.name.replace(/^XSL/, '').replace(LOCAL_NAME_RE, (letter, position) => {
                return position?
                    LOCAL_NAME_SEPARATOR + letter.toLowerCase() :
                    letter.toLowerCase()
            })
    }
}
