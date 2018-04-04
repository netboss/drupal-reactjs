// TODO: check environment and serve the correct URL
var host = window.location.hostname;
//var location = window.location.href;
var pathname = window.location.pathname;
export function getDomainApiUrl() {
  var domainApiUrl;
  if (host === 'ilatorre.me') {
    domainApiUrl = 'http://ilatorre.me/drupal/';
  }
  else {
    domainApiUrl = 'http://ilatorre.drupal.test/';
  }
  return domainApiUrl;
}

export function getLogo() {
  var logo;
  if (host === 'ilatorre.me') {
    //logo = 'http://ilatorre.me/drupal/sites/ilatorre.me/files/logo/white_logo_transparent_af0f422be324c90950e8824ff1a2d604.png';
    logo = 'http://ilatorre.me/drupal/sites/ilatorre.me/files/logo/white_logo_transparent_af0f422.png';
  }
  else {
    logo = 'http://ilatorre.drupal.test/sites/ilatorre.drupal.test/files/logo/white_logo_transparent.png';
  }
  return logo;
}

export function getPlaceholderImg() {
  var img;
  if (host === 'ilatorre.me') {
    img = 'http://ilatorre.me/drupal/sites/ilatorre.drupal.test/files/default_images/placeholder_400x400.png';
  }
  else {
    img = 'http://ilatorre.drupal.test/sites/ilatorre.drupal.test/files/default_images/placeholder_400x400.png';
  }
  return img;
}

export function getDrupalBadge() {
  var badge;
  if (host === 'ilatorre.me') {
    badge = 'http://ilatorre.me/drupal/sites/ilatorre.me/files/drupal_association_ind_member_badge.svg';
  }
  else {
    badge = 'http://ilatorre.drupal.test/sites/ilatorre.drupal.test/files/drupal_association_ind_member_badge.svg';
  }
  return badge;
}

export function getDrupalToken() { // get token from "/rest/session/token"
  var csrftoken;
  if (host === 'ilatorre.me') {
    csrftoken = 'o2gGx1ybE1U9u3ybXdTjg9GBTHIU9O43vePiAd6m71M';
  }
  else {
    csrftoken = 'pOaTamBHjPu-wOYL9orim2fS4CIop41aRtypAh73-VM';
  }
  return csrftoken;
}

// In progress...
export function setActiveHome() {
  //console.log( 'location: ' + location + ' - pathname: ' + pathname );
  if (pathname === '/') {
    return pathname;
  }
}

export function getApiSource(source) {
  source = getDomainApiUrl() + 'api/' + source;
  return source;
}

// Set the JSON API source
export const source = {
  home: getDomainApiUrl() + 'api/home',
  bio: getDomainApiUrl() + 'api/bio',
  objectives: getDomainApiUrl() + 'api/objectives',
  qualifications: getDomainApiUrl() + 'api/qualifications',
  expertise: getDomainApiUrl() + 'api/expertise',
  portfolio: getDomainApiUrl() + 'api/portfolio',
  contact_message: getDomainApiUrl() + 'contact_message'
}

// Set the top nav URL paths
export const paths = {
  home: '/home',
  bio: '/bio',
  objectives: '/objectives',
  qualifications: '/qualifications',
  expertise: '/expertise',
  portfolio: '/portfolio'
}

// Change by your Drupal dev environment
//export const REST_HOST_NAME = 'http://ilatorre.drupal.test/';