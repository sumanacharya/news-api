$(document).ready(function () {
    var a = new News();
    a.loadNews(); // getNews() accepts single number as agrument  
});

News = function () {
    this.url = 'https://newsapi.org/v2/top-headlines?country=au&category=sports';
    this.apiKey = '1fd3a874b8b4463fa1b186fe6396d4a3';
    this.numberOfItems = 10; // default number of items

    this.loadNews = function (numberOfItems) {

        var fullUrl = this.url + "&apiKey=" + this.apiKey;
        if (numberOfItems !== undefined) {
            this.numberOfItems = numberOfItems;
        }
        $.get(fullUrl, (data) => {
            var $news, $newsLink, count = 0;

            // hide the loader.
            $('#exception-handle').hide();
            
            // loop through list of news and append them to the dom element.
            $.each(data.articles, (index, news) => {
                $news = $('<li>', {
                    class: 'items--style2 items'
                });
                $newsLink = $('<a>', {
                    href: news.url
                });
                $newsLink.html(news.title);
                $news.append($newsLink);
                $('#popular-sports-news').append($news);

                // break if the number of items is greater than the limit. 
                count++;
                if (count >= this.numberOfItems) {
                    return false;
                }
            });
        }).fail(function () {
            var $message = $('<div>', { class: 'error' })
                .html('Could not load news!!');
            $('#exception-handle').html($message);
        });
    }
}