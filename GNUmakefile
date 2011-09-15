all:: bem-bl my-lib
all:: $(patsubst %.bemjson.js,%.html,$(wildcard pages/*/*.bemjson.js))

BEM_BUILD=bem build \
	-l bem-bl/blocks-common/ \
	-l bem-bl/blocks-desktop/ \
	-l blocks/ \
	-l my-lib/blocks/ \
	-l $(@D)/blocks \
	-d $< \
	-t $1 \
	-o $(@D) \
	-n $(*F)

BEM_CREATE=bem create block \
		-l pages \
		-T $1 \
		$(*F)

%.html: %.bemhtml.js %.css %.js %.ie.css
	$(call BEM_CREATE,bem-bl/blocks-common/i-bem/bem/techs/html.js)

%.bemhtml.js: %.deps.js
	$(call BEM_BUILD,bem-bl/blocks-common/i-bem/bem/techs/bemhtml.js)

%.deps.js: %.bemdecl.js
	$(call BEM_BUILD,deps.js)

%.bemdecl.js: %.bemjson.js
	$(call BEM_CREATE,bemdecl.js)

.PRECIOUS: %.css
%.css: %.deps.js
	$(call BEM_BUILD,css)

.PRECIOUS: %.ie.css
%.ie.css: %.deps.js
	$(call BEM_BUILD,ie.css)

.PRECIOUS: %.js
%.js: %.deps.js
	$(call BEM_BUILD,js)


DO_GIT=@echo -- git $1 $2; \
	if [ -d $2 ]; \
		then \
			cd $2 && git pull origin master; \
		else \
			git clone $1 $2; \
			cd $2 && git checkout -b master remotes/origin/master; \
	fi

bem-bl:
	$(call DO_GIT,git://github.com/bem/bem-bl.git,$@)

my-lib:
	$(call DO_GIT,git://github.com/toivonen/yac2011-bem-js-docs.git,$@)

.PRECIOUS: branches
branches:
	echo 'Getting all branches'
	git branch --track animation remotes/origin/animation
	git branch --track cutted remotes/origin/cutted
	git branch --track first remotes/origin/first
	git branch --post-js remotes/origin/post-js
	git branch --post-no-js remotes/origin/post-no-js

.PRECIOUS: clean
clean:
	git clean -d -f
	git checkout -f

.PRECIOUS: next
next: clean
	git checkout post-no-js

.PHONY: all clean next branches
