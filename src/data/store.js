import { reactive } from "vue";
export const store = reactive({
  projects: [],
  lastPage: null,
  linkPages: [],
  currentPage: null,
  search: '',
  typesList: '',
  technologiesList: '',
  isTitle: false,
  title: ''
})