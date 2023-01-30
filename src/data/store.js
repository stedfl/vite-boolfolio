import { reactive } from "vue";
export const store = reactive({
  projects: [],
  lastPage: null,
  linkPages: [],
  currentPage: null,
  search: '',
  pagination: true
})