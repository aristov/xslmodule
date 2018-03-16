import { XSLTAssembler } from './xslt'

export class Import extends XSLTAssembler {}

/**
 * @param {*} [init]
 * @returns {Import}
 */
export function xslImport(...init) {
    return new Import(...init)
}
