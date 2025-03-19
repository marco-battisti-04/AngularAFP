@echo off
setlocal

@REM define the directories where to run the "npm start"
set "SCRIPT_DIR=%~dp0"

@REM start the client
start cmd /k "cd /d %SCRIPT_DIR%client/angular-client && npm start"

@REM start the server
@REM start cmd /k "cd /d %SCRIPT_DIR%server/express-server && npm start"

endlocal
