First things first. If you want to work on something you should checkout the dev branch
```
git checkout dev
```
then you should create a new branch off of dev and name it with the unit of work you will program on it
```
git checkout -b <branch-name>
```
once you are done working on it(you can always do this periodically too but always before a PR) merge dev INTO your branch
```
git pull origin dev
```
Once you have done that you may have to resolve merge conflicts. After that git push and head to github
GitHub will have a button to create a new pull request. On Click you'll be taken to a new page with `Compare Changes` at the top
The branch you want to merge into, in this case dev, will be on the left. Your branch should be on the right. Set each drop-down accordingly

Once you have set the branches you will use for the Pull Request the page will the display a GUI for desribing your PR.
Fill it out and click create pull request
Finit!