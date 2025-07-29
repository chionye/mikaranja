module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/services/api/api-routes.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s({
    "default": ()=>ApiRoutes
});
class ApiRoutes {
    static BASE_URL_DEV = "https://dummyjson.com";
    // Api route to login
    static Login = "/auth/login";
    // Api route to fetch todo list
    static FetchTodo = (limit, skip)=>`/todos?limit=${limit}&skip=${skip}`;
    // Api route to fetch todo by id
    static FetchTodoByUserID = (id)=>`/todos/user/${id}`;
    // Api route to create a new todo item
    static CreateTodo = "/todos/add";
    // Api route to update or delete todo by ID
    static UpdateTodo = (id)=>`/todos/${id}`;
}
}),
"[externals]/util [external] (util, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/services/api/api-clients.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s({
    "API": ()=>API,
    "BaseURL": ()=>BaseURL,
    "deleteRequest": ()=>deleteRequest,
    "getRequest": ()=>getRequest,
    "patchRequest": ()=>patchRequest,
    "postRequest": ()=>postRequest,
    "putRequest": ()=>putRequest,
    "setAuthToken": ()=>setAuthToken
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/api-routes.ts [app-ssr] (ecmascript)");
;
;
const BaseURL = __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].BASE_URL_DEV;
const API = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: BaseURL,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000
});
let authToken = null;
const setAuthToken = (token)=>{
    authToken = token;
};
// Request Interceptor: Attach token to every request
API.interceptors.request.use(async (config)=>{
    // Check if authToken is already set in memory
    if (!authToken) {
        // If not, try to load it from localStorage
        const storedToken = localStorage.getItem("userToken");
        if (storedToken) {
            authToken = storedToken; // Update in-memory token
        }
    }
    // Attach the token if available and if it's not a login request
    if (authToken && !config.url?.endsWith(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Login)) {
        config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
// Response Interceptor
API.interceptors.response.use((response)=>response, async (error)=>{
    if (error.response?.status === 401 || error.response?.status === 403) {
        console.warn("Unauthorized access. Clearing token and redirecting to login.");
        // Ensure localStorage access is client-side
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setAuthToken(null);
        setAuthToken(null);
    }
    return Promise.reject(error);
});
// Helper function to build headers (still useful for specific overrides)
function buildHeaders(payloadData, tokenOrHeaders) {
    const customHeaders = {};
    if (typeof tokenOrHeaders === "string") {
        customHeaders["Authorization"] = `Bearer ${tokenOrHeaders}`;
    } else if (typeof tokenOrHeaders === "object") {
        Object.assign(customHeaders, tokenOrHeaders);
    }
    const isFormData = payloadData instanceof FormData;
    if (isFormData) {
        if (customHeaders["Content-Type"]) {
            delete customHeaders["Content-Type"];
        }
    }
    return customHeaders;
}
function getRequest() {
    return async (url, options)=>{
        try {
            const config = {
                headers: buildHeaders(undefined, options?.tokenOrHeaders)
            };
            const response = await API.get(url, config);
            return response;
        } catch (error) {
            console.error("GET Request Error:", error);
            throw error.response?.data || error;
        }
    };
}
function postRequest() {
    return async (url, options)=>{
        try {
            const config = {
                headers: buildHeaders(options?.data, options?.tokenOrHeaders)
            };
            const response = await API.post(url, options?.data, config);
            return response;
        } catch (error) {
            console.error("POST Request Error:", error);
            throw error.response?.data || error;
        }
    };
}
function patchRequest() {
    return async (url, options)=>{
        try {
            const config = {
                headers: buildHeaders(options?.data, options?.tokenOrHeaders)
            };
            const response = await API.patch(url, options?.data, config);
            return response;
        } catch (error) {
            console.error("PATCH Request Error:", error);
            throw error.response?.data || error;
        }
    };
}
function putRequest() {
    return async (url, options)=>{
        try {
            const config = {
                headers: buildHeaders(options?.data, options?.tokenOrHeaders)
            };
            const response = await API.put(url, options?.data, config);
            return response;
        } catch (error) {
            console.error("PUT Request Error:", error);
            throw error.response?.data || error;
        }
    };
}
function deleteRequest() {
    return async (url, options)=>{
        try {
            const config = {
                headers: buildHeaders(undefined, options?.tokenOrHeaders)
            };
            const response = await API.delete(url, {
                ...config
            });
            return response;
        } catch (error) {
            console.error("DELETE Request Error:", error);
            throw error.response?.data || error;
        }
    };
}
}),
"[project]/services/api/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s({
    "Requests": ()=>Requests
});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/api-clients.ts [app-ssr] (ecmascript)");
;
// Instantiate the request functions
const getTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRequest"])();
const postTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postRequest"])();
const patchTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["patchRequest"])();
const deleteTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteRequest"])();
const Requests = {
    getTodo,
    postTodo,
    patchTodo,
    deleteTodo
};
}),
"[project]/contexts/AuthContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/** @format */ __turbopack_context__.s({
    "AuthProvider": ()=>AuthProvider,
    "useAuth": ()=>useAuth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/api-routes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/api-clients.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/index.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Initialize auth state from localStorage on app start
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadAuthState = ()=>{
            // Only access localStorage in the browser environment
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            else {
                setIsLoading(false);
            }
        };
        loadAuthState();
    }, []);
    const login = async (username, password)=>{
        setIsLoading(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Requests"].postTodo(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Login, {
                data: {
                    username,
                    password
                }
            });
            const data = response.data;
            console.log(data);
            if (response.status === 200 && data.accessToken) {
                const token = data.accessToken;
                // Store user info and token, only in browser
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                setUser(data);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAuthToken"])(token);
                return {
                    success: true,
                    error: null
                };
            } else {
                return {
                    success: false,
                    error: "Unexpected API response."
                };
            }
        } catch (error) {
            const errorMessage = error?.response?.data?.message || error?.message || "Invalid credentials. Please try again.";
            console.error("Login error:", error);
            return {
                success: false,
                error: errorMessage
            };
        } finally{
            setIsLoading(false);
        }
    };
    const logout = async ()=>{
        setIsLoading(true);
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            setUser(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAuthToken"])(null);
            router.push("/");
        } catch (error) {
            console.error("Logout error:", error);
        } finally{
            setIsLoading(false);
        }
    };
    const value = {
        user,
        isLoading,
        login,
        logout
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/AuthContext.tsx",
        lineNumber: 107,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6373a3d4._.js.map