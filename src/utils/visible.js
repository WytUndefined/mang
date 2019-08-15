const SHOW_EVENT = 'show'
const HIDE_ERROR = 'hide'

export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    show() {
      this.visible = true
      this.$emit(SHOW_EVENT)
    },
    hide() {
      this.visible = false
      this.$emit(HIDE_ERROR)
    }
  }
}
