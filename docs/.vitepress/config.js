
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "I'M VIM",
    description: "Vim Master Class - From Beginner to Pro",

    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-CN',
            title: "I'M VIM",
            description: "从入门到精通的 Vim 教程",
            themeConfig: {
                nav: [
                    { text: '首页', link: '/' },
                    { text: '基础教程', link: '/guide/introduction' },
                    { text: '进阶技巧', link: '/advanced/navigation' },
                ],
                sidebar: [
                    {
                        text: '入门指南',
                        items: [
                            { text: '为什么选择 Vim', link: '/guide/introduction' },
                            { text: '安装与初识', link: '/guide/installation' },
                            { text: '四个模式', link: '/guide/modes' }
                        ]
                    },
                    {
                        text: '进阶修炼',
                        items: [
                            { text: '高效移动', link: '/advanced/navigation' },
                            { text: '文本编辑魔法', link: '/advanced/editing' },
                            { text: '寄存器与宏', link: '/advanced/registers' }
                        ]
                    }
                ],
                docFooter: { prev: '上一页', next: '下一页' },
                lastUpdatedText: '最近更新时间',
            }
        },
        en: {
            label: 'English',
            lang: 'en-US',
            link: '/en/',
            title: "I'M VIM",
            description: "Vim Master Class - From Beginner to Pro",
            themeConfig: {
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Guide', link: '/en/guide/introduction' },
                    { text: 'Advanced', link: '/en/advanced/navigation' },
                ],
                sidebar: [
                    {
                        text: 'Getting Started',
                        items: [
                            { text: 'Why Vim', link: '/en/guide/introduction' },
                            { text: 'Installation', link: '/en/guide/installation' },
                            { text: 'Four Modes', link: '/en/guide/modes' }
                        ]
                    },
                    {
                        text: 'Advanced Skills',
                        items: [
                            { text: 'Efficient Navigation', link: '/en/advanced/navigation' },
                            { text: 'Editing Magic', link: '/en/advanced/editing' },
                            { text: 'Registers & Macros', link: '/en/advanced/registers' }
                        ]
                    }
                ]
            }
        }
    },

    themeConfig: {
        logo: '/logo.png',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/samuncleorange/vim-tutorial' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026-present I\'M VIM'
        }
    }
})
