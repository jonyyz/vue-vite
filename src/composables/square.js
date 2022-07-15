import { ref, watch } from "vue";

export function useSquare({ autoUpdate, initialValue }) {
  const number = ref("");
  const squared = ref("");

  function square() {
    squared.value = Math.pow(number.value, 2);
  }

  if (autoUpdate) watch(number, square);
  if (initialValue) number.value = initialValue.toString();

  return { number, square, squared };
}
