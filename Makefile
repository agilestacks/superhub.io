.DEFAULT_GOAL := build

clean:
	rm -rf public
	mkdir public
	git worktree prune
	rm -rf .git/worktrees/public/

prepare:
	git worktree add -B gh-pages public upstream/gh-pages

build:
	hugo --minify

publish: clean prepare build
	cd public
	git add --all
	git commit -m "Publishing to gh-pages"
	git push --all
