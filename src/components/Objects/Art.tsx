import React from 'react';
import { ArtBlockType } from '../../types/content';

interface SizeParams {
    width: number;
    height: number;
}

function getTriangleCoordinates(width: number, height: number): string {
    const x1 = width / 2;
    const y1 = 0;
    const x2 = 0;
    const y2 = height;
    const x3 = width;
    const y3 = height;

    return `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
}

function ArtBlock(
    { form, background, border, borderRadius }: ArtBlockType,
    { width, height }: SizeParams,
) {
    const centerX = width / 2;
    const centerY = height / 2;

    return (
        <svg width={width} height={height}>
            <g>
                {form === 'ellipse' && (
                    <ellipse
                        cx={centerX}
                        cy={centerY}
                        rx={width / 2}
                        ry={height / 2}
                        fill={background?.color}
                        strokeWidth={borderRadius}
                        stroke={border.color}
                    />
                )}
                {form === 'rectangle' && (
                    <rect
                        x={0}
                        y={0}
                        width={width}
                        height={height}
                        fill={background?.color}
                        strokeWidth={borderRadius}
                        stroke={border.color}
                    />
                )}
                {form === 'triangle' && (
                    <polygon
                        points={getTriangleCoordinates(width, height)}
                        fill={background?.color}
                        strokeWidth={borderRadius}
                        stroke={border.color}
                    />
                )}
            </g>
        </svg>
    );
}

export default ArtBlock;
