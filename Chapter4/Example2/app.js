var main = function () {
    "use strict";
	var $;
    var addCommentFromInputBox = function () {
        var $new_comment;
		var $u2_comment;

        if ($(".comment-input input").val() !== "") {
		$new_comment = $("<p class=\"u1\">").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
		else if ($(".user2comment-input input").val() !== "") {
            $u2_comment = $("<p class=\"u2\">").text($(".user2comment-input input").val());
            $u2_comment.hide();
            $(".comments").append($u2_comment);
            $u2_comment.fadeIn();
            $(".user2comment-input input").val("");
        }
		
    };

    $(".user2comment-input button").on("click", function (event1) {
        addCommentFromInputBox();
    });
	

    $(".user2comment-input input").on("keypress", function (event1) {
        if (event1.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
	$(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });
	

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);
