// create variables for images
let disneyImage1 = "../images/disney1.jpg";
let disneyImage2 = "../images/disney2.jpg";
let disneyImage3 = "../images/disney3.jpg";
let disneyImage4 = "../images/disney4.jpg";
let disneyImage5 = "../images/disney5.jpg";

// create an array of images from defined variables
const myImages = [disneyImage1, disneyImage2, disneyImage3, disneyImage4, disneyImage5]

// create new Vue to use for skills image gallery
Vue.createApp({
  data() {
    return {
      myImages,
      image1Description: 'A Tale As Old As Time',
      image2Description: 'Night In Epcot',
      image3Description: 'Wintery Night At The Castle',
      image4Description: 'Fireworks Lighting Up The Night',
      image5Description: 'Learn Magic And Spells With Merlin',
      disney1Enlarged: false,
      disney2Enlarged: false,
      disney3Enlarged: false,
      disney4Enlarged: false,
      disney5Enlarged: false
    }
  },
  methods: {
    enlargeImage1() {
      this.disney1Enlarged = true;
    },
    resetImage1() {
      this.disney1Enlarged = false;
    },
    enlargeImage2() {
      this.disney2Enlarged = true;
    },
    resetImage2() {
      this.disney2Enlarged = false;
    },
    enlargeImage3() {
      this.disney3Enlarged = true;
    },
    resetImage3() {
      this.disney3Enlarged = false;
    },
    enlargeImage4() {
      this.disney4Enlarged = true;
    },
    resetImage4() {
      this.disney4Enlarged = false;
    },
    enlargeImage5() {
      this.disney5Enlarged = true;
    },
    resetImage5() {
      this.disney5Enlarged = false;
    },
  },
  template: `<div class="gallery">
                  <img :class="{
                      'disney1Size': true,
                      'disney1EnlargedSize': disney1Enlarged,
                    }"
                    @mouseover="enlargeImage1"
                    @mouseout="resetImage1" :src="myImages[0]">
                  <div class="desc">{{image1Description}}</div>
              </div>
              <div class="gallery">
                  <img :class="{
                      'disney2Size': true,
                      'disney2EnlargedSize': disney2Enlarged,
                    }"
                    @mouseover="enlargeImage2"
                    @mouseout="resetImage2" :src="myImages[1]">
                  <div class="desc">{{image2Description}}</div>
              </div>
              <div class="gallery">
                  <img :class="{
                      'disney3Size': true,
                      'disney3EnlargedSize': disney3Enlarged,
                    }"
                    @mouseover="enlargeImage3"
                    @mouseout="resetImage3" :src="myImages[2]">
                  <div class="desc">{{image3Description}}</div>
              </div>
              <div class="gallery">
                  <img :class="{
                      'disney4Size': true,
                      'disney4EnlargedSize': disney4Enlarged,
                    }"
                    @mouseover="enlargeImage4"
                    @mouseout="resetImage4" :src="myImages[3]">
                  <div class="desc">{{image4Description}}</div>
              </div>
              <div class="gallery">
                  <img :class="{
                      'disney5Size': true,
                      'disney5EnlargedSize': disney5Enlarged,
                    }"
                    @mouseover="enlargeImage5"
                    @mouseout="resetImage5" :src="myImages[4]">
                  <div class="desc">{{image5Description}}</div>
              </div>`
}).mount('#skills_vue')