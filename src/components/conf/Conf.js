// TODO: check environment and serve the correct URL
export function getDomainApiUrl() {
  //var domainApiUrl = window.location.href;
  var domainApiUrl = 'http://ilatorre.drupal.test/';
  return domainApiUrl;
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