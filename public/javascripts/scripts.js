$(document).ready(function() {
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: "/assignment",
        complete: function(){
            console.log("Ajax call complete")
        },
        success: function(data){
            console.log(data);
            for (var app in data) {
                var foo = "app" + app;
                $('.main').append("<div id='" + foo + "'></div>");
                $("#"+foo).append(data[app]['_id'] + '</br>');
                $("#"+foo).append(data[app]['name'] + '</br>');
                $("#"+foo).append(data[app]['score'] + '</br>');
                //$("#"+foo).append("Button stuff will go here");
            }
        },
        error: function(xhr, status){
            console.log("Error : ", xhr, " ", status);
        }
    });
});