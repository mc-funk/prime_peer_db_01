$(document).ready(function() {
    populatePage();

    $('.main').on("click", ".delete", function() {
        console.log($(this));
        var assignID = $(this).data('id');
        $('.main').empty();
        $.ajax({
            type: 'DELETE',
            datatype: 'json',
            url: "/assignment/" + assignID,
            complete: function(){
            console.log("Ajax delete call complete");
            },
            success: function(post){
                console.log("delete successful: ", post);
            },
            error: function(xhr, err){
                console.log("delete error: ", err);
            }
        });
        populatePage();
    });
});

function populatePage() {
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
                $('.main').append("<div class='thisAssignment' id='" + foo + "'></div>");
                $("#"+foo).append(data[app]['_id'] + '</br>');
                $("#"+foo).append(data[app]['name'] + '</br>');
                $("#"+foo).append(data[app]['score'] + '</br>');
                $("#"+foo).append("<button class='delete' id='delete"+ app + "' data-id='" + data[app]['_id'] + "'>Delete</button>");
            }
        },
        error: function(xhr, status){
            console.log("Error : ", xhr, " ", status);
        }
    });
}