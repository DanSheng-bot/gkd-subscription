import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oplus.appdetail',
  name: 'OPPO/一加应用安装器',
  groups: [
    {
      key: 1,
      name: '功能类-关闭安装增强防护',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '点击[取消]',
          activityIds: ['.model.finish.InstallFinishActivity'],
          matches: '[text="取消"]',
          snapshotUrls: ['https://i.gkd.li/i/31070113'],
        },
      ],
    },
  ],
});
