<script lang="ts" setup>
import EventCard from "@/components/EventCard.vue"; // @ is an alias to /src
import { getEvents } from "@/services/EventService";
import { Event } from "@/types/Event";

const events: Event[] = await getEvents();
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
