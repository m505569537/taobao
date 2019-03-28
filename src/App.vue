<template>
    <div class="container">
        <!-- Header -->
        <mt-header fixed title="固定在顶部"></mt-header>

        <!-- body -->
        <h1>123</h1>

        <!-- footer -->
        <ul class="footer">
            <li><a href=""><img src="" alt="1"></a></li>
            <li><a href=""><img src="" alt="2"></a></li>
            <li><a href=""><img src="" alt="3"></a></li>
            <li><a href=""><img src="" alt="4"></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .container {
        padding: 0px;
        margin: 0px;
        padding-top: 40px;

        .footer {
            position:fixed;
            bottom: 0;
            width: 100%;
            margin-bottom: 0;
            padding-left: 0;
            li {
                list-style-type: none;
                float: left;
                width: 25%;
                text-align: center
            }
        }
    }
</style>
