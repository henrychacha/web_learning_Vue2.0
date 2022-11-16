<template>
    <div style="width:500px;border:1px solid #ccc">
        <p>{{totle}}</p>
    </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
    computed: {
        ...mapGetters(["totle"])
    },
}
</script>