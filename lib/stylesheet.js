import { XSLAssembler } from './xsl'

export class Stylesheet extends XSLAssembler {}

/**
 * @param {*} [init]
 * @returns {Stylesheet}
 */
export function stylesheet(...init) {
    return new Stylesheet(...init)
}
