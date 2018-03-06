import { XMLElementAssembler } from 'xmlmodule'

const EMPTY_STRING = ''
const LOCAL_NAME = 'transform'
const LOCAL_NAME_RE = /[A-Z]/g
const LOCAL_NAME_SEPARATOR = '-'
const NAMESPACE = 'http://www.w3.org/1999/XSL/Transform'
const NAMESPACE_PREFIX = 'xsl'
const CLASS_PREFIX_RE = /^XSL/

export class XSLAssembler extends XMLElementAssembler {
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
        return NAMESPACE_PREFIX
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return this === XSLAssembler?
            LOCAL_NAME :
            this.name.replace(CLASS_PREFIX_RE, EMPTY_STRING)
                .replace(LOCAL_NAME_RE, (letter, position) => {
                    return position?
                        LOCAL_NAME_SEPARATOR + letter.toLowerCase() :
                        letter.toLowerCase()
                })
    }
}
