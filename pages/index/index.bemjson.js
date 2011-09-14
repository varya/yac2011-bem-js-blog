({
    block: 'b-page',
    title: 'Видео докладов',
    head: [
        { elem: 'css', url: 'index.css'},
        { elem: 'css', url: 'index.ie.css', ie: 'lt IE 8'},
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'index.js'},
    ],
    content: {
        block: 'b-post',
        content: {
            block: 'b-text',
            content: [
                { elem: 'h4', content: 'БЭМ!' },
                { elem: 'p', content: 'Что такое методология БЭМ' },
                '<object width="450" height="254"><param name="video" value="http://static.video.yandex.ru/lite/toivonens/nrqd7riz3k.2321/"/><param name="allowFullScreen" value="true"/><param name="scale" value="noscale"/><embed src="http://static.video.yandex.ru/lite/toivonens/nrqd7riz3k.2321/" type="application/x-shockwave-flash" width="450" height="254" allowFullScreen="true" scale="noscale"/></object>',
                { elem: 'h4', content: 'bemhtml — bem js-шаблонизатор' },
                { elem: 'p', content: 'bemhtml — это надмножество xjst, позволяющее писать шаблоны блоков, которые затем компилируются в plain JavaScript. При помощи таких шаблонов из JSON-описания страницы (bemjson)  можно получить html.' },
                '<object width="450" height="254"><param name="video" value="http://static.video.yandex.ru/lite/toivonens/p6evsqf6vz.3007/"/><param name="allowFullScreen" value="true"/><param name="scale" value="noscale"/><embed src="http://static.video.yandex.ru/lite/toivonens/p6evsqf6vz.3007/" type="application/x-shockwave-flash" width="450" height="254" allowFullScreen="true" scale="noscale"/></object',
                { elem: 'h4', content: 'xjst — низкоуровневый js-шаблонизатор' },
                { elem: 'p', content: 'XJST — это шаблонизатор, обрабатывающий данные в формате JSON, семантика которого имеет много общего с языком XSL. В докладе описывает синтаксис XJST, который является надмножеством JS, а также объясняются особенности работы компилятора из XJST в чистый JS.' },
                '<object width="450" height="254"><param name="video" value="http://static.video.yandex.ru/lite/toivonens/xkkclw8mi0.2701/"/><param name="allowFullScreen" value="true"/><param name="scale" value="noscale"/><embed src="http://static.video.yandex.ru/lite/toivonens/xkkclw8mi0.2701/" type="application/x-shockwave-flash" width="450" height="254" allowFullScreen="true" scale="noscale"/></object>',
                { elem: 'h4', content: 'i-bem.js — javascript блок, помогающий-делать-другие-блоки' },
                { elem: 'p', content: 'JavaScript-реализация блока i-bem — это фреймворк для работы со страницей в БЭМ-терминах. Фреймворк позволяет декларативно описывать поведение каждого блока и предоставляет хелперы для разработки.' },
                '<object width="450" height="254"><param name="video" value="http://static.video.yandex.ru/lite/toivonens/kpd971u3cy.3127/"/><param name="allowFullScreen" value="true"/><param name="scale" value="noscale"/><embed src="http://static.video.yandex.ru/lite/toivonens/kpd971u3cy.3127/" type="application/x-shockwave-flash" width="450" height="254" allowFullScreen="true" scale="noscale"/></object>'
            ]
        }
    }
})
