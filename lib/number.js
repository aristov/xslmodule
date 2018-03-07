import { XSLAssembler } from './xsl'

export class XSLNumber extends XSLAssembler {}

/**
 * @param {*} [init]
 * @returns {XSLNumber}
 */
export function number(...init) {
    return new XSLNumber(...init)
}
