'use strict';
module.exports = {
  typePrefix: '[', typeSuffix: ']',
  types: [
    {
      value: '添加软件',
      name : '添加软件:软件'
    },
    {
      value: '修改',
      name : '修改:修改文件'
    },
    {
      value: '文档',
      name : '文档:文档变更'
    },
    {
      value: '修复',
      name : '修复:修复'
    },
    {
      value: '添加',
      name : '添加:添加文件'
    },
    {
      value: '测试',
      name : '测试:测试'
    },
    {
      value: '移除',
      name : '移除:移除'
    },
    {
      value: '回退',
      name : '回退:回退'
    }
  ],
  messages: {
      type: '选择您要提交的更改类型',
      scope: '表示此更改的范围(可选):',
      // used if allowCustomScopes is true
      customScope: '来自Redmine的任务ID.如果不在RM中,请使用Gitlab问题ID.:\n',
      subject: '撰写简短,即时的变更描述:\n',
      body: '提供更改的较长描述(可选).使用“|”换行:\n',
      footer: '列出此更改关闭的所有问题(可选).例如:＃31,＃34:\n',
      confirmCommit: '您确定要继续上面的提交吗?'
  },
  scopes: [],
  scopeOverrides: {
    修复: [
        {name: '来源配置'},
        {name: '应用配置'},
        {name: '问题'},
        {name: 'Bug'}
      ],
    添加: [
      {name: '软件'},
      {name: '文件'},
      {name: '文件&软件'}
    ]
  },
  allowCustomScopes: true,
  //问题修改的类型,比如添加新功能,修复bug
  allowBreakingChanges: ['添加软件', '修改', '文档', '修复', '添加', '移除','测试']
  //需要跳过问题的选项
  //skipQuestions: [],
};
