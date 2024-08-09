/** 

*动态加载腾讯地图SDK函数*/

declare global {
    interface Window {
        qq: any,
        onQQMapCallback: Function
    } 
}

export default function mapExec(mapKey:any): String | Promise<any> {

    let key:any = mapKey || "YQGBZ-2TN3B-7KZUD-NB6OP-WFZ56-IRF7D"; // HË iFtta key

    if(!key) return "未提供地图服务所뚦key";

    return new Promise(function(resolve, reject) { 
        let script: any = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://map.qq.com/api/js? v=2.exp&key=' + key +'&callback=onQQMapCallback'
        script.onerror = reject

        document.head.appendChild(script)

        window.onQQMapCallback = function() {
            resolve(window.qq)
        }
    })
}