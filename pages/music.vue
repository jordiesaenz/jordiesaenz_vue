<template>
  <section class="container">
    <header-unit/>
    <transition name="fade">
      <album v-if="showAlbum" v-bind:album="showAlbum" />
    </transition>

    <p>Select a release:</p>
    <div class="grid">
      <div class="col-sm-1-3 col-xs-1-2" v-for="album in albums" :key="album">
        <img class="img-responsive" :src="album.album_art_src" @click="showAlbum = album; setBodyBackground(album)" />
      </div>
    </div>
  </section>
</template>

<script>
import Album        from '~/components/Album.vue'
import AudioPlayer  from '~/components/AudioPlayer.vue'
import HeaderUnit   from '~/components/HeaderUnit.vue'

var albums = require('static/albums.js').albums;

export default {
  components: {
    Album,
    AudioPlayer,
    HeaderUnit
  },
  data() {
    return {
      showAlbum: "",
      albums: albums
    }
  },
  methods: {
    setBodyBackground: function(album) {
      var html = document.getElementsByTagName( 'html' )[0];
      document.body.setAttribute("style", "background-color:" + album.color);
      if (album.color_scheme === "light") {
        html.classList.add("light");
      } else {
        html.classList.remove("light");
      }
    }
  },
  computed: {
  }
}
</script>
