import { defineAsyncComponent } from "vue";

// 模拟操作组件
export const KeyEditor = defineAsyncComponent(() =>
  import("src/components/composer/simulate/KeyEditor.vue")
);
export const ImageSearchEditor = defineAsyncComponent(() =>
  import("components/composer/simulate/ImageSearchEditor.vue")
);
export const KeySequenceEditor = defineAsyncComponent(() =>
  import("src/components/composer/simulate/KeySequenceEditor.vue")
);

// 控制流组件
export const ConditionalJudgment = defineAsyncComponent(() =>
  import("components/composer/control/ConditionalJudgment.vue")
);
export const LoopControl = defineAsyncComponent(() =>
  import("components/composer/control/LoopControl.vue")
);
export const ForEachControl = defineAsyncComponent(() =>
  import("components/composer/control/ForEachControl.vue")
);
export const ForInControl = defineAsyncComponent(() =>
  import("components/composer/control/ForInControl.vue")
);
export const WhileControl = defineAsyncComponent(() =>
  import("components/composer/control/WhileControl.vue")
);
export const SwitchControl = defineAsyncComponent(() =>
  import("components/composer/control/SwitchControl.vue")
);
export const TryCatchControl = defineAsyncComponent(() =>
  import("components/composer/control/TryCatchControl.vue")
);

// 网络组件
export const UBrowserEditor = defineAsyncComponent(() =>
  import("components/composer/ubrowser/UBrowserEditor.vue")
);
export const AxiosConfigEditor = defineAsyncComponent(() =>
  import("src/components/composer/network/AxiosConfigEditor.vue")
);

// 数据组件
export const RegexEditor = defineAsyncComponent(() =>
  import("components/composer/data/regex/RegexEditor.vue")
);

export const ZlibEditor = defineAsyncComponent(() =>
  import("src/components/composer/data/ZlibEditor.vue")
);

// 加密组件
export const SymmetricCryptoEditor = defineAsyncComponent(() =>
  import("src/components/composer/coding/SymmetricCryptoEditor.vue")
);
export const AsymmetricCryptoEditor = defineAsyncComponent(() =>
  import("src/components/composer/coding/AsymmetricCryptoEditor.vue")
);

// 文件组件
export const FileOperationEditor = defineAsyncComponent(() =>
  import("components/composer/file/FileOperationEditor.vue")
);

// 系统组件
export const SystemCommandEditor = defineAsyncComponent(() =>
  import("components/composer/system/SystemCommandEditor.vue")
);

// UI组件
export const SelectListEditor = defineAsyncComponent(() =>
  import("components/composer/ui/SelectListEditor.vue")
);
