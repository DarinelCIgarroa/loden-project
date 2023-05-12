<template>
  <q-card class="q-ma-md">
    <q-item v-ripple clickable>
      <q-item-section avatar>
        <q-avatar>
          <img
            src="https://cdn.quasar.dev/img/boy-avatar.png"
            alt="profile-client"
          />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label lines="2">
          <q-expansion-item
            v-model="expanded"
            :label="data.mail"
            :caption="data.full_name"
            style="font-size: 15px"
            class="text-weight-bold"
          >
            <q-card>
              <q-card-section
                class="row column"
                style="display: flex; align-items: stretch"
              >
                <span class="text-weight-regular" style="font-size: 17px">
                  {{ data.message }}
                </span>

                <span class="q-mt-sm" style="font-size: 17px"
                  >Evento de interes:
                  <span
                    class="text-overline text-uppercase q-pl-xs"
                    style="font-size: 15px"
                    >{{ data.event.title }}</span
                  ></span
                >
                <span style="font-size: 17px"
                  >Inicio del evento:
                  <span class="text-overline q-pl-xs" style="font-size: 15px">
                    {{ formatDate(data.event.start_date) }}</span
                  >
                </span>
                <span style="font-size: 17px"
                  >Fin del evento:
                  <span class="text-overline q-pl-xs" style="font-size: 15px">
                    {{ formatDate(data.event.end_date) }}</span
                  >
                </span>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-item-label caption>{{ timeElapsed(data.created_at) }}</q-item-label>
        <q-item-section side top class="text-weight-bold">
          {{ data.phone_number }}
        </q-item-section>
        <q-btn
          size="sm"
          flat
          round
          icon="fa-solid fa-trash"
          class="bg-negative text-white q-mx-xs"
          @click="
            confirmDeleteMessage();
            messageId = data.id;
          "
        />
      </q-item-section>
    </q-item>
  </q-card>
  <q-dialog v-model="confirmDelete" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar
          icon="fa-solid fa-triangle-exclamation fa-xl"
          style="background-color: #fff"
          text-color="red"
        ></q-avatar>
        <span class="q-ml-sm"
          >You are currently not connected to any network.</span
        >
      </q-card-section>

      <q-card-actions align="right">
        <q-btn v-close-popup flat label="Cancelar" color="primary"></q-btn>
        <q-btn
          v-close-popup
          flat
          label="Cofirmar"
          color="primary"
          @click="deleteMessage"
        ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, computed } from "vue";
import { useMessageStore } from "stores/message-store";
import { parseISO, format, formatDistance } from "date-fns";
import { es } from "date-fns/locale";

const messageStore = useMessageStore();
const confirmDelete = ref(false);
const messageId = ref(null);

defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const expanded = ref(false);

const formatDate = computed(() => {
  return (date) => {
    const startDate = date;
    const dateObj = parseISO(startDate);

    const humanDate = format(dateObj, "d 'de' MMMM 'de' yyyy", {
      locale: es,
    });

    return humanDate;
  };
});

const timeElapsed = computed(() => {
  return (date) => {
    const startDate = parseISO(date);
    return formatDistance(startDate, new Date(), {
      locale: es,
    });
  };
});

const confirmDeleteMessage = () => {
  confirmDelete.value = true;
};

const deleteMessage = () => {
  messageStore.deleteMessage(messageId);
};
</script>
