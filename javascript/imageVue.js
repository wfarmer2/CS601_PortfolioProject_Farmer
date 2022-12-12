
let disneyImage1 = "../images/disney1.jpg";
let disneyImage2 = "../images/disney2.jpg";
let disneyImage3 = "../images/disney3.jpg";
let disneyImage4 = "../images/disney4.jpg";
let disneyImage5 = "../images/disney5.jpg";

const myImages = [disneyImage1, disneyImage2, disneyImage3, disneyImage4, disneyImage5]

Vue.createApp({
  data() {
    return {
      header: 'Image Gallery Using Vue.js - My Photos From Disney World',
      myImages,
      image1Description: 'A Tale As Old As Time',
      image2Description: 'Night In Epcot',
      image3Description: 'Wintery Night At The Castle',
      image4Description: 'Fireworks Lighting Up The Night',
      image5Description: 'Learn Magic And Spells With Merlin',
    }
  },
  methods: {

  }
}).mount('#skills_vue')