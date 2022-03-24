.PHONY: proto-lint proto

proto-lint:
	@echo "Linting..."
	@buf lint

proto: proto-lint
	@echo "Compiling stubs..."
	@buf generate