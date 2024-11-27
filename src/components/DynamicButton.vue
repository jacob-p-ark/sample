<template>
  <button :id="computedId" @click="handleClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "DynamicButton",
  props: {
    screenId: {
      type: String,
      required: true, // 화면 ID
    },
    buttonType: {
      type: String,
      required: true, // 버튼 타입 ('조회', '등록', '수정', '상세')
    },
  },
  computed: {
    computedId() {
      // 규칙적인 ID 생성 로직
      return `${this.screenId}-${this.buttonType}`;
    },
  },
  methods: {
    handleClick() {
      this.$emit("click", this.computedId);
    },
  },
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}
</style>
