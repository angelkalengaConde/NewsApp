angular.module("newsApp")
    .constant('ApiConstant', {
        API_URL: {
            topHeadlines: 'https://newsapi.org/v2/top-headlines',
            everything: 'https://newsapi.org/v2/everything',
            key:'15dd7674bd0a4bdc8be2695827dbb593',
            countryCode: 'gb'
        }
    });
