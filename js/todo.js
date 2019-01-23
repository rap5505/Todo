// Check off Todo by click event! 

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
})

// Click on Delete button to delete the completed TODO

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    })
    event.stopPropogation();
})

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        let nextTodo = $(this).val();
        $(this).val("");
        // Create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + nextTodo + "</li>")
    }
})


// TOGGLE
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})