import Vue from 'vue';

const isServer = Vue.prototype.$isServer;

export const on = (function(eventName,handler){
    if (!isServer && document.addEventListener) {
        return function(element,eventName,handler){
            if (element && eventName && handler) {
                element.addEventListener(eventName, handler, false);
              }
        }

    }else if(!isServer) {
        return function(element,eventName,handler){
            if (element && eventName && handler) {
                element.attachEvent('on' + eventName, handler);
              }
        }
    }
})()

export const off = (function() {
    if (!isServer && document.removeEventListener) {
      return function(element, eventName, handler) {
        if (element && eventName) {
          element.removeEventListener(eventName, handler, false);
        }
      };
    } else if (!isServer) {
      return function(element, eventName, handler) {
        if (element && eventName) {
          element.detachEvent('on' + eventName, handler);
        }
      };
    }
  })();