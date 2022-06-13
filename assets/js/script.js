const shrink_btn = document.querySelector(".shrink-btn");
const shrink_mobile_show_btn = document.querySelector(".shrink-mobile-show-btn");
const shrink_mobile_hide_btn = document.querySelector(".shrink-mobile-hide-btn");
const sidebar_links = document.querySelector("#sidebar-links");
const jump_top = document.querySelector(".jump-top");
const jump_down = document.querySelector(".jump-down");
const container_menu = document.querySelector(".container-menu");
const container_bars = document.querySelector(".container-bars");
const dropdown_profile = document.querySelector(".container-profile-menu .dropdown");
const dropdown_profile_child = document.querySelector(".container-profile-menu .dropdown .btn");
const dropdown_profile_button = document.querySelector(".container-profile-menu .dropdown button");
const dropdown_profile_dropdown_menu = document.querySelector(".container-profile-menu .dropdown .dropdown-menu");
const profile_mobile_btn = document.querySelector(".container-profile-menu .profile-mobile-btn");
const profile_mobile_btn_close = document.querySelector(".container-profile-menu .profile-mobile-btn-close");
const search_mobile_btn = document.querySelector(".container-search-category.show-mobile .search-mobile-btn");
const search_mobile_btn_close = document.querySelector(".container-search-category.show-mobile .search-mobile-btn-close");
const search_content_menu = document.querySelector(".container-search-category.show-mobile .content-menu");
const kebab = document.querySelector('.kebab-menu'),
    middle = document.querySelector('.kebab-menu .middle'),
    cross = document.querySelector('.kebab-menu .cross'),
    dropdown = document.querySelector('.kebab-menu .dropdown');
let screen_width = screen.width;
/*
Fateme Tekrar
*/
const question_send = document.getElementById("question-send");
const main = document.getElementById("main");
const popUpPage = document.getElementById("popUp-page");
const popUpImg = document.getElementById("popUpImg");
/*
Fateme Tekrar
*/
document.addEventListener("click", (e) => {
    e.stopPropagation();

    container_menu.classList.remove('is-active');

    dropdown_profile.classList.remove('active-profile');

    if (screen_width < 992) {
        // close profile menu on body click
        profile_mobile_btn.classList.remove('is-active');

        dropdown_profile.classList.remove('active-profile');
        dropdown_profile.style = 'display: none !important';

        dropdown_profile_button.classList.remove('show');
        dropdown_profile_button.style = 'display: none !important';

        dropdown_profile_dropdown_menu.classList.remove('show');
        // end close profile menu on body click

        // close search menu on body click
        search_mobile_btn.classList.remove('is-active');

        search_content_menu.style = 'display: none !important';
        // end close search menu on body click
    }

    // kebab menu
    middle.classList.remove('active');
    cross.classList.remove('active');
    dropdown.classList.remove('active');
});

kebab.addEventListener('click', (e) => {
    e.stopPropagation();

    if (!middle.classList.contains('active') && !cross.classList.contains('active') && !dropdown.classList.contains('active')) {
        middle.classList.add('active');
        cross.classList.add('active');
        dropdown.classList.add('active');
    } else {
        middle.classList.remove('active');
        cross.classList.remove('active');
        dropdown.classList.remove('active');
    }
})

profile_mobile_btn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (!profile_mobile_btn.classList.contains('is-active')) {

        profile_mobile_btn.classList.add('is-active');

        dropdown_profile.classList.add('active-profile');
        dropdown_profile.style = 'display: flex !important';

        dropdown_profile_button.classList.add('show');
        dropdown_profile_button.style = 'display: flex !important';

        dropdown_profile_dropdown_menu.classList.add('show');
        dropdown_profile_dropdown_menu.style = 'position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(4px, 38px, 0px);';
    }

    // close search menu on body click
    search_mobile_btn.classList.remove('is-active');

    search_content_menu.style = 'display: none !important';
    // end close search menu on body click
});

profile_mobile_btn_close.addEventListener("click", (e) => {
    e.stopPropagation();

    if (profile_mobile_btn.classList.contains('is-active')) {

        profile_mobile_btn.classList.remove('is-active');

        dropdown_profile.classList.remove('active-profile');
        dropdown_profile.style = 'display: none !important';

        dropdown_profile_button.classList.remove('show');
        dropdown_profile_button.style = 'display: none !important';

        dropdown_profile_dropdown_menu.classList.remove('show');
    }
});

search_mobile_btn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (!search_mobile_btn.classList.contains('is-active')) {

        search_mobile_btn.classList.add('is-active');

        search_content_menu.style = 'display: flex !important';
    }

    if (screen_width < 992) {
        // close profile menu on body click
        profile_mobile_btn.classList.remove('is-active');

        dropdown_profile.classList.remove('active-profile');
        dropdown_profile.style = 'display: none !important';

        dropdown_profile_button.classList.remove('show');
        dropdown_profile_button.style = 'display: none !important';

        dropdown_profile_dropdown_menu.classList.remove('show');
        // end close profile menu on body click
    }
});

search_mobile_btn_close.addEventListener("click", (e) => {
    e.stopPropagation();

    if (search_mobile_btn.classList.contains('is-active')) {

        search_mobile_btn.classList.remove('is-active');

        search_content_menu.style = 'display: none !important';
    }
});

dropdown_profile.addEventListener("click", (e) => {
    e.stopPropagation();

    if (dropdown_profile_child.classList.contains('show')) {
        dropdown_profile.classList.add('active-profile');
    } else {
        dropdown_profile.classList.remove('active-profile');
    }
});

container_menu.addEventListener("click", (e) => {
    e.stopPropagation();
});

container_bars.addEventListener("click", (e) => {
    e.stopPropagation();

    container_menu.classList.toggle("is-active");
});

shrink_btn.addEventListener("click", () => {
    document.body.classList.toggle("shrink");
});

shrink_mobile_show_btn.addEventListener("click", () => {
    document.body.classList.toggle("shrink");
});

shrink_mobile_hide_btn.addEventListener("click", () => {
    document.body.classList.toggle("shrink");
});

sidebar_links.addEventListener('scroll', () => {
    if (sidebar_links.scrollTop > 20) {
        jump_top.style = 'display: flex !important';
    } else {
        jump_top.style = 'display: none !important';
    }

    if (sidebar_links.scrollHeight - (sidebar_links.scrollTop + sidebar_links.clientHeight) > 20) {
        jump_down.style = 'display: flex !important';
    } else {
        jump_down.style = 'display: none !important';
    }
})

jump_top.addEventListener("click", () => {
    sidebar_links.scrollTop -= 40;
});

jump_down.addEventListener("click", () => {
    sidebar_links.scrollTop += 40;
});

if (sidebar_links.scrollTop > 20) {
    jump_top.style = 'display: flex !important';
} else {
    jump_top.style = 'display: none !important';
}

if (sidebar_links.scrollHeight - (sidebar_links.scrollTop + sidebar_links.clientHeight) > 20) {
    jump_down.style = 'display: flex !important';
} else {
    jump_down.style = 'display: none !important';
}
/*Fateme Tekrar */
question_send.addEventListener("click", (e) => {
    e.stopPropagation();
    main.style = 'filter: blur(4px)';
    popUpPage.style = 'display:inline';
})
popUpImg.addEventListener("click", (e) => {
    e.stopPropagation();
    main.style = 'filter: blur(0px)';
    popUpPage.style = 'display:none';
})
/*Fateme Tekrar */