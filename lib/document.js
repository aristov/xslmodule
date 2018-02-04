import { XSLAssembler } from './xsl'

export class Document extends XSLAssembler {
    set validation(validation) {
        this.node.setAttribute('validation', validation)
    }

    get validation() {
        return this.node.getAttribute('validation')
    }

    set type(type) {
        this.node.setAttribute('type', type)
    }

    get type() {
        return this.node.getAttribute('type')
    }
}

export function document(...init) {
    return new Document(...init)
}
