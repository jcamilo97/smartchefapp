// import _ from 'lodash';
// import { getRandomArbitrary } from 'smartchef/src/common/utils'
import { API_URL } from 'smartchef/src/config/environment';

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
  return transformChef.slice(0, 1);
};

const apiToEvents = events => {
  const transformEvents = events.map(event => {
    const dishes = event.dishes.map(dish => ({
      key: dish.id,
      src: `${API_URL}storage/imgs/food/${dish.image_url}`,
      name: dish.name,
      quantity: 3,
      description: dish.description,
    }));
    const wrapper = {
      key: event.id,
      image_url: `${API_URL}storage/imgs/event/${event.image_url}`,
      name: event.name,
      description: event.description,
      price: event.price,
      lat_addr: event.lat_addr,
      lon_addr: event.lon_addr,
      address: event.address,
      reviewsNumber: 'review',
      openStatus: 'open',
      distance: '0 km',
      rate: 1,
      chef: {
        key: event.chef.id,
        avatar: `${API_URL}storage/imgs/user/${event.chef.image_url}`,
        full_name: event.chef.full_name,
        address: event.chef.address,
      },
    };
    return {...wrapper, dishes};
  });
  return transformEvents;
};

const apiToEventDetail = eventDetail => {
  const dishes = eventDetail.dishes.map(dish => ({
    key: dish.id,
    src: `${API_URL}storage/imgs/food/${dish.image_url}`,
    name: dish.name,
    quantity: 3,
    description: dish.description,
  }));
  const wrapper = {
    key: eventDetail.id,
    image_url: `${API_URL}storage/imgs/eventDetail/${eventDetail.image_url}`,
    name: eventDetail.name,
    description: eventDetail.description,
    price: eventDetail.price,
    lat_addr: eventDetail.lat_addr,
    lon_addr: eventDetail.lon_addr,
    address: eventDetail.address,
    reviewsNumber: 'review',
    openStatus: 'open',
    distance: '0 km',
    rate: 1,
    chef: {
      key: eventDetail.chef.id,
      avatar: `${API_URL}storage/imgs/user/${eventDetail.chef.image_url}`,
      full_name: eventDetail.chef.full_name,
      address: eventDetail.chef.address,
    },
  };
  return {...wrapper, dishes};
};

const apiToCategories = categories => {
  const transformCategories = categories.map(category => ({
    key: category.id,
    name: category.name,
    image_url: `${API_URL}storage/imgs/category/${category.image_url}`,
  }));
  return transformCategories;
};

const apiToUser = user => ({
  full_name: user.full_name,
  id: user.id,
  id_profile: user.id_profile,
  avatar: `${API_URL}storage/imgs/user/${user.image_url}`,
  mail: user.mail,
  birthday: user.birthday,
  address: user.address,
});

export default {
  apiToListChef,
  apiToCategories,
  apiToEvents,
  apiToEventDetail,
  apiToUser,
};
