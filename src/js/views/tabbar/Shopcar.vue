<template>
    <div>
        <ShopRecord v-for="(item, index) in reocrds" :key="index"></ShopRecord>
    </div>
</template>

<script>
import ShopRecord from '../shopcarinfo/ShopRecord.vue'
export default {
    data() {
        return {
            reocrds: []
        }
    },
    components: {
        ShopRecord
    }
}
</script>

<style lang="less" scoped>

</style>
