(function ($) {
    $(function () {
        $('#boys1').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/12yDHwtchlYFvseM8UMn14-IS5ThwTGvY_5jfkIg1tLc/edit#gid=0",
            query: "select A,B,C,D"
        });
        $('#girls1').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/12yDHwtchlYFvseM8UMn14-IS5ThwTGvY_5jfkIg1tLc/edit#gid=0",
            query: "select F,G,H,I"
        });
        $('#boys2').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/12yDHwtchlYFvseM8UMn14-IS5ThwTGvY_5jfkIg1tLc/edit#gid=0",
            query: "select K,L,M,N",
            fetchSize: 7
        });
        $('#girls2').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/12yDHwtchlYFvseM8UMn14-IS5ThwTGvY_5jfkIg1tLc/edit#gid=0",
            query: "select P,Q,R,S",
            fetchSize: 7
        });
        $('#playoff').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/12yDHwtchlYFvseM8UMn14-IS5ThwTGvY_5jfkIg1tLc/edit#gid=242572094",
            query: "select A,B,C,D",
            fetchSize: 5
        });
        $('#finalScore').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/12yDHwtchlYFvseM8UMn14-IS5ThwTGvY_5jfkIg1tLc/edit#gid=242572094",
            query: "select K,L,M,N",
            fetchSize: 2
        });
        $('#cons').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/12yDHwtchlYFvseM8UMn14-IS5ThwTGvY_5jfkIg1tLc/edit#gid=242572094",
            query: "select F,G,H,I",
            fetchSize: 2
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space