#!/bin/bash -l

$MELICLOUD_PATH/common/bin/safe_mode/safe_mode_enter.sh
#################################################################################
##            Start script for nodeJS application                   ##
#################################################################################

ACTUAL_DIR=`pwd | awk '{print $1}'`
TO_DATE=`date '+%Y-%m-%d'`
TO_DATE_HHMM=`date +%Y-%m-%d_%H-%M`
echo "Initial directory: $ACTUAL_DIR"
echo "Date (YYYY-MM-DD): $TO_DATE"
echo
echo

## Check if process is already running
echo "Checking for active processes"
if forever list | grep -v grep | grep mock.js > /dev/null
then
        echo "Application is already running!"
        exit 1
fi

echo
echo
## Starting application
echo "Deleting previous logs"
rm -f /tmp/forever.*

echo "Starting Application..."
cd $MELICLOUD_DEPLOY_PATH/ml-build
forever start -l /tmp/forever.log -o /tmp/forever.out.log -e /tmp/forever.err.log -c $NODE_HOME/bin/node mock.js

echo
## Returning to starting directory
echo "Returning to initial directory: $ACTUAL_DIR"
cd $ACTUAL_DIR
sleep 1m
$MELICLOUD_PATH/common/bin/safe_mode/safe_mode_exit.sh
