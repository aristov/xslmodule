import { ElementAssembler } from 'dommodule'

const NAMESPACE = 'http://www.w3.org/1999/XSL/Transform'
const PREFIX = 'xsl'
const LOCAL_NAME = 'transform'

export class XSLElementAssembler extends ElementAssembler {
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
        return this === XSLElementAssembler?
            LOCAL_NAME :
            this.name.replace(/[A-Z]/g, (letter, position) => {
                return position?
                    '-' + letter.toLowerCase() :
                    letter.toLowerCase()
            })
    }
}
