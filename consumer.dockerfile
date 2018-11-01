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

RUN mkdir -p /root/.m2
RUN mkdir -p /consumer
RUN mkdir -p /canonic
COPY ./consumer /consumer
COPY ./canonic /canonic
# dont forget to bring m2 to m2_temp using script
COPY ./m2_temp/ /root/.m2/

WORKDIR /consumer

RUN /bin/bash -l -c 'grails compile'
EXPOSE 8080