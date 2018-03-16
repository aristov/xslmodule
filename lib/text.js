import { XSLTAssembler } from './xslt'

export class XSLText extends XSLTAssembler {}

/**
 * @param {*} [init]
 * @returns {XSLText}
 */
export function text(...init) {
    return new XSLText(...init)
}
