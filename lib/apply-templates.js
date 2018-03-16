import { XSLAssembler } from './xsl'

export class ApplyTemplates extends XSLAssembler {
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

    /**
     * @param {String} mode
     */
    set mode(mode) {
        this.setAttribute('mode', mode)
    }

    /**
     * @returns {String}
     */
    get mode() {
        return this.getAttribute('mode')
    }
}

/**
 * @param {*} [init]
 * @returns {ApplyTemplates}
 */
export function applyTemplates(...init) {
    return new ApplyTemplates(...init)
}
