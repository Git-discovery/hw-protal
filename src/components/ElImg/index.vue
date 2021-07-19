<script lang="tsx">
import Vue, { CreateElement, RenderContext } from 'vue';

export default Vue.extend({
  name: 'ElImg',
  functional: true,
  render(h:CreateElement, context: RenderContext) {
    console.log(context.props);
    return h('el-image', {
      props: {
        src: context.props.src,
        alt: context.props.alt,
      },
    });
  },
});
</script>

<style scoped>

</style>
