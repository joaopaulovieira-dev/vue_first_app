<template>
  <base-layout page-title="All Memories">
    <ion-list>
      <ion-item
        v-for="memory in memories"
        :router-link="`/memories/${memory.id}`"
        :key="memory.id"
      >
        <ion-thumbnail>
          <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ memory.title }}
        </ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
</template>



<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";

export default {
  components: {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
  data() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png",
          title: "Item 1",
          description: "Description of Intem 1",
        },
        {
          id: "m2",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1200px-NYCS-bull-trans-2.svg.png",
          title: "Item 2",
          description: "Description of Intem 2",
        },
        {
          id: "m3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/NYCS-bull-trans-3.svg/1200px-NYCS-bull-trans-3.svg.png",
          title: "Item 3",
          description: "Description of Intem 3",
        },
        {
          id: "m4",
          image:
            "https://static-public.klickpages.com.br/uploads/media/file/2754102/4.png",
          title: "Item 4",
          description: "Description of Intem 4",
        },
      ],
    };
  },
};
</script>