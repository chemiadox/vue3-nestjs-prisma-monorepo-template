<script setup lang="ts">
import { TestUser } from '@common/test-user';
import { formatDate } from '@utils/date';
import { varB, varC } from './components/source1';
import TestComponent from '@/components/test-component.vue';
import TestComponent2 from '@/components/test-component-2.vue';

import { TestUsers } from '@common/test';

const user: TestUser = {
  // id: '123',
  email: 'email',
  createdAt: 'created_at',
};

const testUsers: TestUsers = [
  {
    id: 123,
    name: 'lskdjf',
    wallet: [{ id: 123, userId: 123 }],
  }
]

const envVariable = import.meta.env.VITE_TEST_VARIABLE;
</script>

<template>
  <div>
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  </div>
  <div>DATE: {{ formatDate(new Date()) }}</div>
  <div>USER: {{ user }}</div>
  <div>{{ envVariable }}</div>
  <div><test-component /></div>
  <div><test-component2 /></div>
  <div>{{ varB }}</div>
  <div>{{ varC }}</div>
</template>

<style scoped></style>
