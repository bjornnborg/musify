FROM openjdk:7-jdk
RUN apt-get update && apt-get install -qq -y \
  curl \
  zip \
  unzip

#sdk man
ENV SDKMAN_DIR /usr/local/sdkman
RUN curl -s get.sdkman.io | bash
RUN set -x \
&& echo "sdkman_auto_answer=true" > $SDKMAN_DIR/etc/config \
&& echo "sdkman_auto_selfupdate=false" >> $SDKMAN_DIR/etc/config \
&& echo "sdkman_insecure_ssl=false" >> $SDKMAN_DIR/etc/config

RUN /bin/bash -l -c 'sdk install grails 2.5.0'

RUN mkdir -p /producer
RUN mkdir -p /canonic
COPY ./producer /producer
COPY ./canonic /canonic

WORKDIR /producer

RUN /bin/bash -l -c 'grails compile --refresh-dependencies'

#ENTRYPOINT ["/bin/bash"]