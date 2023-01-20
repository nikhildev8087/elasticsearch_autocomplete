// import your Search UI config
import { SearchProvider, WithSearch } from "@elastic/react-search-ui";

const config = {
  searchQuery: {
    // 1. Adding new resilt fields, these will be used for the facets
    result_fields: {
      tv_size: { raw: {} },
      tv_smart_tv: { raw: {} },
      tv_resolution: { raw: {} }
      // some other fields
    },
    // 2. Adding the new facets
    facets: {
      tv_size: {
        type: "value",
        sort: { value: "asc" }
      },
      tv_smart_tv: {
        type: "value"
      },
      tv_resolution: {
        type: "value",
        sort: { value: "asc" }
      }
      // some other facets
    },
    // 3. Making some of newly added facets disjunctive
    disjunctiveFacets: ["tv_size", "tv_resolution"]
  }
};

export default function CategoryPage() {
  return (
    // Pass the config to SearchProvider
    <SearchProvider config={config}>
      <WithSearch mapContextToProps={() => ({})}>
        {() => {
          return (
            // The components you want to render go here
            // For the sake of brevity, we're only showing the new facets
            <>
              <Facet field="tv_smart_tv" label="Smart TV" view={BooleanFacet} />
              <Facet field="tv_resolution" label="Resolution" />
              <Facet field="tv_size" label="Diagonal size" />
            </>
          );
        }}
      </WithSearch>
    </SearchProvider>
  );
}