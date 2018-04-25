<template>
  <section class="album">
    <div class="text-center">
      <h2 class="album--title">{{ album.title }}</h2>
      <p class="album--release-date">Released: {{ album.release_date }}</p>
      <div class="album--links">
        <span v-for="link in album.links" :key="link">
          <a target="_blank" class="album-link" :href="link.url"><i :class="['fab fa-' + link.type]"></i></a>
        </span>
      </div>
    </div>
    <div class="grid">
      <div class="col-sm-1-2">
        <img class="img-responsive" :src="album.album_art_src">
      </div>
      <div class="col-sm-1-2">
        <p>Tracklisting:</p>
        <div v-for="(track, index) in album.tracks" :key="track">
          <audio-player :preload="true" :webAudio="true" :html5="true" :sources="track.audio_files" :loop="true" :title="track.title" :lyrics="track.lyrics" :track_duration="track.track_duration" :index="index + 1"></audio-player>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import AudioPlayer from '~/components/AudioPlayer.vue'
  export default {
    components: {
      AudioPlayer
    },
    props: {
      album: {
        type: Object
      }
    }
  }
</script>
