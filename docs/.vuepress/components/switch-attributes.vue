<template>
  <div class="base">
    <section>
      <h2>Attributes</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th class="des">说明</th>
              <th class="type">类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in table" :key="index">
              <th>{{item.param}}</th>
              <th class="des">{{item.des}}</th>
              <th class="type">{{item.type}}</th>
              <td>{{item.choice}}</td>
              <td>{{item.def}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      table: [
        {
          param: "value/v-model",
          des: "绑定值",
          type: "boolean/string/number",
          choice: "-",
          def: "-"
        },
        {
          param: "width",
          des: "switch 的宽度(px)",
          type: "number",
          choice: "-",
          def: "40px"
        },
        {
          param: "true-text",
          des: "value 为 true 时文字描述",
          type: "boolean",
          choice: "-",
          def: "false"
        },
         {
          param: "false-text",
          des: "value 为 false 时文字描述",
          type: "boolean",
          choice: "-",
          def: "false"
        },
         {
          param: "true-text",
          des: "value 为 true 时文字描述",
          type: "boolean",
          choice: "-",
          def: "false"
        },
         {
          param: "false-text",
          des: "value 为 false 时文字描述",
          type: "boolean",
          choice: "-",
          def: "false"
        },
        {
          param: "disabled",
          des: "是否禁用",
          type: "boolean",
          choice: "-",
          def: "false"
        }
      ]
    };
  }
};
</script>
