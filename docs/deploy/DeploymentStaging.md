How to create release build of crazy-app
--------

1. Take in progress task to create release (or deploy on staging) in your epic
2. Create branch, from master, in repositories "crazy_client_src" and "front_framework" with the same name that starts with "release-"
   > example "release-my-project-name"
3. Create pull request of merge your branch to release branch (need at least one approval)
   1. In case of few branches to merge to release, need create pull request for each merged branch to release.
4. Wait for build release branch
   1. In case of failed build, need check build logs and fix issue
      1. If issue is in source code, fix it in your branch and create new pull request
      2. If issue fixed without push to repository, use manual build with parameters.
   > Logs are available on jenkins server https://jenkins02.au.ds.network/job/crazy-app/job/build-prod/job/crazy-app.build.release/

   > Trigger build with parameters manually on jenkins server https://jenkins02.au.ds.network/job/crazy-app/job/build-prod/job/crazy-app.build.release/build?delay=0sec
5. Switch server repository "front_framework" to release branch
6. Close task to create release (or deploy on staging)
7. Testing changes on Server with release branch
8. In case of successful testing, release branch can go to **"create production build of crazy-app"**
   1. In case of failed testing:
      1. Create branch for fixes from release branch
      2. Fix bugs
      3. Create pull request of merge fixes branch to existing release branch.
