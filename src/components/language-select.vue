<template>
  <div class="row mb-3">
    <label class="col-sm-2 col-form-label">{{ $t("select_language") }}</label>
    <div class="col-sm-1">
      <select class="form-select" v-model="$i18n.locale">
        <option v-for="{ id, displayText } in locales" :value="id">
          {{ displayText }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { locales } from "@/lang";
</script>
