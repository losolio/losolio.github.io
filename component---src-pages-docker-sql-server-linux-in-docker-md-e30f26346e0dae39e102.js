(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{966:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return a}));t(11),t(6),t(5),t(3),t(7),t(4),t(8),t(1);var o=t(78),r=t(959);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docker/SQL_server_linux_in_docker.md"}});var c={_frontmatter:l},i=r.a;function a(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(o.b)(i,s({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"installing-sql-server-linux-in-docker"},"Installing SQL Server Linux in docker"),Object(o.b)("p",null,"SQL Server runs on running on Linux based on Ubuntu 16.04. It can be used with the Docker Engine 1.8+ on Linux or on Docker for Mac/Windows."),Object(o.b)("h2",{id:"docker-community-edition"},"Docker Community Edition"),Object(o.b)("p",null,"Install ",Object(o.b)("a",s({parentName:"p"},{href:"https://www.docker.com/community-edition"}),"Docker Community Edition")),Object(o.b)("h2",{id:"sql-server-in-docker"},"Sql Server in Docker"),Object(o.b)("p",null,"Install Sql Server by running commands in terminal:\n1. sudo docker pull microsoft/mssql-server-linux:2017-latest\n2. sudo docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=<Strong!Passw0rd>' \\\n-p 1401:1433 --name sql1 \\\n-d microsoft/mssql-server-linux:2017-latest"),Object(o.b)("p",null,"Check that the docker is up with 'sudo docker ps -a'."),Object(o.b)("p",null,"Change password for the sa user:\nsudo docker exec -it sql1 /opt/mssql-tools/bin/sqlcmd \\\n-S localhost -U SA -P '<Strong!Passw0rd>' \\\n-Q 'ALTER LOGIN SA WITH PASSWORD=\"<Apples345#$%>\"'"),Object(o.b)("p",null,"Connect to the server: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'sudo docker exec -it sql1 "bash"'),Object(o.b)("li",{parentName:"ul"},"/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P '<Apples345#$%>'")),Object(o.b)("p",null,"Create a database for the app: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CREATE DATABASE EventDB"),Object(o.b)("li",{parentName:"ul"},"GO")),Object(o.b)("p",null,"The connectionstring for use in your app will now be:\n'dotnet user-secrets set ConnectionStrings:DefaultConnection \"Server=127.0.0.1,1401;Database=EventDB;User=sa;Password=<Apples345#$%>;\"'"),Object(o.b)("p",null,"An alternative for running commands is to download the SQL Server Command line tools:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Mac OS ",Object(o.b)("a",s({parentName:"li"},{href:"https://blogs.technet.microsoft.com/dataplatforminsider/2017/04/03/sql-server-command-line-tools-for-mac-preview-now-available/"}),"https://blogs.technet.microsoft.com/dataplatforminsider/2017/04/03/sql-server-command-line-tools-for-mac-preview-now-available/")," "),Object(o.b)("li",{parentName:"ul"},"Windows: ",Object(o.b)("a",s({parentName:"li"},{href:"https://www.microsoft.com/en-us/download/details.aspx?id=53591"}),"https://www.microsoft.com/en-us/download/details.aspx?id=53591"))),Object(o.b)("p",null,"Source: Microsoft docs. Run the SQL Server 2017 container image with Docker.\n",Object(o.b)("a",s({parentName:"p"},{href:"https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker"}),"https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker")))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docker/SQL_server_linux_in_docker.md"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docker-sql-server-linux-in-docker-md-e30f26346e0dae39e102.js.map