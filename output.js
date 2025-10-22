//Wed Oct 22 2025 07:35:47 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";

  const _0x5bdfbf = "8.8.9 (兼容版)";
  const _0x4ca7b0 = document.createElement("style");
  _0x4ca7b0.textContent = "\n        :root {\n            --panel-bg: rgba(247, 250, 252, 0.85); --glass-border: rgba(0, 0, 0, 0.1);\n            --highlight: #3182ce; --text-primary: #2d3748; --text-secondary: #718096;\n            --item-bg: #ffffff; --item-border: #e2e8f0;\n            --success: #38a169; --error: #e53e3e;\n        }\n\n        /* 主面板 */\n        .xianxia-panel{position:fixed;top:10px;background:var(--panel-bg);backdrop-filter:blur(10px);border:1px solid var(--glass-border);border-radius:12px;z-index:10000;color:var(--text-primary);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;box-shadow:0 8px 32px rgba(0,0,0,0.1);transition:all .3s ease;overflow:hidden;}\n        .xianxia-panel.collapse{width:44px;height:44px;right:10px;min-height:auto;display:flex;align-items:center;justify-content:center;border-radius:50%;}\n        .xianxia-panel.collapse .panel-header{padding:0 !important;border:none;border-radius:50%;height:100%;background:rgba(49, 130, 206, 0.2);}\n        .xianxia-panel.expanded{width:90vw;max-width:520px;right:5vw;max-height:85vh;display:flex;flex-direction:column;}\n\n        /* 标题栏布局 */\n        .panel-header{background:rgba(0, 0, 0, 0.02);cursor:pointer;display:flex !important;align-items:center !important;justify-content:flex-start !important;padding:10px 15px !important;flex-shrink:0;width:100%;box-sizing:border-box !important;transition:background .2s ease;}\n        .panel-title{flex-grow: 1; font-weight:600;font-size:16px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:15px !important;}\n        .panel-icon{font-size:22px;line-height:1;width:100%;text-align:center;}\n        .xianxia-panel.expanded .panel-icon { display: none; }\n        .xianxia-panel.collapse .panel-title, .xianxia-panel.collapse .opacity-control { display: none; }\n        .xianxia-panel.collapse .panel-header { justify-content: center !important; }\n\n        /* 透明度控制条 */\n        .opacity-control{display:flex;align-items:center;gap:8px;flex-shrink:0;}\n        .opacity-control label{font-size:12px;color:var(--text-secondary);white-space:nowrap;}\n        .opacity-control input{width:90px;height:4px;-webkit-appearance:none;background:rgba(0,0,0,.1);border-radius:2px;outline:none;transition:background .2s;}\n        .opacity-control input:hover{background:rgba(0,0,0,.2);}\n        .opacity-control input::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--text-primary);cursor:pointer;}\n        .opacity-value{font-size:12px;color:var(--text-primary);min-width:40px;text-align:left;}\n        \n        /* [重构] 核心布局样式 */\n        .panel-content{padding:10px;display:none;overflow-y:auto;max-height:calc(85vh - 54px)}.expanded .panel-content{display:block}\n        .section-divider { font-size: 14px; font-weight: 600; color: var(--text-primary); background: rgba(0,0,0,0.03); padding: 5px 10px; border-radius: 6px; margin-bottom: 10px; }\n        .task-section{background:var(--item-bg);margin:0 0 10px 0;padding:12px;border-radius:8px;border:1px solid var(--item-border); }\n        .task-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;}\n        .task-header h4{margin:0;color:var(--highlight);font-size:13px;font-weight:600;display:flex;align-items:center;gap:6px;}\n        .status{font-size:10px;color:var(--highlight);background:rgba(49,130,206,.1);padding:3px 6px;border-radius:4px;}\n        \n        /* 通用组件样式 */\n        .task-row {display:flex;align-items:center;gap:8px;margin-bottom:8px;}\n        .task-row:last-child {margin-bottom:0;}\n        .task-row .task-label {width:60px;font-size:12px;color:var(--text-secondary);flex-shrink:0; text-align:right; padding-right:5px;}\n        .task-row input {width:70px;flex-grow:0;}\n        .task-row .task-btn {flex:1;}\n        .task-btn{display:block;width:100%;margin:0;padding:8px 10px;background:rgba(49, 130, 206, 0.1);border:1px solid rgba(49, 130, 206, 0.2);border-radius:6px;color:var(--highlight);font-weight:600;cursor:pointer;transition:transform .2s ease, box-shadow .2s ease, background .2s ease;font-size:12px;}\n        .task-btn:hover{transform:translateY(-1px);box-shadow:0 4px 15px rgba(49, 130, 206, 0.15);background:rgba(49, 130, 206, 0.15);}\n        .task-btn:active{transform:translateY(0);transition-duration:.1s;}\n        .task-btn:disabled{background:rgba(0,0,0,0.05);border-color:transparent;color:#ccc;cursor:not-allowed;transform:none;box-shadow:none;}\n        .task-row input{padding:8px 10px;border:1px solid var(--item-border);border-radius:6px;background:rgba(0,0,0,.02);color:var(--text-primary);font-size:12px;transition:border-color .2s ease, box-shadow .2s ease;min-width:0; text-align:center;}\n        .task-row input:focus{outline:none;border-color:var(--highlight);box-shadow:0 0 0 3px rgba(49, 130, 206, 0.2);}\n        .other-buttons{display:grid;grid-template-columns:1fr 1fr;gap:8px}.other-btn{padding:8px;font-size:12px}\n        .gvh-toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--item-bg);backdrop-filter:blur(5px);border:1px solid var(--item-border);color:var(--text-primary);padding:10px 20px;border-radius:8px;font-size:13px;z-index:10001;box-shadow:0 4px 20px rgba(0,0,0,.1);animation:gvh-slideIn .3s,gvh-fadeOut .3s 2.7s}\n        .gvh-toast.success{border-color:var(--success);color:var(--success);}\n        .gvh-toast.error{border-color:var(--highlight);color:var(--error);}\n        .gvh-toast.info{border-color:var(--highlight);color:var(--highlight);}\n\n        /* 数量选择器样式 */\n        .count-selector{display:flex;align-items:center;justify-content:center;gap:10px;}\n        .count-selector .task-btn{flex:0 0 30px; padding: 5px; font-size: 16px; line-height: 1;}\n        .count-selector .count-display{font-size:14px;font-weight:600;color:var(--text-primary);width:40px;text-align:center;}\n\n        /* 自定义每日任务列表样式 */\n        .daily-task-list{border-top: 1px solid var(--item-border); padding-top: 12px;}\n        .main-action-buttons{margin-top:12px; display:grid; grid-template-columns:1fr 1fr; gap:8px;}\n        .daily-task-item{display:flex;align-items:center;margin-bottom:8px;}\n        .daily-task-item:last-child{margin-bottom:0;}\n        .daily-task-info{display:flex; align-items:center; flex-grow:1;}\n        .daily-task-item input[type=\"checkbox\"]{margin-right:10px;width:16px;height:16px;accent-color:var(--highlight);}\n        .daily-task-item label{font-size:12px;color:var(--text-secondary);}\n        .daily-task-item .task-btn{flex-shrink:0;width:80px;padding:4px 8px;font-size:11px;}\n        \n        /* 赛车模块样式 */\n        .car-data-container{margin:0;border:none;background:transparent;}\n        .car-data-table{width:100%;border-collapse:collapse;font-size:10px;}\n        .car-data-table th{background:rgba(0,0,0,.02);border:1px solid var(--item-border); padding: 5px 3px; font-size:11px; color: var(--text-secondary);}\n        .car-data-table td{padding:5px 3px;border:1px solid var(--item-border);color:var(--text-secondary);vertical-align:middle; text-align:center;}\n        .car-rewards{line-height:1.4em; text-align:left; padding-left:5px !important; color: var(--text-primary);}\n        .car-action-btn{font-size:10px;margin:2px auto;width:50px;border-radius:4px; padding:3px 0; background:rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.1); color: var(--text-secondary); }\n        .car-action-btn:hover{background:rgba(0,0,0,0.1);}\n        .car-action-btn.send{background:rgba(76, 175, 80, .1);border-color:rgba(76, 175, 80, .2); color: #2f6f44;}\n        .car-action-btn.claim{background:rgba(255, 152, 0, .1);border-color:rgba(255, 152, 0, .2); color: #b95f00;}\n        .car-action-btn.is-disabled{background:rgba(0,0,0,0.04) !important; border-color:transparent !important; color:#ccc !important; transform: none; box-shadow: none;}\n        .pity-counter.mythic-guaranteed{color:#e53e3e;font-weight:bold;}\n    ";
  document.head.appendChild(_0x4ca7b0);
  const _0x45a1cf = document.createElement("div");
  _0x45a1cf.className = "xianxia-panel collapse";
  _0x45a1cf.innerHTML = "\n        <div class=\"panel-header\">\n            <span class=\"panel-icon\">🎮</span>\n            <div class=\"panel-title\">鲸鱼之王</div>\n            <div class=\"opacity-control\">\n                <label for=\"opacity-slider\">透明度：</label>\n                <input type=\"range\" id=\"opacity-slider\" min=\"0\" max=\"100\" value=\"100\">\n                <span class=\"opacity-value\">100%</span>\n            </div>\n        </div>\n        <div class=\"panel-content\">\n            <div class=\"section-divider\">日常总览</div>\n            \n            <div class=\"task-section\" id=\"quick-tasks-module\">\n                <div class=\"task-header\"><h4>🚀 日常</h4><div class=\"status\">✅ 就绪</div></div>\n                <div class=\"daily-task-list\"></div>\n                <div class=\"main-action-buttons\">\n                    <button class=\"task-btn other-btn\" data-task=\"execute-daily-checked\">一键执行勾选</button>\n                    <button class=\"task-btn other-btn\" data-task=\"claim-activity\">领取活跃奖励</button>\n                </div>\n            </div>\n            \n            <div class=\"task-section\" id=\"car-module\">\n                <div class=\"task-header\"><h4>🏎️ 赛车</h4><div class=\"status\">✅ 就绪</div></div>\n                <button class=\"task-btn\" data-task=\"car-query\">查询赛车</button>\n                <div class=\"car-data-container\"><table class=\"car-data-table\" style=\"display:none;\"><thead><tr><th>车位</th><th>品质</th><th>主要奖励</th><th>状态</th><th>操作</th></tr></thead><tbody></tbody></table></div>\n            </div>\n\n            <div class=\"task-section\" id=\"tower-module\">\n                <div class=\"task-header\"><h4>🧗 爬塔</h4><div class=\"status\">✅ 就绪</div></div>\n                <button class=\"task-btn\" data-task=\"tower\">开始爬塔</button>\n            </div>\n\n            <div class=\"task-section\" id=\"arena-module\">\n                <div class=\"task-header\"><h4>⚔️ 竞技场</h4><div class=\"status\">✅ 就绪</div></div>\n                <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"arena-count\" value=\"3\" min=\"1\" max=\"99\"><button class=\"task-btn\" data-task=\"arena-start\">开始战斗</button></div>\n            </div>\n\n            <div class=\"task-section\" id=\"club-module\">\n                <div class=\"task-header\"><h4>⚔️ 俱乐部Boss</h4><div class=\"status\">✅ 就绪</div></div>\n                <div class=\"task-row\">\n                    <span class=\"task-label\">挑战次数:</span>\n                    <div class=\"count-selector\">\n                        <button class=\"task-btn\" data-action=\"decrement\">-</button>\n                        <span class=\"count-display\" id=\"club-boss-count\">2</span>\n                        <button class=\"task-btn\" data-action=\"increment\">+</button>\n                    </div>\n                    <button class=\"task-btn\" data-task=\"club-boss\">开始挑战</button>\n                </div>\n            </div>\n\n            <div class=\"task-section\" id=\"upgrade-module\">\n                <div class=\"task-header\"><h4>⚡ 升级</h4><div class=\"status\">✅ 就绪</div></div>\n                <div class=\"other-buttons\"><button class=\"task-btn other-btn\" data-task=\"starUp\">武将升星</button><button class=\"task-btn other-btn\" data-task=\"bookUpgrade\">升级图鉴</button></div>\n            </div>\n\n            <div class=\"section-divider\">消耗任务</div>\n\n            <div class=\"task-section\" id=\"fishing-module\">\n                 <div class=\"task-header\"><h4>🎣 钓鱼</h4><div class=\"status\">✅ 就绪</div></div>\n                 <div class=\"task-row\"><span class=\"task-label\">普通钓鱼</span><input type=\"number\" id=\"fishing-count-1\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"start-fishing-1\">开始</button></div>\n                 <div class=\"task-row\"><span class=\"task-label\">高级钓鱼</span><input type=\"number\" id=\"fishing-count-2\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"start-fishing-2\">开始</button></div>\n            </div>\n\n            <div class=\"task-section\" id=\"recruit-module\">\n                <div class=\"task-header\"><h4>👥 招募</h4><div class=\"status\">✅ 就绪</div></div>\n                <div class=\"task-row\"><span class=\"task-label\">次数:</span><input type=\"number\" id=\"recruit-count\" value=\"10\" min=\"1\"><button class=\"task-btn\" data-task=\"recruit\">开始招募</button></div>\n            </div>\n\n            <div class=\"task-section\" id=\"box-module\">\n                <div class=\"task-header\"><h4>📦 宝箱</h4><div class=\"status\">✅ 就绪</div></div>\n                <div class=\"task-row\"><span class=\"task-label\">木质宝箱</span><input type=\"number\" id=\"box-count-2001\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2001\">开启宝箱</button></div>\n                <div class=\"task-row\"><span class=\"task-label\">青铜宝箱</span><input type=\"number\" id=\"box-count-2002\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2002\">开启宝箱</button></div>\n                <div class=\"task-row\"><span class=\"task-label\">黄金宝箱</span><input type=\"number\" id=\"box-count-2003\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2003\">开启宝箱</button></div>\n                <div class=\"task-row\"><span class=\"task-label\">铂金宝箱</span><input type=\"number\" id=\"box-count-2004\" value=\"10\" min=\"10\" step=\"10\"><button class=\"task-btn\" data-task=\"open-box-2004\">开启宝箱</button></div>\n            </div>\n        </div>\n    ";
  document.body.appendChild(_0x45a1cf);
  const _0x7c20b3 = {
    "《三国演义》中，「大意失街亭」的是马谩？": 1,
    "《三国演义》中，「挥泪斩马谩」的是孙权？": 2,
    "《三国演义》中，「火烧博望坡」的是庞统？": 2,
    "《三国演义》中，「火烧藤甲兵」的是徐庶？": 2,
    "《三国演义》中，「千里走单骑」的是赵云？": 2,
    "《三国演义》中，「温酒斩华雄」的是张飞？": 2,
    "《三国演义》中，关羽在长坂坡「七进七出」？": 2,
    "《三国演义》中，刘备三顾茅庐请诸葛亮出山？": 1,
    "《三国演义》中，孙权与曹操「煮酒论英雄」？": 2,
    "《三国演义》中，提出「隆中对」的是诸葛亮？": 1,
    "《三国演义》中，夏侯杰在当阳桥被张飞吓死？": 1,
    "《三国演义》中，张飞在当阳桥厉吼吓退曹军？": 1,
    "《三国演义》中，赵云参与了「三英战吕布」？": 2,
    "《三国演义》中，赵云参与了「桃园三结义」？": 2,
    "《三国演义》中唯一正式上过战场的女子是祝融夫人？": 1,
    "《三国志》中，华雄被孙坚枭首？": 1,
    "《三国志》中记载，「草船借箭」的是诸葛亮？": 2,
    "「闭月」是貂蝉的代称？": 1,
    "「常胜将军」指代赵云？": 1,
    "「赤壁之战」中是黄盖建策火攻？": 1,
    "「官渡之战」中袁绍获胜？": 2,
    "「郭嘉不死卧龙不出」出自三国典故？": 1,
    "「曲有误，周郎顾」表达了周瑜不懂音律？": 2,
    "「三姓家奴」是指飞将吕布？": 1,
    "「士别三日」形容吕蒙笃志力学？": 1,
    "「吴下阿蒙」即指吕蒙？": 1,
    "「小菜一碟」指的是张飞吃豆芽？": 1,
    "「羞花」是貂蝉的代称？": 2,
    "「荀令留香」是指荀或厨艺高超？": 2,
    "「与曹操交手而不死，能败诸葛亮而自活」是指司马懿？": 1,
    "「张辽止啼」指张辽和善，善于哄孩子？": 2,
    "「总角之好」用于形容周瑜与孙策的交情？": 1,
    "拜将封侯的董卓为东汉忠臣？": 2,
    "宝马良驹赤兔的主人不包括吕布？": 2,
    "蔡文姬擅长音律？": 1,
    "曹仁被称为「天人将军」？": 1,
    "曹仁是曹操的儿子？": 2,
    "成语「水淹七军」与庞统有关？": 2,
    "大乔为孙策之妻？": 1,
    "典故「胆大如斗」与姜维有关？": 1,
    "典故「舌战群儒」与周瑜有关？": 2,
    "典故「杏林圣手」出自华佗？": 2,
    "典故「英雄难过美人关」出自「吕布与貂蝉」？": 1,
    "典韦力大过人，被称为「古之恶来」？": 1,
    "典韦善用的武器包括「大双戟」？": 1,
    "典韦是腹隐机谋的知名谋士？": 2,
    "貂蝉的「美人计」用于离间董卓和吕布？": 1,
    "东汉末年国色美女小乔为周瑜之妻？": 1,
    "董卓曾收吕布为义子？": 1,
    "董卓为曹操帐下大将？": 2,
    "甘宁被称为江表之虎臣？": 1,
    "甘宁为魏国名将？": 2,
    "甘宁因「少有气力，好游侠」，被称为「锦帆贼」？": 1,
    "公孙瓒别名「白马将军」？": 1,
    "公孙瓒击败袁绍，致袁绍引火自焚？": 2,
    "公孙瓒因数次「大破黄巾」而威名大震？": 1,
    "郭嘉被史籍称为「才策谋略，世之奇士」？": 1,
    "郭嘉为孙策帐下谋士？": 2,
    "合肥之战中，张辽以少胜多，威震江东？": 1,
    "华佗被称为「外科鼻祖」？": 1,
    "华佗因遭曹操怀疑，下狱被铂问致死？": 1,
    "华佗与董奉、张仲景并称为「建安三神医」？": 1,
    "华雄是奇谋百出的军事战略家？": 2,
    "华雄效力于诸葛亮？": 2,
    "贾诩曾任魏国最高军事长官「太尉」？": 1,
    "贾诩为曹操帐下的主要谋士之一？": 1,
    "贾诩献离间计成功瓦解马超、韩遂？": 1,
    "刘备是三国时期蜀汉「五虎上将」之一？": 2,
    "鲁肃为谋士，效力于蜀国？": 2,
    "民间，张飞被尊为「屠宰业祖师」？": 1,
    "民间游戏「华容道」是以三国为背景的游戏？": 1,
    "明教以张角为教祖？": 1,
    "三国时期，五虎上将之首是黄忠？": 2,
    "三国时期曹操一生未称帝？": 1,
    "三国时期的吴国由曹操建立？": 2,
    "司马懿曾称帝？": 2,
    "司马懿为曹操谋臣？": 1,
    "算无遗策的贾诩为吴国谋士？": 2,
    "孙策曾「一统江东」？": 1,
    "孙策死于「赤壁之战」？": 2,
    "太史慈曾为救孔融单骑突围向刘备求援？": 1,
    "太史慈弦不虚发，被称为「神射手」？": 1,
    "太史慈终效力于刘备？": 2,
    "威振天下的董卓被吕布诛杀？": 1,
    "夏侯渊天生独眼？": 2,
    "夏侯渊与夏侯惇是父子？": 2,
    "徐晃曾「击破关羽，解樊城之围」？": 1,
    "荀或被称为「王佐之才」？": 1,
    "颜良被关羽斩杀？": 1,
    "颜良被孔融评价「勇冠三军」？": 1,
    "颜良在官渡之战中战胜曹操大军？": 2,
    "以胆气著称的吕蒙效力于刘备？": 2,
    "袁绍战胜公孙瓒，统一河北？": 1,
    "张飞与关羽被并称为「万人敌」？": 1,
    "张角为黄巾起义首领之一？": 1,
    "张角因战胜黄巾军而声名大噪？": 2,
    "赵云与关羽、张飞「桃园结义」？": 2,
    "赵云与关羽、张飞并称「燕南三士」？": 1,
    "著名的「官渡之战」由袁绍发起？": 1,
    "甄宓曾为袁绍之妻？": 2,
    "甄宓为魏文帝曹丕妻子？": 1,
    "周瑜逝世后，鲁肃代周瑜职务？": 1,
    "《三国演义》中，「过五关斩六将」的武将是关羽？": 1,
    "《三国演义》中，「火烧藤甲兵」的是诸葛亮？": 1,
    "《三国演义》中，「三气周瑜」的是司马懿？": 2,
    "《三国演义》中，「三英战吕布」发生在虎牢关？": 1,
    "《三国演义》中，「身在曹营心在汉」的是刘备？": 2,
    "《三国演义》中，「桃园三结义」中的桃园是张飞的住所？": 1,
    "《三国演义》中，「万事俱备，只欠东风」说的是赤壁之战？": 1,
    "《三国演义》中，败走麦城的是张飞？": 2,
    "《三国演义》中，被称为「大耳贼」的是曹操？": 2,
    "《三国演义》中，被称为「奸雄」的是司马懿？": 2,
    "《三国演义》中，被称为「诸葛村夫」的是诸葛亮？": 1,
    "《三国演义》中，被追杀时「割须断袍」的是马超？": 2,
    "《三国演义》中，曹操赤壁兵败后是曹仁率军接应的？": 1,
    "《三国演义》中，称号「卧龙」的是诸葛亮？": 1,
    "《三国演义》中，持方天画戟的武将是吕布？": 1,
    "《三国演义》中，持青龙偃月刀的武将是关羽？": 1,
    "《三国演义》中，单刀赴会的是赵云？": 2,
    "《三国演义》中，发明「木牛流马」的是诸葛亮？": 1,
    "《三国演义》中，关羽曾一边「刮骨疗毒」一边与将领饮酒？": 2,
    "《三国演义》中，火烧连营大败蜀军的将领是诸葛亮？": 2,
    "《三国演义》中，吕布称号「关内侯」？": 2,
    "《三国演义》中，庞统的称号是「幼麟」？": 2,
    "《三国演义》中，七擒孟获的是司马懿？": 2,
    "《三国演义》中，为关羽「刮骨疗毒」的医生是张仲景？": 2,
    "《三国演义》中，要为曹操做开颅手术的是华佗？": 1,
    "《三国演义》中，赵云的妻子是马超的姝妹马云禄？": 2,
    "《三国演义》中，赵云在「赤壁之战」中救出阿斗？": 2,
    "《三国演义》中，甄姬曾为袁绍之子袁熙的夫人？": 1,
    "《三国演义》中，中诸葛亮「空城计」的是曹操？": 2,
    "《三国演义》中，诸葛亮的「空城计」是为了阻挡曹操大军？": 2,
    "《三国演义》中，祝融夫人被马超活捉？": 2,
    "《三国演义》中，祝融夫人的丈夫为诸葛亮？": 2,
    "《三国演义》中，祝融夫人擅长的暗器是飞针？": 2,
    "「铜雀春深锁二乔」指的是火乔和小乔吗？": 1,
    "「文姬归汉」指的是蔡文姬从匈奴回到中原吗？": 1,
    "白马义从是赵云的部下？": 2,
    "蔡文姬是被曹操赎回中原的吗？": 1,
    "黄月英是诸葛亮的妻子？": 1,
    "庞统和周瑜并称为「卧龙凤雏」？": 2,
    "庞统是刘备的谋士吗？": 1,
    "三国时期，董卓曾想和孙坚结成亲家？": 1,
    "三国时期，公孙瓒和刘备是师兄弟关系？": 1,
    "三国时期，姜维始终都是蜀国的将领？": 2,
    "三国时期，姜维在诸葛亮病逝后成为蜀国丞相？": 2,
    "三国时期，十八路诸侯讨董后，孙坚率军攻入洛阳？": 1,
    "三国时期，司马懿经常练习「五禽戏」？": 1,
    "三国时期，孙策建立了吴国？": 1,
    "三国时期，孙坚中箭而亡？": 1,
    "三国时期，赵云无一败绩？": 2,
    "《出师表》是诸葛亮写给刘禅的吗？": 1,
    "《三国演义》中，「阿斗」是赵云的儿子？": 2,
    "《三国演义》中，「宁教我负天下人，休教天下人负我」出自刘备之口？": 2,
    "《三国演义》中，「虽未谱金兰，情谊比桃园」说的是赵云？": 1,
    "《三国演义》中，「五虎上将」里没有魏延？": 1,
    "《三国演义》中，「一个愿打一个愿挨」形容的是周瑜与黄忠？": 2,
    "《三国演义》中，被称为「智绝」的是刘备？": 2,
    "《三国演义》中，曹操让士兵们想象柠檬来止渴？": 2,
    "《三国演义》中，关羽，字「云长」？": 1,
    "《三国演义》中，关羽的坐骑是「绝影」？": 2,
    "《三国演义》中，关羽为了离开曹操的麾下，达成了「过五关，斩六将」的壮举。": 1,
    "《三国演义》中，郭嘉遗计定辽东。": 1,
    "《三国演义》中，黄忠在定军山击杀了曹魏将领夏侯渊。": 1,
    "《三国演义》中，刘备，字「孟德」？": 2,
    "《三国演义》中，刘备的专属武器名为「青龙偃月刀」？": 2,
    "《三国演义》中，马超有「花马超」的称呼。": 2,
    "《三国演义》中，呢称为「阿斗」的是刘备？": 2,
    "《三国演义》中，司马昭是司马懿的父亲？": 2,
    "《三国演义》中，死于「落凤坡」的名将是庞统？": 1,
    "《三国演义》中，宣称自己会「梦中杀人」的是曹操？": 1,
    "《三国演义》中，张飞的专属武器名为「丈八蛇矛」？": 1,
    "《三国演义》中，赵云曾孤胆救黄忠。": 1,
    "《三国演义》中，诸葛亮，字「孔明」？": 1,
    "《三国演义》中，诸葛亮发明了「诸葛连弩」？": 1,
    "《三国演义》中，诸葛亮挥泪斩了马超？": 2,
    "「白帝城托孤」指的是刘备将自己的儿子托付给赵云？": 2,
    "「单刀赴会」是诸葛亮邀请关羽前往的。": 2,
    "「扶不起的阿斗」指的是刘禅？": 1,
    "「割须弃袍」发生于曹操和马超交战时。": 2,
    "「黄巾起义」被看做三国时代的开端吗？": 1,
    "「孔明灯」在古代曾用于传递军情？": 1,
    "「乐不思蜀」指的是刘禅？": 1,
    "「衣带诏」事发后曹操派军讨伐刘备？": 1,
    "曹操被评价为「治世之能臣，乱世之奸雄」。": 1,
    "典故妄自菲薄出自诸葛亮的《前出师表》？": 1,
    "郭嘉被曹操称为「吾之子房」。": 2,
    "郭嘉是由贾诩推荐给曹操，并加入了曹操麾下。": 2,
    "汉献帝自愿禅让帝位给丞相曹丕？": 2,
    "华佗使用「麻沸散」是世界医学史上应用全身麻醉进行手术治疗的最早记载？": 1,
    "华佗有自身编撰的医书流传下来。": 2,
    "刘备曾自称「汉中王」？": 1,
    "刘备称帝后不久就亲自率军伐吴？": 1,
    "刘备少年时以织席贩履为生？": 1,
    "挟天子以令诸侯的是曹操？": 1,
    "荀或与同为曹操麾下的荀攸是叔侄关系。": 1,
    "袁术曾经称帝但最后被刘备、朱灵军截道，呕血而死？": 1,
    "在魏蜀吴三国中，吴国是最晚建立的吗？": 1,
    "周泰是受到孙权的招揽加入了吴国。": 2,
    "周泰在归顺孙策之前在江中劫掠为生。": 1,
    "诸葛亮共北伐五次，第五次时病逝于五丈原？": 1,
    "《咸鱼之王》里咸将蔡文姬只能通过开宝箱获取？": 1,
    "《咸鱼之王》里「咸神火把」的持续时间为30分钟？": 1,
    "《咸鱼之王》里「木质宝箱」每开一个可以获取1宝箱积分？": 1,
    "《咸鱼之王》里每位玩家每日可以进行三次「免费点金」？": 1,
    "《咸鱼之王》里鱼缸位于玩家的「客厅」界面内？": 1,
    "《咸鱼之王》里「咸神门票」可以用于参加竞技场战斗？": 1,
    "《咸鱼之王》里「梦魇水晶」无法重生，只能通过无损换将置换到其他咸将身上？": 1,
    "《咸鱼之王》里「龙鱼·八卦」是咸将黄月英的专属鱼灵？": 2,
    "《咸鱼之王》里「万能红将碎片」可以开出蔡文姬的碎片吗？": 2,
    "《咸鱼之王》里好友的「客厅」内会随机刷出钻石、白银、普通三种盐罐？": 2,
    "《咸鱼之王》里「招募令」可以招募到咸将关银屏？": 2,
    "《咸鱼之王》里有「万能紫将碎片」？": 2,
    "《咸鱼之王》里咸将的专属鱼都有「龙鱼」前缀。": 1,
    "《咸鱼之王》里「青铜宝箱」每次开启可以获取到10宝箱积分？": 1,
    "《咸鱼之王》里咸将分为四个阵营？": 1,
    "《咸鱼之王》里咸将貂蝉是「群雄」阵营的。": 1,
    "《咸鱼之王》里咸将貂蝉的主动技能可以减少敌人怒气值。": 1,
    "《咸鱼之王》里「灯神挑战」每天可以免费获取3个「扫荡魔毯」。": 1,
    "《咸鱼之王》里同种类盐罐同时只能占据一个。": 1,
    "《咸鱼之王》里有「白银宝箱」。": 2,
    "《咸鱼之王》中升级俱乐部「高级科技」时需要先点满对应职业的「基础科技」。": 1,
    "《咸鱼之王》里咸将诸葛亮的主动技能「星落」有控制效果。": 2,
    "《咸鱼之王》里咸将黄月英的职业是法师。": 2,
    "《咸鱼之王》里开启「木质宝箱」有概率获取金砖。": 2,
    "《咸鱼之王》里咸将姜维可以同时攻击全部敌人。": 2,
    "《咸鱼之王》里只要咸将貂蝉在场，吕布就不会阵亡。": 2,
    "《咸鱼之王》里鱼灵「惊涛」无法将受到的持续伤害效果分5回合扣除。": 1,
    "《咸鱼之王》里开启「钻石宝箱」时，不会获得宝箱积分。": 1,
    "《咸鱼之王》「捕获」玩法中，每进行十次高级捕获必出稀有鱼灵。": 1,
    "《咸鱼之王》「盐场争霸」中，可以通过消耗20金砖来加速行军。": 1,
    "《咸鱼之王》里咸将星级在达到21星时，即可获得「机甲皮肤」。": 1,
    "《咸鱼之王》里宝箱积分达1000分时，可一键领取累计积分奖励宝箱。": 1,
    "《咸鱼之王》里俱乐部团长连续7天未登录，团长职位将自动转让其他成员。": 1,
    "《咸鱼之王》里「玩具」每周有一次免费无损转换的机会。": 1,
    "《咸鱼之王》「灯神挑战」内，每个阵营中有15层可挑战的关卡。": 1,
    "《咸鱼之王》「咸神竞技场」中，每日可以免费进行3次挑战。": 1,
    "《咸鱼之王》重复攻打击杀过的「俱乐部BOSS」，无法再次获得排名奖励。": 1,
    "《咸鱼之王》已附身的鱼灵仍会在「鱼缸」中显示。": 2,
    "《咸鱼之王》「普通鱼竿」免费捕获的刷新时间为6个小时。": 2,
    "《咸鱼之王》「每日咸王考验」中，共有4个不同BOSS。": 2,
    "「孔融让梨」的故事讲的是孔融小小年纪便有谦让的美德？": 1,
    "成语「初出茅庐」出自《三国演义》？": 1,
    "「三家归晋」结束了汉末三国时期以来的割据混战的局面？": 1,
    "《三国演义》中，「虎女焉能配犬子」一句中，虎女指的是关羽之女。": 1,
    "「莫作孔明择妇，正得阿承丑女」说的是诸葛亮的择偶标准。": 1,
    "《三国演义》中，许褚跟许攸是兄弟。": 2,
    "俗语「赔了夫人又折兵」中的夫人是小乔。": 2,
    "「赔了夫人又折兵」的上半句为「孔明妙计安天下」。": 2,
    "四大美女中「落雁」说的是被匈奴所掳的蔡文姬。": 2,
    "「大丈夫何患无妻」一典故出自《三国演义》中的赵云之口？": 1,
    "《咸鱼之王》中，招募界面的NPC名字是「猫婆婆」？": 1,
    "《咸鱼之王》中，「每日任务」重置时间为每日0点？": 1,
    "《咸鱼之王》中，「每日任务」重置时间为每日8点？": 2,
    "《咸鱼之王》中，每位玩家每日有一次免费刷新「黑市」的机会？": 1,
    "《咸鱼之王》中，每位玩家每日有三次免费刷新「黑市」的机会？": 2,
    "《咸鱼之王》中，每消耗20个「普通鱼竿」可以免费获取1个「黄金鱼竿」？": 1,
    "《咸鱼之王》中，每消耗10个「普通鱼竿」可以免费获取1个「黄金鱼竿」？": 2,
    "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为1亿？": 2,
    "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为5亿？": 1,
    "《咸鱼之王》中，副本「每日咸王考验」累计伤害奖励上限为10亿？": 2,
    "《咸鱼之王》中，道具「珍珠」可以在「神秘商店」使用？": 1,
    "《咸鱼之王》中，鱼灵「黄金锦鲤」可在「神秘商店」中消耗珍珠兑换？": 1,
    "《咸鱼之王》中，玩家每次占领「盐罐」会消耗10点「能量」": 1,
    "《咸鱼之王》中，玩家每次占领「盐罐」会消耗1点「能量」": 2,
    "《咸鱼之王》中，一个「俱乐部」最多容纳30位成员？": 1,
    "《咸鱼之王》中，1个「俱乐部」最多有2位副团长？": 1,
    "《咸鱼之王》中，玩家可在「图鉴」内可查看满级咸将信息？": 1,
    "《咸鱼之王》中，「月度活动」每月刷新1次？": 1,
    "《咸鱼之王》中，「每日任务」中日活跃积分达到80的奖励为钻石宝箱？": 2,
    "《咸鱼之王》中，「每日任务」中日活跃积分达到100的奖励为招募令？": 1,
    "《咸鱼之王》中，游戏内有金色鱼灵「黄金鲸鱼」？": 2,
    "《咸鱼之王》中，玩家可通过「咸将塔」玩法获取「珍珠」道具？": 2,
    "《咸鱼之王》中，月度「捕获达标」活动达成相应目标后可以获得珍珠。": 1,
    "《咸鱼之王》中，月度「捕获达标」活动达成相应目标后可以获得万能红将碎片。": 2,
    "《咸鱼之王》中，咸将的四个阵营分别为魏、蜀、吴、群雄。": 1,
    "《咸鱼之王》中，除了咸将外，其余的怪物都没有职业。": 1,
    "《咸鱼之王》中，「灯神挑战」不同的阵营挑战内，只能上阵对应阵营的咸将。": 1,
    "《咸鱼之王》中，精铁可以直接用金砖购买。": 1,
    "《咸鱼之王》中，进阶石可以直接使用金砖购买。": 1,
    "《咸鱼之王》中，「招募」可以有概率获得红色武将。": 1,
    "《咸鱼之王》中，贾诩为吴国阵营咸将？": 2,
    "《咸鱼之王》中，每日可以免费招募一次。": 1,
    "《咸鱼之王》中，「每日咸王考验」可以挑战多次。": 1,
    "《咸鱼之王》中，蔡文姬是红色武将。": 2,
    "《咸鱼之王》中，「咸王梦境」为每日开放。": 2,
    "《咸鱼之王》中，「咸王梦境」周二会开放。": 2,
    "《咸鱼之王》中，姜维攻击后可以获得护盾。": 2,
    "《咸鱼之王》中，俱乐部人数没有上限。": 2,
    "《三国演义》中，「怒打督邮」的是张飞。": 1,
    "祝融夫人是《三国演义》虚构人物。": 1,
    "《三国演义》中，「拔矢啖睛」的是夏侯惇。": 1,
    "《三国演义》中，「拔矢啖睛」的是夏侯渊。": 2,
    "《三国演义》中，「曹操献刀」本是要刺杀董卓。": 1,
    "《三国演义》中，许攸被许褚所杀。": 1,
    "《咸鱼之王》中，捕获一次最多可以使用10个鱼竿。": 1,
    "《咸鱼之王》中，捕获一次最多可以使用10个鱼竿": 1,
    "《咸鱼之王》中，「咸鱼大冲关」每周任务是周一0点重置。": 1,
    "《咸鱼之王》中，「咸鱼大冲关」每周任务是周一8点重置。": 2,
    "《咸鱼之王》中，挂机奖励加钟，最多可以有5名好友助力。": 2,
    "《咸鱼之王》中，挂机奖励加钟，最多可以有4名好友助力。": 1,
    "《咸鱼之王》中，每日6点重置点金次数。": 2,
    "《咸鱼之王》中，「俱乐部」每日签到可以获得「军团币」？": 1,
    "《咸鱼之王》中，「黑市」每日0点自动刷新商品？": 1,
    "《咸鱼之王》中，「黑市」每日8点自动刷新商品？": 2,
    "《咸鱼之王》中，可以使用「珍珠」兑换「万能红将碎片」？": 1,
    "《咸鱼之王》中，「咸神门票」可以通过「金砖」进行购买？": 1,
    "《咸鱼之王》中，「灯神挑战」内分为四个阵营？": 1,
    "《咸鱼之王》中，玩家的「勋章墙」内最多展示4个「徽章」？": 1,
    "《咸鱼之王》中，「主公」达到4001级开启「玩具」玩法？": 1,
    "《咸鱼之王》中，「玩具」需要花费「扳手」进行激活？": 1,
    "《咸鱼之王》中，「咸王梦境」每成功通过十层可以遇到一次梦境商人？": 1,
    "《咸鱼之王》中，挑战「咸将塔」需要花费「小鱼干」？": 1,
    "《咸鱼之王》中，「小鱼干」可以通过「金砖」进行购买？": 1,
    "《咸鱼之王》中，「招募」无法获得咸将吕玲绮。": 1,
    "《咸鱼之王》中，「灯神挑战」的奖励包括「珍珠」？": 2,
    "《咸鱼之王》中，「咸王梦境」中的梦境调料「普通盐瓶」可以恢复咸将怒气？": 2,
    "《咸鱼之王》中，进阶石可以通过参与「咸将塔」玩法获取。": 1,
    "《咸鱼之王》中，「扳手」在通关主线7001关后可以通过挂机奖励获得。": 1,
    "《咸鱼之王》中，「军团币」可以用于升级「俱乐部科技」？": 1,
    "《咸鱼之王》中，装备最多可以开到5个淬炼孔位？": 1,
    "《咸鱼之王》中，「青铜火把」会为主线战斗中上阵的咸将增加5%攻击？": 1,
    "《咸鱼之王》中，「木材火把」会使主线战斗以1.5倍速进行？": 1,
    "《咸鱼之王》中，道具「金砖」可以用于在「黑市」中购买物品？": 1,
    "《咸鱼之王》中，装备中的坐骑会为咸将提供防御加成？": 2,
    "《咸鱼之王》中，攻打「俱乐部BOSS」后可以获得皮肤币奖励？": 2,
    "《咸鱼之王》中，咸将皮肤可以使用「军团币」来进行兑换？": 2,
    "《咸鱼之王》中，咸将的等级上限为2000级？": 2,
    "《咸鱼之王》中，咸将「张星彩」属于群雄阵营？": 2,
    "《咸鱼之王》中，咸将「颜良」属于魏国阵营？": 2,
    "《咸鱼之王》中，「招募」无法获得咸将关银屏。": 1,
    "《咸鱼之王》俱乐部中，每日最多可以攻打4次「俱乐部BOSS」。": 1,
    "《咸鱼之王》中，俱乐部团长无法退出俱乐部。": 1,
    "《咸鱼之王》中，主动退出俱乐部12小时后才可以加入新的俱乐部。": 1,
    "《咸鱼之王》中，装备中的铠甲会为咸将提供血量加成？": 1,
    "《咸鱼之王》中，红色咸将的觉醒技能需要咸将达到一定星级才能解锁。": 1,
    "《咸鱼之王》中，布阵时，前排可上阵2名咸将，后排可上阵3名咸将。": 1,
    "《咸鱼之王》竞技场中，未对防守阵容进行设置时，将默认使用主线阵容。": 1,
    "《咸鱼之王》中，「邮件」最长保存30天。": 1,
    "《咸鱼之王》中，「邮件」最长保存10天。": 2,
    "《咸鱼之王》中，「淬炼」可能出现的属性共21种。": 1,
    "《咸鱼之王》中，「俱乐部BOSS」被击败后会按照玩家造成的总伤害排名发放排名奖励。": 1,
    "《咸鱼之王》中，晚上23时仍可以进行竞技场战斗。": 2,
    "《咸鱼之王》中，开启「省电模式」将停止主线关卡战斗。": 2,
    "鲁肃，字「子敬」。": 1,
    "蔡文姬，本名蔡琰？": 1,
    "「池中之物」一词出自《三国志》中周瑜之口？": 1,
    "《咸鱼之王》中，装备中的头冠会为咸将提供防御加成？": 1,
    "《咸鱼之王》中，「咸神火把」会为主线战斗中上阵的咸将增加15%攻击？": 1,
    "《咸鱼之王》中，「咸神火把」与「青铜火把」均会使主线战斗以2倍速进行？": 1,
    "刘表是刘备的次子？": 2,
    "「望梅止渴」是周瑜带队行军时发生的故事？": 2,
    "《咸鱼之王》中，「扳手」可以在「黑市」中花费「金砖」获取？": 1,
    "《咸鱼之王》中，在「盐锭商店」中可以花费「盐锭」兑换到「皮肤币」？": 1,
    "《咸鱼之王》中，月赛助威截止后，未使用的「拍手器」会被回收？": 1,
    "《咸鱼之王》中，「咸鱼大冲关」单局累计答对10题可获取10个「招募令」？": 1,
    "《咸鱼之王》中，通行证「竞技经验」不需要邮件领取，直接发放给玩家？": 1,
    "《咸鱼之王》中，「俱乐部排位赛」的段位一共有7种？": 1,
    "《咸鱼之王》中，「阵营光环」上阵任意3个同阵营的武将就能生效。": 2,
    "《咸鱼之王》中，月度活动「捕获达标」达标奖励包含道具「金砖」？": 1,
    "《咸鱼之王》中，俱乐部的「团长」和「副团长」可以选择「排位赛」出战成员？": 1,
    "《咸鱼之王》中，玩家每日可在「灯神挑战」中挑战10次？": 1,
    "《咸鱼之王》中，咸将「曹仁」的职业是「肉盾」？": 1,
    "《咸鱼之王》中，「彩玉」可以花费「金币」进行兑换？": 2,
    "《咸鱼之王》中，在「助威商店」中可以花费「助威币」兑换到「万能红将碎片」？": 2,
    "《咸鱼之王》中，月度活动「咸神争霸」达标奖励包含道具「珍珠」？": 2,
    "《咸鱼之王》中，在「黑市」可以通过「金砖」兑换「钻石宝箱」？": 2,
    "《咸鱼之王》中，咸将「蔡文姬」属于魏国阵营？": 1,
    "《咸鱼之王》中，可以通过「万能红将碎片」开出「贾诩碎片」？": 1,
    "《咸鱼之王》中，「咸王梦境」玩法在通关1000关后开放？": 1,
    "《咸鱼之王》中，「灯神挑战」中，每阵营前五层的首通奖励均为精铁和进阶石？": 1,
    "《咸鱼之王》中，「咸鱼大冲关」内累计答对30道题目可获得「金鱼公主」皮肤？": 1,
    "《咸鱼之王》中，「咸鱼大冲关」内完成20次大冲关任务可获得「马头咸鱼」皮肤？": 1,
    "《咸鱼之王》中，「金币礼包」可以通过「捕获」玩法获取？": 1,
    "《咸鱼之王》中，可以通过「图鉴」查看咸将满级后的技能效果？": 1,
    "《咸鱼之王》中，攻打「每日咸王考验」内的「癫癫蛙」BOSS可获得招募令。": 1,
    "《咸鱼之王》中，可以通过「万能橙将碎片」开出「蔡文姬碎片」？": 2,
    "《咸鱼之王》中，通过「高级捕获」可以获得黄金鱼灵「利刃」？": 2,
    "《咸鱼之王》中，咸将星级达到30级，可以觉醒第二技能？": 2,
    "《咸鱼之王》中，咸将「黄月英」的职业为「法师」？": 2,
    "《咸鱼之王》中，咸将「孙策」的职业为「战士」？": 2,
    "《咸鱼之王》中，开启「晶石福袋」可以获得「进阶石」？": 2,
    "《三国演义》中，「大丈夫生于乱世，当带三尺剑立不世之功」，是太史慈所说。": 1,
    "《咸鱼之王》中，「咸将塔」每通关第10层，会给10个「小鱼干」。": 1,
    "《咸鱼之王》中，「每日咸王考验」有10层伤害达标奖励。": 1,
    "《咸鱼之王》中，「巅峰竞技场」前100名，可登上「巅峰王者榜」。": 1,
    "《咸鱼之王》中，激活「终身卡」，可以使挂机时间增加2小时。": 1,
    "《咸鱼之王》中，激活「月卡」，可以使挂机时间增加2小时。": 1,
    "《咸鱼之王》中，「咸神竞技场」内共分为六个段位。": 1,
    "《咸鱼之王》中，「灯神挑战」每日0点刷新挑战次数。": 1,
    "《咸鱼之王》中，若「签到」当日登录未领取，后续登录时可以一并领取。": 1,
    "《咸鱼之王》中，激活「终身卡」，挂机金币收益增加10%。": 1,
    "《咸鱼之王》中，激活「周卡」，挂机金币收益增加10%。": 1,
    "《咸鱼之王》中，「签到」领取30次奖励内容后，奖励内容会进行刷新。": 1,
    "《咸鱼之王》中，激活「月卡」，挂机金币收益增加10%。": 2,
    "《咸鱼之王》中，「竞技场」每周结算时，巅峰场玩家均可获得「巅峰王者徽章」。": 2,
    "《咸鱼之王》中，「周卡」激活，可以使挂机时间增加2小时。": 2,
    "《咸鱼之王》中，咸将装备的等级无法超「主公阿咸」的等级。": 1,
    "《咸鱼之王》中，开启「金币礼包」获取的金币与挂机奖励有关。": 1,
    "《咸鱼之王》中，挑战「咸将塔」消耗的小鱼干在通过当前塔后会获得10个。": 1,
    "《咸鱼之王》中，「梦魇水晶」的属性需要佩戴咸将达到701级才会生效。": 1,
    "《咸鱼之王》中，咸将达到700级并进阶后可以激活自身全部基础技能。": 1
  };
  const _0x14446a = {
    showtip(_0x24761f, _0x2d3042 = "info") {
      const _0x4269a0 = document.createElement("div");
      _0x4269a0.className = "gvh-toast " + _0x2d3042;
      _0x4269a0.innerText = _0x24761f;
      document.body.appendChild(_0x4269a0);
      setTimeout(() => _0x4269a0.remove(), 3000);
    },
    async sendCommand(_0x50c56d, _0x5e9d91 = {}) {
      if (!window.ws?.["sendAsync"]) {
        this.showtip("错误：WebSocket连接不可用", "error");
        return null;
      }
      try {
        return await window.ws.sendAsync({
          ack: 0,
          cmd: _0x50c56d,
          params: _0x5e9d91,
          seq: Date.now(),
          time: Date.now()
        });
      } catch (_0x439915) {
        this.showtip("命令发送失败: " + _0x439915.message, "error");
        return null;
      }
    },
    delay: _0x5537a6 => new Promise(_0x10d131 => setTimeout(_0x10d131, _0x5537a6 * 1000)),
    getFormatDate: _0x5eccf0 => {
      const _0x41c316 = new Date(_0x5eccf0);
      _0x41c316.setHours(_0x41c316.getHours() + 8);
      return _0x41c316;
    }
  };
  const _0x43afbc = _0x45a1cf.querySelector("#opacity-slider");
  const _0x123dac = _0x2492bf => {
    _0x45a1cf.style.background = "rgba(247, 250, 252, " + _0x2492bf / 100 * 0.85 + ")";
    _0x45a1cf.querySelector(".opacity-value").textContent = _0x2492bf + "%";
  };
  _0x43afbc.addEventListener("input", _0x473cf1 => _0x123dac(_0x473cf1.target.value));
  _0x123dac(_0x43afbc.value);
  _0x45a1cf.querySelector(".panel-header").addEventListener("click", _0x4fe29a => {
    if (_0x4fe29a.target.closest(".opacity-control")) {
      return;
    }
    _0x45a1cf.classList.toggle("collapse");
    _0x45a1cf.classList.toggle("expanded");
  });
  const _0x49fb4a = document.getElementById("club-boss-count");
  _0x45a1cf.querySelector("#club-module").addEventListener("click", _0x357085 => {
    const _0x13d5ca = _0x357085.target.dataset.action;
    if (!_0x13d5ca) {
      return;
    }
    let _0x2f2b00 = parseInt(_0x49fb4a.textContent);
    if (_0x13d5ca === "increment" && _0x2f2b00 < 4) {
      _0x2f2b00++;
    }
    if (_0x13d5ca === "decrement" && _0x2f2b00 > 0) {
      _0x2f2b00--;
    }
    _0x49fb4a.textContent = _0x2f2b00;
  });
  const _0x241f2c = {
    id: "daily-hangup",
    label: "收菜、加钟",
    task: "daily-task-hangup",
    checked: true
  };
  const _0x1ff8be = {
    id: "daily-bottle-renew",
    label: "续罐子",
    task: "daily-task-bottle-renew",
    checked: true
  };
  const _0x13d752 = {
    id: "daily-bottle-claim",
    label: "收盐罐",
    task: "daily-task-bottle-claim",
    checked: false
  };
  const _0x2e5dc7 = {
    id: "daily-friends",
    label: "好友金币",
    task: "daily-task-friends",
    checked: true
  };
  const _0xe993c4 = {
    id: "daily-mail",
    label: "领取邮件",
    task: "daily-task-mail",
    checked: true
  };
  const _0x31d717 = {
    id: "daily-club",
    label: "俱乐部签到",
    task: "daily-task-club",
    checked: true
  };
  const _0x2a9ee1 = {
    id: "daily-boss",
    label: "每日咸王考验",
    task: "daily-task-boss",
    checked: true
  };
  const _0xd0d89c = {
    id: "daily-gold",
    label: "点金三次",
    task: "daily-task-gold",
    checked: true
  };
  const _0x58cec5 = {
    id: "daily-benefits",
    label: "领取每日福利",
    task: "daily-task-benefits",
    checked: true
  };
  const _0x3a0968 = {
    id: "daily-quiz",
    label: "自动答题",
    task: "daily-task-quiz",
    checked: true
  };
  const _0x49b4d8 = {
    id: "daily-genie-tickets",
    label: "领取扫荡券",
    task: "daily-task-genie-tickets",
    checked: true
  };
  const _0x3dbf7a = {
    id: "daily-genie-sweep",
    label: "灯神扫荡",
    task: "daily-task-genie-sweep",
    checked: true
  };
  const _0x30e06e = [_0x241f2c, _0x1ff8be, _0x13d752, _0x2e5dc7, _0xe993c4, _0x31d717, _0x2a9ee1, _0xd0d89c, _0x58cec5, _0x3a0968, _0x49b4d8, _0x3dbf7a];
  const _0x259f67 = _0x45a1cf.querySelector(".daily-task-list");
  _0x30e06e.forEach(_0x45fbf2 => {
    const _0x381dc5 = document.createElement("div");
    _0x381dc5.className = "daily-task-item";
    _0x381dc5.innerHTML = "\n            <div class=\"daily-task-info\">\n                <input type=\"checkbox\" id=\"" + _0x45fbf2.id + "\" data-task-name=\"" + _0x45fbf2.task + "\" " + (_0x45fbf2.checked ? "checked" : "") + ">\n                <label for=\"" + _0x45fbf2.id + "\">" + _0x45fbf2.label + "</label>\n            </div>\n            <button class=\"task-btn\" data-task=\"" + _0x45fbf2.task + "\">独立执行</button>\n        ";
    _0x259f67.appendChild(_0x381dc5);
  });
  const _0x391d8c = {
    fullCarData: [],
    timeInterval: null,
    sendCount: 0
  };
  const _0x4dab7c = {
    statusEl: null,
    dataTable: null,
    dataBody: null
  };
  const _0x3e36c1 = {
    "1": "普通",
    "2": "稀有",
    "3": "史诗",
    "4": "传说",
    "5": "神话",
    "6": "传奇"
  };
  const _0x2dc3c3 = {
    "1": "color:var(--text-secondary)",
    "2": "color:#3182ce",
    "3": "color:#9f7aea",
    "4": "color:#dd6b20",
    "5": "color:#e53e3e",
    "6": "color:#d69e2e"
  };
  const _0x55df70 = {
    state: _0x391d8c,
    dom: _0x4dab7c,
    init() {
      const _0x47cd65 = document.getElementById("car-module");
      this.dom = {
        statusEl: _0x47cd65.querySelector(".status"),
        dataTable: _0x47cd65.querySelector(".car-data-table"),
        dataBody: _0x47cd65.querySelector("tbody")
      };
      _0x47cd65.addEventListener("click", _0x57cd09 => {
        const _0x1ca9c7 = _0x57cd09.target.closest(".task-btn, .car-action-btn");
        if (!_0x1ca9c7) {
          return;
        }
        if (_0x1ca9c7.dataset.task === "car-query") {
          this.handleTask(_0x1ca9c7);
        } else {
          const {
            action: _0x3c9047,
            id: _0x5f1b44
          } = _0x1ca9c7.dataset;
          if (_0x3c9047 === "send") {
            this.sendCar(_0x5f1b44);
          } else {
            if (_0x3c9047 === "refresh") {
              this.refreshCar(_0x5f1b44);
            } else {
              if (_0x3c9047 === "claim" && !_0x1ca9c7.classList.contains("is-disabled")) {
                this.claimCar(_0x5f1b44);
              } else {
                if (_0x3c9047 === "claim") {
                  _0x14446a.showtip("赛车尚未到站，无法收取", "error");
                }
              }
            }
          }
        }
      });
      window.addEventListener("beforeunload", () => this.stopTimeRefresh());
    },
    async handleTask(_0x5cfad0) {
      const _0xe3e48 = _0x5cfad0.textContent;
      _0x5cfad0.disabled = true;
      _0x5cfad0.textContent = "查询中...";
      await this.queryClubCars();
      _0x5cfad0.disabled = false;
      _0x5cfad0.textContent = _0xe3e48;
    },
    isCarEventActive: () => {
      const _0xe1ea8b = new Date();
      return _0xe1ea8b.getDay() >= 1 && _0xe1ea8b.getDay() <= 3 && _0xe1ea8b.getHours() >= 6 && _0xe1ea8b.getHours() < 20;
    },
    parseRewards(_0xc07e67) {
      if (!_0xc07e67?.["length"]) {
        return [];
      }
      const _0x1a1287 = {
        "2_0": "金砖",
        "0_0": "金砖",
        "3_1001": "招募令",
        "3_1023": "彩玉",
        "3_1022": "白玉",
        "3_3201": "万能碎片",
        "3_35002": "刷新券"
      };
      const _0x4ba192 = {};
      _0xc07e67.forEach(_0x1a802e => {
        const _0x542273 = _0x1a1287[_0x1a802e.type + "_" + _0x1a802e.itemId];
        if (_0x542273) {
          _0x4ba192[_0x542273] = (_0x4ba192[_0x542273] || 0) + _0x1a802e.value;
        }
      });
      return Object.entries(_0x4ba192).map(([_0x1f241b, _0x3549ee]) => _0x1f241b + ":" + _0x3549ee);
    },
    getCarQualityText: _0x4b4ca1 => _0x3e36c1[_0x4b4ca1] || "未知",
    getCarQualityStyle: _0x460edf => (_0x2dc3c3[_0x460edf] || "") + ";font-weight:bold;",
    getCarStatus(_0x57ef6d) {
      const _0x253144 = {
        status: "待发车",
        statusClass: "status-pending"
      };
      if (!_0x57ef6d.sendAt) {
        return _0x253144;
      }
      const _0x2c6d27 = {
        "1": 2.5,
        "2": 2.5,
        "3": 2.5,
        "4": 3,
        "5": 4,
        "6": 4
      };
      const _0x2ad013 = (_0x2c6d27[_0x57ef6d.quality] || 0) * 3600000;
      const _0x24628e = {
        status: "未知状态",
        statusClass: "status-pending"
      };
      if (!_0x2ad013) {
        return _0x24628e;
      }
      const _0x1d1b42 = _0x57ef6d.sendAt * 1000 + _0x2ad013 - Date.now();
      if (_0x1d1b42 <= 0) {
        return {
          status: "已完成",
          statusClass: "status-completed"
        };
      }
      const _0x1ed5b9 = _0x3fb8a2 => _0x3fb8a2.toString().padStart(2, "0");
      return {
        status: "剩余 " + _0x1ed5b9(Math.floor(_0x1d1b42 / 3600000)) + ":" + _0x1ed5b9(Math.floor(_0x1d1b42 % 3600000 / 60000)) + ":" + _0x1ed5b9(Math.floor(_0x1d1b42 % 60000 / 1000)),
        statusClass: "status-running"
      };
    },
    startTimeRefresh() {
      this.stopTimeRefresh();
      this.state.timeInterval = setInterval(() => this.renderCarData(), 1000);
    },
    stopTimeRefresh() {
      if (this.state.timeInterval) {
        clearInterval(this.state.timeInterval);
      }
    },
    renderCarData() {
      const _0x536301 = this.state.fullCarData.length > 0;
      this.dom.dataTable.style.display = _0x536301 ? "table" : "none";
      if (!_0x536301) {
        this.stopTimeRefresh();
        return;
      }
      this.dom.dataBody.innerHTML = "";
      const _0x2f6bdb = [...this.state.fullCarData].sort((_0x2f80f4, _0x3dd709) => _0x2f80f4.slot - _0x3dd709.slot);
      const _0x2530a2 = new Set(["金砖:2000", "万能碎片:10", "招募令:12", "白玉:2000", "白玉:2500", "彩玉:5"]);
      const _0x474a7c = this.isCarEventActive();
      _0x2f6bdb.forEach(_0x293107 => {
        const _0x15e4e0 = this.getCarStatus(_0x293107);
        let _0x58b6c0 = "<div class=\"car-status " + _0x15e4e0.statusClass + "\">" + _0x15e4e0.status + "</div>";
        if (!_0x293107.sendAt) {
          const _0x40680a = 5 - _0x293107.refreshCount;
          _0x58b6c0 += _0x40680a > 0 ? "<div class=\"pity-counter\">再刷" + _0x40680a + "次出神话</div>" : "<div class=\"pity-counter mythic-guaranteed\">本次刷新必出神话</div>";
        }
        const _0x354916 = !_0x474a7c || this.state.sendCount >= 4;
        const _0x2cd989 = _0x15e4e0.statusClass === "status-completed";
        const _0x47f829 = !_0x293107.sendAt ? "<button class=\"car-action-btn\" data-action=\"refresh\" data-id=\"" + _0x293107.carId + "\">刷新</button><button class=\"car-action-btn send " + (_0x354916 ? "is-disabled" : "") + "\" data-action=\"send\" data-id=\"" + _0x293107.carId + "\">发车</button>" : "<button class=\"car-action-btn claim " + (_0x2cd989 ? "" : "is-disabled") + "\" data-action=\"claim\" data-id=\"" + _0x293107.carId + "\">收车</button>";
        const _0x3a11ba = this.dom.dataBody.insertRow();
        _0x3a11ba.innerHTML = "<td>" + (_0x293107.slot + 1) + "</td><td style=\"" + this.getCarQualityStyle(_0x293107.quality) + "\">" + this.getCarQualityText(_0x293107.quality) + "</td><td class=\"car-rewards\" title=\"" + _0x293107.rewards.join("，") + "\">" + (_0x293107.rewards.map(_0x3911db => _0x2530a2.has(_0x3911db) ? "<span style=\"color:#e53e3e;\">" + _0x3911db + "</span>" : "<span>" + _0x3911db + "</span>").join("<br>") || "暂无") + "</td><td>" + _0x58b6c0 + "</td><td>" + _0x47f829 + "</td>";
      });
      this.startTimeRefresh();
    },
    async queryClubCars() {
      this.dom.statusEl.textContent = "🔍 查询中...";
      try {
        const _0x288e9b = await _0x14446a.sendCommand("car_getrolecar");
        if (_0x288e9b?.["code"] !== 0) {
          throw new Error("Code: " + _0x288e9b?.["code"]);
        }
        const _0x5e21ac = (_0x3670b0, _0x380897) => _0x380897.split(".").reduce((_0x1b8318, _0x1f6cea) => _0x1b8318?.[_0x1f6cea], _0x3670b0);
        const _0x30843d = _0x5e21ac(_0x288e9b, "_rawData.body.roleCar") || _0x5e21ac(_0x288e9b, "data.body.roleCar") || _0x5e21ac(_0x288e9b, "_rawData.roleCar") || _0x5e21ac(_0x288e9b, "data.roleCar");
        const _0x42c107 = new Date().getDay() >= 1 && new Date().getDay() <= 3;
        this.state.sendCount = _0x42c107 ? _0x30843d?.["sendCnt"] || 0 : 0;
        const _0x15934d = _0x30843d?.["carDataMap"];
        this.state.fullCarData = _0x15934d && Object.keys(_0x15934d).length ? Object.entries(_0x15934d).map(([_0x5a77e5, _0x5e4b3a]) => ({
          id: _0x5a77e5,
          ..._0x5e4b3a,
          carId: _0x5a77e5,
          quality: _0x5e4b3a.color,
          rewards: this.parseRewards(_0x5e4b3a.rewards)
        })) : [];
        this.renderCarData();
        const _0xa1fedb = "今日已发车: " + this.state.sendCount + "/4" + (!this.isCarEventActive() ? " (非活动时间)" : "");
        this.dom.statusEl.textContent = "✅ " + _0xa1fedb;
      } catch (_0x38d7de) {
        _0x14446a.showtip("查询失败: " + _0x38d7de.message, "error");
        this.dom.statusEl.textContent = "❌ 查询出错";
      }
    },
    async sendCar(_0x191c8f) {
      if (!this.isCarEventActive()) {
        return _0x14446a.showtip("当前非活动时间 (周一至周三 6:00-20:00)", "error");
      }
      if (this.state.sendCount >= 4) {
        return _0x14446a.showtip("今日发车次数已用完", "error");
      }
      await this.performCarAction("send", _0x191c8f, "发送");
    },
    refreshCar: _0x57b123 => _0x55df70.performCarAction("refresh", _0x57b123, "刷新"),
    claimCar: _0x159126 => _0x55df70.performCarAction("claim", _0x159126, "收获"),
    async performCarAction(_0x4ac22b, _0x4a9047, _0x3736b8) {
      this.dom.statusEl.textContent = "🚀 " + _0x3736b8 + "中...";
      try {
        const _0x29e6b7 = {
          carId: _0x4a9047,
          helperId: 0,
          text: ""
        };
        const _0x3fba5e = {
          carId: _0x4a9047
        };
        const _0x39adb2 = await _0x14446a.sendCommand("car_" + _0x4ac22b, _0x4ac22b === "send" ? _0x29e6b7 : _0x3fba5e);
        if (_0x39adb2?.["code"] !== 0) {
          throw new Error(_0x39adb2?.["msg"] || "Code: " + _0x39adb2?.["code"]);
        }
        _0x14446a.showtip("赛车 " + _0x3736b8 + "成功", "success");
        this.dom.statusEl.textContent = "✅ " + _0x3736b8 + "成功";
        setTimeout(() => this.queryClubCars(), 500);
      } catch (_0x2b0b03) {
        _0x14446a.showtip(_0x3736b8 + "失败: " + _0x2b0b03.message, "error");
        this.dom.statusEl.textContent = "❌ " + _0x3736b8 + "出错";
      }
    }
  };
  _0x55df70.init();
  async function _0x2676f5(_0xfd0646, _0x40f1b5) {
    const _0x5a212a = _0x40f1b5.closest(".task-section").querySelector(".status");
    const _0x11632f = _0x40f1b5.textContent;
    const _0x88b4b7 = _0x259f67.querySelectorAll(".task-btn, input[type=\"checkbox\"]");
    _0x40f1b5.disabled = true;
    _0x40f1b5.textContent = "执行中...";
    _0x5a212a.textContent = "🚀 执行中...";
    _0xfd0646 === "execute-daily-checked" && _0x88b4b7.forEach(_0x5d62c1 => _0x5d62c1.disabled = true);
    try {
      const _0x1afabd = window.__require?.("data-index");
      const _0x30a0e6 = window.__require?.("ServerData");
      const _0x5315d0 = window.__require?.("TipsManager");
      if (_0xfd0646.startsWith("start-fishing-")) {
        const _0x1e1217 = parseInt(_0xfd0646.split("-")[2]);
        const _0x45ffb7 = parseInt(_0x40f1b5.parentElement.querySelector("input").value) || 0;
        const _0x49cdf5 = _0x1e1217 === 2 ? "高级钓鱼" : "普通钓鱼";
        if (_0x1e1217 === 1 && _0x45ffb7 > 0) {
          let _0x9d313f = 0;
          const _0x18c443 = Math.min(_0x45ffb7, 3);
          for (let _0xeb517 = 0; _0xeb517 < _0x18c443; _0xeb517++) {
            try {
              const _0x3a57ec = {
                lotteryNumber: 1,
                newFree: true,
                type: 1
              };
              await _0x1afabd.ArtifactService.lottery(_0x3a57ec);
            } catch (_0x5d3c1e) {
              console.log("单次钓鱼尝试失败（正常现象）");
            }
            _0x9d313f++;
            _0x5a212a.textContent = _0x49cdf5 + " " + _0x9d313f + "/" + _0x45ffb7;
            await _0x14446a.delay(0.2);
          }
          const _0x39c9e0 = _0x45ffb7 - _0x18c443;
          if (_0x39c9e0 > 0) {
            for (let _0x5c6246 = 0; _0x5c6246 < Math.ceil(_0x39c9e0 / 10); _0x5c6246++) {
              const _0xb77872 = Math.min(10, _0x39c9e0 - _0x5c6246 * 10);
              if (_0xb77872 <= 0) {
                break;
              }
              const _0x21ac2b = {
                lotteryNumber: _0xb77872,
                newFree: true,
                type: 1
              };
              await _0x1afabd.ArtifactService.lottery(_0x21ac2b);
              _0x9d313f += _0xb77872;
              _0x5a212a.textContent = _0x49cdf5 + " " + Math.min(_0x9d313f, _0x45ffb7) + "/" + _0x45ffb7;
            }
          }
        } else {
          if (_0x1e1217 === 2 && _0x45ffb7 > 0) {
            for (let _0x3d0703 = 0; _0x3d0703 < Math.ceil(_0x45ffb7 / 10); _0x3d0703++) {
              const _0x415af9 = Math.min(10, _0x45ffb7 - _0x3d0703 * 10);
              if (_0x415af9 <= 0) {
                break;
              }
              const _0x2885aa = {
                lotteryNumber: _0x415af9,
                newFree: true,
                type: 2
              };
              await _0x1afabd.ArtifactService.lottery(_0x2885aa);
              _0x5a212a.textContent = _0x49cdf5 + " " + Math.min((_0x3d0703 + 1) * 10, _0x45ffb7) + "/" + _0x45ffb7;
            }
          }
        }
        _0x5a212a.textContent = "✅ " + _0x49cdf5 + "完成";
      } else {
        if (_0xfd0646 === "recruit") {
          const _0x4239a9 = parseInt(_0x40f1b5.parentElement.querySelector("input").value);
          for (let _0x4c8854 = 0; _0x4c8854 < Math.ceil(_0x4239a9 / 10); _0x4c8854++) {
            const _0x5bc64e = Math.min(10, _0x4239a9 - _0x4c8854 * 10);
            if (_0x5bc64e <= 0) {
              break;
            }
            const _0x3af8b6 = {
              byClub: false,
              recruitNumber: _0x5bc64e,
              recruitType: 1
            };
            await _0x1afabd.HeroService.recruit(_0x3af8b6);
            _0x5a212a.textContent = "招募 " + Math.min((_0x4c8854 + 1) * 10, _0x4239a9) + "/" + _0x4239a9;
          }
          _0x5a212a.textContent = "✅ 招募完成";
        } else {
          if (_0xfd0646.startsWith("open-box-")) {
            const _0x137569 = parseInt(_0xfd0646.split("-")[2]);
            const _0x418ead = parseInt(_0x40f1b5.parentElement.querySelector("input").value);
            const _0x2a386f = {
              "2001": "木质",
              "2002": "青铜",
              "2003": "黄金",
              "2004": "铂金"
            };
            const _0x3c0edd = _0x2a386f[_0x137569];
            if (_0x418ead <= 0 || _0x418ead % 10 !== 0) {
              _0x14446a.showtip("宝箱数量必须是10的倍数", "error");
              _0x5a212a.textContent = "❌ 数量错误";
              return;
            }
            for (let _0x13f0bc = 0; _0x13f0bc < _0x418ead / 10; _0x13f0bc++) {
              const _0x1d90f7 = {
                itemId: _0x137569,
                number: 10
              };
              await _0x1afabd.ItemService.openBox(_0x1d90f7);
              _0x5a212a.textContent = "开启" + _0x3c0edd + " " + (_0x13f0bc + 1) * 10 + "/" + _0x418ead;
            }
            _0x5a212a.textContent = "✅ " + _0x3c0edd + "开启完成";
          } else {
            if (_0xfd0646 === "starUp" || _0xfd0646 === "bookUpgrade") {
              const _0x2b133f = _0xfd0646 === "starUp";
              const _0x49b429 = _0x2b133f ? _0x1afabd.HeroService : _0x1afabd.BookService;
              const _0x540ced = _0x2b133f ? "heroUpgradeStar" : "upgrade";
              const _0x292062 = _0x2b133f ? "武将升星" : "升级图鉴";
              let _0x311fba = 0;
              const _0x40b3eb = {
                length: 20
              };
              const _0x4ca93c = {
                length: 28
              };
              const _0x5bedda = {
                length: 14
              };
              const _0x1565fe = [...Array.from(_0x40b3eb, (_0x221ba0, _0x250ce0) => 101 + _0x250ce0), ...Array.from(_0x4ca93c, (_0x235b20, _0x328890) => 201 + _0x328890), ...Array.from(_0x5bedda, (_0x4985dc, _0x3bcb73) => 301 + _0x3bcb73)];
              for (const _0x48d7bf of _0x1565fe) {
                for (let _0x46d096 = 0; _0x46d096 < 5; _0x46d096++) {
                  try {
                    const _0x45e93e = {
                      heroId: _0x48d7bf
                    };
                    await _0x49b429[_0x540ced](_0x45e93e);
                    _0x311fba++;
                    _0x5a212a.textContent = _0x292062 + "完成 " + _0x311fba + " 次";
                  } catch (_0x2fb967) {
                    break;
                  }
                }
              }
              if (!_0x2b133f) {
                try {
                  await _0x1afabd.BookService.claimPointReward({});
                } catch (_0x16d971) {}
              }
              _0x5a212a.textContent = "✅ " + _0x292062 + "完成";
            } else {
              if (_0xfd0646 === "tower") {
                if (_0x30a0e6?.["ROLE"]?.["levelId"] <= 50) {
                  _0x5a212a.textContent = "❌ 等级不足";
                  return;
                }
                await _0x1afabd.TowerService.getInfo({});
                let _0xe5222b = 0;
                while (true) {
                  const _0xbb2a6 = _0x30a0e6?.["ROLE"];
                  if (!_0xbb2a6 || _0xbb2a6.tower.energy <= 0 || _0xbb2a6.tower.id >= 4500) {
                    break;
                  }
                  try {
                    _0xbb2a6.tower.id % 10 === 0 && !_0xbb2a6.tower.reward[_0xbb2a6.tower.id / 10] && (await _0x1afabd.TowerService.claimReward({
                      rewardId: _0xbb2a6.tower.id / 10
                    }));
                    _0x5315d0?.["SHOW_TIP"]("🧗 挑战第" + (Math.floor(_0xbb2a6.tower.id / 10) + 1) + "-" + ((_0xbb2a6.tower.id + 1) % 10 || 10) + "层 | 体力:" + _0xbb2a6.tower.energy + "\n");
                    await _0x1afabd.FightService.startTower({});
                    _0xe5222b++;
                    _0x5a212a.textContent = "已爬" + _0xe5222b + "层 | 体力:" + (_0xbb2a6.tower.energy - 1);
                  } catch (_0x1d8f70) {
                    _0x5315d0?.["SHOW_TIP"]("❌ 爬塔出错，3秒后重试\n");
                    await _0x14446a.delay(3);
                  }
                }
                _0x5a212a.textContent = "✅ 爬塔完成，共" + _0xe5222b + "层";
              } else {
                if (_0xfd0646 === "arena-start") {
                  const _0x2ccaf8 = parseInt(_0x40f1b5.parentElement.querySelector("input").value) || 3;
                  if (_0x2ccaf8 < 1 || _0x2ccaf8 > 99) {
                    _0x14446a.showtip("次数需在1-99之间", "error");
                    return;
                  }
                  _0x5a212a.textContent = "⚔️ 准备开始...";
                  let _0x35fe2b = 0;
                  for (let _0x531a80 = 1; _0x531a80 <= _0x2ccaf8; _0x531a80++) {
                    _0x5a212a.textContent = "⚔️ 正在进行 (" + _0x531a80 + "/" + _0x2ccaf8 + ")";
                    try {
                      const _0x179f0a = {
                        refresh: false
                      };
                      const _0xfdd1a9 = await _0x14446a.sendCommand("arena_getareatarget", _0x179f0a);
                      const _0x539b08 = _0xfdd1a9?.["_rawData"]?.["roleList"]?.[0]?.["roleId"];
                      if (!_0x539b08) {
                        throw new Error("未获取到目标ID");
                      }
                      const _0x363d78 = {
                        targetId: _0x539b08
                      };
                      await _0x14446a.sendCommand("fight_startareaarena", _0x363d78);
                      _0x35fe2b++;
                      _0x14446a.showtip("第" + _0x531a80 + "轮战斗成功", "success");
                    } catch (_0x281d8f) {
                      _0x14446a.showtip("第" + _0x531a80 + "轮战斗失败: " + _0x281d8f.message, "error");
                    }
                    if (_0x531a80 < _0x2ccaf8) {
                      await _0x14446a.delay(0.01);
                    }
                  }
                  _0x5a212a.textContent = "✅ 完成: 总" + _0x2ccaf8 + "轮, 成功" + _0x35fe2b + "轮";
                } else {
                  if (_0xfd0646 === "club-boss") {
                    const _0x2c05ae = parseInt(document.getElementById("club-boss-count").textContent);
                    if (_0x2c05ae <= 0) {
                      _0x5a212a.textContent = "ℹ️ 次数为0";
                      return;
                    }
                    for (let _0xf4debf = 1; _0xf4debf <= _0x2c05ae; _0xf4debf++) {
                      _0x5a212a.textContent = "⚔️ 挑战Boss (" + _0xf4debf + "/" + _0x2c05ae + ")";
                      await _0x1afabd.FightService.startLegionBoss({});
                      await _0x14446a.delay(0.5);
                    }
                    _0x5a212a.textContent = "✅ Boss挑战完成";
                  } else {
                    if (_0xfd0646 === "claim-activity") {
                      _0x5a212a.textContent = "🎁 领取每日奖励...";
                      for (const _0x5a41da of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
                        const _0x39b603 = {
                          taskId: _0x5a41da
                        };
                        await _0x1afabd.TaskService.claimDailyPoint(_0x39b603);
                        await _0x14446a.delay(0.1);
                      }
                      _0x5a212a.textContent = "🎁 领取每周奖励...";
                      const _0x183135 = {
                        rewardId: 0
                      };
                      await _0x1afabd.TaskService.claimDailyReward(_0x183135);
                      await _0x14446a.delay(0.1);
                      const _0x4ef89b = {
                        rewardId: 0
                      };
                      await _0x1afabd.TaskService.claimWeekReward(_0x4ef89b);
                      _0x5a212a.textContent = "✅ 活跃奖励领取完毕";
                    } else {
                      if (_0xfd0646.startsWith("daily-task-") || _0xfd0646 === "execute-daily-checked") {
                        const _0x2503d6 = _0xfd0646.startsWith("daily-task-") ? _0xfd0646 : null;
                        const _0x3595c9 = [];
                        const _0x555c7a = {
                          friendId: 0
                        };
                        const _0x121bd6 = {
                          category: 0
                        };
                        const _0x4eaa7c = {
                          "daily-task-hangup": {
                            func: async () => {
                              await _0x1afabd.SystemService.claimHangUpReward({});
                              for (let _0x2fe82c = 0; _0x2fe82c < 4; _0x2fe82c++) {
                                const _0x3bab92 = {
                                  isSkipShareCard: true,
                                  type: 2
                                };
                                await _0x1afabd.SystemService.myShareCallback(_0x3bab92);
                                await _0x14446a.delay(0.2);
                              }
                            },
                            label: "收菜、加钟"
                          },
                          "daily-task-bottle-renew": {
                            func: async () => {
                              const _0x24257b = {
                                bottleType: -1
                              };
                              await _0x1afabd.BottleHelperService.stop(_0x24257b);
                              await _0x14446a.delay(0.2);
                              const _0x220a74 = {
                                bottleType: -1
                              };
                              await _0x1afabd.BottleHelperService.start(_0x220a74);
                            },
                            label: "续罐子"
                          },
                          "daily-task-bottle-claim": {
                            func: () => _0x1afabd.BottleHelperService.claim({}),
                            label: "收盐罐"
                          },
                          "daily-task-friends": {
                            func: () => _0x1afabd.FriendService.batch(_0x555c7a),
                            label: "好友金币"
                          },
                          "daily-task-mail": {
                            func: () => _0x1afabd.MailService.claimAllAttachment(_0x121bd6),
                            label: "领取邮件"
                          },
                          "daily-task-club": {
                            func: () => _0x1afabd.LegionService.signIn({}),
                            label: "俱乐部签到"
                          },
                          "daily-task-boss": {
                            func: () => {
                              const _0x3fcb1b = _0x14446a.getFormatDate(Date.now()).getUTCDay();
                              const _0x3f89f2 = [9904, 9905, 9901, 9902, 9903, 9904, 9905][_0x3fcb1b];
                              const _0x3f26fe = {
                                bossId: _0x3f89f2
                              };
                              return _0x1afabd.FightService.startBoss(_0x3f26fe);
                            },
                            label: "每日咸王考验"
                          },
                          "daily-task-gold": {
                            func: async () => {
                              const _0x34dddf = {
                                buyNum: 1
                              };
                              await _0x1afabd.SystemService.buyGold(_0x34dddf);
                              await _0x14446a.delay(0.2);
                              const _0x12afe7 = {
                                buyNum: 1
                              };
                              await _0x1afabd.SystemService.buyGold(_0x12afe7);
                              await _0x14446a.delay(0.2);
                              const _0x5204f4 = {
                                buyNum: 1
                              };
                              await _0x1afabd.SystemService.buyGold(_0x5204f4);
                            },
                            label: "点金三次"
                          },
                          "daily-task-benefits": {
                            func: async () => {
                              await _0x1afabd.SystemService.signInReward({});
                              await _0x14446a.delay(0.2);
                              const _0x2690c6 = {
                                discountId: 1
                              };
                              await _0x1afabd.DiscountService.claimReward(_0x2690c6);
                              await _0x14446a.delay(0.2);
                              const _0x4dd931 = {
                                cardId: 1
                              };
                              await _0x1afabd.CardService.claimReward(_0x4dd931);
                              await _0x14446a.delay(0.2);
                              const _0x4ae11b = {
                                isSkipShareCard: false,
                                type: 1
                              };
                              await _0x1afabd.SystemService.myShareCallback(_0x4ae11b);
                            },
                            label: "领取每日福利"
                          },
                          "daily-task-quiz": {
                            func: async () => {
                              const _0xc36c9c = await _0x1afabd.StudyService.startGame({});
                              const _0x58efe0 = _0xc36c9c.getData();
                              const _0x3773e7 = _0x58efe0.questionList;
                              for (let _0x28f984 = 0; _0x28f984 < _0x3773e7.length; _0x28f984++) {
                                const _0x3e1d22 = _0x3773e7[_0x28f984];
                                let _0x3f5f1c = _0x7c20b3[_0x3e1d22.question] || Math.floor(2 * Math.random()) + 1;
                                const _0x5e6fc8 = {
                                  id: _0x58efe0.role.study.id,
                                  option: [_0x3f5f1c],
                                  questionId: [_0x3e1d22.id]
                                };
                                await _0x1afabd.StudyService.answer(_0x5e6fc8);
                                await _0x14446a.delay(1);
                              }
                              for (let _0x34a26c = 1; _0x34a26c <= 10; _0x34a26c++) {
                                const _0x5aee6b = {
                                  rewardId: _0x34a26c
                                };
                                await _0x1afabd.StudyService.claimReward(_0x5aee6b);
                                await _0x14446a.delay(0.2);
                              }
                            },
                            label: "自动答题"
                          },
                          "daily-task-genie-tickets": {
                            func: async () => {
                              for (let _0x396ec7 = 0; _0x396ec7 < 3; _0x396ec7++) {
                                await _0x14446a.sendCommand("genie_buysweep", {});
                                await _0x14446a.delay(0.2);
                              }
                            },
                            label: "领取扫荡券"
                          },
                          "daily-task-genie-sweep": {
                            func: async () => {
                              for (let _0x410521 = 1; _0x410521 <= 4; _0x410521++) {
                                const _0x542d9a = {
                                  genieId: _0x410521,
                                  sweepCnt: 1
                                };
                                await _0x14446a.sendCommand("genie_sweep", _0x542d9a);
                                await _0x14446a.delay(0.2);
                              }
                            },
                            label: "灯神扫荡"
                          }
                        };
                        if (_0x2503d6) {
                          if (_0x4eaa7c[_0x2503d6]) {
                            _0x3595c9.push(_0x4eaa7c[_0x2503d6]);
                          }
                        } else {
                          _0x259f67.querySelectorAll("input[type=\"checkbox\"]:checked").forEach(_0x1fff52 => {
                            const _0x48a90f = _0x1fff52.dataset.taskName;
                            if (_0x4eaa7c[_0x48a90f]) {
                              _0x3595c9.push(_0x4eaa7c[_0x48a90f]);
                            }
                          });
                        }
                        if (_0x3595c9.length === 0) {
                          _0x5a212a.textContent = "ℹ️ 没有勾选任务";
                          return;
                        }
                        for (let _0x48dd25 = 0; _0x48dd25 < _0x3595c9.length; _0x48dd25++) {
                          const _0x1e5a57 = _0x3595c9[_0x48dd25];
                          _0x5a212a.textContent = "🔄 (" + (_0x48dd25 + 1) + "/" + _0x3595c9.length + ") " + _0x1e5a57.label + "...";
                          try {
                            await _0x1e5a57.func();
                            await _0x14446a.delay(0.5);
                          } catch (_0x3427e1) {
                            console.log("任务 " + _0x1e5a57.label + " 失败 (可能已完成):", _0x3427e1);
                          }
                        }
                        _0x5a212a.textContent = "✅ " + (_0x2503d6 ? _0x4eaa7c[_0x2503d6].label : "勾选任务") + "执行完毕";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } catch (_0x3aa3ed) {
      console.error("任务执行错误:", _0x3aa3ed);
      _0x5a212a.textContent = "❌ 执行出错!";
    } finally {
      _0xfd0646 === "execute-daily-checked" && _0x88b4b7.forEach(_0x4088ba => _0x4088ba.disabled = false);
      _0x40f1b5.disabled = false;
      _0x40f1b5.textContent = _0x11632f;
    }
  }
  _0x45a1cf.addEventListener("click", _0x58178e => {
    const _0x202919 = _0x58178e.target.closest(".task-btn");
    _0x202919?.["dataset"]["task"] && _0x2676f5(_0x202919.dataset.task, _0x202919);
  });
  console.log("🎮 鲸鱼之王 (v" + _0x5bdfbf + ") 加载完成！");
})();