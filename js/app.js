$(function () {

    var placeChoices = $(".body");

    var pageSahara = $(".page-sahara");
    var pageAmazon = $(".page-amazon");
    var pageArctic = $(".page-arctic");
    var pageIndia = $(".page-india");

    $('.sahara', placeChoices).on("click", function (event) {
        pageSahara.css("display", "flex");
        placeChoices.hide();
    });

    $('.amazon', placeChoices).on("click", function (event) {
        pageAmazon.css("display", "flex");
        placeChoices.hide();
    });

    $('.arctic', placeChoices).on("click", function (event) {
        pageArctic.css("display", "flex");
        placeChoices.hide();
    });

    $('.india', placeChoices).on("click", function (event) {
        pageIndia.css("display", "flex");
        placeChoices.hide();
    });


    var todo = $("div.todo");

    function updateTaskCounter() {

        var todoTasksLength = $('li:not(.done)', todo).length;

        $('.todo-tasks-counter span', todo).text(todoTasksLength);
    }

    $('.add-button', todo).click(function (event) {

        var nameOfNewTask = $('input', todo).val();

        if (nameOfNewTask.length < 5 || nameOfNewTask.length > 100) {
            alert("Insert proper value");
            return;
        }

        $('input', todo).val('');

        var newTaskItem = $("<li>").text(nameOfNewTask);

        var buttonDelete = $('<button class="btn btn-danger delete-item-button btn-xs"> <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>').click(function () {
            newTaskItem.remove();
            updateTaskCounter();
        });

        var buttonComplete = $('<button class="btn btn-success delete-item-button btn-xs"> <span class="glyphicon glyphicon-ok" aria-hidden="true"></button>').click(function () {
            newTaskItem.toggleClass("done");
            updateTaskCounter();
        });

        newTaskItem.append(buttonDelete);
        newTaskItem.append(buttonComplete);

        $('.tasks ul', todo).append(newTaskItem);

        updateTaskCounter();

        $('.remove-done-button', todo).click(function () {
            $("li.done", todo).remove();
        });
    });

    var prev = document.getElementById("prevPicture");
    var next = document.getElementById("nextPicture");
    var slider = document.querySelector(".slider");
    var images = slider.querySelectorAll("ul li");
    var currentImageIdx = 0;

    images[0].classList.add("visible");

    prev.addEventListener("click", function (event) {
        images[currentImageIdx].classList.remove("visible");
        currentImageIdx--;

        if (currentImageIdx === -1) {
            currentImageIdx = images.length - 1;
        }
        images[currentImageIdx].classList.add("visible");
    });

    next.addEventListener("click", function (event) {
        images[currentImageIdx].classList.remove("visible");
        currentImageIdx++;

        if (currentImageIdx === images.length) {
            currentImageIdx = 0;
        }

        images[currentImageIdx].classList.add("visible");
    });

    $(function () {
        $('[data-toggle="popover"]').popover()
    });

    var cow = $(".holycow");

    cow.hover(
        function () {
            $(this).addClass("animated slideOutRight");
        }, function () {
            $(this).removeClass("animated slideOutRight");
        }
    );


    $(".back-button").on("click", function () {

        placeChoices.css("display", "flex");
        $('.page').hide();

    });

    $(".back").on("click", function () {
        placeChoices.css("display", "flex");

    })

});





