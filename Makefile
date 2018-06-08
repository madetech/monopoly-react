serve:
	docker-compose up --build

test:
	docker-compose run --rm web npm test

npm:
ifdef cmd
		docker-compose run --rm web npm $(cmd)
else
		echo "Usage: cmd=<command>"
endif
