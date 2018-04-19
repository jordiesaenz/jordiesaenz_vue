<script>
  import VueHowler from 'vue-howler'

  export default {
    mixins: [VueHowler],
    props: [
      "title",
      "index",
      "track_duration",
      "lyrics"
    ],
    methods: {
      stopHowls: function() {
        var howls = window.Howler._howls;
        howls.forEach(function(howl) {
          howl.stop();
        });
      }
    }
  }
</script>

<template>
  <div>
    <a href="javascript:void()" @click="stopHowls(); togglePlayback()">{{ index }} {{ title }}</a>
    <transition name="fade">
      <div class="lyrics" v-show="playing" v-html="lyrics"></div>
    </transition>
  </div>
</template>
