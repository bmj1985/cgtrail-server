const assert = require('assert')
const Business = require('../src/businesses')

describe('It reads businesses out of the database', () => {
  let sazza, greatDivide, milkMarket

  beforeEach((done) => {
    sazza = new Business({
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
    greatDivide = new Business({
      BusinessName: 'Great Divide Brewing Co.',
      Location: [
        {
          Name: 'Ballpark',
          Coordinates: [39.754039, -104.988496],
          PhysicalAddress: {
            StreetAddress: '2201 Arapahoe St',
            SuiteApt: null,
            City: 'Denver',
            State: 'CO',
            ZipCode: '80205'
          },
          PhoneNumber: '303-296-9460'
        }
      ],
      AlumName: 'Brian Dunn',
      Title: 'CEO & Founder',
      Class: 1992,
      Degree: 'MEPM',
      Field: 'Environmental Policy & Management',
      Url: 'https://greatdivide.com',
      Description: '',
      Primary_Image_Url: '',
      Image2_Url: '',
      Logo_Url: ''
    })
    milkMarket = new Business({
      BusinessName: 'Milk Market',
      Location: [
        {
          Name: 'Milk Market',
          Coordinates: [39.753219, -104.997312],
          PhysicalAddress: {
            StreetAddress: '21800 Wazee St',
            SuiteApt: 'Suite 100',
            City: 'Denver',
            State: 'CO',
            ZipCode: '80202'
          },
          PhoneNumber: ''
        }
      ],
      AlumName: 'Frank Bonnano',
      Title: 'Principal',
      Class: 1990,
      Degree: 'BSBA',
      Field: 'Real Estate',
      Url: 'http://www.denvermilkmarket.com/'
    })

    Promise.all([sazza.save(), greatDivide.save(), milkMarket.save()])
      .then(() => done())
  })

  it('Should find all businesses with a Business name of Milk Market', (done) => {
    Business.find({ BusinessName: 'Milk Market' })
      .then((businesses) => {
        assert(businesses[0]._id.toString() === milkMarket._id.toString())
        done()
      })
  })

  it('Should find a business with a particular id', (done) => {
    Business.findOne({ _id: milkMarket._id })
      .then((business) => {
        assert(business.BusinessName === 'Milk Market')
        done()
      })
  })

  it('can skip and limit the result set', (done) => {
    Business.find({})
      .sort({ BusinessName: 1 })
      .skip(1)
      .limit(2)
      .then((businesses) => {
        assert(businesses.length === 2)
        assert(businesses[0].BusinessName === 'Milk Market')
        assert(businesses[1].BusinessName === 'Sazza Pizza + Salads')
        done()
      })
  })
})
