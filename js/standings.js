(function ($) {
    $(function () {
        $('.button-collapse').sideNav({
            menuWidth: 240, // Default is 240
        });
        $('#boysStandings').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/12yDHwtchlYFvseM8UMn14-IS5ThwTGvY_5jfkIg1tLc/edit#gid=2080227209",
            query: "select A,B,C,D,E,F,G,L,M order by M asc"
        });
        $('#girlsStandings').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/12yDHwtchlYFvseM8UMn14-IS5ThwTGvY_5jfkIg1tLc/edit#gid=2080227209",
            query: "select T,U,V,W,X,Y,Z,AE,AF order by AF asc"
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space