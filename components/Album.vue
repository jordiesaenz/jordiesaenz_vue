<template>
  <div class="grid album">
    <div class="col-md-1-2">
      <img class="img-responsive" :src="album.album_art_src">
    </div>
    <div class="col-md-1-2">
      <div v-for="(track, index) in album.tracks" :key="track">
        <audio-player :preload="true" :webAudio="true" :html5="true" :sources="track.audio_files" :loop="true" :title="track.title" :lyrics="track.lyrics" :track_duration="track.track_duration" :index="index + 1"></audio-player>
      </div>
    </div>
  </div>
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
