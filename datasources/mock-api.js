const { RESTDataSource } = require('apollo-datasource-rest');

class MockAPI extends RESTDataSource {
  // constructor() {
  //   super();
  //   //the fake mock-api user
  //   this.baseURL = 'https://swapi.dev/api/people/';
  // }
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://api.thecatapi.com/v1/';
  }
  getCatBreeds() {
    return this.get('breeds');
  }
  
  getCatByName(catName) {
    return this.get(`breeds/search?q=${catName}`)
  }

  getImageByRefId(imageRefId) {
    return this.get(`images\\${imageRefId}`)
  }
}

module.exports = MockAPI;