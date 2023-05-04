<template>
  <div class="content">
      <h1 v-for="(kp, index) in knowledge_point">
          {{kp.kp_content}}
          <template v-for="(sp, index) in spirit">
              <h2 v-if="sp.kp_id === kp.kp_id">
                  {{sp.spirit_content}}
                  <template v-for="(ca, index) in props.case">
                      <span v-if="ca.spirit_id === sp.spirit_id">
                          {{ca.case_content}}
                      </span>
                  </template>
              </h2>
          </template>

      </h1>
  </div>

</template>

<script setup>

const props = defineProps({
    knowledge_point: {
        type: Array,
        default: [{kp_id: 1, kp_content: "知识点1"}, {kp_id: 2, kp_content: "知识点2"}]
    },
    spirit: {
        type: Array,
        default: [{kp_id: 1, spirit_id: 1, spirit_content: "精神1"}, {kp_id:2, spirit_id: 2, spirit_content: "精神2"}]
    },
    case: {
        type: Array,
        default: [{spirit_id: 1, case_id: 1, case_content: "案例1"}, {spirit_id: 2, case_id: 2, case_content: "案例2"}]
    }
})

</script>

<style scoped>
.content {
    margin: 20px;
    text-align: center;
    height: 100%;
    width: 100%;
}
</style>