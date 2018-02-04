import { XSLAssembler } from './xsl'

export class Element extends XSLAssembler {
    assign(init) {
        super.assign(init)
        if('namespace' in init) this.namespace = init.namespace
    }

    set name(name) {
        this.node.setAttribute('name', name)
    }

    get name() {
        return this.node.getAttribute('name')
    }

    set namespace(namespace) {
        this.node.setAttribute('namespace', namespace)
    }

    get namespace() {
        return this.node.getAttribute('namespace')
    }

    set inheritNamespaces(inheritNamespaces) {
        this.node.setAttribute('inherit-namespaces', inheritNamespaces)
    }

    get inheritNamespaces() {
        return this.node.getAttribute('inherit-namespaces')
    }

    set useAttributeSets(useAttributeSets) {
        this.node.setAttribute('use-attribute-sets', useAttributeSets)
    }

    get useAttributeSets() {
        return this.node.getAttribute('use-attribute-sets')
    }

    set type(type) {
        this.node.setAttribute('type', type)
    }

    get type() {
        return this.node.getAttribute('type')
    }

    set validation(validation) {
        this.node.setAttribute('validation', validation)
    }

    get validation() {
        return this.node.getAttribute('validation')
    }
}

export function element(...init) {
    return new Element(...init)
}
