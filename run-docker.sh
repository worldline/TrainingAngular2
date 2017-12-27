#!	/bin/bash

docker run \
	-v $(pwd):/home/guest/trainingangular \
	-p 8081:8080 \
	-it rlegrand/ubuntu-js:1.0.1

