# EmberConf EmberMap Acceptance testing training

Hi there!

We're super excited that you're attending our EmberConf acceptance testing training on Monday. Please follow these instructions to setup your computer with our training app. It should take no more than ten minutes.

We need to install a couple of NPM packages for this training. Since conference center wifi isn't always the most reliable thing it's going to be easier if you can to do the setup at home or work.

# Installation

If you have any trouble with these steps feel free to reach out to us. My email is [ryan@embermap.com](mailto:ryan@embermap.com), Sam's is [sam@embermap.com](mailto:sam@embermap.com), or join us in #topic-embermap on Ember slack.

## Node.js

We're using Node.js version 6.10.1, which is the current LTS version. Any version of node above 4 should work, but if you're getting stuck let us know.

## Training app

Here's how you can install the training app:

1. Open terminal
1. Clone this git repository: `git clone git@github.com:EmberMap/acceptance-testing-training.git`
1. Move into the directory: `cd acceptance-testing-training`
1. Run NPM install: `npm install` (You might get some warnings, thats ok!)
1. Run Bower install: `bower install`
1. Build the app `ember build`
1. You're all set! We'll see you Monday!

# PhantomJS

It would be nice if you have phantomjs installed, but it can sometimes be tricky, so it's not a requirement. Here are some instructions if you would like to try to get it installed.

If you're on a mac using homebrew, try running: `brew install phantomjs`.

Otherwise try installing from NPM: `npm install -g phantomjs-prebuilt`.

If either of these fail, no problem and don't worry about it.

If phantomjs is installed you should be able to run `ember test` and see it pass with 0 errors.

### See you Monday!
