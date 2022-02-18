import MyTransition from "@theme/components/MyTransition.vue";
import TimeIcon from "@mr-hope/vuepress-plugin-components/lib/client/pageinfo/icons/TimeIcon.vue";
import { timelineMixin } from "@theme/mixins/timeline";
export default timelineMixin.extend({
    name: "TimelineList",
    components: { MyTransition, TimeIcon },
    computed: {
        hint() {
            return this.$themeLocaleConfig.blog.timeline;
        },
    },
    methods: {
        navigate(url) {
            void this.$router.push(url);
        },
    },
});
//# sourceMappingURL=TimelineList.js.map