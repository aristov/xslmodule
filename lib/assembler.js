import { DocumentAssembler, ElementAssembler } from 'dommodule'

const XSLT_NAMESPACE_URI = 'http://www.w3.org/1999/XSL/Transform'

const XSLT_DOCUMENT_NAME = 'transform'
const XSLT_TEMPLATE_NAME = 'template'

export class XSLTDocumentAssembler extends DocumentAssembler {
    static get namespaceURI() {
        return XSLT_NAMESPACE_URI
    }
    static get qualifiedName() {
        return XSLT_DOCUMENT_NAME
    }
}

export class XSLTElementAssembler extends ElementAssembler {
    static get namespaceURI() {
        return XSLT_NAMESPACE_URI
    }
    static get qualifiedName() {
        return XSLT_TEMPLATE_NAME
    }
}
