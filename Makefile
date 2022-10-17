.PHONY: proto-lint swagger

proto-lint:
	@buf lint

swagger: proto-lint
	@buf generate