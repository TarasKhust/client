Crazy client application local build
============

Crazydomains client application can be built on your local computer and share bundles to development server.
This feature realized by webpack-dev-server.
Configuration of webpack-dev-server can be found in _/webpack.server.js_ file.

---------

How to start?
------

First, be sure:

__1.__ your git client have access from your local computer to __bitbucket__ server via SSH key.

> You can check this by local command:
> `git ls-remote -h -t ssh://git@bitbucket.au.ds.network:7999/fem/react-country.git`
>
> , no error should be in console

__2.__ you have installed __Node.js__ version __12.13__ or higher with __NPM__

__3.__ you are able to start local web-server on localhost:443

> Root access can be required to start local server

__4.__ you have DNS configurations (hosts file) for __framework__ host.

> Root access is require for modify hosts file

> Generate all possible hosts in command line:
> ```
>  node -e "console.log(((m,l,s,r,_)=>Array((r[1]+1)-r[0]).fill(m).map((e,i)=>l.map((a)=>s.map((b)=>e(a,b,i+r[0])).join(_)).join(_)).join(_))((a,b,i)=>{return'127.0.0.1 framework.'+a+'.web-cluster'+i+'.development.'+b+'.ds.network'},['au','sg'],['au','uk'],[10,59],'\n'));"
>  ```
>
> COPY/PASTE script output to your hosts file

> To disable configurations, just comment them

After, you can clone repository [crazy_client_src](https://bitbucket.au.ds.network/projects/BWS/repos/crazy_client_src/browse).

##### To start local webpack-dev-server, run command `npm run start` from repository root

---------

How it works?
-------

As you have started local web server on localhost:443, you can share bundle.js files from localhost port 443.

By DNS configurations you telling browser to get bundle files from you localhost server, not from remote web-cluster.

#### ALL changes in YOUR local bundles can be seen only from YOUR computer!!!

Done.

