import { XSLTAssembler } from './xslt'

export class Choose extends XSLTAssembler {}

/**
 * @param {*} [init]
 * @returns {Choose}
 */
export function choose(...init) {
    return new Choose(...init)
}
