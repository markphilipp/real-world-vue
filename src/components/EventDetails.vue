<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script lang="ts" setup>
import { getEvent } from "@/services/EventService";
import { useRoute } from "vue-router";

const route = useRoute();
const id = parseInt(route.params["id"].toString() ?? "");
const event = await getEvent(id);
</script>
