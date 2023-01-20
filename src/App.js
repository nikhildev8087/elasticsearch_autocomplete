import logo from './logo.svg';
import './App.css';
// import { Client } from '@elastic/elasticsearch';
import { useEffect, useState } from 'react';
import { SearchBox, SearchProvider } from '@elastic/react-search-ui';
import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector/lib/esm/AppSearchAPIConnector';
import AutocompleteView from './components/Autocomplete';
import {Elasticsearch,Facet,Results,MyCardItem } from 'react-elasticsearch'


const connector = new AppSearchAPIConnector({
  searchKey: "search-34t5gii6ue5ekq9136qmrwbz",
  engineName: "test",
  endpointBase: "https://76e645c2830843e58a653a3e3cde368a.ent-search.us-central1.gcp.cloud.es.io"
});



const configurationOptions = {
  apiConnector: connector,
  searchQuery: {
    "types": {
      "documents": {
        "fields": ["email", "gender"]
      }
    },
    "size": 4
  },
  autocompleteQuery: {results: {
    resultsPerPage: 5, // number of results to display. Default is 5.
    result_fields: {
      // Add snippet highlighting within autocomplete suggestions
      title: { snippet: { size: 100, fallback: true }},
      nps_link: { raw: {} }
    }
  },
  // performs a query to suggest for values that partially match the incomplete query
  suggestions: {
    types: {
      // Limit query to only suggest based on "title" field
      documents: {  fields: ["email", "gender"] }
    },
    // Limit the number of suggestions returned from the server
    size: 4
  }
},






  hasA11yNotifications: true,
  a11yNotificationMessages: {
    searchResults: ({ start, end, totalResults, searchTerm }) =>
      `Searching for "${searchTerm}". Showing ${start} to ${end} results out of ${totalResults}.`
  },
  alwaysSearchOnInitialLoad: true
};


function App() {
  const [testData, setTestData] = useState([]);

  // const client = new Client({
  //   // cloud: {id: ''},
  //   // auth: {apikey: ''}
  //   host: 'http://localhost:9200',
  //   // host:'https://76e645c2830843e58a653a3e3cde368a.ent-search.us-central1.gcp.cloud.es.io'
  // })

  // client.search({
  //   index: 'myIndex',
  //   type: 'myType',
  //   body: {
  //     query: {
  //       match: {
  //         title: 'Elasticsearch'
  //       }
  //     }
  //   }
  // }).then(function (resp) {
  //   console.log(resp.hits.hits);
  // }, function (err) {
  //   console.trace(err.message);
  // });


  // console.log(testData);

  
useEffect(()=>{

  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
         setTestData(data)
      });
},[])


  return (
    <div className="App">
      <h3>Test App</h3>
      <SearchProvider config={configurationOptions}>
    <div className="App">
      {/* <SearchBox  autocompleteResults={{
          titleField: "email",
          // urlField: "email",
        }}/> */}

<SearchBox autocompleteSuggestions={true} />
<SearchBox
  autocompleteResults={{
    sectionTitle: "Suggested Results",
    titleField: "email",
    urlField: "id"
  }}
  autocompleteSuggestions={{
    sectionTitle: "Suggested Queries"
  }}
/>
    <iframe src="https://502751400bdc4be0a185dc98a54aa28f.us-central1.gcp.cloud.es.io:9243/app/dashboards#/view/ca7461e0-970c-11ed-bde9-95c2649e55d9?embed=true&_g=private-9nyi9dgr7to4sbbtba4qauea" height="600" width="800"></iframe>

{/* 
<SearchBox autocompleteResults={{
  titleField: "name",
  urlField: "url"
}} autocompleteView={AutocompleteView} />; */}

    </div>

    {/* <Elasticsearch url="https://76e645c2830843e58a653a3e3cde368a.ent-search.us-central1.gcp.cloud.es.io">
    <SearchBox id="mainSearch" />
    <Facet id="email" fields={["email"]} />
    <Results
      id="results"
      items={data =>
        data.map(item => <MyCardItem key={item._id} source={item._source} />)
      }
    />
  </Elasticsearch> */}

  </SearchProvider>
    </div>
  );
}

export default App;
