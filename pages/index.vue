<template>
  <section class="container">
    <header-unit/>
    <p>I'm a music guy.</p>
    <div class="grid">
      <div class="col-md-1-2 col-xs-1-1">
        <div class="video-embed">
          <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
        </div>
      </div>
      <div class="col-md-1-2 col-xs-1-1">
        <div class="video-embed">
          <iframe src="https://open.spotify.com/embed?uri=spotify:user:1214932815:playlist:0t2M8LKvOwwmKS7GxGOORt" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
    <div class="image-gallery grid">
      <img v-for="image in images" :key="image"
           class="col-md-1-3 col-sm-1-2 col-xs-1-1 image-gallery--image img-responsive"
           v-img:gallery :src="image.src" :alt="image.alt"
           :add-label="image.alt" />
    </div>
  </section>
</template>

<script>
import HeaderUnit from '~/components/HeaderUnit.vue'

export default {
  components: {
    HeaderUnit
  },
  data() {
    return {
      videoId: 'Xcq3Xrg7B8o',
      images: [
        { alt: "1.22.2018 Wayfarer, Costa Mesa, CA | Photo by Emily Saenz", src: require("~/assets/images/gallery/1.jpg") },
        { alt: "2.26.2018 Northside Vinyl, Long Beach, CA | Photo by Kesler Ottley", src: require("~/assets/images/gallery/2.jpg") },
        { alt: "1.22.2018 Wayfarer, Costa Mesa, CA | Photo by Emily Saenz", src: require("~/assets/images/gallery/3.jpg") },
        { alt: "2.26.2018 Northside Vinyl, Long Beach, CA | Photo by Kesler Ottley", src: require("~/assets/images/gallery/4.jpg") },
        { alt: "1.22.2018 Wayfarer, Costa Mesa, CA | Photo by Emily Saenz", src: require("~/assets/images/gallery/5.jpg") },
      ]
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('\o/ we are watching!!!')
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  }
}
</script>
