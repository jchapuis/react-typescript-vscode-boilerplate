import * as $ from 'jquery';
import * as Rx from 'rxjs/Rx';
declare var module: any;
module.hot.accept();

class App {
    private subscription: Rx.Subscription;

    constructor() {
        const $input = $('#textInput');
        const throttledInput = Rx.Observable.fromEvent<Event>($input, 'keyup')
            .map(e => (e.target as HTMLInputElement).value)     // project the text from the input
            .filter(text => text.length > 2)                    // only if the text is longer than 2 chars
            .debounceTime(500)                                  // max query rate is one every 200ms
            .distinctUntilChanged();                            // only if the value has changed

        // launch search for each input, switching on latest results and cancelling any preceding searches
        // possibly still in-flight
        const searches = throttledInput
            .switchMap(Helpers.searchWikipedia) ;

        const $results = $('#results');
        this.subscription = searches
            .do(_ => $results.empty(),
            error => $results.empty().append($('<li>').text('Error:' + error)))
            .flatMap(data => data[1] as string[])
            .do(text => $results.append($('<li>').text(text)))
            .subscribe();
    }
}

class Helpers {
    public static searchWikipedia(term: string) {
        const settings: JQueryAjaxSettings = {
            url: 'http://en.wikipedia.org/w/api.php',
            dataType: 'jsonp',
            data: {
                action: 'opensearch',
                format: 'json',
                search: term
            }
        };
        return $.ajax(settings).promise();
    }
}

const app = new App();
