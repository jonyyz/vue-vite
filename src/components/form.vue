<template>
  <div class="row">
    <div class="flex md6">
      <va-card background="background">
        <va-card-title>Number Squarer</va-card-title>
        <va-card-content>
          <div :class="$style.container">
            <div :class="$style.row">
              <va-input
                :class="$style.number"
                v-model="number"
                label="Number"
                placeholder="Enter a number to square"
              />
              <va-button @click.prevent="square">
                Square It
              </va-button>
            </div>
            <div><strong>Result:</strong> {{ squared }}</div>
          </div>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: 1em;
  }
}

.row {
  display: flex;
  flex: 0 0;

  > *:not(:last-child) {
    margin-right: 0.5em;
  }
}

.number {
  flex: 0 0 10em;
}
</style>
<script setup>
import { useSquare } from "../composables/square.js";

const { number, square, squared } = useSquare({
  initialValue: 42,
});
</script>
