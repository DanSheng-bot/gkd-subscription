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
          matches: '[vid="jump"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/10dd2d8b-e48a-4554-a748-c9e156b003d9',
          snapshotUrls: 'https://i.gkd.li/i/23294048',
        },
        {
          fastQuery: true,
          activityIds: 'com.jdd.newjdd.app.activity.SplashActivity',
          matchDelay: 1000,
          action: 'back',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '[vid="iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/557eefdd-fd75-4a93-8f68-6ae8f042270a',
          snapshotUrls: 'https://i.gkd.li/i/23294049',
        },
      ],
    },
  ],
});
