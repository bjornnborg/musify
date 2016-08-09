#!/bin/bash -l

$MELICLOUD_PATH/common/bin/safe_mode/safe_mode_enter.sh
#################################################################################
##            Restart script for tomcat / grails application                   ##
#################################################################################

ACTUAL_DIR=`pwd | awk '{print $1}'`
TO_DATE=`date '+%Y-%m-%d'`
TO_DATE_HHMM=`date +%Y-%m-%d_%H-%M`
echo "Initial directory: $ACTUAL_DIR"
echo "Date (YYYY-MM-DD): $TO_DATE"
echo
echo

## Executing shutdown of tomcat
echo "Shutting down Application"
forever stop mock.js

echo
echo

## Returning to starting directory
echo "Returning to initial directory: $ACTUAL_DIR"
cd $ACTUAL_DIR
$MELICLOUD_PATH/common/bin/safe_mode/safe_mode_exit.sh