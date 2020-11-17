<template>
  <svg
    class="chessboard"
    :viewBox="`0 0 ${CHESSBOARD_SIZE * 10} ${CHESSBOARD_SIZE * 10}`"
    xmlns="http://www.w3.org/2000/svg"
  >
    <template v-for="(_, column) in CHESSBOARD_SIZE" :key="column">
      <template v-for="(_, row) in CHESSBOARD_SIZE" :key="`${column} - ${row}`">
        <rect
          class="square"
          :class="{
            'square-dark': isGridSquareDark({ column, row }),
            'square-selected': isGridSquareSelected({ column, row }),
          }"
          :x="column * 10"
          :y="row * 10"
          @click="handleGridSquareSelection({ column, row })"
          height="10"
          width="10"
          :data-testid="getTestId({ column, row })"
        />
      </template>
    </template>
  </svg>
</template>

<script setup="props, { emit }">
import { computed } from "vue";

const CHESSBOARD_SIZE = 8;
const selectedGridSquare = computed(() =>
  mapChessCoordinateToGridCoordinate(props.selectedSquare)
);

function mapGridCoordinateToChessCoordinate({ column, row }) {
  const ALPHABET = "abcdefghijlmnopqrstuvwxyz";

  return [ALPHABET[column], CHESSBOARD_SIZE - row];
}

function mapChessCoordinateToGridCoordinate([column, row]) {
  if (!column || !row) {
    return { column: null, row: null };
  }

  const ALPHABET = "abcdefghijlmnopqrstuvwxyz";

  return { column: ALPHABET.indexOf(column), row: CHESSBOARD_SIZE - row };
}

function isGridSquareDark({ column, row }) {
  return column % 2 === row % 2;
}

function isGridSquareSelected({ column, row }) {
  return (
    selectedGridSquare.value.column === column &&
    selectedGridSquare.value.row === row
  );
}

function handleGridSquareSelection({ column, row }) {
  const chessCoordinates = mapGridCoordinateToChessCoordinate({ column, row });

  emit("onSquareSelection", chessCoordinates);
}

function getTestId({ column, row }) {
  const chessCoordinates = mapGridCoordinateToChessCoordinate({ column, row });

  return `square-${chessCoordinates.join("")}`;
}

export default {
  props: {
    onSquareSelection: Function,
    selectedSquare: Array,
  },
};

export {
  CHESSBOARD_SIZE,
  selectedGridSquare,
  isGridSquareDark,
  isGridSquareSelected,
  getTestId,
  handleGridSquareSelection,
};
</script>

<style scoped>
.chessboard {
  width: 100%;
  height: auto;
}

.square {
  fill: var(--light);
  cursor: pointer;
}

.square.square-dark {
  fill: var(--dark);
}

.square.square-selected {
  fill: var(--highlight);
}
</style>
