import _ from 'lodash'

const getListings = state => state.listings.get('listings')

const getMapFullListings = state => state.listings.get('mapListings')

const getAuthToken = state => `Bearer ${state.appPersist.get('token')}`;

const getNotificationsToken = state => state.session.get('deviceInfo')

const getListingsPagination = state => state.listings.get('pagination')

const getListingSelected = state => state.listings.get('listingSelected')

const getMapViewport = (state) => {
  if (state.listings.get('searchViewport')) {
    const {
      latitude, longitude, latitudeDelta, longitudeDelta
    } = state.listings.get('searchViewport')
    const halfLat = latitudeDelta / 2
    const halfLng = longitudeDelta / 2
    return {
      ne_lat: latitude - halfLat, // 6.206247,
      ne_lng: longitude - halfLng, // -75.551656,
      sw_lat: latitude + halfLat, // 6.20181,
      sw_lng: longitude + halfLng // -75.557235
    }
  }
  return {}
}
const getCurrentLanguage = state => state.i18n.get('currentLanguage')

const getListingsActiveFilters = (state) => {
  const filters = Object.assign({}, state.listings.get('filters'));
  filters['price[max]'] = filters['price[max]'] === 10000000000 || filters['price[max]'] === 30000000
    ? 0
    : filters['price[max]'];

  filters['area_sqm[max]'] = filters['area_sqm[max]'] >= 1000
    ? 0
    : filters['area_sqm[max]'];
  const cleanedFilters = _.chain(filters)
    .omitBy(_.isNil || (_.isEmpty && !_.isNumber))
    .omitBy(o => o.length === 0)
    .omitBy(o => o === 0)
    .value()
  if (_.hasIn(cleanedFilters, 'areas')) {
    cleanedFilters.areas = cleanedFilters.areas.map(a => a.display_name.replace(' ', '_'))
  }
  return cleanedFilters;
}

const getBranches = state => state.appPersist.get('sessionData').branch_id

const getAreas = state => state.listings.get('areas')

const getLeadDetails = state => state.leads.get('LeadDetails')

const getActivityFeedListings = state => state.listings.get('activityFeed')

const getActiveLeads = state => state.leads.get('activeLeads')

const getLeadsLogs = state => state.leads.get('leadLogs')

const getAllAreas = state => state.listings.get('allAreas')

export default {
  getListings,
  getAuthToken,
  getNotificationsToken,
  getListingsPagination,
  getCurrentLanguage,
  getListingsActiveFilters,
  getMapViewport,
  getListingSelected,
  getMapFullListings,
  getBranches,
  getAreas,
  getLeadDetails,
  getActivityFeedListings,
  getActiveLeads,
  getLeadsLogs,
  getAllAreas
}
