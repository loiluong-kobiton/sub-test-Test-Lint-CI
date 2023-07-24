#!/bin/bash
echo "Start Lint check \n"
yarn lint > lint-errors.txt

exitCode=$?

if [ $exitCode -ne 0 ]; then
    echo "Lint check failed. Exiting..."
    cat lint-errors.txt
    exit $exitCode
else
    echo " Lint check success"
fi
