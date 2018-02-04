import { XSLAssembler } from './xsl'

export class Template extends XSLAssembler {
    set match(match) {
        this.setAttribute('match', match)
    }

    get match() {
        return this.getAttribute('match')
    }

    set name(name) {
        this.setAttribute('name', name)
    }

    get name() {
        return this.getAttribute('name')
    }

    set priority(priority) {
        this.setAttribute('priority', priority)
    }

    get priority() {
        return this.getAttribute('priority')
    }

    set mode(mode) {
        this.setAttribute('mode', mode)
    }

    get mode() {
        return this.getAttribute('mode')
    }

    set as(as) {
        this.setAttribute('as', as)
    }

    get as() {
        return this.getAttribute('as')
    }

    set visibility(visibility) {
        this.setAttribute('visibility', visibility)
    }

    get visibility() {
        return this.getAttribute('visibility')
    }
}

/**
 * @param {*} [init]
 * @returns {Template}
 */
export function template(...init) {
    return new Template(...init)
}
