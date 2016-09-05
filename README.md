# Messenger Platform Plus inklejs

Messenger Chat Bot powered by inkle (the magnificent interactive fiction scripting language).  Just load your inkle files and let users interact with you content through messenger.  Sweet huh?

## Setup

You will need a Facebook Developer account and be setup to use the Messenger API.  Check out https://developers.facebook.com/docs/messenger-platform/quickstart for help.

Then you are gonna need some inkle files.  Check out https://github.com/y-lohse/inkjs for getting started with inkle.

## Run

You can start the server by running `npm start`. However, the webhook must be at a public URL that the Facebook servers can reach. Therefore, running the server locally on your machine will not work.

You can run this example on a cloud service provider like Heroku, Google Cloud Platform or Azure (my favorite). Note that webhooks must have a valid SSL certificate, signed by a certificate authority. Read more about setting up SSL for a [Webhook](https://developers.facebook.com/docs/graph-api/webhooks#setup).

You also need to populate the config.default.json with the magic keys from Facebook.  See the getting started guide (https://developers.facebook.com/docs/messenger-platform/quickstart) for help 

## Webhook

All webhook code is in `inkleApp.js`. It is routed to `/webhook`. This project handles callbacks for authentication, messages, delivery confirmation and postbacks. 

## inkle goodness

The chatDialogs and session folders have the magic for interacting with the ink story and rendering the content for Messenger API to consume. 
inkle files are stored in chatDialogs/inkjsFiles

## License

See the LICENSE file in the root directory of this source tree. Feel free to useand modify the code.