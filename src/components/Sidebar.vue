<template>
  <aside class="sidebar">
    <div class="controls" v-if="selectedSquares?.length">
      <Button @click="goToPreviousSelection" data-testid="previous-selection"
        >⃔</Button
      >
      <Button @click="goToNextSelection" data-testid="next-selection">⃕</Button>
    </div>
    <h3>Moves :</h3>
    <div class="selection-list-wrapper">
      <ol ref="$selectionList" class="selection-list">
        <li
          :class="{
            active: i === activeIndex,
          }"
          v-for="(square, i) in selectedSquares"
          :key="i"
          :data-testid="`selection-${i}`"
        >
          {{ square.join("") }}
        </li>
      </ol>
    </div>
  </aside>
</template>

<script setup="props, { emit }">
import { ref, watch, onUpdated } from "vue";
import Button from "@/components/Button.vue";

const activeIndex = ref(getLastSelectedSquareIndex() || 0);
const $selectionList = ref(null);

watch(props.selectedSquares, () => {
  activeIndex.value = getLastSelectedSquareIndex() || 0;
});

onUpdated(() => {
  const selectionListNode = $selectionList.value;
  selectionListNode.scrollTop = selectionListNode.querySelector(
    ".active"
  ).offsetTop;
});

function getLastSelectedSquareIndex() {
  return props.selectedSquares?.length - 1; // - 1 beacause array starts at 0
}

function goToPreviousSelection() {
  if (activeIndex.value === 0) {
    return;
  }

  activeIndex.value--;
  const newSelection = props.selectedSquares[activeIndex.value];

  emit("onSquareSelectionChange", newSelection);
}

function goToNextSelection() {
  if (activeIndex.value >= getLastSelectedSquareIndex()) {
    return;
  }

  activeIndex.value++;
  const newSelection = props.selectedSquares[activeIndex.value];

  emit("onSquareSelectionChange", newSelection);
}

export default {
  components: { Button },
  props: {
    selectedSquares: Array,
  },
};

export {
  activeIndex,
  $selectionList,
  goToPreviousSelection,
  goToNextSelection,
};
</script>

<style scoped>
.sidebar {
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: var(--darken);
  padding: 1rem;
}

.controls {
  align-self: center;
}

.selection-list-wrapper {
  position: relative;
  height: 100%;
}

.selection-list {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
}

.active {
  color: var(--highlight);
}
</style>
