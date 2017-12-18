install: install-deps #install-flow-typed

install-deps:
		npm install

start:
	npm run babel-node -- /usr/prj/src/games/brain-balance.js

build:
		rm -rf dist
		npm run build

test:
		npm test

check-types:
		npm run flow

lint:
		npm run eslint .

publish:
		npm publish

.PHONY: test
