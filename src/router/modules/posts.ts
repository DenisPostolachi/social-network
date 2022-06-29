const meta = {
    module: "posts"
};


export default [
    {
        path: `/posts`,
        name: "posts",
        component: () =>
            import(
                /* webpackChunkName: "cities" */ "@/modules/posts/views/index.vue"
                ),
    },
];

