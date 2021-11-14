import MixinMultiSearchService from "@/mixin/services/multiSearchService";
import WebItemList from "@/components/organism/web-item-list";
import WebFilters from "@/components/organism/web-filters";
export default {
  name: "web-view-search",
  components: {
    WebItemList,
    WebFilters
  },
  mixins:[
    MixinMultiSearchService
  ],
  data() {
    return {
      filteredItems: {
        data: undefined,
      },
      serviceError: false,
      filtersData: [
        {
          filterType: "input",
          type: "text",
          placeholder: this.$t("forms.searchByName"),
          label: this.$t("forms.search")
        }
      ]
    };
  },
  created() {
    
  },
  methods: {
    searchValue(event){
      this.filteredItems.data = undefined;
      const filters = {
        query: event
      }
      this.getMultiSearchService(filters)
        .then(response => {
          console.log(response)
          this.filteredItems.data = response;
        })
        .catch(() => this.serviceError = true)
    }
    
  },
  computed: {
    setTitle(){
      return this.filteredItems.data != undefined ? `${this.$t('forms.results')}: ${this.filteredItems.data.length}` : this.$t('forms.noResults')
    }
  },
};
