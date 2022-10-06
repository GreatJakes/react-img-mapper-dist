"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageMapperDefaultProps = exports.rerenderPropsList = void 0;
exports.rerenderPropsList = [
    'src',
    'active',
    'disabled',
    'width',
    'height',
    'imgWidth',
    'fillColor',
    'strokeColor',
    'lineWidth',
    'natural',
    'areaKeyName',
    'stayHighlighted',
    'stayMultiHighlighted',
    'toggleHighlighted',
    'parentWidth',
    'responsive',
];
exports.ImageMapperDefaultProps = {
    map: {
        areas: [],
        name: "image-map-".concat(Math.random()),
    },
    areaKeyName: 'id',
    containerRef: null,
    active: true,
    disabled: false,
    fillColor: 'rgba(255, 255, 255, 0.5)',
    strokeColor: 'rgba(0, 0, 0, 0.5)',
    lineWidth: 1,
    imgWidth: 0,
    width: 0,
    height: 0,
    natural: false,
    stayHighlighted: false,
    stayMultiHighlighted: false,
    toggleHighlighted: false,
    rerenderProps: [],
    responsive: false,
    parentWidth: 0,
    onImageClick: null,
    onImageMouseMove: null,
    onClick: null,
    onMouseDown: null,
    onMouseUp: null,
    onTouchStart: null,
    onTouchEnd: null,
    onMouseMove: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onLoad: null,
};
