#!/bin/bash

# apt-get --assume-yes autoremove
# apt-get install --assume-yes build-essential libssl-dev
# apt-get install --assume-yes python-software-properties
# apt-add-repository ppa:chris-lea/node.js
# apt-get --assume-yes update
# apt-get install --assume-yes nodejs npm
# apt-get install --assume-yes nodejs-dev
# npm install forever
export https_proxy=http://172.16.0.89:80
export http_proxy=http://172.16.0.89:80

NODE_VERSION="v0.6.19"
if [ "`node -v`" != "$NODE_VERSION" ]; then
  echo 'Installing Node version: ${NODE_VERSION}' >> /tmp/install.log
  export NODE_ENV=production
  export NODE_HOME=/usr/local/node
  export PATH=$NODE_HOME/bin:$PATH
  export PREFIX=$NODE_HOME/
  apt-get install --assume-yes build-essential libssl-dev
  cd /tmp/
  wget http://nodejs.org/dist/$NODE_VERSION/node-$NODE_VERSION.tar.gz
  tar -xvf node-$NODE_VERSION.tar.gz
  cd node-$NODE_VERSION
  ./configure --prefix=$NODE_HOME
  make
  make install
  echo >> /etc/profile
  echo 'export NODE_ENV=production' >> /etc/profile
  echo 'export NODE_HOME=/usr/local/node' >> /etc/profile
  echo 'export PATH=$NODE_HOME/bin:$PATH' >> /etc/profile

  echo 'Installing Forever' >> /tmp/install.log
  npm install -g forever
else
  echo 'Already installed Node version: ${NODE_VERSION}' >> /tmp/install.log
  echo ">>> node is already installed."
fi
