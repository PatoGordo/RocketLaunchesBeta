import RocketInterface from './rockets'

export const SpaceX_Falcon1: RocketInterface = {
  name: 'Falcon 1',
  first_launch: 'March, 24, 2006',
  manufacturer: 'SpaceX',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Falcon_1_Flight_4_liftoff.jpg/300px-Falcon_1_Flight_4_liftoff.jpg',
  reusable: false,
  orbital: true,
  stages: 2,
  propellent: 'RP-1 / LOX',
  total_thrust_kn: 450,
  wiki_link: 'https://en.wikipedia.org/wiki/Falcon_1',
  engines: [
    {
      name: 'Merlin, sea lavel',
      quantity: 1
    },
    {
      name: 'Kastel, vacuum',
      quantity: 1
    }
  ],
  size: {
    height_meters: 21,
    diameter_meters: 1.7,
    mass_tons: 28
  },
  pricing: {
    projectCost: 'US$90 million',
    costPerLaunch: 'US$7 million',
  }
}

export const SpaceX_Falcon9: RocketInterface = {
  name: 'Falcon 9',
  first_launch: 'December, 23, 2018',
  manufacturer: 'SpaceX',
  img: 'https://engenharia360.com/wp-content/uploads/2020/03/spacex-falcon-9-1024x570.jpg',
  reusable: true,
  orbital: true,
  stages: 2,
  propellent: 'RP-1 / LOX',
  total_thrust_kn: 7607,
  wiki_link: 'https://en.wikipedia.org/wiki/Falcon_9',
  engines: [
    {
      name: 'Merlin, sea lavel',
      quantity: 9
    },
    {
      name: 'Merlin, vacuum',
      quantity: 1
    }
  ],
  size: {
    height_meters: 70,
    diameter_meters: 3.7,
    mass_tons: 605
  },
  pricing: {
    projectCost: 'US$300 million',
    costPerLaunch: 'New: US$62 million (2020),\nReused: US$50 million (2019)',
  }
}

export const SpaceX_Starship: RocketInterface = {
  name: 'Starship',
  first_launch: "First Flight hasn't happened yet",
  manufacturer: 'SpaceX',
  img: 'https://img.olhardigital.com.br/wp-content/uploads/2020/09/20200901030459.jpg',
  reusable: true,
  orbital: true,
  stages: 2,
  propellent: 'CH₄(Methane) / LOX',
  total_thrust_kn: 7607,
  wiki_link: 'https://en.wikipedia.org/wiki/SpaceX_Starship',
  engines: [
    {
      name: 'Raptor, sea lavel',
      quantity: 35
    },
    {
      name: 'Raptor, vacuum',
      quantity: 3
    }
  ],
  size: {
    height_meters: 120,
    diameter_meters: 9,
    mass_tons: 5000,
  },
  pricing: {
    projectCost: 'Information not found',
    costPerLaunch: 'US$2 million',
  }
}

export const Roscosmos_Soyuz = {
  name: 'Soyuz FG',
  img: 'https://img.olhardigital.com.br/wp-content/uploads/2021/04/Soyuz_MS-18.jpg',
  first_launch: 'May, 21, 2001'
}

export default [
  SpaceX_Falcon1,
  SpaceX_Falcon9,
  SpaceX_Starship,
  Roscosmos_Soyuz
]