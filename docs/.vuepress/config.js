module.exports = {
    base: '/option/',
    dest: 'dist',
    title: '期权',
    description: '期权指南',
    themeConfig: {
        displayAllHeaders: false,
        editLinks: false,
        docsDir: 'docs',
        // header组件的菜单栏配置
        nav: [
            {
                text: 'GitHub',
                link: 'https://github.com/jsliweijun/option'
            }
        ],
        // 左侧菜单栏配置
        sidebar: [
            {
                title: '期权知识',
                collapsable: false,
                children: ['c01/s01-option']
            }
        ]
    }
};
