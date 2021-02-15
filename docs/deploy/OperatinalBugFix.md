Operational production bug fix steps
--------

1. Take jira bug in analysis.
2. Reproduce bug on production.
   1. In case when bug cannot be reproduced, write reproduce details in jira bug comments and reassign jira bug on reporter.
3. After successful reproducing, reserve development server.
4. Take jira bug in progress and set estimate time.
5. Create new branch from master crazy_client_src. Branch name should be started with jira bug id.
6. Checkout branch of crazy_client_src on reserved development server.
   > Development server can be reserved Jira Development Servers Distribution https://jira.ds.network/secure/RapidBoard.jspa?rapidView=472&projectKey=DEVS&selectedIssue=DEVS-1
7. Fix source code.
8. Test changes on reserved development server.
   1. All pages/routes/modules/components, that can be affected with source code fix, must be tested.
9. After successful self testing on development server, write in jira bug comment all needed details to test fix and affected pages/routes/modules/components.
10. Reassign jira bug to reporter with "Ready for test" status and log spent time.
11. After reassign jira bug with status "Accepted", can be created pull request to next crazy-app version build.
    1. In case of urgent bug, pull request can be created directly to master without change app version.
12. After successful production build and test in production, jira bug can be closed.
    1. In case of failed production build because of bug fix changes, branch merge will be discarded.
    2. In case of failed test in production with a slight drawback, fix can be proceed with new branch and without change crazy-app version.
    3. In case of failed test in production with significant disadvantage, app build must be reverted from production. Bug fix will be fully rechecked on staging server.
