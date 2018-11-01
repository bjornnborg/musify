FROM openjdk:7-jdk
RUN apt-get update && apt-get install -qq -y

#RUN useradd -ms /bin/bash elasticsearch

#RUN mkdir -p /home/elasticsearch/es
#COPY ./es /home/elasticsearch/es
#RUN chmod -R a+r /home/elasticsearch/es
#RUN chmod -R a+w /home/elasticsearch/es
#RUN chmod -R a+x /home/elasticsearch/es

#USER elasticsearch

#WORKDIR /home/elasticsearch/es

RUN ls
RUN mkdir -p /elasticsearch/es
COPY ./es /elasticsearch/es
RUN chmod -R a+r /elasticsearch/es
RUN chmod -R a+w /elasticsearch/es
RUN chmod -R a+x /elasticsearch/es
WORKDIR /elasticsearch/es

CMD bin/elasticsearch
#ENTRYPOINT ["bin/elasticsearch"]
#CMD ["-Des.insecure.allow.root=true"]
#EXPOSE 9200
EXPOSE 9200
EXPOSE 9300