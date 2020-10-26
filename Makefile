.DEFAULT_GOAL := serve

clean:
	rm -rf public
	mkdir public
	git worktree prune
	rm -rf .git/worktrees/public/

prepare:
	git worktree add -B gh-pages public origin/gh-pages && \
	cd public && git pull
	rm -rf public/*

build:
	hugo --minify

publish: clean prepare build
	cd public && \
	git add --all && \
	git commit -m "Publishing to gh-pages" && \
	git push origin gh-pages

serve:
	hugo serve
