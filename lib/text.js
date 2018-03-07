import { XSLAssembler } from './xsl'

export class XSLText extends XSLAssembler {}

/**
 * @param {*} [init]
 * @returns {XSLText}
 */
export function text(...init) {
    return new XSLText(...init)
}
