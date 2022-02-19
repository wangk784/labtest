yarn build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:wangk784/labtest.git master:gh-pages

cd ../../../