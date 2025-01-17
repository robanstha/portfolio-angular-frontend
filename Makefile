build:
	docker-compose build
	@if [ ! -d "./src/node_modules" ]; then \
		make sync-node-modules; \
	else \
		echo "Node modules already exists. No need to copy node modules"; \
	fi

sync-node-modules:
	docker rm copy-node-modules 2>/dev/null; True;
	docker create --name copy-node-modules portfolio-angular-frontend:latest;
	docker cp copy-node-modules:/src/node_modules ./src/;
	docker rm copy-node-modules;

up:
	docker run --name portfolio-angular-frontend -it --rm -p 4200:4200  portfolio-angular-frontend npm start

deploy:
   docker exec -it portfolio-angular-frontend ng deploy