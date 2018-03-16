import { XMLElementAssembler } from 'xmlmodule'

const { defineProperty } = Object
const ATTR_NAME_RE = /(-\w)/g
const CLASS_PREFIX_RE = /^XSL/
const DEFAULT_LOCAL_NAME = 'transform'
const EMPTY_STRING = ''
const LOCAL_NAME_RE = /[A-Z]/g
const LOCAL_NAME_SEPARATOR = '-'
const XSLT_NAMESPACE_PREFIX = 'xsl'
const XSLT_NAMESPACE_URI = 'http://www.w3.org/1999/XSL/Transform'

export class XSLAssembler extends XMLElementAssembler {
    /**
     * @param {String} name
     */
    static defineAttribute(name) {
        defineProperty(this.prototype, name.replace(ATTR_NAME_RE, toUpperCase), {
            configurable : true,
            set(value) {
                this.setAttribute(name, value)
            },
            get() {
                return this.getAttribute(name)
            }
        })
    }

    /**
     * @param {String[]} names
     */
    static defineAttributes(names) {
        names.forEach(name => this.defineAttribute(name))
    }

    /**
     * @returns {String}
     */
    static get namespace() {
        return XSLT_NAMESPACE_URI
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return XSLT_NAMESPACE_PREFIX
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return this === XSLAssembler?
            DEFAULT_LOCAL_NAME :
            this.name.replace(CLASS_PREFIX_RE, EMPTY_STRING)
                .replace(LOCAL_NAME_RE, toLowerCase)
    }
}

/**
 * @param {String} letter
 * @returns {String}
 */
function toUpperCase(letter) {
    return letter[1].toUpperCase()
}

/**
 * @param {String} letter
 * @param {Number} position
 * @returns {String}
 */
function toLowerCase(letter, position) {
    return position?
        LOCAL_NAME_SEPARATOR + letter.toLowerCase() :
        letter.toLowerCase()
}
