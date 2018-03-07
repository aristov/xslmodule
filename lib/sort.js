import { XSLAssembler } from './xsl'

export class Sort extends XSLAssembler {}

/**
 * @param {*} [init]
 * @returns {Sort}
 */
export function sort(...init) {
    return new Sort(...init)
}
