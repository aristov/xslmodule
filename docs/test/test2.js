import { element } from 'dommodule'
import { XSLDocumentAssembler, applyTemplates, template, valueOf } from '../../lib'

const stylesheet = new XSLDocumentAssembler({
    documentElement : {
        version : '3:0',
        children : [
            template({
                match : '/',
                children : element({
                    localName : 'html',
                    children : [
                        element({
                            localName : 'title',
                            children : 'Schedule'
                        }),
                        element({
                            localName : 'meta',
                            attrset : { charset : 'utf-8' }
                        }),
                        element({
                            localName : 'link',
                            attrset : {
                                rel : 'stylesheet',
                                href : 'test.css'
                            }
                        }),
                        applyTemplates()
                    ]
                })
            }),
            template({
                match : 'schedule',
                children : element({
                    localName : 'table',
                    children : [
                        element({
                            localName : 'tr',
                            children : [
                                element({
                                    localName : 'th',
                                    children : 'Agent'
                                }),
                                element({
                                    localName : 'th',
                                    children : 'Subject'
                                }),
                                element({
                                    localName : 'th',
                                    children : 'Start Time'
                                }),
                                element({
                                    localName : 'th',
                                    children : 'End Time'
                                })
                            ]
                        }),
                        applyTemplates()
                    ]
                })
            }),
            template({
                match : 'interval',
                children : element({
                    localName : 'tr',
                    children : [
                        element({
                            localName : 'td',
                            children : valueOf({ select : 'agent' })
                        }),
                        element({
                            localName : 'td',
                            children : valueOf({ select : 'subject' })
                        }),
                        element({
                            localName : 'td',
                            children : valueOf({ select : 'startTime' })
                        }),
                        element({
                            localName : 'td',
                            children : valueOf({ select : 'endTime' })
                        })
                    ]
                })
            })
        ]
    }
})

const processor = new XSLTProcessor
const parser = new DOMParser

processor.importStylesheet(stylesheet.node)

fetch('./test.xml')
    .then(result => result.text())
    .then(result => {
        const data = parser.parseFromString(result, 'application/xml')
        const markup = processor.transformToDocument(data)
        document.documentElement.replaceWith(markup.documentElement)
    })
