import { XSLTAssembler } from './xslt'

export class Otherwise extends XSLTAssembler {}

/**
 * @param {*} [init]
 * @returns {Otherwise}
 */
export function otherwise(...init) {
    return new Otherwise(...init)
}
