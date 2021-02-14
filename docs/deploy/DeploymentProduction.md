How to create production build of crazy-app
--------

1. Take in progress task to deploy on production
   1. In case of urgent bug fix, write a comment in jira bug
2. Create pull request of merge project/fix branch to master crazy_client_src (need at least one approval)
3. Wait for build master branch
   1. In case of failed build, need check build logs and fix issue
      1. If issue is in source code, fix it in your branch and create new pull request
      2. If issue fixed without push to repository, use manual build with parameters.
   > Logs are available on jenkins server https://jenkins02.au.ds.network/job/crazy-app/job/build-prod/job/crazy-app.build.master/

   > Trigger build with parameters manually on jenkins server https://jenkins02.au.ds.network/job/crazy-app/job/build-prod/job/crazy-app.build.master/build?delay=0sec
4. Update timestamp on changed bundles.
   1. If changed bundle is dynamic component or module, change timestamp on "runtime.bundle.js"
   > Never change timestamp on "vendors" bundle if it is not changed.
4. Close task to deploy on production
   1. In case of urgent bug fix, write a comment in jira bug
5. Test changes in production
6. In case of failed testing:
   1. Revert changes
        > Revert Code from Production https://confluence.ds.network/display/DDW/Git+Workflow#GitWorkflow-RevertCodefromProduction
   2. Fix bugs
   3. Create new pull request.
