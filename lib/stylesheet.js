import { XSLAssembler } from './xsl'

export class Stylesheet extends XSLAssembler {}

Stylesheet.defineAttributes([
    'default-collation',
    'default-mode',
    'default-validation',
    'exclude-result-prefixes',
    'expand-text',
    'extension-element-prefixes',
    'input-type-annotations',
    'select',
    'use-when',
    'version',
    'xpath-default-namespace'
])

/**
 * @param {*} [init]
 * @returns {Stylesheet}
 */
export function stylesheet(...init) {
    return new Stylesheet(...init)
}
