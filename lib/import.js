import { XSLAssembler } from './xsl'

export class Import extends XSLAssembler {}

/**
 * @param {*} [init]
 * @returns {Import}
 */
export function xslImport(...init) {
    return new Import(...init)
}
