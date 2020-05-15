import normalizeWheel from 'normalize-wheel';

const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;


const handleMouseWheel=(context,el,callback)=>{
    return (event)=>{
        const normalized = normalizeWheel(event);
        callback && callback.apply(context, [event, normalized]);
    }
}

export default{
    bind(el,binding,vnode){
        let eventName = isFirefox?'DOMMouseScroll' : 'mousewheel'
        const value = binding.value
        let method = vnode.context[value]
        const fn = handleMouseWheel(vnode,el,method)
        el.handleMouseWheelFn = fn
        el.addEventListener(eventName,fn)
    },
    unbind(el,binding,vnode){
        let eventName = isFirefox?'DOMMouseScroll' : 'mousewheel'
        el.removeEventListener(eventName,el.handleMouseWheelFn)
        el.handleMouseWheelFn = null
    }
}