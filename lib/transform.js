import { DocumentAssembler } from 'dommodule/lib/index'
import { XSLAssembler } from './xsl'

export class Transform extends XSLAssembler {
    set defaultCollation(defaultCollation) {
        this.setAttribute('default-collation', defaultCollation)
    }

    get defaultCollation() {
        return this.getAttribute('default-collation')
    }

    set defaultMode(defaultMode) {
        this.setAttribute('default-mode', defaultMode)
    }

    get defaultMode() {
        return this.getAttribute('default-mode')
    }

    set defaultValidation(defaultValidation) {
        this.setAttribute('default-validation', defaultValidation)
    }

    get defaultValidation() {
        return this.getAttribute('default-validation')
    }

    set excludeResultPrefixes(excludeResultPrefixes) {
        this.setAttribute('exclude-result-prefixes', excludeResultPrefixes)
    }

    get excludeResultPrefixes() {
        return this.getAttribute('exclude-result-prefixes')
    }

    set expandText(expandText) {
        this.setAttribute('expand-text', expandText)
    }

    get expandText() {
        return this.getAttribute('expand-text')
    }

    set extensionElementPrefixes(extensionElementPrefixes) {
        this.setAttribute('extension-element-prefixes', extensionElementPrefixes)
    }

    get extensionElementPrefixes() {
        return this.getAttribute('extension-element-prefixes')
    }

    set inputTypeAnnotations(inputTypeAnnotations) {
        this.setAttribute('input-type-annotations', inputTypeAnnotations)
    }

    get inputTypeAnnotations() {
        return this.getAttribute('input-type-annotations')
    }

    set select(select) {
        this.setAttribute('select', select)
    }

    get select() {
        return this.getAttribute('select')
    }

    set useWhen(useWhen) {
        this.setAttribute('use-when', useWhen)
    }

    get useWhen() {
        return this.getAttribute('use-when')
    }

    set version(version) {
        this.setAttribute('version', version)
    }

    get version() {
        return this.getAttribute('version')
    }

    set xpathDefaultNamespace(xpathDefaultNamespace) {
        this.setAttribute('xpath-default-namespace', xpathDefaultNamespace)
    }

    get xpathDefaultNamespace() {
        return this.getAttribute('xpath-default-namespace')
    }
}

export class XSLTransform extends DocumentAssembler {
    /**
     * @returns {Function} XSLAssembler
     */
    static get elementAssembler() {
        return Transform
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return this.elementAssembler.localName
    }

    /**
     * @returns {String}
     */
    static get namespace() {
        return this.elementAssembler.namespace
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return this.elementAssembler.prefix
    }
}

/**
 * @param {*} [init]
 * @returns {Transform}
 */
export function transform(...init) {
    return new Transform(...init)
}
