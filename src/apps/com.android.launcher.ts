import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.launcher',
  name: '桌面',
  groups: [
    {
      key: 1,
      name: '功能类-取消添加微件弹窗',
      // 开启规则
      enable: false,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.android.launcher.Launcher',
          matches: [
            '[id="com.android.launcher:id/alertTitle"][text="添加至桌面"]',
            '[id="android:id/button2"][text="取消"]',
          ],
        },
      ],
    },
  ],
});
