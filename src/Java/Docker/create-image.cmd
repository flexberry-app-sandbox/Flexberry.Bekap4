docker build --no-cache -f SQL\Dockerfile.PostgreSql -t bekap_4-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t bekap_4-java/app ../../..
