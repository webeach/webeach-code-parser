// language=shell
export const shellBasic = `
echo "Hello from shell!"
`;

// language=shell
export const shellWithEnv = `
#!/bin/sh
export NODE_ENV=production
echo "Environment is $NODE_ENV"
`;

// language=shell
export const shellCdLs = `
cd /var/www
ls -la
`;

// language=shell
export const shellChmod = `
chmod +x deploy.sh
./deploy.sh
`;

// language=shell
export const shellCurl = `
curl -X POST https://api.example.com -H "Authorization: Bearer $TOKEN"
`;

// language=shell
export const shellDockerRun = `
docker run -d --name redis redis:latest
`;

// language=shell
export const shellFindGrep = `
find . -name "*.js" | xargs grep "TODO"
`;

// language=shell
export const shellLogTail = `
tail -f /var/log/nginx/access.log
`;

// language=shell
export const shellBackgroundJob = `
node server.js &
echo "Server started in background"
`;

// language=shell
export const shellAlias = `
alias gs="git status"
`;
