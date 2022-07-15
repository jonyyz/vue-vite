<template>
  <language-select />
  <br />
  <my-form />
  <br />
  <va-button primary @click.prevent="goToOtherView">Go to Other View</va-button>
</template>

<script setup>
import { useRouter } from "vue-router";

import MyForm from "@/components/form.vue";
import LanguageSelect from "@/components/language-select.vue";

const router = useRouter();

function goToOtherView() {
  router.push("/other");
}
</script>
