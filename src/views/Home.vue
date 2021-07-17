<template lang="pug">
#home
  b-container
    b-row
      b-col.d(cols='12')
        h5.i {{ currentText }}
      b-col.e(cols='12')
        b-container.f
          h1.g {{ timeText }}
        b-col(cols='3').h
          b-btn(variant='primary' v-if='status !== 1' @click ='start')
            font-awesome-icon(:icon='["fas","play"]')
          b-btn(variant='primary' v-if='status === 1' @click="pause")
            font-awesome-icon(:icon='["fas","pause"]')
          b-btn(variant='primary' v-if='current.length > 0' @click='finish(true)')
            font-awesome-icon(:icon='["fas","step-forward"]')
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      timer: 0
    }
  },
  computed: {
    status () {
      return this.$store.state.status
    },
    list () {
      return this.$store.state.list
    },
    current () {
      return this.$store.state.current
    },
    currentText () {
      let text = this.current
      if (text.length === 0) {
        if (this.list.length === 0) {
          text = '沒有事項'
        } else {
          text = '點擊開始'
        }
      }
      return text
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      const m = Math.floor(this.timeleft / 60)
      const s = Math.floor(this.timeleft % 60)
      return `${m} : ${s}`
    }
  },
  methods: {
    pause () {
      clearInterval(this.timer)
      this.$store.commit('changeStatus', 2)
    },
    start () {
      if (this.status !== 2 && this.list.length > 0) {
        this.$store.commit('start')
      }
      if (this.current.length > 0) {
        this.$store.commit('changeStatus', 1)
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finish(false)
          }
        }, 1000)
      }
    },
    finish (skip) {
      clearInterval(this.timer)
      this.$store.commit('changeStatus', 0)
      this.$store.commit('addFinish')
      if (!skip) {
        const audio = new Audio()
        audio.src = require('../assets/' + this.$store.state.sound)
        audio.play()
      }
      if (this.list.length > 0) {
        this.start()
      } else {
        this.$swal({
          icon: 'success',
          title: '結束'
        })
      }
    }
  }
}
</script>

<style>
#home {
  width: 70%;
  height: 90%;
  position: absolute;
  top: 5%;
  left: 25%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
}
.d{
  border-radius: 5px;
  background: white;
  height: 40px;
}
.f{
  background: opacity;
  height: 400px;
  width: 400px;
  border-radius: 50%;
  position: relative;
  top: 10%;
  border: 5px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.g{
  font-size: 60px;
}
.h{
  position: relative;
  top:-20%;
  left: 40%;
}
.i{
  position: absolute;
  top:20%;
}
</style>
