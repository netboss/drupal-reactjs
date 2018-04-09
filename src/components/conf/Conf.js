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
    //csrftoken = 'o2gGx1ybE1U9u3ybXdTjg9GBTHIU9O43vePiAd6m71M';
    csrftoken = 'H65MaRPx5ZXVL4u_NG8pMUaoV7r-zo4QgBlSchMhEiQ';
  }
  else {
    //csrftoken = 'pOaTamBHjPu-wOYL9orim2fS4CIop41aRtypAh73-VM';
    csrftoken = 'JQizKFy9ChMsumRPxQpmtiKnvINobd4BqMyK5KnwpJo';
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
  // After updating the Drupal version 8.4.4-dev to 8.5.1 it's now required
  // to append the "?_format=json" parameter to the views JSON API call URL. 
  // Issue reported here:
  // https://www.drupal.org/forum/support/post-installation/2018-03-21/view-rest-export-does-not-work-anymore-after-upgrade-to
  source = getDomainApiUrl() + 'api/' + source + '?_format=json';
  return source;
}

// Set the JSON API source
// After updating the Drupal version 8.4.4-dev to 8.5.1 it's now required
// to append the "?_format=json" parameter to the views JSON API call URL. 
// Issue reported here:
// https://www.drupal.org/forum/support/post-installation/2018-03-21/view-rest-export-does-not-work-anymore-after-upgrade-to 
export const source = {
  home: getDomainApiUrl() + 'api/home?_format=json',
  bio: getDomainApiUrl() + 'api/bio?_format=json',
  objectives: getDomainApiUrl() + 'api/objectives?_format=json',
  qualifications: getDomainApiUrl() + 'api/qualifications?_format=json',
  expertise: getDomainApiUrl() + 'api/expertise?_format=json',
  portfolio: getDomainApiUrl() + 'api/portfolio?_format=json',
  contact_message: getDomainApiUrl() + 'contact_message?_format=json'
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