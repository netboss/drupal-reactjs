// TODO: check environment and serve the correct URL
var host = window.location.hostname;
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
    logo = 'http://ilatorre.me/drupal/sites/ilatorre.me/files/logo/white_logo_transparent.png';
  }
  else {
    logo = 'http://ilatorre.drupal.test/sites/ilatorre.drupal.test/files/logo/white_logo_transparent.png';
  }
  return logo;
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

// Set the JSON API source
export const source = {
  home: getDomainApiUrl() + 'api/home',
  bio: getDomainApiUrl() + 'api/bio',
  objectives: getDomainApiUrl() + 'api/objectives',
  qualifications: getDomainApiUrl() + 'api/qualifications',
  expertise: getDomainApiUrl() + 'api/expertise',
  portfolio: getDomainApiUrl() + 'api/portfolio',
  contact: getDomainApiUrl() + 'contact_message'
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