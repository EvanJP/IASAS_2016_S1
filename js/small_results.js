(function($){
    $(function(){
       $('#boysCR').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/1rS9wqWB5NLIyhkHVpdeflZQTBW8IoT2JraCzabaZ-Cw/edit#gid=807935627",
            query: "select Q,R,S"
        });
        $('#girlsCR').sheetrock({
            url: "https://docs.google.com/spreadsheets/d/1rS9wqWB5NLIyhkHVpdeflZQTBW8IoT2JraCzabaZ-Cw/edit#gid=807935627",
            query: "select U,V,W"
        });
    });
})(jQuery);