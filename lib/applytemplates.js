import { XSLElementAssembler } from './element'

export class ApplyTemplates extends XSLElementAssembler {}

export function applyTemplates(...init) {
    return new ApplyTemplates(...init)
}
