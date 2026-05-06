import * as am4core from "@amcharts/amcharts4/core";

export const graph_theme = (target) =>{
    if (target instanceof am4core.ColorSet) {
        target.list = [
          am4core.color("#00d4ff"),
          am4core.color("#03344c"),
          am4core.color("#00ce75"),
          am4core.color("#008dce"),
          am4core.color("#a02fb7"),
        ];
      }
}