serve:
	docker-compose up --build

test:
	docker-compose run --rm web npm test

install-package:
ifdef name
		docker-compose run --rm web npm install $(name)
else
		echo "Usage: install-package name=<name>"
endif
