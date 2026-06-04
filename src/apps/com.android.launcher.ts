import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.launcher',
  name: '桌面',
  groups: [
    {
      key: 1,
      name: '功能类-取消添加微件弹窗',
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          key: 1,
          name: '点击取消按钮',
          // 核心修正：使用 GKD 官方支持的标准 << 操作符，并在前后加上空格
          matches:
            '[id="com.android.launcher:id/alertTitle"][text="添加至桌面"] << [id="com.android.launcher:id/rootView"] > [id="android:id/button2"][text="取消"]',
        },
      ],
    },
  ],
});
