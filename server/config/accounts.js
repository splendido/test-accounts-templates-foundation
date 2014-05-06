

// Set up login services
Meteor.startup(function() {

  // Remove configuration entries in case service is already configured
  ServiceConfiguration.configurations.remove({
    $or: [{
      service: "facebook"
    }, {
      service: "google"
    }, {
      service: "linkedin"
    }]
  });

  // Add Facebook configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "facebook",
    "appId": "1478530982376469",
    "secret": "baab3cb282df3b974ace7252a6abe76b"
  });

  // Add Google configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "google",
    "clientId": "755514649356-rlho8fe6gj77vf029gg4b48f6adbcgim.apps.googleusercontent.com",
    "client_email": "755514649356-rlho8fe6gj77vf029gg4b48f6adbcgim@developer.gserviceaccount.com",
    "secret": "hdU6i3pW63nKx6IlkeytpOaW"
  });

  // Add Facebook configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "linkedin",
    "clientId": "77pa4mwww7hvmw",
    "secret": "v7fYiQMLUwqGwQTI"
  });

});
