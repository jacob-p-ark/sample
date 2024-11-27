<template>
  <div class="screen">
    <h2>화면 {{ screenId }}</h2>
    <DynamicButton
        v-for="type in buttonTypes"
        :key="type"
        :screenId="screenId"
        :buttonType="type"
        @click="handleButtonClick"
    />
  </div>
</template>

<script>
import DynamicButton from "./DynamicButton.vue";

export default {
  name: "Screen",
  components: {
    DynamicButton,
  },
  props: {
    screenId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      buttonTypes: ["조회", "등록", "수정", "상세"], // 버튼 타입 리스트
    };
  },
  methods: {
    handleButtonClick(id) {
      console.log(`${id} 버튼이 클릭되었습니다.`);
    },
  },
};
</script>

<style scoped>
.screen {
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
}
</style>
