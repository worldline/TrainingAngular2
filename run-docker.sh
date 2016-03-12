#!	/bin/bash

docker run \
	-v $(pwd):/home/guest/trainingangular2 \
	-p 8081:8080 \
	-it rlegrand/ubuntu-js:1.0.1

