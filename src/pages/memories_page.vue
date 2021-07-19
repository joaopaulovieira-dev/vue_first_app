<template>
  <base-layout page-title="All Memories">
    <ion-list>
      <ion-item router-link="/memories/1">Item 1</ion-item>
      <ion-item>Item 2</ion-item>
      <ion-item>Item 3</ion-item>
      <ion-item>Item 4</ion-item>
    </ion-list>
  </base-layout>
</template>



<script>
import { IonList, IonItem } from "@ionic/vue";

export default {
  components: {
    IonList,
    IonItem,
  },
};
</script>