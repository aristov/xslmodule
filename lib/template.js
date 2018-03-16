import { XSLTAssembler } from './xslt'

export class Template extends XSLTAssembler {
    /**
     * @param {String} match
     */
    set match(match) {
        this.setAttribute('match', match)
    }

    /**
     * @returns {String}
     */
    get match() {
        return this.getAttribute('match')
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
     * @param {String} priority
     */
    set priority(priority) {
        this.setAttribute('priority', priority)
    }

    /**
     * @returns {String}
     */
    get priority() {
        return this.getAttribute('priority')
    }

    /**
     * @param {String} mode
     */
    set mode(mode) {
        this.setAttribute('mode', mode)
    }

    /**
     * @returns {String}
     */
    get mode() {
        return this.getAttribute('mode')
    }

    /**
     * @param {String} as
     */
    set as(as) {
        this.setAttribute('as', as)
    }

    /**
     * @returns {String}
     */
    get as() {
        return this.getAttribute('as')
    }

    /**
     * @param {String} visibility
     */
    set visibility(visibility) {
        this.setAttribute('visibility', visibility)
    }

    /**
     * @returns {String}
     */
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
