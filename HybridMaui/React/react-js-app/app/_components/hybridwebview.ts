export {};

// interface HybridWebView {
//     SendRawMessage: (message: string) => void;
//     InvokeDotNet: (methodName: string, paramValues?: any) => Promise<any>;
// }

// interface HybridWebViewInternal {
//     Init: () => void;
//     __SendMessageInternal: (type: string, message: string) => void;
//     __InvokeJavaScript: (taskId: string, methodName: Function, args: any[]) => void;
//     __TriggerAsyncCallback: (taskId: string, result: any) => void;
// }

// interface HybridWebViewHost {
//     sendMessage: (message: string) => void;
// }

// declare global {
//     interface Window {
//         HybridWebView: HybridWebView;
//     }
// }

// // TODO: figure out how to not expose this
// declare global {
//     interface Window {
//         webkit?: any;
//         chrome?: any;
//         hybridWebViewHost: HybridWebViewHost;
//     }
// }

// const hybridWebView: HybridWebView & HybridWebViewInternal = {
//     Init: () => {
//         const DispatchHybridWebViewMessage = (message: string) => {
//             const event = new CustomEvent("HybridWebViewMessageReceived", { detail: { message: message } });
//             window.dispatchEvent(event);
//         }

//         if (window.chrome && window.chrome.webview) {
//             // Windows WebView2
//             window.chrome.webview.addEventListener('message', (arg: any) => {
//                 DispatchHybridWebViewMessage(arg.data);
//             });
//         } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.webwindowinterop) {
//             // iOS and MacCatalyst WKWebView
//             window.external = {
//                 receiveMessage: (message: string) => {
//                     DispatchHybridWebViewMessage(message);
//                 }
//             } as any;
//         } else {
//             // Android WebView
//             window.addEventListener('message', (arg: any) => {
//                 DispatchHybridWebViewMessage(arg.data);
//             });
//         }
//     },

//     SendRawMessage: (message: string) => {
//         hybridWebView.__SendMessageInternal('__RawMessage', message);
//     },

//     InvokeDotNet: async (methodName: string, paramValues?: any) => {
//         const body: any = {
//             MethodName: methodName
//         };

//         if (typeof paramValues !== 'undefined') {
//             if (!Array.isArray(paramValues)) {
//                 paramValues = [paramValues];
//             }

//             for (let i = 0; i < paramValues.length; i++) {
//                 paramValues[i] = JSON.stringify(paramValues[i]);
//             }

//             if (paramValues.length > 0) {
//                 body.ParamValues = paramValues;
//             }
//         }

//         const message = JSON.stringify(body);

//         const requestUrl = `${window.location.origin}/__hwvInvokeDotNet?data=${encodeURIComponent(message)}`;

//         const rawResponse = await fetch(requestUrl, {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json'
//             }
//         });
//         const response = await rawResponse.json();

//         if (response) {
//             if (response.IsJson) {
//                 return JSON.parse(response.Result);
//             }

//             return response.Result;
//         }

//         return null;
//     },

//     __SendMessageInternal: (type: string, message: string) => {
//         const messageToSend = type + '|' + message;

//         if (window.chrome && window.chrome.webview) {
//             // Windows WebView2
//             window.chrome.webview.postMessage(messageToSend);
//         } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.webwindowinterop) {
//             // iOS and MacCatalyst WKWebView
//             window.webkit.messageHandlers.webwindowinterop.postMessage(messageToSend);
//         } else {
//             // Android WebView
//             window.hybridWebViewHost.sendMessage(messageToSend);
//         }
//     },

//     __InvokeJavaScript: (taskId: string, methodName: Function, args: any[]) => {
//         if ((methodName as any)[Symbol.toStringTag] === 'AsyncFunction') {
//             // For async methods, we need to call the method and then trigger the callback when it's done
//             const asyncPromise = methodName(...args) as Promise<any>;
//             asyncPromise
//                 .then(asyncResult => {
//                     hybridWebView.__TriggerAsyncCallback(taskId, asyncResult);
//                 })
//                 .catch(error => {
//                     return console.error(error);
//                 });
//         } else {
//             // For sync methods, we can call the method and trigger the callback immediately
//             const syncResult = methodName(...args);
//             hybridWebView.__TriggerAsyncCallback(taskId, syncResult);
//         }
//     },

//     __TriggerAsyncCallback: (taskId: string, result: any) => {
//         // Make sure the result is a string
//         if (result && typeof result !== 'string') {
//             result = JSON.stringify(result);
//         }

//         hybridWebView.__SendMessageInternal('__InvokeJavaScriptCompleted', taskId + '|' + result);
//     }
// };

// window.HybridWebView = hybridWebView;
// hybridWebView.Init();

// export default window.HybridWebView;
