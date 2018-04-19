<template>
  <section class="container">
    <header-unit/>
    <transition name="fade">
      <album v-if="showAlbum" v-bind:album="showAlbum" />
    </transition>

    <p>Select a release:</p>
    <div class="grid">
      <div class="col-md-1-4" v-for="album in albums" :key="album">
        <img class="img-responsive" :src="album.album_art_src" @click="showAlbum = album" />
      </div>
    </div>
  </section>
</template>

<script>
import Album from '~/components/Album.vue'
import AudioPlayer from '~/components/AudioPlayer.vue'
import HeaderUnit from '~/components/HeaderUnit.vue'

export default {
  components: {
    Album,
    AudioPlayer,
    HeaderUnit
  },
  data() {
    return {
      showAlbum: "",
      albums: [{
        title: "Empty Grave",
        album_art_src: "https://f4.bcbits.com/img/a1816288509_10.jpg",
        tracks: [{
          title: "Empty Grave",
          track_duration: "1:33",
          audio_files: [
              "/audio/albums/empty_grave/EmptyGrave.mp3"
            ],
          lyrics: "<p>Say what you want when you want it</p>" +
                  "<p>Peel back those fear you've been flaunting</p>" +
                  "<p>Cut those teeth</p>" +
                  "<p>Dry your eyes</p>" +
                  "<br />" +
                  "<p>Honey, you've lost it</p>" +
                  "<p>Don't act like you've been accosted</p>" +
                  "<p>Ground your grief</p>" +
                  "<p>Speak your mind</p>" +
                  "<br />" +
                  "<p>And I know that you love me</p>" +
                  "<p>And I know it's not that easy</p>" +
                  "<p>To begin, you're becoming</p>" +
                  "<p>Leave an empty grave and cede your sleeping</p>"
          }]
        },
        {
          title: "Worms Of The Winter",
          album_art_src: "https://f4.bcbits.com/img/a1822940490_10.jpg",
          tracks: [{
            title: "Needle & Thread",
            track_duration: "1:33",
            audio_files: [
                "/audio/albums/worms_of_the_winter/01_needle_and_thread_FINAL.mp3"
              ],
            lyrics: "<p>well, you went and thought me up</p>" +
                    "<p>and you drew me in your head</p>" +
                    "<p>and then you sewed me up</p>" +
                    "<p>a needle and a thread</p>" +
                    "<br />" +
                    "<p>could you hurry? hurry up!</p>" +
                    "<p>the sky is turning red</p>" +
                    "<p>and we've got no time stop</p>" +
                    "<p>no time to to rest our heads, no time to catch our breath</p>"
          },
          {
            title: "Hang",
            track_duration: "1:33",
            audio_files: [
                "/audio/albums/worms_of_the_winter/02_hang_FINAL.mp3"
              ],
            lyrics: "<p>paste your soul</p>" +
                    "<p>and paste your heart</p>" +
                    "<p>on paper make</p>" +
                    "<p>a work of art</p>" +
                    "<p>i’ll put it in a priceless frame</p>" +
                    "<p>and hang it on a wall</p>" +
                    "<br/>" +
                    "<p>cut out minds</p>" +
                    "<p>with cut out thoughts</p>" +
                    "<p>lay them out</p>" +
                    "<p>connect the dots</p>" +
                    "<p>i saw it spelling out your name</p>" +
                    "<p>and hung it on a wall</p>" +
                    "<br/>" +
                    "<p>no matter how much</p>" +
                    "<p>beauty we hang</p>" +
                    "<p>we can never</p>" +
                    "<p>turn back time’s hands</p>" +
                    "<p>and take back the weeks</p>" +
                    "<p>that we lost in denial</p>" +
                    "<p>but time catches up whenever you smile</p>" +
                    "<br/>" +
                    "<p>i saw you looking</p>" +
                    "<p>through the lens</p>" +
                    "<p>to watch the light</p>" +
                    "<p>and how it bends</p>" +
                    "<p>you saw it spelling out my name</p>" +
                    "<p>and hung it on a wall</p>"
          },
          {
            title: "Out Of Tune",
            track_duration: "1:33",
            audio_files: [
                "/audio/albums/worms_of_the_winter/03_out_of_tune_FINAL.mp3"
              ],
            lyrics: "<p>you put your two cents in </p>" +
                    "<p>you’ve had some change to spare since you’ve been out robbing banks </p>" +
                    "<br/>" +
                    "<p>you’re never gonna win </p>" +
                    "<p>so now you spend your nights out rioting and raising cain </p>" +
                    "<br/>" +
                    "<p>so raise a glass to father time </p>" +
                    "<p>i’ve a thick hide and watchful eyes and soon enough i’ll be fine </p>" +
                    "<br/>" +
                    "<p>alms for the rich coming from the blind </p>" +
                    "<p>i wish that they would go and buy themselves brand new spines</p>" +
                    "<br/>" +
                    "<p>you’re holding me loosely </p>" +
                    "<p>while i’m dressing my wounds </p>" +
                    "<p>but you’ll stay here listening </p>" +
                    "<p>when i sing out of tune</p>"
          },
          {
            title: "Back Of Your Hand",
            track_duration: "1:33",
            audio_files: [
                "/audio/albums/worms_of_the_winter/04_back_of_your_hand_FINAL.mp3"
              ],
            lyrics: "<p>i have been betrayed by time </p>" +
                    "<p>i’ve forgotten how it feels </p>" +
                    "<p>to much light will rend me blind </p>" +
                    "<p>i’ve gone headache over heels </p>" +
                    "<br />" +
                    "<p>i’ve been taking back these lines </p>" +
                    "<p>i’ve a fear of waxen seals </p>" +
                    "<p>too much light will rend me blind </p>" +
                    "<p>i’ve gone headache over heels </p>" +
                    "<br />" +
                    "<p>if you knew me like the back of your hand </p>" +
                    "<p>there’d be less i’d have to say to you </p>" +
                    "<p>don’t be worried though i do understand </p>" +
                    "<p>but i’ve got nothing left to say to you </p>" +

                    "<p>of anywhere else you could have been </p>" +
                    "<p>you had to be crawling underneath my skin </p>" +
                    "<p>of anywhere else you could have slept </p>" +
                    "<p>you had to sleep in the greyest bed </p>" +
                    "<br />" +
                    "<p>well the time is pulling down on your eyes </p>" +
                    "<p>and it seems your consciousness is about to ignite </p>" +
                    "<p>if you find that there is war in your mind </p>" +
                    "<p>then i promise i’ll be listening all through the night</p>"
          }]
        }
      ]
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>
