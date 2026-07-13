@echo off
setlocal

set "REPO_ROOT=%~dp0"
set "REPO_ROOT=%REPO_ROOT:~0,-1%"

set "ELECTRON_RUN_AS_NODE="
set "HERMES_DESKTOP_HERMES_ROOT=%REPO_ROOT%"
set "HTTP_PROXY=http://127.0.0.1:7897"
set "HTTPS_PROXY=http://127.0.0.1:7897"
set "ALL_PROXY=http://127.0.0.1:7897"
set "NO_PROXY=127.0.0.1,localhost"

start "" "%REPO_ROOT%\node_modules\electron\dist\electron.exe" "%REPO_ROOT%\apps\desktop"
