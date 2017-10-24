#!/bin/bash

DB_CONTAINER="db_db_1";

docker exec $DB_CONTAINER mongodump --host localhost --port 27017
docker cp $DB_CONTAINER:/home/mongo/dump ../
