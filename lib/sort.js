import { XSLTAssembler } from './xslt'

export class Sort extends XSLTAssembler {}

/**
 * @param {*} [init]
 * @returns {Sort}
 */
export function sort(...init) {
    return new Sort(...init)
}
