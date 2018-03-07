import { XSLAssembler } from './xsl'

export class Choose extends XSLAssembler {}

/**
 * @param {*} [init]
 * @returns {Choose}
 */
export function choose(...init) {
    return new Choose(...init)
}
