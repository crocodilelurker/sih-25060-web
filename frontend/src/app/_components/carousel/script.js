// Your custom slide data
const slides = [
  {
    title: "The Suicide Squad",
    desc: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons...",
    img: "https://carousel-slider.uiinitiative.com/images/dr-strange.jpg"
  },
  {
    title: "Thor: Ragnarok",
    desc: "Imprisoned on the planet Sakaar, Thor must race against time...",
    img: "https://carousel-slider.uiinitiative.com/images/thor-ragnarok.jpg"
  },
  {
    title: "Doctor Strange",
    desc: "America Chavez and a version of Stephen Strange are chased by a demon...",
    img: "https://carousel-slider.uiinitiative.com/images/dr-strange.jpg"
  },
  {
    title: "Eternals",
    desc: "In 5000 BC, ten superpowered Eternals are sent by the Celestial Arishem...",
    img: "https://carousel-slider.uiinitiative.com/images/eternals.jpg"
  },
  {
    title: "Guardians Of The Galaxy",
    desc: "A group of intergalactic criminals must pull together to stop a fanatical warrior...",
    img: "https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg"
  }
];

// Select wrapper
const wrapper = document.getElementById("carousel-wrapper");

// Inject slides dynamically
slides.forEach(slide => {
  wrapper.innerHTML += `
    <div class="swiper-slide">
      <div class="swiper-carousel-animate-opacity">
        <img src="${slide.img}" alt="${slide.title}" />
        <div class="slide-content">
          <h2>${slide.title}</h2>
          <p>${slide.desc}</p>
        </div>
      </div>
    </div>
  `;
});
