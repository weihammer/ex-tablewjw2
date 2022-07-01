
import ElementUI from 'element-ui'
import {parseMinWidth} from 'element-ui/packages/table/src/util.js'
function max (list) {
  return Math.max.apply(null, list.filter(item => !isNaN(item)))
}

function map (list, fn) {
  return Array.prototype.map.call(list, fn)
}

function isEmpty (item) {
  return item.length === 0
}
let {TableColumn} = ElementUI
export default {
  name: 'ExTableColumn',
  extends: TableColumn, // 指定继承组件
  props: {
    fitByClass: {
      type: String,
      default: 'cell'
    },
    autoFit: {
      type: Boolean,
      default: true
    },
    fitGap: {
      type: Number,
      default: 0
    }

  },
  data () {
    return {
      autoWidth: 0,
      do: false

    }
  },
  computed: {
    realMinWidth () {
      if (this.autoFit) {
        return parseMinWidth(max([this.minWidth, this.autoWidth]))
      }
      return TableColumn.computed.realMinWidth.call(this)
    }
  },

  methods: {
    updateAutoWidth () {
      if (!this.autoFit) return
      let fitGap = this.fitGap
      if (this.do) {
        fitGap = 0
      }
      this.do = true
      const tdCells = this.getCellsArr(`td.${this.columnId}`)
      let thCells = []
      thCells = this.getCellsArr(`th.${this.columnId}`)
      if (isEmpty(tdCells) && isEmpty(thCells)) {
        return
      }
      const cellsArr = tdCells.concat(thCells)
      const autoMinWidth = max(map(cellsArr, item => item.offsetWidth)) + fitGap
      if (this.autoWidth < autoMinWidth) {
        this.autoWidth = autoMinWidth
        // this.showOverflowTooltip = true
      }
    },
    getCellsArr (domNode) {
      let _dom = window.document.querySelectorAll(`${domNode} .${this.fitByClass}`)
      if (isEmpty(_dom)) {
        _dom = window.document.querySelectorAll(`${domNode} .cell`)
      }
      if (isEmpty(_dom)) {
        return []
      }
      return Array.from(_dom)
    }
  },
  updated () {
    this.updateAutoWidth()
  },
  mounted () {
    this.$nextTick(this.updateAutoWidth)
  }
}
