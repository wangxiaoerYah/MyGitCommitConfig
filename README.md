# MyGitCommitConfig

## 使用npm安装
* 备注:在git项目目录执行命令

```shell

npm init \
      && npm install -D commitizen cz-conventional-changelog cz-customizable \
      && npm install --save-dev @commitlint/{config-conventional,cli} \
      && npm i -D commitlint-config-cz @commitlint/cli \
      && npm install husky --save-dev \
      && npm i --save-dev standard-version \
      && wget -O .cz-config.js  https://raw.githubusercontent.com/wangxiaoerYah/MyGitCommitConfig/master/.cz-config.js \
      && wget -O .gitignore https://raw.githubusercontent.com/wangxiaoerYah/MyGitCommitConfig/master/.gitignore.bak \
      && wget -O commitlint.config.js https://raw.githubusercontent.com/wangxiaoerYah/MyGitCommitConfig/master/commitlint.config.js 


```
## 修改package.json
* 将代码插入其中

```json

"script": {
    "commit": "git-cz"
  },
"config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
        }},
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }}


```

