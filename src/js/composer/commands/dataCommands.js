export const dataCommands = {
  label: "数据处理",
  icon: "format_color_text",
  defaultOpened: false,
  commands: [
    {
      value: "quickcomposer.data.base64Encode",
      label: "编解码",
      desc: "文本编解码",
      icon: "code",
      outputVariable: "processedText",
      saveOutput: true,
      config: [
        {
          label: "要编解码的文本",
          icon: "text_fields",
          type: "varInput",
        },
      ],
      functionSelector: [
        {
          label: "Base64编码",
          value: "quickcomposer.data.base64Encode",
          icon: "title",
        },
        {
          label: "Base64解码",
          value: "quickcomposer.data.base64Decode",
          icon: "title",
        },
        {
          label: "十六进制编码",
          value: "quickcomposer.data.hexEncode",
          icon: "code",
        },
        {
          label: "十六进制解码",
          value: "quickcomposer.data.hexDecode",
          icon: "code",
        },
        {
          label: "URL编码",
          value: "quickcomposer.data.urlEncode",
          icon: "link",
        },
        {
          label: "URL解码",
          value: "quickcomposer.data.urlDecode",
          icon: "link",
        },
        {
          label: "HTML编码",
          value: "quickcomposer.data.htmlEncode",
          icon: "html",
        },
        {
          label: "HTML解码",
          value: "quickcomposer.data.htmlDecode",
          icon: "html",
        },
      ],
    },
    {
      value: "quickcomposer.data.symmetricCrypto",
      label: "对称加解密",
      component: "SymmetricCryptoEditor",
      outputVariable: "processedText",
      saveOutput: true,
    },
    {
      value: "quickcomposer.data.asymmetricCrypto",
      label: "非对称加解密",
      component: "AsymmetricCryptoEditor",
      outputVariable: "processedText",
      saveOutput: true,
    },
    {
      value: "quickcomposer.data.md5Hash",
      label: "哈希计算",
      desc: "计算文本的哈希值",
      icon: "enhanced_encryption",
      outputVariable: "hashValue",
      saveOutput: true,
      config: [
        {
          label: "要计算哈希的文本",
          icon: "text_fields",
          type: "varInput",
        },
      ],
      functionSelector: [
        {
          label: "MD5",
          value: "quickcomposer.data.md5Hash",
          icon: "functions",
        },
        {
          label: "SHA1",
          value: "quickcomposer.data.sha1Hash",
          icon: "functions",
        },
        {
          label: "SHA256",
          value: "quickcomposer.data.sha256Hash",
          icon: "functions",
        },
        {
          label: "SHA512",
          value: "quickcomposer.data.sha512Hash",
          icon: "functions",
        },
        {
          label: "SM3",
          value: "quickcomposer.data.sm3Hash",
          icon: "functions",
        },
      ],
    },
    {
      value: "Math.sin",
      label: "数学计算",
      desc: "数学函数计算",
      icon: "calculate",
      outputVariable: "calculatedText",
      saveOutput: true,
      config: [
        {
          label: "要计算的数值",
          icon: "numbers",
          type: "numInput",
        },
      ],
      functionSelector: [
        {
          label: "正弦(sin)",
          value: "Math.sin",
          icon: "functions",
        },
        {
          label: "余弦(cos)",
          value: "Math.cos",
          icon: "functions",
        },
        {
          label: "正切(tan)",
          value: "Math.tan",
          icon: "functions",
        },
        {
          label: "反正弦(asin)",
          value: "Math.asin",
          icon: "functions",
        },
        {
          label: "反余弦(acos)",
          value: "Math.acos",
          icon: "functions",
        },
        {
          label: "反正切(atan)",
          value: "Math.atan",
          icon: "functions",
        },
        {
          label: "平方根(sqrt)",
          value: "Math.sqrt",
          icon: "functions",
        },
        {
          label: "自然对数(ln)",
          value: "Math.log",
          icon: "functions",
        },
        {
          label: "10对数(log10)",
          value: "Math.log10",
          icon: "functions",
        },
        {
          label: "绝对值(abs)",
          value: "Math.abs",
          icon: "functions",
        },
        {
          label: "向上取整(ceil)",
          value: "Math.ceil",
          icon: "functions",
        },
        {
          label: "向下取整(floor)",
          value: "Math.floor",
          icon: "functions",
        },
        {
          label: "四舍五入(round)",
          value: "Math.round",
          icon: "functions",
        },
        {
          label: "幂运算(pow)",
          value: "Math.pow",
          icon: "functions",
        },
      ],
    },
    {
      value: "quickcomposer.data.random",
      label: "随机数",
      config: [
        {
          label: "整数",
          type: "switch",
          defaultValue: false,
          width: 2,
        },
        {
          label: "起始值",
          icon: "last_page",
          type: "numInput",
          width: 5,
        },
        {
          label: "结束值",
          icon: "first_page",
          type: "numInput",
          width: 5,
        },
      ],
      outputVariable: "randomNumber",
      saveOutput: true,
    },
    {
      value: "quickcomposer.data.reverseString",
      label: "字符串反转",
      config: [
        {
          key: "text",
          label: "要反转的文本",
          type: "varInput",
          icon: "swap_horiz",
        },
      ],
      outputVariable: "reversedText",
      saveOutput: true,
    },
    {
      value: "quickcomposer.data.replaceString",
      label: "字符串替换",
      config: [
        {
          key: "text",
          label: "原始文本",
          type: "varInput",
          icon: "text_fields",
          width: 4,
        },
        {
          key: "oldStr",
          label: "要替换的文本",
          type: "varInput",
          icon: "find_replace",
          width: 4,
        },
        {
          key: "newStr",
          label: "替换为",
          type: "varInput",
          icon: "text_fields",
          width: 4,
        },
      ],
      outputVariable: "replacedText",
      saveOutput: true,
    },
    {
      value: "quickcomposer.data.substring",
      label: "字符串截取",
      config: [
        {
          key: "text",
          label: "原始文本",
          type: "varInput",
          icon: "text_fields",
          width: 6,
        },
        {
          key: "start",
          label: "起始位置",
          type: "numInput",
          icon: "first_page",
          width: 3,
        },
        {
          key: "end",
          label: "结束位置",
          type: "numInput",
          icon: "last_page",
          width: 3,
        },
      ],
      outputVariable: "substringText",
      saveOutput: true,
    },
    {
      value: "quickcomposer.data.regexTransform",
      label: "正则提取/替换",
      component: "RegexEditor",
      componentProps: {
        inputLabel: "要处理的文本",
      },
      outputVariable: "processedText",
      saveOutput: true,
    },
    {
      value: "quickcomposer.data.buffer",
      label: "Buffer操作",
      desc: "Buffer创建、转换和操作",
      component: "BufferEditor",
      icon: "memory",
    },
    {
      value: "quickcomposer.data.zlib",
      label: "数据压缩解压",
      desc: "使用 zlib 进行数据压缩和解压",
      component: "ZlibEditor",
      icon: "compress",
      isAsync: true,
    },
  ],
};
