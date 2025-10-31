//Fri Oct 31 2025 12:19:46 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
import { $ as I, r as c, I as u } from "./index-wKIbGhGo.js";
import { u as h } from "./localTokenManager-CaunmlSB.js";
const p = I("auth", () => {
  const s = c(null),
    t = c(localStorage.getItem("token") || null),
    o = c(false),
    n = h(),
    i = u(() => !!t.value && !!s.value),
    m = u(() => s.value),
    g = async e => {
      try {
        o.value = true;
        const r = {
            id: "local_user_" + Date.now(),
            username: e.username,
            email: e.email || `${e.username}@local.game`,
            avatar: "/icons/xiaoyugan.png",
            createdAt: new Date().toISOString()
          },
          l = "local_token_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
        return t.value = l, s.value = r, localStorage.setItem("token", t.value), localStorage.setItem("user", JSON.stringify(s.value)), n.setUserToken(l), {
          success: true
        };
      } catch (r) {
        return console.error("登录错误:", r), {
          success: false,
          message: "本地认证失败"
        };
      } finally {
        o.value = false;
      }
    },
    f = async e => {
      try {
        o.value = true;
        const r = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
        if (r.some(v => v.username === e.username)) return {
          success: false,
          message: "用户名已存在"
        };
        const S = {
          ...e,
          id: "user_" + Date.now(),
          createdAt: new Date().toISOString()
        };
        return r.push(S), localStorage.setItem("registeredUsers", JSON.stringify(r)), {
          success: true,
          message: "注册成功，请登录"
        };
      } catch (r) {
        return console.error("注册错误:", r), {
          success: false,
          message: "本地注册失败"
        };
      } finally {
        o.value = false;
      }
    },
    a = () => {
      s.value = null, t.value = null, localStorage.removeItem("token"), localStorage.removeItem("user"), localStorage.removeItem("gameRoles"), n.clearUserToken(), n.clearAllGameTokens();
    };
  return {
    user: s,
    token: t,
    isLoading: o,
    isAuthenticated: i,
    userInfo: m,
    login: g,
    register: f,
    logout: a,
    fetchUserInfo: async () => {
      try {
        if (!t.value) return false;
        const e = localStorage.getItem("user");
        if (e) try {
          return s.value = JSON.parse(e), true;
        } catch (r) {
          return console.error("解析用户信息失败:", r), a(), false;
        } else return a(), false;
      } catch (e) {
        return console.error("获取用户信息失败:", e), a(), false;
      }
    },
    initAuth: async () => {
      const e = localStorage.getItem("user");
      if (t.value && e) try {
        s.value = JSON.parse(e), n.initTokenManager();
      } catch (r) {
        console.error("初始化认证失败:", r), a();
      }
    }
  };
});
export { p as u };