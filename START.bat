@echo off
title Vocab Master Server
color 0A

echo.
echo ========================================
echo   VOCAB MASTER SERVER LAUNCHER
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    color 0C
    echo [ERROR] Node.js is NOT installed!
    echo.
    echo You need to install Node.js first:
    echo.
    echo 1. Go to: https://nodejs.org
    echo 2. Download the LTS version
    echo 3. Install it
    echo 4. Run this file again
    echo.
    pause
    exit /b
)

echo [OK] Node.js is installed!
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    echo.
    call npm install
    echo.
)

echo Starting server...
echo.
echo ========================================
echo   SERVER WILL START IN A MOMENT
echo ========================================
echo.

node server.js

pause
