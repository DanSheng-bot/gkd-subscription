import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdd.newjdd.app',
  name: '匠多多师傅版',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches: ['[text*="跳过"]'],
          snapshotUrls: ['https://i.gkd.li/i/30869697'],
        },
      ],
    },
  ],
});
