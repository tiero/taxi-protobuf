.PHONY: go doc

go:
	chmod u+x ./scripts/compile-proto-go
	mkdir -p -m777 ./generated/go
	./scripts/compile-proto-go

doc:
	docker run --rm -v `pwd`/docs:/out -v `pwd`:/protos pseudomuto/protoc-gen-doc
	docker run --rm -v `pwd`/docs:/out -v `pwd`:/protos pseudomuto/protoc-gen-doc --doc_opt=markdown,docs.md