const assert = require('assert')
const Business = require('../src/businesses')

describe('Creating records', () => {
  it('Saves a business', done => {
    const sazza = new Business({
      BusinessName: 'Sazza Pizza + Salads',
      Location: [
        {
          Name: 'Stanley Marketplace',
          Coordinates: [39.75268, -104.87745],
          PhysicalAddress: {
            StreetAddress: '2501 N. Dallas Way',
            SuiteApt: 'Unit 104',
            City: 'Aurora',
            State: 'CO',
            ZipCode: '80010'
          },
          PhoneNumber: '303-797-3048'
        },
        {
          Name: 'Cherry Hills Marketplace',
          Coordinates: [39.60936, -104.958094],
          PhysicalAddress: {
            StreetAddress: '2500 East Orchard Road E',
            SuiteApt: 'Unit 104',
            City: 'Greenwood Village',
            State: 'CO',
            ZipCode: '80121'
          },
          PhoneNumber: '303-797-2992'
        }
      ],
      AlumName: 'Jeff Rogoff',
      Title: 'Owner',
      Class: 1993,
      Degree: 'BA',
      Field: 'Psychology',
      Url: 'http://sazzarestaurant.com',
      Description: '',
      Primary_Image_Url: '',
      Image2_Url: '',
      Logo_Url: ''
    })

    sazza.save().then(() => {
      // Has Sazza been saved successfully?
      assert(!sazza.isNew)
      done()
    })
  })
})
