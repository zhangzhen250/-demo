<template>
  <div class="about">
    <h1>
      This is an about page11122
    </h1>
    <Button type="primary" @click="modal1 = true">Display dialog box</Button>
    <Modal
      v-model="modal1"
      title="Common Modal dialog box title"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      modal1: false
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    }
  },
  watch: {}
};
</script>

<style scoped lang="less">
.about {
  h1 {
    background-color: red;
  }
}
</style>
