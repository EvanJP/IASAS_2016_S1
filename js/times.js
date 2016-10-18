(function ($) {
    $(function () {
        $('#boys5k').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/1rS9wqWB5NLIyhkHVpdeflZQTBW8IoT2JraCzabaZ-Cw/edit#gid=147818432",
            query: "select U,V order by V asc"
        });
        $('#boysTimeTrial').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/1rS9wqWB5NLIyhkHVpdeflZQTBW8IoT2JraCzabaZ-Cw/edit#gid=147818432",
            query: "select Y,Z order by Z asc"
        });
        $('#girls5k').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/1rS9wqWB5NLIyhkHVpdeflZQTBW8IoT2JraCzabaZ-Cw/edit#gid=641966298",
            query: "select U,V order by V asc"
        });
        $('#girlsTimeTrial').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/1rS9wqWB5NLIyhkHVpdeflZQTBW8IoT2JraCzabaZ-Cw/edit#gid=641966298",
            query: "select Y,Z order by Z asc"
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space