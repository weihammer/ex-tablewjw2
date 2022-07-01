<!--
 * @Descripttion:
 * @Author: voanit
 * @Date: 2022-06-27 10:00:56
 * @LastEditors: voanit
 * @LastEditTime: 2022-06-30 14:12:48
-->
<template>
  <el-table
    ref="exMultipleTable"
    :data="data"
    v-bind="$attrs"
    class="exTable"
    v-on="$listeners"
  >
    <slot />
  </el-table>
</template>

<script>
export default {
  name: 'ExTable',
  props: {
    copyClass: {
      type: String,
      default: 'exTableCopyClass'
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      lastCell: '',
      selectionRow: [],
      CtrlDown: false,
      shiftOrAltDown: false
    }
  },
  watch: {
    data: {
      handler() {
        this.broadCast('ExTableColumn', '$forceUpdate')
      },
      deep: true
    }
  },
  methods: {
    broadCast(name, event) {
      const broadcast = (children) => {
        children.forEach(child => {
          if (child.$options.name === name) {
            child[event]()
          }
          if (child.$children) {
            broadcast(child.$children)
          }
        })
      }
      broadcast(this.$children)
    },
    clearSelection() {
      this.$refs.exMultipleTable.clearSelection()
    },
    toggleRowSelection(...params) {
      this.$refs.exMultipleTable.toggleRowSelection(...params)
    },
    toggleAllSelection(...params) {
      this.$refs.exMultipleTable.toggleAllSelection(...params)
    },
    toggleRowExpansion(...params) {
      this.$refs.exMultipleTable.toggleAllSelection(...params)
    },
    setCurrentRow(...params) {
      this.$refs.exMultipleTable.setCurrentRow(...params)
    },
    clearSort(...params) {
      this.$refs.exMultipleTable.clearSort(...params)
    },
    clearFilter(...params) {
      this.$refs.exMultipleTable.clearFilter(...params)
    },
    doLayout(...params) {
      this.$refs.exMultipleTable.doLayout(...params)
    },
    sort(...params) {
      this.$refs.exMultipleTable.sort(...params)
    }
  }
}
</script>

<style>
.exTableCopyClass {
  background: #409EFF !important;
  color: #fff !important
}

.exTable .cell,
.exTable th > .cell {
  white-space: nowrap !important;
  width: fit-content;
  text-align: center;
   display: inline-block;
}

.exTable tr th.el-table__cell>.cell {
  width: auto;
}

.exTable th > .cell {
  display: inline-block
}
</style>
