import { XSLAssembler } from './xsl'

export class Transform extends XSLAssembler {
    /**
     * @param {String} defaultCollation
     */
    set defaultCollation(defaultCollation) {
        this.setAttribute('default-collation', defaultCollation)
    }

    /**
     * @returns {String}
     */
    get defaultCollation() {
        return this.getAttribute('default-collation')
    }

    /**
     * @param {String} defaultMode
     */
    set defaultMode(defaultMode) {
        this.setAttribute('default-mode', defaultMode)
    }

    /**
     * @returns {String}
     */
    get defaultMode() {
        return this.getAttribute('default-mode')
    }

    /**
     * @param {String} defaultValidation
     */
    set defaultValidation(defaultValidation) {
        this.setAttribute('default-validation', defaultValidation)
    }

    /**
     * @returns {String}
     */
    get defaultValidation() {
        return this.getAttribute('default-validation')
    }

    /**
     * @param {String} excludeResultPrefixes
     */
    set excludeResultPrefixes(excludeResultPrefixes) {
        this.setAttribute('exclude-result-prefixes', excludeResultPrefixes)
    }

    /**
     * @returns {String}
     */
    get excludeResultPrefixes() {
        return this.getAttribute('exclude-result-prefixes')
    }

    /**
     * @param {String} expandText
     */
    set expandText(expandText) {
        this.setAttribute('expand-text', expandText)
    }

    /**
     * @returns {String}
     */
    get expandText() {
        return this.getAttribute('expand-text')
    }

    /**
     * @param {String} extensionElementPrefixes
     */
    set extensionElementPrefixes(extensionElementPrefixes) {
        this.setAttribute('extension-element-prefixes', extensionElementPrefixes)
    }

    /**
     * @returns {String}
     */
    get extensionElementPrefixes() {
        return this.getAttribute('extension-element-prefixes')
    }

    /**
     * @param {String} inputTypeAnnotations
     */
    set inputTypeAnnotations(inputTypeAnnotations) {
        this.setAttribute('input-type-annotations', inputTypeAnnotations)
    }

    /**
     * @returns {String}
     */
    get inputTypeAnnotations() {
        return this.getAttribute('input-type-annotations')
    }

    /**
     * @param {String} select
     */
    set select(select) {
        this.setAttribute('select', select)
    }

    /**
     * @returns {String}
     */
    get select() {
        return this.getAttribute('select')
    }

    /**
     * @param {String} useWhen
     */
    set useWhen(useWhen) {
        this.setAttribute('use-when', useWhen)
    }

    /**
     * @returns {String}
     */
    get useWhen() {
        return this.getAttribute('use-when')
    }

    /**
     * @param {String} version
     */
    set version(version) {
        this.setAttribute('version', version)
    }

    /**
     * @returns {String}
     */
    get version() {
        return this.getAttribute('version')
    }

    /**
     * @param {String} xpathDefaultNamespace
     */
    set xpathDefaultNamespace(xpathDefaultNamespace) {
        this.setAttribute('xpath-default-namespace', xpathDefaultNamespace)
    }

    /**
     * @returns {String}
     */
    get xpathDefaultNamespace() {
        return this.getAttribute('xpath-default-namespace')
    }
}

/**
 * @param {*} [init]
 * @returns {Transform}
 */
export function transform(...init) {
    return new Transform(...init)
}
