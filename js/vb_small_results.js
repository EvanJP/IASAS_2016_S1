(function($){
    $(function(){
        $('#resultsRe').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/12yDHwtchlYFvseM8UMn14-IS5ThwTGvY_5jfkIg1tLc/edit#gid=217880517",
            query: "select K,L,M,N",
            fetchSize: 6
        });
    });
})(jQuery);