import { mix } from '../../util/common';
import GuideBase from './base';

class Point extends GuideBase {
  _initDefaultCfg() {
    this.type = 'point';
    this.position = null;
    this.offsetX = 0;
    this.offsetY = 0;
    this.style = {
      fill: '#1890FF',
      r: 3,
      lineWidth: 1,
      stroke: '#fff'
    };
  }

  render(coord, container) {
    const position = this.parsePoint(coord, this.position);

    if (!position) return null;

    const shape = container.addShape('Circle', {
      className: 'guide-point',
      attrs: mix({
        x: position.x + this.offsetX,
        y: position.y + this.offsetY
      }, this.style)
    });
    this.element = shape;
    return shape;
  }
}

GuideBase.Point = Point;
export default Point;
