document.addEventListener('DOMContentLoaded', function () {
    $("#head a").on("click", function () {
        var position = $(this).position();
        var width = $(this).outerWidth();
        $("#head .slide1").css({ opacity: 1, left: position.left, width: width });
    });
    $("#head a").on("mouseover", function () {
        var position = $(this).position();
        var width = $(this).outerWidth();
        $("#head .slide1").css({ opacity: 1, left: position.left, width: width });
        $("#head .slide2").css({ opacity: 1, left: position.left, width: width, height: '80%' }).addClass("squeeze");
    });
    $("#head a").on("mouseout", function () {
        $("#head .slide1").css({ opacity: 0 });
        $("#head .slide2").css({ opacity: 0 }).removeClass("squeeze");
    });

    $(".like-button").on("click", function () {
        $(this).find("img").addClass("like-animation");
        setTimeout(function () {
            $(".like-button img").removeClass("like-animation");
        }, 600);
    });
});

function toggleEditAll() {
    const editSections = document.querySelectorAll('.edit-section');
    const readSections = document.querySelectorAll('.read-section');
    const editButton = document.getElementById('edit-button-all');
    const submitButton = document.getElementById('submit-button-all');

    editSections.forEach(section => {
        section.classList.toggle('edit-section');
        section.classList.toggle('read-section');
    });

    readSections.forEach(section => {
        section.classList.toggle('read-section');
        section.classList.toggle('edit-section');
    });

    if (editButton.style.display === 'none') {
        editButton.style.display = 'inline';
        submitButton.style.display = 'none';
    } else {
        editButton.style.display = 'none';
        submitButton.style.display = 'inline';
    }
}

function toggleVisibility() {
    const checkbox = document.getElementById('show_likes');
    const visibilityText = document.getElementById('visibility-text');

    checkbox.checked = !checkbox.checked;
    visibilityText.innerText = checkbox.checked ? '公开' : '不予公开';

    document.getElementById('likes-visibility-form').submit();
}

function switchTab(tabName) {
    const postsSection = document.getElementById('posts');
    const likedPostsSection = document.getElementById('liked-posts');

    if (tabName === 'posts') {
        postsSection.classList.add('active');
        likedPostsSection.classList.remove('active');
    } else {
        postsSection.classList.remove('active');
        likedPostsSection.classList.add('active');
    }
}
