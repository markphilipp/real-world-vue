<script lang="ts" setup>
import EventCard from "@/components/EventCard.vue"; // @ is an alias to /src
import { Event } from "@/types/Event";
import axios from "axios";

const events: Event[] = (
  await axios.get<Event[]>(
    "https://my-json-server.typicode.com/markphilipp/real-world-vue/events"
  )
).data;
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <img alt="Vue logo" src="../assets/logo.png" />
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  {{ events }}
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
