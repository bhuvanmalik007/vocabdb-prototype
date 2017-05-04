// import wordsArray from '../words'

export default {
  wordsState: {
    wordsArray:[],
    filteredArray: [],
    searchString: '',
    isLoading: true,
    total: 0
  },
  globalSearchState: { results: {words:[]}, searchString: '', isLoading: false },
  toastrState:{},
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  }
};
