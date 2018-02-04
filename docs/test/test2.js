import { element } from 'dommodule'
import { XSLDocumentAssembler, applyTemplates, template, valueOf } from '../../lib'

const html = children => element({ localName : 'html' , children })
const title = children => element({ localName : 'title' , children })
const meta = ({ charset }) => element({ localName : 'meta' , attrset : { charset } })
const link = ({ rel, href }) => element({ localName : 'link' , attrset : { rel, href } })
const table = children => element({ localName : 'table' , children })
const tr = children => element({ localName : 'tr' , children })
const th = children => element({ localName : 'th' , children })
const td = children => element({ localName : 'td' , children })

const stylesheet = new XSLDocumentAssembler({
    documentElement : {
        version : '3.0',
        children : [
            template({
                match : '/',
                children : html([
                    title('Schedule'),
                    meta({ charset : 'utf-8' }),
                    link({ rel : 'stylesheet', href : 'test.css' }),
                    applyTemplates()
                ])
            }),
            template({
                match : 'schedule',
                children : table([
                    tr([
                        th('Agent'),
                        th('Subject'),
                        th('Start Time'),
                        th('End Time')
                    ]),
                    applyTemplates()
                ])
            }),
            template({
                match : 'interval',
                children : tr([
                    td(valueOf({ select : 'agent' })),
                    td(valueOf({ select : 'subject' })),
                    td(valueOf({ select : 'startTime' })),
                    td(valueOf({ select : 'endTime' }))
                ])
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
