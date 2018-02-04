import { XSLAssembler } from './xsl'

export class ApplyTemplates extends XSLAssembler {
    set select(select) {
        this.setAttribute('select', select)
    }

    get select() {
        return this.getAttribute('select')
    }

    set mode(mode) {
        this.setAttribute('mode', mode)
    }

    get mode() {
        return this.getAttribute('mode')
    }
}

export function applyTemplates(...init) {
    return new ApplyTemplates(...init)
}
