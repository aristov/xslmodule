import { XSLElementAssembler } from './element'

export class ValueOf extends XSLElementAssembler {
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
