<template>
  <div class="item">
    <article>
      <div v-if="icons.length > 0" class="item-icon">
        <font-awesome-icon
          v-for="(icon, index) in icons"
          :key="index"
          :icon="icon"
        />
      </div>
      <h3 class="item-title">
        {{ $t(`skill.${name}.title`) }}
      </h3>
      <div class="item-desc">
        {{ $t(`skill.${name}.description`) }}
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    icons: {
      type: Array,
      default () {
        return [];
      },
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
