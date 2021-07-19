<template>
  <section class="hero is-primary">
    <div class="hero-head">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">-552 000 T</a>
        </div>
      </nav>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'hero',
  mounted () {
    this.getRandomQuotes()
  },
  methods: {
    ...mapActions([
      'getRandomQuotes'
    ])
  },
  computed: {
    quoteAuthor () {
      return this.quote.title
    },
    quoteContent () {
      return this.quote.content
    },
    ...mapGetters([
      'quote'
    ])
  }
}
</script>
<style lang="scss">
$font-size: 14px;
$line-height: 1.4;
$lines-to-show: 3;
.quote {
  max-height: 100px;
  width: 355px;
}
.quote .box {
  margin-bottom: 5px;
}
.quote p {
  display: block;
  display: -webkit-box;
  height: $font-size*$line-height*$lines-to-show;
  color: #666;
  font-size: $font-size;
  line-height: $line-height;
  -webkit-line-clamp: $lines-to-show;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
