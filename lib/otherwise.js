import { XSLAssembler } from './xsl'

export class Otherwise extends XSLAssembler {}

/**
 * @param {*} [init]
 * @returns {Otherwise}
 */
export function otherwise(...init) {
    return new Otherwise(...init)
}
