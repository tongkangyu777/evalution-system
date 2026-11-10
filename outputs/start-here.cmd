@echo off
setlocal
if exist "%~dp0..\work\lab-review\start-windows.cmd" (
  call "%~dp0..\work\lab-review\start-windows.cmd" %*
  exit /b
)
if exist "%~dp0lab-review\start-windows.cmd" (
  call "%~dp0lab-review\start-windows.cmd" %*
  exit /b
)
echo Please extract lab-review.zip, then run lab-review\start-windows.cmd.
pause
