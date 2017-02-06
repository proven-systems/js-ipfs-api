## js-ipfs-api CI configuration
> Configuration for running js-ipfs-api in CI

This directory contains bunch of script and utilities for running js-ipfs
correctly in CI, mainly Jenkins.

### Listing

* `Dockerfile` build-steps for building docker image
* `entrypoint.sh` script to start xvfb and then run your command
* `Jenkinsfile` actual pipeline for testing
* `xvfb.sh` script for starting/stopping xvfb

### Notes

xvfb is being used to start a browser without having any displays. We need this
because we run browser tests in Chrome.
