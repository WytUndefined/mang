<template>
  <div>
    <el-upload
      :multiple="true"
      :on-success="handleSuccess"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-upload="beforeUpload"
      class="image-uploader"
      action="/api/oss/upload"
      :file-list="fileList"
      :headers="headers"
      style="width: 200px;"
      :disabled="!show"
    >
      <el-button v-if="show" size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
export default {
  name: 'AttachmentUpload',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    fileList: {
      type: Array,
      default() {
        return []
      }
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      headers: {}
    }
  },
  methods: {
    handleSuccess(response, file, fileList) {
      const files = []
      fileList.forEach(item => {
        if (!item.id) {
          files.push(item.response.data)
        }
      })
      this.fileList.forEach(item => {
        files.push(item.response.data)
      })
      this.$emit('input', files)
    },
    handlePreview(file) {
      const data = file.response.data
      window.open(data.path + '?attname=' + encodeURI(data.name))
    },
    handleRemove(file, fileList) {
      const files = []
      fileList.forEach(item => {
        if (!item.id) {
          files.push(item.response.data)
        }
      })
      this.fileList.forEach((item, index) => {
        console.log(item)
        if (file.id === item.id) {
          this.fileList.splice(index, 1)
        } else {
          files.push(item.response.data)
        }
      })
      this.$emit('input', files)
    },
    beforeUpload() {
      if (this.$store.getters.token) {
        this.headers.Authorization = getToken()
      } else {
        return false
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
