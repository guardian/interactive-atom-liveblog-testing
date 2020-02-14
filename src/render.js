import mainTemplate from './src/templates/main.html!text'
import Mustache from 'mustache'
import rp from 'request-promise'

export function render() {
    return rp({
        uri: 'https://content.guardianapis.com/politics/live/2020/feb/14/cabinet-reshuffle-boris-johnson-to-chair-first-meeting-of-new-cabinet-after-reshuffle-live-news?format=json&api-key=teleporter-view-826c7406-67db-4c16&show-elements=all&show-atoms=all&show-rights=all&show-fields=all&show-tags=all&show-blocks=all&show-references=all',
        json: true
    }).then((data) => {
        var newData = data.response.content;
        var html = Mustache.render(mainTemplate, newData);
        return html;
    });
}