<!-- LightGallery Photos and Initiation-->

let gallery = new Vue({
    el: "#vueGallery",
    data: {
        pictures: [
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-01.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-01.jpg", type: "Scenery", alt: "Missouri Torah Institute"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-02.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-02.jpg", type: "Product", alt: ""},
            { size: "1535-2300", fullSrc: "../Pictures/Portfolio-03.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-03.jpg", type: "Product", alt: ""},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-05.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-05.jpg", type: "Scenery", alt: "Fireworks"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-06.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-06.jpg", type: "Scenery", alt: "Dandelion at Night with Moon"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-07.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-07.jpg", type: "Scenery", alt: "Ariel View of Forest with River"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-08.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-08.jpg", type: "Product", alt: "Sushi"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-09.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-09.jpg", type: "Product", alt: "Sushi"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-10.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-10.jpg", type: "Scenery", alt: "Green Bridge in the Winter"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-11.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-11.jpg", type: "Product", alt: "Alaska Salt and Pepper Shakers"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-12.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-12.jpg", type: "Product", alt: ""},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-13.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-13.jpg", type: "Scenery", alt: "Closeup of Small Orange Flower with Water Droplets"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-14.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-14.jpg", type: "Scenery", alt: "Pink Roses in Garden"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-15.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-15.jpg", type: "Scenery", alt: "Closeup of White Flowers on Tree"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-16.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-16.jpg", type: "Scenery", alt: "White Dandelion"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-17.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-17.jpg", type: "Scenery", alt: "White Flowers Among Grass in Front of Stonework"},
            { size: "1535-2300", fullSrc: "../Pictures/Portfolio-18.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-18.jpg", type: "Scenery", alt: "Looking Up the Trunk of a Palm Tree"},
            { size: "1535-2300", fullSrc: "../Pictures/Portfolio-19.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-19.jpg", type: "Scenery", alt: "Palm Tree"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-20.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-20.jpg", type: "Scenery", alt: "Long Orange Flower Before Blooming"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-21.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-21.jpg", type: "Scenery", alt: ""},
            { size: "2050-1800", fullSrc: "../Pictures/Portfolio-22.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-22.jpg", type: "Scenery", alt: ""},
            { size: "2125-1415", fullSrc: "../Pictures/Portfolio-23.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-23.jpg", type: "Scenery", alt: ""},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-24.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-24.jpg", type: "Scenery", alt: "Waterfall Down Rocks"},
            { size: "2050-1600", fullSrc: "../Pictures/Portfolio-25.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-25.jpg", type: "Scenery", alt: "Duckling Swimming through Leaves"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-28.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-28.jpg", type: "Scenery", alt: ""},
            { size: "1535-2300", fullSrc: "../Pictures/Portfolio-30.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-30.jpg", type: "Scenery", alt: "Seagull Eating Cheeto From Hand"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-31.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-31.jpg", type: "Scenery", alt: "View of River with Bow of Boat"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-32.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-32.jpg", type: "Scenery", alt: "Shenandoah National Park Mountain Overlook"},
            { size: "2050-1535", fullSrc: "../Pictures/Portfolio-33.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-33.jpg", type: "Scenery", alt: "River Before Niagara Falls"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-34.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-34.jpg", type: "Product", alt: "Fire Nunchucks"},
            { size: "5285-3525", fullSrc: "../Pictures/Portfolio-35.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-35.jpg", type: "Scenery", alt: ""},
            { size: "5570-3715", fullSrc: "../Pictures/Portfolio-36.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-36.jpg", type: "Product", alt: ""},
            { size: "3560-3560", fullSrc: "../Pictures/Portfolio-37.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-37.jpg", type: "Product", alt: ""},
            { size: "5570-3715", fullSrc: "../Pictures/Portfolio-41.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-41.jpg", type: "Scenery", alt: "Rough Water"},
            { size: "1800-1125", fullSrc: "../Pictures/Portfolio (0).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (0).jpg", type: "Animal", alt: "Birds Playing"},
            { size: "1024-683", fullSrc: "../Pictures/Portfolio (2).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (2).jpg", type: "Scenery", alt: "Mountain"},
            { size: "1024-768", fullSrc: "../Pictures/Portfolio (3).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (3).jpg", type: "Scenery", alt: "Mountains with Stream"},
            { size: "1024-684", fullSrc: "../Pictures/Portfolio (4).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (4).jpg", type: "Scenery", alt: "River and Waterfalling"},
            { size: "1706-2560", fullSrc: "../Pictures/Portfolio (5).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (5).jpg", type: "Scenery", alt: "Boat on River"},
            { size: "1600-1200", fullSrc: "../Pictures/Portfolio (6).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (6).jpg", type: "Animal", alt: "Tiger"},
            { size: "1500-1094", fullSrc: "../Pictures/Portfolio (7).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (7).jpg", type: "Product", alt: "Beats Headphones"},
            { size: "1600-1200", fullSrc: "../Pictures/Portfolio (8).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (8).jpg", type: "Animal", alt: "Baby Tiger"},
            { size: "1500-1890", fullSrc: "../Pictures/Portfolio (9).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (9).jpg", type: "Product", alt: "Wine Bottle and Glass"},
            { size: "550-770", fullSrc: "../Pictures/Portfolio (10).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (10).jpg", type: "Scenery", alt: "Aura"},
            { size: "1920-1200", fullSrc: "../Pictures/Portfolio (11).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (11).jpg", type: "Scenery", alt: "River and Castle"},
            { size: "2880-1800", fullSrc: "../Pictures/Portfolio (12).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (12).jpg", type: "Scenery", alt: "Autum Forest "},
            { size: "1500-2250", fullSrc: "../Pictures/Portfolio (13).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (13).jpg", type: "Product", alt: "Lemondade"},
            { size: "1728-1080", fullSrc: "../Pictures/Portfolio (14).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (14).jpg", type: "Scenery", alt: "Nighttime Cityscape"},
            { size: "1500-943", fullSrc: "../Pictures/Portfolio (15).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (15).jpg", type: "Scenery", alt: "Car"},
            { size: "1500-1124", fullSrc: "../Pictures/Portfolio (16).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (16).jpg", type: "Product", alt: "Flying Paint Cans"},
            { size: "2476-1913", fullSrc: "../Pictures/Portfolio (17).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (17).jpg", type: "Product", alt: "Perfume in Liquid"},
            { size: "1500-932", fullSrc: "../Pictures/Portfolio (18).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (18).jpg", type: "Product", alt: "Tennis Ball Hitting Racket"},
            { size: "1500-1088", fullSrc: "../Pictures/Portfolio (19).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (19).jpg", type: "Product", alt: "Motorcycle"},
            { size: "1920-1080", fullSrc: "../Pictures/Portfolio (20).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (20).jpg", type: "Scenery", alt: "Sunrise Over Beach"},
            { size: "1920-1080", fullSrc: "../Pictures/Portfolio (21).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (21).jpg", type: "Scenery", alt: "Early Morning by Beach"},
            { size: "4550-2559", fullSrc: "../Pictures/Portfolio (22).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (22).jpg", type: "Scenery", alt: "Waterfall into River with Mountain in the Background"},
            { size: "1500-1058", fullSrc: "../Pictures/Portfolio (23).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (23).jpg", type: "Product", alt: "Watch"},
            { size: "1920-1539", fullSrc: "../Pictures/Portfolio (24).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (24).jpg", type: "Animal", alt: "Posum"},
            { size: "1500-1100", fullSrc: "../Pictures/Portfolio (25).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (25).jpg", type: "Product", alt: "Paint Buckets with Paint Splashing"},
            { size: "1500-1100", fullSrc: "../Pictures/Portfolio (26).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (26).jpg", type: "Product", alt: "Basketball with Paint Spraying from Both Sides"},
            { size: "1920-1200", fullSrc: "../Pictures/Portfolio (27).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (27).jpg", type: "Animal", alt: "Deer with Antlers Early Morning"},
            { size: "1500-994", fullSrc: "../Pictures/Portfolio (28).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (28).jpg", type: "Animal", alt: "Elk Walking in the Grass"},
            { size: "2560-1707", fullSrc: "../Pictures/Portfolio (29).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (29).jpg", type: "Scenery", alt: "Desert Mountains"},
            { size: "1500-1075", fullSrc: "../Pictures/Portfolio (30).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (30).jpg", type: "Product", alt: "Whiskey and Glass"},
            { size: "1920-1080", fullSrc: "../Pictures/Portfolio (31).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (31).jpg", type: "Animal", alt: "House Cat"},
            { size: "1500-1024", fullSrc: "../Pictures/Portfolio (32).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (32).jpg", type: "Product", alt: "Whiskey Bottle Cut in Half with Apple Inside"},
            { size: "1622-1080", fullSrc: "../Pictures/Portfolio (33).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (33).jpg", type: "Scenery", alt: "Rocky Bank by Ocean at Sunrise"},
            { size: "1920-1200", fullSrc: "../Pictures/Portfolio (34).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (34).jpg", type: "Animal", alt: "Swan Swimming with Ducklings"},
            { size: "3265-2449", fullSrc: "../Pictures/Portfolio (35).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (35).jpg", type: "Scenery", alt: "Early Morning by Beach"},
            { size: "1024-768", fullSrc: "../Pictures/Portfolio (36).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (36).jpg", type: "Animal", alt: "Owl"},
            { size: "1920-1080", fullSrc: "../Pictures/Portfolio (37).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (37).jpg", type: "Scenery", alt: "Wave Breaking"},
            { size: "1022-614", fullSrc: "../Pictures/Portfolio (38).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (38).jpg", type: "Animal", alt: "Owl"},
            { size: "1500-1816", fullSrc: "../Pictures/Portfolio (39).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (39).jpg", type: "Product", alt: "Glass with Drink Flying and Breaking"},
            { size: "1600-1200", fullSrc: "../Pictures/Portfolio (40).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (40).jpg", type: "Animal", alt: "3 Seals"},
            { size: "2000-1333", fullSrc: "../Pictures/Portfolio (41).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (41).jpg", type: "Scenery", alt: "Beach with Palm Trees"},
            { size: "1920-1080", fullSrc: "../Pictures/Portfolio (42).jpg", desc: "", thumbSrc: "../Pictures/Portfolio (42).jpg", type: "Scenery", alt: "Waterfall into Field"}
        ],
        typeToShow: "All",
    },
    methods: {
        filter(category) {
            this.typeToShow = category;
        }
    }
});

jQuery("#animated-thumbnails-gallery")
    .justifiedGallery({
        captions: false,
        lastRow: "hide",
        rowHeight: 180,
        margins: 5
    });
let light = lightGallery(document.getElementById('animated-thumbnails-gallery'), {
    thumbnail: true,
    plugins: [lgZoom, lgThumbnail],
    download: false,
    mobileSettings: {
        controls: false,
        showCloseIcon: false,
        download: false,
        rotate: false
    }
});

$(document).ready( function() {
    let links = $(".nav-pills .nav-item .nav-link");
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() { 
            light.refresh();
        })
    }
});
/*    }).on("jg.complete", function () {
        window.lightGallery(
            document.getElementById("animated-thumbnails-gallery"),
            {
                autoplayFirstVideo: false,
                pager: false,
                plugins: [lgZoom, lgThumbnail],
                download: false,
                mobileSettings: {
                    controls: false,
                    showCloseIcon: false,
                    download: false,
                    rotate: false
                }
            }
        );
    });*/
