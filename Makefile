IMAGE ?= $(shell sed -n 's/^IMAGE=//p' .env 2>/dev/null)

.PHONY: night-console
night-console:
	docker run --rm -p 4141:4141 $(IMAGE)
