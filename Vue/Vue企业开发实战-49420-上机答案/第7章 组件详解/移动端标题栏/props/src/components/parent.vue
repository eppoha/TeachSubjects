<template>
    <div class="page">
        <my-header txt='书影音' :src1='search' :src2='chat'></my-header>
        <my-header txt='广播' :src1='user' :src2='search'></my-header>
        <my-header txt='小组' :src1='chat' :src2='user'></my-header>
    </div>
</template>

<script>
// 引入组件
import myHeader from "./child";

import searchpic from "../assets/search_icon.png";
import chatpic from "../assets/chat.png";
import settingspic from "../assets/settings.png";
import userpic from "../assets/search_user.png";

export default {
  data() {
    return {
      search: searchpic,
      chat: chatpic,
      settings: settingspic,
      user: userpic
    };
  },
  components: { myHeader }
};
</script>

<style scoped>
</style>
