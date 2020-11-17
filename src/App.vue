<template>
  <main class="container">
    <div class="chessboard-container">
      <Chessboard
        :selectedSquare="lastSelection"
        @onSquareSelection="handleChessBoardSquareSelection"
      />
    </div>
    <div class="sidebar-container">
      <Sidebar
        :selectedSquares="selectedSquares"
        @onSquareSelectionChange="handleSelectionChange"
      />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Chessboard from "@/components/Chessboard.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: { Sidebar, Chessboard },
};
const lastSelection = ref([]);
const selectedSquares = ref([]);

function handleChessBoardSquareSelection(square) {
  lastSelection.value = square;
  selectedSquares.value.push(square);
}

function handleSelectionChange(selectedSquare) {
  lastSelection.value = selectedSquare;
}

export {
  Chessboard,
  lastSelection,
  selectedSquares,
  handleChessBoardSquareSelection,
  handleSelectionChange,
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  font-size: 100%;
}

#app {
  --darkest: #22223b;
  --darken: rgba(0, 0, 0, 0.1);
  --dark: #1d2d50;
  --light: #f2e9e4;
  --lighten: rgba(255, 255, 255, 0.1);
  --lightenx2: rgba(255, 255, 255, 0.2);
  --highlight: #86dd89;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--darkest);
  color: var(--light);
}

#app,
.container {
  height: 100%;
  max-height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
}

.chessboard-container {
  display: flex;
  height: 60%;
  margin: auto;
  padding: 2rem;
}

.sidebar-container {
  height: 40%;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
  }

  .chessboard-container {
    width: 70%;
    max-width: 70%;
    height: 100%;
  }

  .sidebar-container {
    width: 30%;
    max-width: 30rem;
    height: 100%;
  }
}
</style>
