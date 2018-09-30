import client from './client';
export const getCharCode = function (event) {
  if (event.charCode && typeof event.charCode == "number") {//chrome下event.charCode始终为0 ？
    return event.charCode;
  } else {
    return event.keyCode;
  }
}
export const getWheelDelta = function (event) {
  if (event.wheelDelta) {
    return (client.engine.opera && client.engine.opera < 9.5 ?
      -event.wheelDelta : event.wheelDelta);
  } else {
    return -event.detail * 40;
  }
}
export const getButton = function (event) {
  if (document.implementation.hasFeature("MouseEvents", "2.0")) {
    return event.button;
  } else {
    switch (event.button) {
      case 0:
      case 1:
      case 3:
      case 5:
      case 7:
        return 0;
      case 2:
      case 6:
        return 2;
      case 4:
        return 1;
    }
  }
}
export const getRelatedTarget = function (event) {
  if (event.relatedTarget) {
    return event.relatedTarget;
  } else if (event.toElement) {
    return event.toElement;
  } else if (event.fromElement) {
    return event.fromElement;
  } else {
    return null;
  }

}
export const addHandler = function (element, type, handler) {
  if (element.addEventListener) {
    element.addEventListener(type, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handler);
  } else {
    element["on" + type] = handler;
  }
}
export const removeHandler = function (element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, handler);
  } else {
    element["on" + type] = null;
  }
}

export const getEvent = function (event) {
  return event ? event : window.event;
}
export const getTarget = function (event) {
  return event.target || event.srcElement;
}

export const preventDefault = function (event) {
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}
export const stopPropagation = function (event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
}

export const getClipboardText = function (event) {
  var clipboardData = (event.clipboardData || window.clipboardData);
  return clipboardData.getData("text");
}

export const setClipboardText = function (event, value) {
  if (event.clipboardData) {
    return event.clipboardData.setData("text/plain", value);
  } else if (window.clipboardData) {
    return window.clipboardData.setData("text", value);
  }
}


