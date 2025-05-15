import React from 'react';

export function PostMessageFrame() {
  const handleRefreshClick = () => {
    window.parent.postMessage(
      { 
        type: 'embeddedAppAPIMessage', 
        method: 'notifyPatientDataChange', 
        methodVersion: "1.0.0" 
      }, "*"
    );
  };

  const handleMinimizeApp = () => {
    console.log("Sending message from our test fake iframe");
    window.parent.postMessage(
      { 
        type: 'embeddedAppAPIMessage', 
        method: 'appMinimize', 
        methodVersion: "1.0.0" 
      }, "*"
    );
  };

  const handleReopenApp = () => {
    window.setTimeout(() => {
      window.parent.postMessage(
        { 
          type: 'embeddedAppAPIMessage', 
          method: 'appReopen', 
          methodVersion: "1.0.0" 
        }, "*"
      );
    }, 3000);
  };

  const handleCloseApp = () => {
    window.parent.postMessage(
      { 
        type: 'embeddedAppAPIMessage', 
        method: 'appClose', 
        methodVersion: "1.0.0" 
      }, "*"
    );
  };

  const handleEnterFullScreenApp = () => {
    window.parent.postMessage(
      { 
        type: 'embeddedAppAPIMessage', 
        method: 'appEnterFullscreen', 
        methodVersion: "1.0.0" 
      }, "*"
    );
  };

  const handleExitFullScreenApp = () => {
    window.parent.postMessage(
      { 
        type: 'embeddedAppAPIMessage', 
        method: 'appExitFullscreen', 
        methodVersion: "1.0.0" 
      }, "*"
    );
  };

  const handlePopoutApp = () => {
    window.parent.postMessage(
      { 
        type: 'embeddedAppAPIMessage', 
        method: 'appPopout', 
        methodVersion: "1.0.0" 
      }, "*"
    );
  };

  const handlePopinApp = () => {
    window.parent.postMessage(
      { 
        type: 'embeddedAppAPIMessage', 
        method: 'appPopin', 
        methodVersion: "1.0.0" 
      }, "*"
    );
  };

  const handleResizeApp = (width) => {
    window.parent.postMessage(
      { 
        type: 'embeddedAppAPIMessage', 
        method: 'appResize', 
        methodVersion: "1.0.0", 
        newWidth: width 
      }, "*"
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <button type="button" onClick={handleRefreshClick}>Refresh aOne</button>
        <button type="button" onClick={handleMinimizeApp}>Minimize</button>
        <button type="button" onClick={handleReopenApp}>Reopen in 3 seconds</button>
        <button type="button" onClick={handleCloseApp}>Close</button>
        <button type="button" onClick={handleEnterFullScreenApp}>Enter FullScreen</button>
        <button type="button" onClick={handleExitFullScreenApp}>Exit FullScreen</button>
        <button type="button" onClick={handlePopoutApp}>Popout</button>
        <button type="button" onClick={handlePopinApp}>Popin</button>
      </div>
      <div>
        <button type="button" onClick={() => handleResizeApp('50')}>50px</button>
        <button type="button" onClick={() => handleResizeApp('100')}>100px</button>
        <button type="button" onClick={() => handleResizeApp('200')}>200px</button>
        <button type="button" onClick={() => handleResizeApp('400')}>400px</button>
        <button type="button" onClick={() => handleResizeApp('600')}>600px</button>
        <button type="button" onClick={() => handleResizeApp('800')}>800px</button>
        <button type="button" onClick={() => handleResizeApp('default')}>default</button>
      </div>
    </div>
  );
}
