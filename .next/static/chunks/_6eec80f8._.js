(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/services/api/api-routes.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/** @format */ __turbopack_context__.s({
    "default": ()=>ApiRoutes
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class ApiRoutes {
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ApiRoutes, "BASE_URL_DEV", "'https://dummyjson.com'");
// Api route to login
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ApiRoutes, "Login", "/auth/login");
// Api route to fetch todo list
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ApiRoutes, "FetchTodo", (limit, skip)=>"/todos?limit=".concat(limit, "&skip=").concat(skip));
// Api route to fetch todo by id
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ApiRoutes, "FetchTodoByUserID", (id)=>"/todos/user/".concat(id));
// Api route to create a new todo item
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ApiRoutes, "CreateTodo", "/todos/add");
// Api route to update or delete todo by ID
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ApiRoutes, "UpdateTodo", (id)=>"/todos/".concat(id));
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/api/api-clients.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/api-routes.ts [app-client] (ecmascript)");
;
;
const BaseURL = __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].BASE_URL_DEV;
const API = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
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
    var _config_url;
    // Check if authToken is already set in memory
    if (!authToken) {
        // If not, try to load it from localStorage
        const storedToken = localStorage.getItem("userToken");
        if (storedToken) {
            authToken = storedToken; // Update in-memory token
        }
    }
    // Attach the token if available and if it's not a login request
    if (authToken && !((_config_url = config.url) === null || _config_url === void 0 ? void 0 : _config_url.endsWith(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Login))) {
        config.headers.Authorization = "Bearer ".concat(authToken);
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
// Response Interceptor
API.interceptors.response.use((response)=>response, async (error)=>{
    var _error_response, _error_response1;
    if (((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.status) === 401 || ((_error_response1 = error.response) === null || _error_response1 === void 0 ? void 0 : _error_response1.status) === 403) {
        console.warn("Unauthorized access. Clearing token and redirecting to login.");
        // Ensure localStorage access is client-side
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.removeItem("userToken");
            localStorage.removeItem("userInfo");
        }
        setAuthToken(null);
        setAuthToken(null);
    }
    return Promise.reject(error);
});
// Helper function to build headers (still useful for specific overrides)
function buildHeaders(payloadData, tokenOrHeaders) {
    const customHeaders = {};
    if (typeof tokenOrHeaders === "string") {
        customHeaders["Authorization"] = "Bearer ".concat(tokenOrHeaders);
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
                headers: buildHeaders(undefined, options === null || options === void 0 ? void 0 : options.tokenOrHeaders)
            };
            const response = await API.get(url, config);
            return response;
        } catch (error) {
            var _error_response;
            console.error("GET Request Error:", error);
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    };
}
function postRequest() {
    return async (url, options)=>{
        try {
            const config = {
                headers: buildHeaders(options === null || options === void 0 ? void 0 : options.data, options === null || options === void 0 ? void 0 : options.tokenOrHeaders)
            };
            const response = await API.post(url, options === null || options === void 0 ? void 0 : options.data, config);
            return response;
        } catch (error) {
            var _error_response;
            console.error("POST Request Error:", error);
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    };
}
function patchRequest() {
    return async (url, options)=>{
        try {
            const config = {
                headers: buildHeaders(options === null || options === void 0 ? void 0 : options.data, options === null || options === void 0 ? void 0 : options.tokenOrHeaders)
            };
            const response = await API.patch(url, options === null || options === void 0 ? void 0 : options.data, config);
            return response;
        } catch (error) {
            var _error_response;
            console.error("PATCH Request Error:", error);
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    };
}
function putRequest() {
    return async (url, options)=>{
        try {
            const config = {
                headers: buildHeaders(options === null || options === void 0 ? void 0 : options.data, options === null || options === void 0 ? void 0 : options.tokenOrHeaders)
            };
            const response = await API.put(url, options === null || options === void 0 ? void 0 : options.data, config);
            return response;
        } catch (error) {
            var _error_response;
            console.error("PUT Request Error:", error);
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    };
}
function deleteRequest() {
    return async (url, options)=>{
        try {
            const config = {
                headers: buildHeaders(undefined, options === null || options === void 0 ? void 0 : options.tokenOrHeaders)
            };
            const response = await API.delete(url, {
                ...config
            });
            return response;
        } catch (error) {
            var _error_response;
            console.error("DELETE Request Error:", error);
            throw ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error;
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/api/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/** @format */ __turbopack_context__.s({
    "Requests": ()=>Requests
});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/api-clients.ts [app-client] (ecmascript)");
;
// Instantiate the request functions
const getTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRequest"])();
const postTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postRequest"])();
const patchTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchRequest"])();
const deleteTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteRequest"])();
const Requests = {
    getTodo,
    postTodo,
    patchTodo,
    deleteTodo
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/contexts/AuthContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/** @format */ __turbopack_context__.s({
    "AuthProvider": ()=>AuthProvider,
    "useAuth": ()=>useAuth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/api-routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/api-clients.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = (param)=>{
    let { children } = param;
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Initialize auth state from localStorage on app start
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const loadAuthState = {
                "AuthProvider.useEffect.loadAuthState": ()=>{
                    // Only access localStorage in the browser environment
                    if ("TURBOPACK compile-time truthy", 1) {
                        try {
                            const storedUser = localStorage.getItem("userInfo");
                            const storedToken = localStorage.getItem("userToken");
                            if (storedUser && storedToken) {
                                const parsedUser = JSON.parse(storedUser);
                                setUser(parsedUser);
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAuthToken"])(storedToken); // Set token in Axios interceptor
                            }
                        } catch (error) {
                            console.error("Failed to load auth state from storage:", error);
                        } finally{
                            setIsLoading(false);
                        }
                    } else //TURBOPACK unreachable
                    ;
                }
            }["AuthProvider.useEffect.loadAuthState"];
            loadAuthState();
        }
    }["AuthProvider.useEffect"], []);
    const login = async (username, password)=>{
        setIsLoading(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Requests"].postTodo(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Login, {
                data: {
                    username,
                    password
                }
            });
            const data = response.data;
            if (response.status === 200 && data.token) {
                const token = data.token;
                // Store user info and token, only in browser
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem("userInfo", JSON.stringify(data));
                    localStorage.setItem("userToken", token);
                }
                setUser(data);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAuthToken"])(token);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            var _error_response_data, _error_response;
            console.error("Login error:", error);
            const errorMessage = (error === null || error === void 0 ? void 0 : error.message) || (error === null || error === void 0 ? void 0 : (_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || "Invalid credentials";
            return false;
        } finally{
            setIsLoading(false);
        }
    };
    const logout = async ()=>{
        setIsLoading(true);
        try {
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.removeItem("userInfo");
                localStorage.removeItem("userToken");
            }
            setUser(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2f$api$2d$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAuthToken"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/AuthContext.tsx",
        lineNumber: 108,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "8WEfEbosx3NfLBPRVajZSQS3udc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/** @format */ // app/login/page.tsx
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client"; // This page uses client-side hooks
;
;
;
const LoginPage = ()=>{
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("kminchelle");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0lelplR");
    const { login, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogin = async (e)=>{
        e.preventDefault();
        const success = await login(username, password);
        if (success) {
            router.push("/"); // Navigate to home after successful login
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#f0f0f0"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleLogin,
            style: {
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "300px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Username",
                    value: username,
                    onChange: (e)=>setUsername(e.target.value),
                    disabled: isLoading,
                    style: {
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ddd"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    placeholder: "Password",
                    value: password,
                    onChange: (e)=>setPassword(e.target.value),
                    secureTextEntry: true,
                    style: {
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ddd"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: isLoading,
                    style: {
                        padding: "10px",
                        borderRadius: "4px",
                        border: "none",
                        backgroundColor: "#007bff",
                        color: "white",
                        cursor: isLoading ? "not-allowed" : "pointer"
                    },
                    children: isLoading ? "Logging in..." : "Login"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        textAlign: "center"
                    },
                    children: "Please wait..."
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 83,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LoginPage, "N/I/QuPsYs8Yf+TDiZPAjEEHG8A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
const __TURBOPACK__default__export__ = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_6eec80f8._.js.map