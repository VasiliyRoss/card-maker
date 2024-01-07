import React from 'react';
import { ArtBlockType } from '../../types/content';

type SizeParams = {
    width: number;
    height: number;
};

function getTriangleCoordinates(
    width: number,
    height: number,
    borderRadius: number,
): string {
    const halfWidth = width / 2;
    const adjustedHeight = height - borderRadius;

    return `0,${adjustedHeight} ${halfWidth},0 ${width},${adjustedHeight}`;
}

function ArtBlock({
    form,
    background,
    border,
    borderRadius,
    width,
    height,
}: ArtBlockType & SizeParams) {
    const centerX = width / 2;
    const centerY = height / 2;

    const borderCof = 3;

    return (
        <svg
            width={width + borderCof * borderRadius}
            height={height + borderCof * borderRadius}
        >
            <g transform={`translate(${borderRadius}, ${borderRadius})`}>
                {form === 'ellipse' && (
                    <ellipse
                        cx={centerX + borderRadius}
                        cy={centerY + borderRadius}
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
                        points={getTriangleCoordinates(
                            width,
                            height,
                            borderRadius,
                        )}
                        fill={background?.color}
                        strokeWidth={borderRadius}
                        stroke={border.color}
                        transform={`translate(${borderRadius / 2}, ${
                            borderRadius / 2
                        })`}
                    />
                )}
            </g>
        </svg>
    );
}

export default ArtBlock;
