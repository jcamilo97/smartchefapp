// import _ from 'lodash';
// import { getRandomArbitrary } from 'smartchef/src/common/utils'

const apiToListChef = chefsList => {
  const transformChef = chefsList.map(chef => {
    const userCheft = {
      key: chef.id_profile,
      id_profile: chef.id_profile,
      chefImage: chef.image_url,
      full_name: chef.full_name,
      mail: chef.mail,
      address: chef.address,
      decription: "test",
      openStatus: 'A',
      distance: '0km',
      rate: 5
    };

    const events = chef.events.map(event => {
      const theEvent = {
        image_url: event.image_url,
        name: event.name,
        description: event.description,
        price: event.price,
        lat_addr: event.lat_addr,
        lon_addr: event.lon_addr,
        address: event.address,
      };
      const dishes = event.dishes.map(dish => ({
        key: dish.id,
        src: dish.image_url,
        name: dish.name,
        description: dish.description,
        id_category: dish.id_category,
      }));
      return { ...theEvent, dishes };
    });
    return { ...userCheft, events };
  });

  console.tron.log("arrre", transformChef)
  return transformChef.slice(0, 1);
};

export default {
  apiToListChef,
};
