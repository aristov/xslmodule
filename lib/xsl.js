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
     * @param {String[]} attrNames
     */
    static defineAttributes(attrNames) {
        attrNames.forEach(name => this.defineAttribute(name))
    }

    /**
     * @param {String} name
     */
    static defineAttribute(name) {
        const propName = name.replace(/-(\w)/g, w => w.toUpperCase())
        Object.defineProperty(this.prototype, propName, {
            configurable : true,
            /**
             * @param {String} value
             */
            set(value) {
                this.setAttribute(name, value)
            },
            /**
             * @returns {String}
             */
            get() {
                return this.getAttribute(name)
            }
        })
    }

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
