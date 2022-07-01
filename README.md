# ex-table
table auto fit one-line.
Re-encapsulation of el-table And introduce the ex-table-column plug-in to solve the problem that its asynchronous rendering data cannot be adaptive.

## Features
Common ways to encapsulate other forms

## Project setup
```
npm install ex-tablewjw2 --save
```
## Required
- [element-ui](https://github.com/ElemeFE/element)

## Quick Start
``` javascript
import Vue from 'vue'
import Element from 'element-ui'
import exTablewjw2 from 'ex-tablewjw2';
import 'ex-tablewjw2/lib/ex-tablewjw2.css';
Vue.use(Element)
Vue.use(exTablewjw2)

### Simple use
Replace `<el-table-column />` to `<ex-table-column>`, Replace `<el-table/>` to `<ex-table>`,
``` javascript
<ex-table>
  <ex-table-column />
</ex-table>
```

## notice
if ex-table-column set width should add 'show-overflow-tooltip'


## ex-table-column Extend prop
| Prop | Description | Type | Accepted Values | Default | 
| --- | --- | --- | --- | --- |
| fitByClass | Specify the class of the element that determines the width | string | - | cell
| fitGap | The content right margin | number | - | 0
# ex-tablewjw2
# ex-tablewjw2
