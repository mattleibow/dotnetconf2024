/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * HybridWebView interface for interacting with the .NET MAUI HybridWebView
 * control.
 */
interface HybridWebView {
    /**
     * Sends a raw message to the web view.
     * @param message - The raw message to send.
     * @example
     * HybridWebView.SendRawMessage("Hello, WebView!");
     */
    SendRawMessage: (message: string) => void;

    /**
     * Invokes a .NET method from the web view.
     * @param methodName - The name of the .NET method to invoke.
     * @param paramValues - Optional parameters to pass to the .NET method.
     * @returns A promise that resolves with the result of the .NET method.
     * @example
     * HybridWebView.InvokeDotNet("MethodName", { param1: "value1" })
     *   .then(result => {
     *     console.log(result);
     *   });
     */
    InvokeDotNet: (methodName: string, paramValues?: any) => Promise<any>;
}

export declare global {
    interface Window {
        HybridWebView: HybridWebView
    }
}
