.PHONY: buf doc

buf:
	buf generate
	
doc:
	docker run --rm -v `pwd`/docs:/out -v `pwd`:/protos pseudomuto/protoc-gen-doc
	docker run --rm -v `pwd`/docs:/out -v `pwd`:/protos pseudomuto/protoc-gen-doc --doc_opt=markdown,docs.md