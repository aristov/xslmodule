import { XSLAssembler } from './xsl'

export class ValueOf extends XSLAssembler {
    set select(select) {
        this.setAttribute('select', select)
    }

    get select() {
        return this.getAttribute('select')
    }
}

export function valueOf(...init) {
    return new ValueOf(...init)
}
