#!/bin/bash
#!/usr/local/bin/npm

text="p_test"
search="http://localhost:8000"

for i in 1 2 3
do
    date=$(date +%F_%H-%M-%S)
    folder="performance-report"
    mkdir -p ./lighthouse-reports/${folder}/${date}${text}
    lighthouse-ci  --preset=mobile --budget-path=./lighthouse-budgets.json --report=./lighthouse-reports/${folder}/${date}${text} $search 
done
