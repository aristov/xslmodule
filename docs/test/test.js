const processor = new XSLTProcessor
const parser = new DOMParser

fetch('./test.xsl')
    .then(result => result.text())
    .then(result => {
        const stylesheet = parser.parseFromString(result, 'application/xml')
        processor.importStylesheet(stylesheet)
        fetch('./test.xml')
            .then(result => result.text())
            .then(result => {
                const data = parser.parseFromString(result, 'application/xml')
                const markup = processor.transformToDocument(data)
                document.documentElement.replaceWith(markup.documentElement)
            })
    })
