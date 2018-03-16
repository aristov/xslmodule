import { XSLTAssembler } from './xslt'

export class XSLNumber extends XSLTAssembler {}

/**
 * @param {*} [init]
 * @returns {XSLNumber}
 */
export function number(...init) {
    return new XSLNumber(...init)
}
