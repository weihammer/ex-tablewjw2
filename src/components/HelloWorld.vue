<template>
  <div>
    <h1>EXAMPLE</h1>
    <ex-table
    class="exTable"
      :data="tableData"
      style="width: 100%; margin: 0 auto"
      border
    >
      <ex-table-column  align="center" type="selection"/>
      <ex-table-column
        align="center"
        v-for="column in tableColumns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
      />
      <ex-table-column
        label="操作"
        align="center"
        width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick()" >changeData</el-button>
        </template>
      </ex-table-column>
    </ex-table>
    <br/>
    <br/>
    <h1>DEFSULT</h1>
    <el-table
      :data="tableData"
      style="width: 100%; margin: 0 auto"
      border
    >
      <el-table-column align="center" type="selection"/>
      <el-table-column
        align="center"
        v-for="column in tableColumns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
      />
    <el-table-column
       label="操作"
      align="center"
      width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick()" >changeData</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
var tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address:
      '11111111111111No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles 阿凡达大阿斯顿 ',
    address2: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
    phoneNumber: '+86 13888888888',
    remark: '表格宽度不换行自适应展示'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
    address2: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
    phoneNumber: '+86 13888888888',
    remark: '表格宽度不换行自适应展示'
  }
]

export default {
  name: 'SimpleUse',
  components: {},

  data() {
    return {
      id: 2,
      tableColumns: [
        {
          prop: 'date',
          label: 'date'
        },
        {
          prop: 'name',
          label: 'name'
        },
        {
          prop: 'address',
          label: 'address'
        },
        {
          prop: 'address2',
          label: 'address2'
        },
        {
          prop: 'phoneNumber',
          label: 'phoneNumber'
        },
        {
          prop: 'remark',
          label: 'remark'
        }
      ],
      tableData: tableData
    }
  },
  methods: {
    handleClick(){
      this.tableData[0].name += 1
    }
  },
}
</script>
