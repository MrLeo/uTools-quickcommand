import { newVarInputVal } from "js/composer/varInputValManager";
import { deviceName, userAgent, commonHeaders } from "js/options/httpOptions";

const tabConfig = {
  component: "OptionEditor",
  width: 12,
  options: {
    by: {
      component: "QSelect",
      width: 3,
      options: [
        { label: "当前标签页", value: "active" },
        { label: "通过URL", value: "url" },
        { label: "通过标题", value: "title" },
        { label: "通过ID", value: "id" },
      ],
    },
    searchValue: {
      component: "VariableInput",
      icon: "tab",
      width: 9,
      placeholder: "选择当前标签页留空，URL/标题/ID支持模糊匹配",
    },
  },
  defaultValue: {
    by: "active",
  },
};

export const browserCommands = {
  label: "浏览器控制",
  icon: "web",
  defaultOpened: false,
  commands: [
    {
      value: "quickcomposer.browser.startClient",
      label: "浏览器实例管理",
      icon: "launch",
      isAsync: true,
      config: [],
      subCommands: [
        {
          value: "quickcomposer.browser.startClient",
          label: "启动浏览器实例",
          icon: "launch",
          config: [
            {
              component: "OptionEditor",
              icon: "settings",
              width: 12,
              options: {
                browserType: {
                  component: "ButtonGroup",
                  defaultValue: "msedge",
                  options: [
                    { label: "Edge", value: "msedge" },
                    { label: "Chrome", value: "chrome" },
                  ],
                  width: 12,
                },
                useSingleUserDataDir: {
                  label: "使用独立用户数据目录",
                  component: "CheckButton",
                  width: 3,
                },
                headless: {
                  label: "无头模式",
                  component: "CheckButton",
                  width: 3,
                },
                incognito: {
                  label: "隐身模式",
                  component: "CheckButton",
                  width: 3,
                },
                disableExtensions: {
                  label: "禁用扩展",
                  component: "CheckButton",
                  width: 3,
                },
                windowSize: {
                  label: "窗口尺寸",
                  component: "VariableInput",
                  icon: "window",
                  width: 6,
                  placeholder: "如1920x1080，不设置则最大化",
                },
                proxy: {
                  label: "代理",
                  component: "VariableInput",
                  icon: "vpn_lock",
                  width: 6,
                  placeholder: "如 socks5://127.0.0.1:7890",
                },
                browserPath: {
                  label: "浏览器路径",
                  component: "VariableInput",
                  icon: "folder",
                  width: 12,
                  options: {
                    dialog: {
                      type: "open",
                      options: {
                        title: "选择浏览器",
                        properties: ["openFile"],
                      },
                    },
                  },
                  placeholder: "二进制绝对路径，留空则自动查找",
                },
              },
              defaultValue: {
                browserType: "msedge",
                useSingleUserDataDir: true,
                headless: false,
                incognito: false,
              },
            },
          ],
        },
        {
          value: "quickcomposer.browser.destroyClientByPort",
          label: "关闭浏览器实例",
          icon: "close",
          config: [
            {
              label: "浏览器实例端口",
              component: "NumberInput",
              icon: "label",
              width: 12,
              min: 9222,
              max: 9322,
              step: 1,
              placeholder: "留空关闭当前操控的实例",
            },
          ],
        },
        {
          value: "quickcomposer.browser.getClientPorts",
          label: "获取所有浏览器实例端口",
          icon: "list",
        },
        {
          value: "quickcomposer.browser.getCurrentClientPort",
          label: "获取当前操控的实例端口",
          icon: "label",
        },
        {
          value: "quickcomposer.browser.switchClientByPort",
          label: "切换要操控的实例",
          icon: "switch_account",
          config: [
            {
              label: "浏览器实例端口",
              component: "NumberInput",
              icon: "label",
              width: 12,
              defaultValue: 9222,
              min: 9222,
              max: 9322,
              step: 1,
            },
          ],
        },
      ],
    },
    {
      value: "quickcomposer.browser.getUrl",
      label: "获取/设置网址",
      icon: "link",
      isAsync: true,
      config: [tabConfig],
      subCommands: [
        {
          value: "quickcomposer.browser.getUrl",
          label: "获取当前地址",
          icon: "link",
        },
        {
          value: "quickcomposer.browser.setUrl",
          label: "设置当前地址",
          icon: "link",
          config: [
            {
              label: "网址",
              component: "VariableInput",
              icon: "link",
              width: 12,
              placeholder: "输入网址",
            },
          ],
        },
      ],
    },
    {
      value: "quickcomposer.browser.getTabs",
      label: "标签操作",
      icon: "tab",
      isAsync: true,
      subCommands: [
        {
          value: "quickcomposer.browser.getTabs",
          label: "获取标签列表",
          icon: "tab",
        },
        {
          value: "quickcomposer.browser.activateTab",
          label: "切换标签",
          icon: "tab_unselected",
          config: [tabConfig],
        },
        {
          value: "quickcomposer.browser.getCurrentTab",
          label: "获取当前标签页",
          icon: "tab",
        },
        {
          value: "quickcomposer.browser.createNewTab",
          label: "创建新标签页",
          icon: "tab",
          config: [
            {
              label: "网址",
              component: "VariableInput",
              icon: "link",
              width: 12,
              placeholder: "留空则打开about:blank",
            },
          ],
        },
        {
          value: "quickcomposer.browser.closeTab",
          label: "关闭标签页",
          icon: "tab",
          config: [tabConfig],
        },
      ],
    },
    {
      value: "quickcomposer.browser.captureScreenshot",
      label: "捕获截图",
      icon: "screenshot",
      isAsync: true,
      config: [
        tabConfig,
        {
          label: "选项",
          component: "OptionEditor",
          icon: "settings",
          width: 12,
          options: {
            quality: {
              label: "质量",
              component: "NumberInput",
              width: 2,
              min: 0,
              max: 100,
            },
            selector: {
              label: "指定元素（CSS选择器）",
              component: "VariableInput",
              icon: "code",
              width: 10,
              placeholder: "留空截取可视区域，截取整个页面可填body",
              options: {
                cssSelector: true,
              },
            },
            format: {
              label: "格式",
              component: "QSelect",
              width: 2,
              options: [
                { label: "PNG", value: "png" },
                { label: "JPEG", value: "jpeg" },
                { label: "WebP", value: "webp" },
              ],
            },
            savePath: {
              label: "保存路径",
              component: "VariableInput",
              icon: "folder",
              placeholder: "留空则不保存",
              width: 10,
              options: {
                dialog: {
                  type: "save",
                  options: {
                    title: "保存截图",
                    properties: ["saveFile"],
                  },
                },
              },
            },
          },
          defaultValue: {
            format: "png",
            quality: 100,
            fullPage: false,
          },
        },
      ],
    },
    {
      value: "quickcomposer.browser.executeScript",
      label: "执行脚本",
      icon: "code",
      isAsync: true,
      config: [
        tabConfig,
        {
          label: "脚本内容",
          component: "CodeEditor",
          language: "webjavascript",
          icon: "code",
          width: 12,
          placeholder: "输入JavaScript代码，使用return返回结果",
        },
        {
          topLabel: "要传递的参数",
          component: "DictEditor",
          icon: "data_array",
          width: 12,
        },
      ],
    },
    {
      value: "quickcomposer.browser.injectRemoteScript",
      label: "注入脚本/样式",
      icon: "style",
      isAsync: true,
      config: [tabConfig],
      subCommands: [
        {
          label: "注入CDN脚本",
          value: "quickcomposer.browser.injectRemoteScript",
          icon: "javascript",
          config: [
            {
              component: "VariableInput",
              icon: "link",
              width: 12,
              placeholder: "输入远程脚本URL",
            },
          ],
        },
        {
          label: "注入本地脚本",
          icon: "javascript",
          value: "quickcomposer.browser.injectLocalScript",
          config: [
            {
              component: "VariableInput",
              icon: "folder",
              width: 12,
              options: {
                dialog: {
                  type: "open",
                  options: {
                    title: "选择脚本",
                    filters: [
                      {
                        name: "JavaScript",
                        extensions: ["js"],
                      },
                      {
                        name: "all",
                        extensions: ["*"],
                      },
                    ],
                    properties: ["openFile"],
                  },
                },
              },
              placeholder: "输入本地脚本绝对路径",
            },
          ],
        },
        {
          label: "注入CSS",
          value: "quickcomposer.browser.injectCSS",
          icon: "style",
          config: [
            {
              component: "CodeEditor",
              language: "css",
              icon: "style",
              width: 12,
              placeholder: "输入CSS代码",
            },
          ],
        },
      ],
    },
    {
      value: "quickcomposer.browser.setCookie",
      label: "Cookie操作",
      icon: "cookie",
      isAsync: true,
      config: [tabConfig],
      subCommands: [
        {
          value: "quickcomposer.browser.setCookie",
          label: "设置Cookie",
          icon: "cookie",
          config: [
            {
              label: "Cookie",
              component: "ArrayEditor",
              icon: "cookie",
              width: 12,
              columns: {
                name: {
                  label: "名称",
                  defaultValue: newVarInputVal("str"),
                },
                value: {
                  label: "值",
                  defaultValue: newVarInputVal("str"),
                },
              },
            },
            {
              label: "选项",
              component: "OptionEditor",
              icon: "settings",
              width: 12,
              options: {
                expires: {
                  label: "过期时间",
                  component: "QSelect",
                  icon: "timer",
                  width: 6,
                  options: [
                    { label: "关闭浏览器失效", value: false },
                    { label: "1小时", value: 1 },
                    { label: "1天", value: 24 },
                    { label: "1年", value: 24 * 365 },
                  ],
                },
                path: {
                  label: "路径",
                  component: "VariableInput",
                  icon: "folder",
                  width: 6,
                },
                domain: {
                  label: "域名",
                  component: "VariableInput",
                  icon: "domain",
                  width: 6,
                },
                secure: {
                  label: "安全",
                  component: "CheckButton",
                  icon: "lock",
                  width: 6,
                },
              },
              defaultValue: {
                expires: false,
                path: newVarInputVal("str", "/"),
                domain: newVarInputVal("str", ""),
                secure: false,
              },
            },
          ],
        },
        {
          value: "quickcomposer.browser.getCookie",
          label: "获取Cookie",
          icon: "cookie",
          config: [
            {
              label: "名称",
              component: "VariableInput",
              icon: "label",
              width: 12,
              placeholder: "输入Cookie名称，留空则获取所有",
            },
          ],
        },
      ],
    },
    {
      value: "quickcomposer.browser.clickElement",
      label: "元素操作",
      icon: "web",
      isAsync: true,
      config: [
        tabConfig,
        {
          label: "选择器",
          component: "VariableInput",
          icon: "code",
          width: 12,
          placeholder: "输入CSS选择器",
          options: {
            cssSelector: true,
          },
        },
      ],
      subCommands: [
        {
          value: "quickcomposer.browser.clickElement",
          label: "点击元素",
          icon: "mouse",
        },
        {
          value: "quickcomposer.browser.inputText",
          label: "输入文本",
          icon: "edit",
          config: [
            {
              label: "文本内容",
              component: "VariableInput",
              icon: "edit",
              width: 12,
              placeholder: "输入要填写的文本",
            },
          ],
        },
        {
          value: "quickcomposer.browser.submitForm",
          label: "提交表单",
          icon: "send",
          config: [
            {
              topLabel: "上方填要点击的提交按钮，下方添加要操作的输入框",
              component: "ArrayEditor",
              width: 12,
              columns: {
                selector: {
                  label: "输入框选择器",
                  options: {
                    cssSelector: true,
                  },
                },
                value: {
                  label: "要填入的值",
                },
              },
              isCollapse: false,
            },
          ],
        },
        {
          value: "quickcomposer.browser.getText",
          label: "获取文本",
          icon: "text_fields",
        },
        {
          value: "quickcomposer.browser.getHtml",
          label: "获取HTML",
          icon: "code",
        },
        {
          value: "quickcomposer.browser.hideElement",
          label: "隐藏元素",
          icon: "visibility_off",
        },
        {
          value: "quickcomposer.browser.showElement",
          label: "显示元素",
          icon: "visibility",
        },
        {
          value: "quickcomposer.browser.scrollToElement",
          label: "滚动到元素",
          icon: "open_in_full",
        },
        {
          value: "quickcomposer.browser.waitForElement",
          label: "等待元素",
          icon: "hourglass_empty",
          config: [
            {
              label: "超时时间",
              component: "NumberInput",
              icon: "timer",
              width: 12,
              defaultValue: 5000,
              min: 1000,
              step: 1000,
            },
          ],
        },
      ],
    },
    {
      value: "quickcomposer.browser.scrollTo",
      label: "滚动及页面尺寸",
      icon: "open_in_full",
      isAsync: true,
      config: [tabConfig],
      subCommands: [
        {
          value: "quickcomposer.browser.scrollTo",
          label: "滚动到位置",
          icon: "open_in_full",
          config: [
            {
              label: "X坐标",
              component: "NumberInput",
              icon: "arrow_right",
              width: 12,
              defaultValue: 0,
            },
            {
              label: "Y坐标",
              component: "NumberInput",
              icon: "arrow_drop_down",
              width: 12,
              defaultValue: 0,
            },
          ],
        },
        {
          value: "quickcomposer.browser.getScrollPosition",
          label: "获取滚动位置",
          icon: "open_in_full",
        },
        {
          value: "quickcomposer.browser.getPageSize",
          label: "获取页面尺寸",
          icon: "open_in_full",
        },
      ],
    },
    {
      value: "quickcomposer.browser.network.setRequestInterception",
      label: "修改请求/响应",
      icon: "network",
      isAsync: true,
      isAsync: true,
      subCommands: [
        {
          value: "quickcomposer.browser.network.setRequestInterception",
          label: "修改请求",
          icon: "upload",
          config: [
            tabConfig,
            {
              topLabel: "拦截规则",
              isCollapse: false,
              component: "ArrayEditor",
              icon: "rule",
              columns: {
                url: {
                  label: "要拦截的URL",
                  defaultValue: newVarInputVal("str"),
                  placeholder: "支持正则，如.*\\.baidu\\.com",
                  width: 12,
                },
                headerKey: {
                  label: "要修改的请求头",
                  component: "VariableInput",
                  options: {
                    items: commonHeaders,
                  },
                  width: 6,
                },
                headerValue: {
                  label: "要修改的请求头值",
                  component: "VariableInput",
                  defaultValue: newVarInputVal("str"),
                  width: 6,
                },
                pattern: {
                  label: "要修改的请求内容（body及url参数）",
                  defaultValue: newVarInputVal("str"),
                  width: 6,
                  placeholder: "支持正则，如(role: )[guest|user]",
                },
                replacement: {
                  label: "替换内容",
                  defaultValue: newVarInputVal("str"),
                  width: 6,
                  placeholder: "支持替换符，如$1admin",
                },
                redirectUrl: {
                  label: "重定向到指定URL",
                  defaultValue: newVarInputVal("str"),
                  width: 12,
                },
              },
            },
          ],
        },
        {
          value: "quickcomposer.browser.network.setResponseInterception",
          label: "修改响应",
          icon: "download",
          config: [
            tabConfig,
            {
              topLabel: "拦截规则",
              isCollapse: false,
              component: "ArrayEditor",
              icon: "rule",
              width: 12,
              columns: {
                url: {
                  label: "要拦截的URL",
                  defaultValue: newVarInputVal("str"),
                  placeholder: "支持正则，如.*\\.baidu\\.com",
                  width: 9,
                },
                statusCode: {
                  label: "状态码",
                  component: "VariableInput",
                  defaultValue: 200,
                  options: {
                    items: [
                      { label: "200", value: 200 },
                      { label: "302", value: 302 },
                      { label: "401", value: 401 },
                      { label: "403", value: 403 },
                      { label: "404", value: 404 },
                      { label: "500", value: 500 },
                      { label: "502", value: 502 },
                      { label: "503", value: 503 },
                      { label: "504", value: 504 },
                    ],
                  },
                  defaultValue: newVarInputVal("var", ""),
                  width: 3,
                },
                pattern: {
                  label: "要修改的响应内容",
                  defaultValue: newVarInputVal("str"),
                  placeholder: "支持正则，如(role: )[guest|user]",
                  width: 6,
                },
                replacement: {
                  label: "替换内容",
                  defaultValue: newVarInputVal("str"),
                  placeholder: "支持替换符，如$1admin",
                  width: 6,
                },
              },
            },
          ],
        },
        {
          value: "quickcomposer.browser.network.clearInterception",
          label: "清除所有拦截规则",
          icon: "clear",
        },
      ],
    },
    {
      value: "quickcomposer.browser.device.setDevice",
      label: "设备模拟",
      icon: "devices",
      isAsync: true,
      config: [tabConfig],
      subCommands: [
        {
          value: "quickcomposer.browser.device.setDevice",
          label: "使用预设设备",
          icon: "smartphone",
          config: [
            {
              label: "设备",
              component: "QSelect",
              icon: "devices",
              width: 12,
              options: [
                ...deviceName,
                // 桌面设备
                { label: "Desktop", value: "Desktop" },
                { label: "MacBook Pro 16", value: "MacBook Pro 16" },
                { label: "4K Display", value: "4K Display" },
              ],
            },
          ],
        },
        {
          value: "quickcomposer.browser.device.setCustomDevice",
          label: "自定义设备",
          icon: "build",
          config: [
            {
              label: "设备配置",
              component: "OptionEditor",
              icon: "settings",
              width: 12,
              options: {
                width: {
                  label: "宽度",
                  component: "NumberInput",
                  width: 3,
                  defaultValue: 1920,
                  min: 0,
                },
                height: {
                  label: "高度",
                  component: "NumberInput",
                  width: 3,
                  defaultValue: 1080,
                  min: 0,
                },
                deviceScaleFactor: {
                  label: "设备像素比",
                  component: "NumberInput",
                  width: 3,
                  defaultValue: 1,
                  min: 1,
                  step: 0.1,
                },
                mobile: {
                  label: "移动设备",
                  component: "CheckButton",
                  width: 3,
                },
                hasTouch: {
                  label: "触摸屏",
                  component: "CheckButton",
                  width: 3,
                },
                isLandscape: {
                  label: "横屏",
                  component: "CheckButton",
                  width: 3,
                },
                userAgent: {
                  label: "User Agent",
                  component: "VariableInput",
                  icon: "code",
                  width: 6,
                  placeholder: "留空使用默认",
                  options: {
                    items: userAgent,
                  },
                },
              },
            },
          ],
        },
        {
          value: "quickcomposer.browser.device.clearDeviceEmulation",
          label: "清除设备模拟",
          icon: "clear",
        },
      ],
    },
  ],
};
