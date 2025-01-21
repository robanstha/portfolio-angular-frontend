.PHONY: help
help:
	@grep -E '^[a-zA-Z+-]+:.*?## .*$$' Makefile | awk 'BEGIN {FS=":.*?## "}; {printf "\033[33m%-15s\033[0m %s\n", $$1, $$2}'

.PHONY: build
build: ## Build docker container
	docker-compose build
	@if [ ! -d "./src/node_modules" ]; then \
		make sync-node-modules; \
	else \
		echo "Node modules already exists. No need to copy node modules"; \
	fi

sync-node-modules: ## Sync node modules from docker image
	docker rm copy-node-modules 2>/dev/null; True;
	docker create --name copy-node-modules portfolio-angular-frontend:latest;
	docker cp copy-node-modules:/src/node_modules ./src/;
	docker rm copy-node-modules;

up: ## Start docker container
	@if [ "$$OSTYPE" == 'msys' ]; then \
		echo "Creating container on MSYS"; \
		echo docker run --name portfolio-angular-frontend -it --rm -p 4200:4200  -v "/$${PWD}/src:/src" portfolio-angular-frontend npm start; \
	else \
		echo "Creating container on on $$OSTYPE"; \
		docker run --name portfolio-angular-frontend -it --rm -p 4200:4200  -v "/$${PWD}/src:/src" portfolio-angular-frontend npm start; \
	fi

deploy: ## Run ng build to generate html files
	@if [ "$$OSTYPE" == 'msys' ]; then \
		docker run -it  -v "/$${PWD}/src:/src" portfolio-angular-frontend ng build; \
	else \
		docker run -it  -v "$${PWD}/src:/src" portfolio-angular-frontend ng build; \
	fi
