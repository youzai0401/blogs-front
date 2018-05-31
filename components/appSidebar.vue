<template>
    <div class="sidebar-content">
        <div class="sidebar-personal-intro">
            <img class="avatar" src="../static/avatar.jpg" alt="">
            <p>825142777@qq.com</p>
            <p><a href="https://github.com/youzai0401">https://github.com/youzai0401</a></p>
        </div>
        <p class="split-line"></p>
        <div class="sidebar-menu">
            <nuxt-link to="/"><p><i class="iconfont icon-home"></i>首页</p></nuxt-link>
            <nuxt-link to="/category"><p><i class="iconfont icon-category"></i>分类</p></nuxt-link>
            <nuxt-link to="/tag"><p><i class="iconfont icon-tag"></i>标签</p></nuxt-link>
            <nuxt-link to="/about-me"><p><i class="iconfont icon-aboutus"></i>关于我</p></nuxt-link>
            <nuxt-link to="/other"><p><i class="iconfont icon-others"></i>其他</p></nuxt-link>
        </div>
    </div>
</template>
<script>
    import server from '../api/tag/index';

    export default {
        data() {
            return {
                list: [1, 2, 3]
            };
        },
        async asyncData(context) {
            // called every time before loading the component
//            console.log(1111111111111111111111);
            const res = await server.tagList();
//            console.log(res.data);
            return {name: 'World', res: res.data};
        },
        mounted() {
            // wer
        },
        fetch() {
            // The fetch method is used to fill the store before rendering the page
            // vuex填充数据状态，管理数据用
        }
    };
</script>
<style scoped lang="less" type="text/less">
    .sidebar-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
        background-color: #ffffff;
        border-radius: 4px;
        .sidebar-personal-intro {
            text-align: center;
            .avatar {
                display: inline-block;
                margin-top: 30px;
                width: 80px;
                border-radius: 50%;
                cursor: pointer;
            }
            p {
                color: #586069;
                font-size: 12px;
                a {
                    color: #47494e;
                    text-decoration: none;
                }
            }
        }
        .split-line {
            width: 80%;
            border-bottom: 1px solid #eee;
            margin: 20px auto 0 auto;
        }
        .sidebar-menu {
            /*padding: 1px 0;*/
            a {
                display: block;
                color: #47494e;
                text-decoration: none;
                /*text-align: center;*/
                position: relative;
                font-size: 14px;
                color: #47494e;
                padding: 10px 20px 10px 80px;
                &:hover {
                    background-color: hsla(0,0%,85%,.1);
                }
            }
            .iconfont {
                position: absolute;
                left: 50px;
            }
        }
    }
</style>
