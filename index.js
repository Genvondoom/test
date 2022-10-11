/*banner*/
let banner = document.querySelector("#banner");
let banner_title = document.querySelector("#intro-section h2");
let banner_sub = document.querySelector("#intro-section h3");
let logo = document.querySelector('#main-logo img');
let slider_button_1 = document.querySelector('#slider-container #slider-one');
let slider_button_2 = document.querySelector('#slider-container #slider-two');
let slider_button_3 = document.querySelector('#slider-container #slider-three');
let subimage_1 = document.querySelector("#sub-image-1");
let subimage_2 = document.querySelector("#sub-image-2");
let subimage_3 = document.querySelector("#sub-image-3");

/*content-1*/
let about_us = document.querySelector('#content-1 #about');
let why = document.querySelector('#content-1 #why');
let mission = document.querySelector('#content-1 #mission');
let description_information = document.querySelector('#content-1 #info');
let descriptionInfo = [
    {
        section: 'about Us',
        detail: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur dolorem, est consequuntur perspiciatis praesentium enim illo in asperiores corrupti corporis beatae magnam debitis error quam culpa consequatur, placeat eligendi molestiae ipsum sit. Exercitationem animi veniam quae sunt dolores laborum iste.'
    },

    {
        section: 'why choose us',
        detail: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur dolorem, est consequuntur perspiciatis praesentium enim illo in asperiores corrupti corporis beatae magnam debitis error quam culpa consequatur.'
    },

    {
        section: 'mission',
        detail: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }
]

/*Container-6 */
let conatiner_6_box_1 = document.querySelector('#sub-content-container .sub-content-1');
let conatiner_6_box_2 = document.querySelector('#sub-content-container .sub-content-1');
let conatiner_6_box_3 = document.querySelector('#sub-content-container .sub-content-2 #sub-3');
let conatiner_6_box_4 = document.querySelector('#sub-content-container .sub-content-2 #sub-4');
let conatiner_6_prev_btn = document.querySelector('#prev_btn')
let conatiner_6_next_btn = document.querySelector('#next_btn')

/*conatiner-7 */
let partners_logo = document.querySelector('#content-6 .logos img')




/*banner/ container 1 function */

let banner_content = [
    {
        background: "images/banners/main2.png",
        heading: 'Explore <strong>The Coast</strong>',
        sub: "The new cool way to find the perfect spots, avoiding crowded spots and bad weather"
    },
    {
        background: "images/banners/main3.png",
        heading: "unique travel, insights & tips",
        sub: "First mobile search engine for global coastlines, providing personalised results for users"
    },
    {
        background: "images/banners/main1.png",
        heading: "Creating an unforgettable Experience",
        sub: "Are you ready to be an explorer?"
    }
];

let current_Banner = 1
function slider_checker(no) {
    if (parseInt(no) === 1) {
        slider_button_2.classList.remove('active')
        slider_button_3.classList.remove('active')
        slider_button_1.classList.add('active')
    }
    else if (parseInt(no) === 2) {
        slider_button_1.classList.remove('active')
        slider_button_3.classList.remove('active')
        slider_button_2.classList.add('active')
    }
    else if (no === 3) {
        slider_button_1.classList.remove('active')
        slider_button_2.classList.remove('active')
        slider_button_3.classList.add('active')

    }
    else {
        slider_button_1.classList.remove('active')
        slider_button_2.classList.remove('active')
        slider_button_3.classList.remove('active')

    };

};
function banner_switcher() {

    if (current_Banner < 4) {
        banner.style.background = `url(${banner_content[current_Banner - 1].background}) no-repeat center center/cover`;
        banner_title.innerHTML = banner_content[current_Banner - 1].heading;
        banner_sub.innerHTML = banner_content[current_Banner - 1].sub;
        slider_checker(current_Banner);
    }




};



function banner_timed_switch() {
    current_Banner++
    if (current_Banner > 3) {
        current_Banner = 1
    }
    banner_switcher();
}

/*Container 2 */
/*#content-1 #about*/

function description_switch(description_no) {
    if (description_no == 1) {
        about_us.classList.add('active');
        why.classList.remove('active');
        mission.classList.remove('active');

    }

    else if (description_no == 2) {
        about_us.classList.remove('active');
        why.classList.add('active');
        mission.classList.remove('active');

    }

    else if (description_no == 3) {
        about_us.classList.remove('active');
        why.classList.remove('active');
        mission.classList.add('active');

    }
    else {
        about_us.classList.remove('active');
        why.classList.remove('active');
        mission.classList.remove('active');

    }
    description_information.innerText = descriptionInfo[description_no - 1].detail

}

about_us.addEventListener('click', () => {
    description_switch(1)
})

why.addEventListener('click', () => {
    description_switch(2)
})

mission.addEventListener('click', () => {
    description_switch(3)
})

/*conatiner -6*/
let container_6_images = [{ name: "Lakeside", location: "images/content-5/fabian-quintero-UWQP2mh5YJI-unsplash.jpg" },
{ name: "Snow Mountain", location: "images/content-5/fernando-meloni-j_gnGCDQRew-unsplash.jpg" },
{ name: "Beach", location: "images/content-5/joris-beugels-lVwga-i9U_4-unsplash.jpg" },
{ name: "Aurora", location: "images/content-5/kitera-dent-0CDogO-dEEE-unsplash.jpg" },
{ name: "Dubai", location: "images/content-5/kevin-aebischer-ehOYfabfMM8-unsplash.jpg" },
{ name: "Portugal", location: "images/content-5/rita-candeias-fW8hswdLXI4-unsplash.jpg" },
{ name: "Coast", location: "images/content-5/unsplash_gu79YOlW74U.png" },
{ name: "Riverside", location: "images/content-5/unsplash_l503QEOQCg4.png" },];

let prev_random = [];
let random = [];
function refresh_container_6_images(target) {
    conatiner_6_box_1.style.background = `url(${target[0].location}) no-repeat center center/cover`;
    conatiner_6_box_2.style.background = `url(${target[2].location}) no-repeat center center/cover`;
    conatiner_6_box_3.style.background = `url(${target[1].location}) no-repeat center center/cover`;
    conatiner_6_box_4.style.background = `url(${target[3].location}) no-repeat center center/cover`

}
function rand() {
    random.length = 0
    for (let index = 0; index <= container_6_images.length; index++) {

        let randomNo = Math.floor(Math.random() * (container_6_images.length));

        if (random.includes(container_6_images[randomNo])) {
            continue
        }
        else {
            if (random.length < 4) {
                random.push(container_6_images[randomNo])
            }
        }

        prev_random = [...random]
    }
}


conatiner_6_prev_btn.addEventListener('click', () => {
    rand
    refresh_container_6_images(prev_random)
    console.log(prev_random);

})
conatiner_6_next_btn.addEventListener('click', () => {
    rand()
    refresh_container_6_images(random)
    console.log(random);
})

/*container-7*/

let logo_name = [{ name: 'giliswy', location: 'images/logos/giliswy.png' },
{
    name: 'google ads',
    location: 'images/logos/Google Ads.png'
},
{
    name: 'gurianin',
    location: 'images/logos/guerianin.png'
},
{
    name: 'nespresso',
    location: 'images/logos/nespresso.png'
},
{
    name: 'tupperware',
    location: 'images/logos/tupperware.png'
}

]
let logo_no = 0
function change_Sub_logo() {
    if (logo_no > logo_name.length - 1) {
        logo_no = 0;
    }
    partners_logo.src = logo_name[logo_no].location
    partners_logo.alt = logo_name[logo_no].name
    logo_no++
}

function init() {
    banner_switcher()
    subimage_1.style.background = `url(images/sub-banner/sub1.jpg) no-repeat center center/cover`;
    subimage_1.innerText = "Question";
    subimage_2.style.background = `url(images/sub-banner/sub2.jpg) no-repeat center center/cover`;
    subimage_2.innerText = "Question";
    subimage_3.style.background = `url(images/sub-banner/sub3.jpg) no-repeat center center/cover`;
    subimage_3.innerText = "Question";
    rand();
    refresh_container_6_images(random);
    description_switch(3)
    window.setInterval(banner_timed_switch, 3000);
    window.setInterval(change_Sub_logo, 3000);
};
init();
console.log(screen)


