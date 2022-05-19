<!-- LightGallery Photos and Initiation-->

let gallery = new Vue({
    el: "#vueGallery",
    data: {
        pictures: [
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-01.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-01.jpg", type: "Scenery", alt: "Missouri Torah Institute"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-02.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-02.jpg", type: "Product", alt: ""},
            { size: "1535-2300", fullSrc: "../Pictures/Portfolio-03.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-03.jpg", type: "Product", alt: ""},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-04.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-04.jpg", type: "People", alt: ""},
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
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-26.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-26.jpg", type: "People",alt: ""},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-28.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-28.jpg", type: "Scenery", alt: ""},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-29.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-29.jpg", type: "People",alt: ""},
            { size: "1535-2300", fullSrc: "../Pictures/Portfolio-30.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-30.jpg", type: "Scenery", alt: "Seagull Eating Cheeto From Hand"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-31.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-31.jpg", type: "Scenery", alt: "View of River with Bow of Boat"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-32.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-32.jpg", type: "Scenery", alt: "Shenandoah National Park Mountain Overlook"},
            { size: "2050-1535", fullSrc: "../Pictures/Portfolio-33.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-33.jpg", type: "Scenery", alt: "River Before Niagara Falls"},
            { size: "2300-1535", fullSrc: "../Pictures/Portfolio-34.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-34.jpg", type: "Product", alt: "Fire Nunchucks"},
            { size: "5285-3525", fullSrc: "../Pictures/Portfolio-35.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-35.jpg", type: "Scenery", alt: ""},
            { size: "5570-3715", fullSrc: "../Pictures/Portfolio-36.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-36.jpg", type: "Product", alt: ""},
            { size: "3560-3560", fullSrc: "../Pictures/Portfolio-37.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-37.jpg", type: "Product", alt: ""},
            { size: "5570-3715", fullSrc: "../Pictures/Portfolio-41.jpg", desc: "", thumbSrc: "../Pictures/Thumbnails/Portfolio-Thumbnail-41.jpg", type: "Scenery", alt: "Rough Water"},
        ]
    },
});

jQuery("#animated-thumbnails-gallery")
    .justifiedGallery({
        captions: false,
        lastRow: "hide",
        rowHeight: 180,
        margins: 5,
        download: false
    })
    .on("jg.complete", function () {
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
    });

$(".nav-pills .nav-link")