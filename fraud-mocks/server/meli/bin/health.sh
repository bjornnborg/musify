#!/bin/bash -l
#
# Esto es un ejemplo de health.sh


################################################################### FUNCIONES ###############################################################################

function error () {
        echo "ERROR: $1"
        exit 0
}

function checkPing(){
        local ping=`curl http://127.0.0.1:8888/ping --connect-timeout 5 -N -s`
         if [ "$ping" = "pong" ]; then
               echo "0"
         else
               echo "Error executing ping [$ping]"
         fi
}

#Controlo si el tomcat esta levantado y responde el ping.
pingStatus=$(checkPing)

if [ "$pingStatus" != "0" ]; then
  #La aplicacion no responde el ping.
  error "ERROR: La aplicacion no respondio el ping: $pingStatus"
fi

#Esta todo bien, retorno 0
echo "0"
exit 0
