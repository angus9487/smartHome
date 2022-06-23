git pull &&
docker start buildnode
#docker run --name buildnode -d -v /apps/smartHome:/smartHome -e PROJECTPATH="/smartHome" buildnode