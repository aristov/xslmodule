import { XSLTAssembler } from './xslt'

export class XSLElement extends XSLTAssembler {
    /**
     * @param {{}} init
     * @param {String} [init.namespace]
     */
    assign(init) {
        if(init.hasOwnProperty('namespace')) {
            this.namespace = init.namespace
        }
        super.assign(init)
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.setAttribute('name', name)
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.getAttribute('name')
    }

    /**
     * @param {String} namespace
     */
    set namespace(namespace) {
        this.setAttribute('namespace', namespace)
    }

    /**
     * @returns {String}
     */
    get namespace() {
        return this.getAttribute('namespace')
    }

    /**
     * @param {String} inheritNamespaces
     */
    set inheritNamespaces(inheritNamespaces) {
        this.setAttribute('inherit-namespaces', inheritNamespaces)
    }

    /**
     * @returns {String}
     */
    get inheritNamespaces() {
        return this.getAttribute('inherit-namespaces')
    }

    /**
     * @param {String} useAttributeSets
     */
    set useAttributeSets(useAttributeSets) {
        this.setAttribute('use-attribute-sets', useAttributeSets)
    }

    /**
     * @returns {String}
     */
    get useAttributeSets() {
        return this.getAttribute('use-attribute-sets')
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.setAttribute('type', type)
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.getAttribute('type')
    }

    /**
     * @param {String} validation
     */
    set validation(validation) {
        this.setAttribute('validation', validation)
    }

    /**
     * @returns {String}
     */
    get validation() {
        return this.getAttribute('validation')
    }
}

/**
 * @param {*} [init]
 * @returns {XSLElement}
 */
export function element(...init) {
    return new XSLElement(...init)
}
